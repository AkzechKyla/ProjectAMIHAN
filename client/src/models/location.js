import axios from 'axios'

export default class Location {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }

    async getElevation() {
        const response = await axios.get("http://localhost:8080/api/elevation", {
            params: {
                lat: this.lat,
                lng: this.lng
            },
        });

        return response.data.elevation;
    }

    async getPrecipitation() {
        const response = await axios.get("http://localhost:8080/api/precipitation", {
            params: {
                lat: this.lat,
                lng: this.lng
            },
        });

        return response.data.precipitation;
    }
}
