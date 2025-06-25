import os
import requests
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("GOOGLE_MAPS_API_KEY")

app = Flask(__name__)
cors = CORS(app, origins="*")

@app.route("/api/elevation", methods=["GET"])
def get_elevation():
    # lat = request.args.get("lat")
    # lng = request.args.get("lng")
    lat = 14.5875
    lng = 121.0447

    url = f"https://maps.googleapis.com/maps/api/elevation/json?locations={lat},{lng}&key={api_key}"

    try:
        response = requests.get(url)
        data = response.json()

        if data["status"] == "OK":
            return jsonify({"elevation": data["results"][0]["elevation"]})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=8080)
