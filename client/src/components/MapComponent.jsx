"use client";

import { useState } from "react"
import {
    AdvancedMarker,
    APIProvider,
    Map
} from "@vis.gl/react-google-maps"
import Location from '../models/Location';

function MapComponent() {
    const [clickedLocation, setClickedLocation] = useState(null);
    const defaultLocation = {
        lat: 14.5875,
        lng: 121.0447
    }

    async function handleMapClick(event) {
        const lat = event.detail.latLng.lat;
        const lng = event.detail.latLng.lng;
        setClickedLocation({ lat, lng });

        const loc = new Location(lat, lng);

        try {
            const elevation = await loc.getElevation();
            const precipitation = await loc.getPrecipitation();

            console.log("Elevation:", elevation);
            console.log("Precipitation:", precipitation);
        } catch (error) {
            console.error("API call failed: ", error);
        }
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
