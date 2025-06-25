import os
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

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
