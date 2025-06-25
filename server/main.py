import os
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("GOOGLE_MAPS_API_KEY")

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

if __name__ == "__main__":
    app.run(debug=True, port=8080)
