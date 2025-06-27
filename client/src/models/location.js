import axios from 'axios'

export default class Location {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
        this.elevation = null;
        this.precipitation = null;
        this.floodHeight = null;
        this.riskLevel = null;
        this.riskColor = null;
    }

    setElevation(elevation) {
        this.elevation = elevation;
    }

    setPrecipitation(precipitation) {
        this.precipitation = precipitation;
    }

    setLatitude(lat) {
        this.lat = lat;
    }

    setLongitude(lng) {
        this.lng = lng;
    }

    _setFloodHeight(floodHeight) {
        this.floodHeight = floodHeight;
    }

    _setRiskLevel() {
        if (this.floodHeight <= 0.5) {
            this.riskLevel = "None";
        } else if (this.floodHeight <= 1.5) {
            this.riskLevel = "Very Low";
        } else if (this.floodHeight <= 2.5) {
            this.riskLevel = "Low";
        } else if (this.floodHeight <= 3.5) {
            this.riskLevel = "Moderate";
        } else if (this.floodHeight <= 4.5) {
            this.riskLevel = "High";
        } else {
            this.riskLevel = "Very High";
        }
    }

    _setRiskColor() {
        if (this.riskLevel === "None") {
            this.riskColor = "#808080";
        } else if (this.riskLevel === "Very Low") {
            this.riskColor = "#2ecc71";
        } else if (this.riskLevel === "Low") {
            this.riskColor = "#f1c40f";
        } else if (this.riskLevel === "Moderate") {
            this.riskColor = "#e67e22";
        } else if (this.riskLevel === "High") {
            this.riskColor = "#e74c3c";
        } else {
            this.riskColor = "#8e44ad";
        }
    }

    setFloodRisk(floodHeight) {
        this._setFloodHeight(floodHeight);
        this._setRiskLevel();
        this._setRiskColor();
    }

    getLatitude() {
        return this.lat;
    }

    getLongitude() {
        return this.lng;
    }

    getElevation() {
        return this.elevation;
    }

    getPrecipitation() {
        return this.precipitation;
    }

    getFloodHeight() {
        return this.floodHeight;
    }

    getRiskLevel() {
        return this.riskLevel;
    }

    getRiskColor() {
        return this.riskColor;
    }

    async fetchElevation() {
        const response = await axios.get("http://localhost:8080/api/elevation", {
            params: {
                lat: this.lat,
                lng: this.lng
            },
        });

        return response.data.elevation;
    }

    async fetchPrecipitation() {
        const response = await axios.get("http://localhost:8080/api/precipitation", {
            params: {
                lat: this.lat,
                lng: this.lng
            },
        });

        return response.data.precipitation;
    }

    async fetchPrediction() {
        const response = await axios.get("http://localhost:8080/predict", {
            params: {
                lat: this.lat,
                lng: this.lng,
                elevation: this.elevation,
                precipitation: this.precipitation
            },
        });

        return response.data;
    }
}
