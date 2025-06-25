"use client";

import {
    AdvancedMarker,
    APIProvider,
    Map
} from "@vis.gl/react-google-maps"

function MapComponent({ clickedLocation, defaultLocation, handleMapClick }) {
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
