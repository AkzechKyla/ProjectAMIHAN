"use client";

import { useState } from "react";
import {
    APIProvider,
    Map,
    // AdvancedMarker,
    // Pin,
    // InfoWindow
} from "@vis.gl/react-google-maps";

function MapComponent() {
    const position = {
        lat: 37.7749,
        lng: -122.4194
    }

    return <>
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <div style={{ height: "100vh", width: "100%" }}>
                <Map
                    defaultZoom={10}
                    defaultCenter={position}
                    mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
                >
                </Map>
            </div>
        </APIProvider>
    </>
}

export default MapComponent;
