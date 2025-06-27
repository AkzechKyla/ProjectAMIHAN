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
        <div className="bg-[--primary-white] relative">
            <div className="pl-7 z-0">
                <img src={Logo} alt="Project AMIHAN" />
            </div>
            <div className="space-y-8 pb-10">
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
                            className="w-full mt-2 py-2 px-2 rounded-md font-semibold text-sm text-white cursor-pointer"
                        >
                            Predict Flood Level
                        </button>
                    </form>
                </div>
                <div className="pl-7 pr-15 rounded-xl">
                    <div className="p-6 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] relative">
                        <div>Prediction Results</div>
                        <div>
                            <p>As of 6:09:02 PM, Wednesday June 25, 2025</p>
                            <p>Philippine Time (UTC+08:00)</p>
                        </div>
                        <div>
                            <p>3.94</p>
                            <p>Flood Height (0-5 scale)</p>
                            <div>DANGER</div>
                        </div>
                        <hr className="my-4 border-t-2 border-gray-200" />
                        <div>
                            <div>
                                <p>86.9%</p>
                                <p>Confidence</p>
                            </div>
                            <div>
                                <p>Low</p>
                                <p>Elevation</p>
                            </div>
                            <div>
                                <p>Moderate</p>
                                <p>Precipitation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidePanel;
