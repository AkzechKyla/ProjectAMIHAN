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
        lat: 14.5875,
        lng: 121.0447
    }

    return <>
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <div className="h-full w-full">
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
