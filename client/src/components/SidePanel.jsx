import { useState, useEffect } from "react";
import InputBox from "./InputBox";
import Logo from "../assets/logo/logo.svg";

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
        <div className="w-7xl bg-[--primary-white] relative">
            <div className="pl-7 z-0">
                <img src={Logo} alt="Project AMIHAN" />
            </div>
            <div className="pl-7 pr-15 rounded-xl">
                <form className="space-y-4 p-6 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] z-10 relative">
                    <div className="text-xl text-[--primary-blue] font-semibold">Input Parameters</div>
                    <InputBox
                        label="Latitude (°N)"
                        type="number"
                        value={formData.latitude}
                        name="latitude"
                        setFormData={setFormData}
                    />
                    <InputBox
                        label="Longitude (°E)"
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
                        smallText="Very Low (0-10), Low (5-20), Medium (15-40), High (30-100)"
                    />
                    <InputBox
                        label="Precipitation (mm)"
                        type="number"
                        value={formData.precipitation}
                        name="precipitation"
                        setFormData={setFormData}
                        smallText="Light (μ=5), Moderate (μ=15), Heavy (μ=30), Extreme (μ=50)"
                    />
                    <button
                        type="submit"
                        className="w-full mt-2 py-2 px-2 rounded-md font-semibold text-sm text-white cursor-pointer"
                    >
                        Predict Flood Level
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SidePanel;
