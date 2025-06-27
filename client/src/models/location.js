import axios from 'axios'

export default class Location {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
        this.elevation = null;
        this.elevationLevel = null;
        this.precipitation = null;
        this.precipitationLevel = null;
        this.floodHeight = null;
        this.riskLevel = null;
        this.riskCategory = null;
        this.riskCategoryColor = null;
    }

    setElevation(elevation) {
        this.elevation = elevation;
    }

    setElevationLevel(elevationLevel) {
        if (elevationLevel <= 0.15) {
            this.elevationLevel = "Very Low";
        } else if (elevationLevel <= 0.375) {
            this.elevationLevel = "Low";
        } else if (elevationLevel <= 0.625) {
            this.elevationLevel = "Medium";
        } else if (elevationLevel <= 0.85) {
            this.elevationLevel = "High";
        } else {
            this.elevationLevel = "Very High";
        }
    }

    setPrecipitation(precipitation) {
        this.precipitation = precipitation;
    }

    setPrecipitationLevel(precipitationLevel) {
         if (precipitationLevel <= 0.20) {
            this.precipitationLevel = "Light";
         } else if (precipitationLevel <= 0.40) {
            this.precipitationLevel = "Moderate";
         } else if (precipitationLevel <= 0.70) {
            this.precipitationLevel = "Heavy";
         } else if (precipitationLevel <= 0.90) {
            this.precipitationLevel = "Very Heavy";
         } else {
            this.precipitationLevel = "Extreme";
         }
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
            this.riskLevel = "Low";
        } else if (this.floodHeight <= 2.5) {
            this.riskLevel = "Moderate";
        } else if (this.floodHeight <= 3.5) {
            this.riskLevel = "High";
        } else if (this.floodHeight <= 4.5) {
            this.riskLevel = "Very High";
        } else {
            this.riskLevel = "Extreme";
        }
    }

    _setRiskCategory() {
        if (this.riskLevel === "None" || this.riskLevel === "Low") {
            this.riskCategory = "SAFE";
        } else if (this.riskLevel === "Moderate") {
            this.riskCategory = "ALERT";
        } else if (this.riskLevel === "High") {
            this.riskCategory = "DANGER";
        } else if (this.riskLevel === "Very High" || this.riskLevel === "Extreme") {
            this.riskCategory = "SEVERE";
        }
    }

    _setRiskCategoryColor() {
        if (this.riskCategory === "SAFE") {
            this.riskCategoryColor = "#16F962";
        } else if (this.riskCategory === "ALERT") {
            this.riskCategoryColor = "#F9EA16";
        } else if (this.riskCategory === "DANGER") {
            this.riskCategoryColor = "#F97316";
        } else if (this.riskCategory === "SEVERE") {
            this.riskCategoryColor = "#F91616";
        }
    }

    setFloodRisk(floodHeight) {
        this._setFloodHeight(floodHeight);
        this._setRiskLevel();
        this._setRiskCategory();
        this._setRiskCategoryColor();
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

    getElevationLevel() {
        return this.elevationLevel;
    }

    getPrecipitation() {
        return this.precipitation;
    }

    getPrecipitationLevel() {
        return this.precipitationLevel;
    }

    getFloodHeight() {
        return this.floodHeight;
    }

    getRiskLevel() {
        return this.riskLevel;
    }

    getRiskCategory() {
        return this.riskCategory;
    }

    getRiskCategoryColor() {
        return this.riskCategoryColor;
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
