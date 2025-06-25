import axios from 'axios'

export default class Location {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
        this.elevation = null;
        this.precipitation = null;
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
}
