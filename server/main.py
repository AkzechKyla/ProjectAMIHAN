import os
import requests
import numpy as np
import tensorflow as tf
import joblib
import sklearn
from flask import Flask, request, jsonify
from flask_cors import CORS
from utils import format_prediction_timestamp

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Load models
anfis_model = "models/anfis_model.h5"
scaler_model = "models/flood_scaler.joblib"

model = tf.keras.models.load_model(anfis_model, compile=False)
scaler = joblib.load(scaler_model)

@app.route("/predict", methods=["GET"])
def get_prediction():
    try:
        lat = float(request.args.get("lat"))
        lng = float(request.args.get("lng"))
        elevation = float(request.args.get("elevation"))
        precipitation = float(request.args.get("precipitation"))

        # Prepare and scale input
        input_data = np.array([[lat, lng, elevation, precipitation]])
        scaled_input = scaler.transform(input_data)

        # Predict flood height
        prediction = model.predict(scaled_input)[0][0]
        prediction = max(0, min(5, prediction))

        return jsonify({
            "flood_height": float(round(prediction, 2)),
            "elevation_level": scaled_input[0][2],
            "precipitation_level": scaled_input[0][3],
            "timestamp": format_prediction_timestamp()
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/elevation", methods=["GET"])
def get_elevation():
    lat = request.args.get("lat")
    lng = request.args.get("lng")

    url = f"https://api.open-elevation.com/api/v1/lookup?locations={lat},{lng}"

    try:
        response = requests.get(url)
        data = response.json()

        return jsonify({"elevation": data["results"][0]["elevation"]})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/precipitation", methods=["GET"])
def get_precipitation():
    lat = request.args.get("lat")
    lng = request.args.get("lng")

    url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lng}&current=precipitation"

    try:
        response = requests.get(url)
        data = response.json()

        current_precip = data["current"]["precipitation"]
        return jsonify({"precipitation": current_precip})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=8080)
