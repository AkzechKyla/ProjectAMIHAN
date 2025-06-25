"use client";

import axios from 'axios'
import { useState } from "react"
import {
    AdvancedMarker,
    APIProvider,
    Map
} from "@vis.gl/react-google-maps"

function MapComponent() {
    const [clickedLocation, setClickedLocation] = useState(null);
    const defaultLocation = {
        lat: 14.5875,
        lng: 121.0447
    }

    function handleMapClick(event) {
        const lat = event.detail.latLng.lat;
        const lng = event.detail.latLng.lng;
        setClickedLocation({ lat, lng });
        fetchLocationData(lat, lng);
    }

    async function fetchLocationData(lat, lng) {
        const response = await axios.get("http://localhost:8080/api/elevation", {
            params: { lat, lng },
        });
        console.log(response.data.elevation);
    }

    return <>
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <div className="h-full w-full">
                <Map
                    defaultZoom={10}
                    defaultCenter={defaultLocation}
                    mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
                    onClick={handleMapClick}
                >
                    {clickedLocation && (
                        <AdvancedMarker position={clickedLocation} />
                    )}
                </Map>
            </div>
        </APIProvider>
    </>
}

export default MapComponent;
