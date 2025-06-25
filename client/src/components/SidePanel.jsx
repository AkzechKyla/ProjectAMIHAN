import { useState, useEffect } from "react";
import InputBox from "./InputBox";

function SidePanel({ location }) {
    const [formData, setFormData] = useState({
        latitude: location.getLatitude,
        longitude: location.getLongitude,
        elevation: "",
        precipitation: ""
    })

    useEffect(() => {
        if (!location) return;

        const lat = location.getLatitude();
        const lng = location.getLongitude();

        async function fetchData() {
            try {
                const elevation = await location.fetchElevation();
                const precipitation = await location.fetchPrecipitation();

                location.setElevation(elevation);
                location.setPrecipitation(precipitation);

                setFormData({
                    latitude: lat,
                    longitude: lng,
                    elevation,
                    precipitation
                });
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        }

        fetchData();
    }, [location]);

    return (
        <div className="w-7xl">
            <div className="text-6xl font-bold mb-4">🌍 LOGO</div>
            <div className="p-5 rounded-xl">
                <form className="space-y-4 bg-white p-6 rounded-lg shadow-md">
                    <div className="text-lg">Input Parameters</div>
                    <InputBox
                        label="Latitude"
                        type="number"
                        value={formData.latitude}
                        name="latitude"
                        setFormData={setFormData}
                    />
                    <InputBox
                        label="Longitude"
                        type="number"
                        value={formData.longitude}
                        name="longitude"
                        setFormData={setFormData}
                    />
                    <InputBox
                        label="Elevation (meters)"
                        type="number"
                        value={formData.elevation}
                        name="elevation"
                        setFormData={setFormData}
                    />
                    <InputBox
                        label="Precipitation (mm)"
                        type="number"
                        value={formData.precipitation}
                        name="precipitation"
                        setFormData={setFormData}
                    />
                    <button
                        type="submit"
                        className="w-full py-2 px-4 font-semibold rounded "
                    >
                        Predict Flood Height
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SidePanel;
