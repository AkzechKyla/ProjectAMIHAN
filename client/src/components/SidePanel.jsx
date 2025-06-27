import { useState, useEffect } from "react";
import Logo from "../assets/logo/logo.svg";
import InputForm from "./InputForm";

function SidePanel({ location }) {
    const [formData, setFormData] = useState({
        latitude: location.getLatitude,
        longitude: location.getLongitude,
        elevation: "",
        precipitation: ""
    })
    const [floodHeight, setFloodHeight] = useState(null);
    const [riskLevel, setRiskLevel] = useState(null);
    const [riskCategory, setRiskCategory] = useState(null);
    const [elevationLevel, setElevationLevel] = useState(null);
    const [precipitationLevel, setPrecipitationLevel] = useState(null);

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

    async function handlePredictButton(e) {
        e.preventDefault(); // to prevent page reload
        const result = await location.fetchPrediction();

        location.setFloodRisk(result.flood_height);
        location.setElevationLevel(result.elevation_level);
        location.setPrecipitationLevel(result.precipitation_level);

        setFloodHeight(location.getFloodHeight());
        setRiskCategory(location.getRiskCategory());
        setRiskLevel(location.getRiskLevel());
        setElevationLevel(location.getElevationLevel());
        setPrecipitationLevel(location.getPrecipitationLevel());
    }

    return (
        <div className="bg-[--primary-white] relative">
            <div className="pl-7 z-0">
                <img src={Logo} alt="Project AMIHAN" />
            </div>
            <div className="space-y-8 pb-10">
                <InputForm
                    formData={formData}
                    setFormData={setFormData}
                    handlePredictButton={handlePredictButton}
                />
                <div className="pl-7 pr-15 rounded-xl">
                    <div className="p-6 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                        {
                            floodHeight === null && <p>Select a location and click "Predict Flood Level" to see results.</p>
                        }
                        {
                            floodHeight !== null && <div>
                                <div>Prediction Results</div>
                                <div>
                                    <p>As of 6:09:02 PM, Wednesday June 25, 2025</p>
                                    <p>Philippine Time (UTC+08:00)</p>
                                </div>
                                <div>
                                    <div>
                                        <p>{floodHeight}</p>
                                        <p>Flood Height (0-5 scale)</p>
                                        <div>{riskCategory}</div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p>{riskLevel}</p>
                                        <p>Risk Level</p>
                                    </div>
                                    <div>
                                        <p>{elevationLevel}</p>
                                        <p>Elevation</p>
                                    </div>
                                    <div>
                                        <p>{precipitationLevel}</p>
                                        <p>Precipitation</p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidePanel;
