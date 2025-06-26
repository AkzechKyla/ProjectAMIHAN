import os
import requests
import numpy as np
import tensorflow as tf
import joblib
import sklearn
from flask import Flask, request, jsonify
from flask_cors import CORS

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

        if prediction <= 1:
            risk_level = "Very Low"
            risk_color = "#2ecc71"
        elif prediction <= 2:
            risk_level = "Low"
            risk_color = "#f1c40f"
        elif prediction <= 3:
            risk_level = "Moderate"
            risk_color = "#e67e22"
        elif prediction <= 4:
            risk_level = "High"
            risk_color = "#e74c3c"
        else:
            risk_level = "Very High"
            risk_color = "#8e44ad"

        return jsonify({
            "flood_height": float(round(prediction, 2)),
            "risk_level": risk_level,
            "risk_color": risk_color,
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
