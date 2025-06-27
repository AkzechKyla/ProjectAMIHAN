import { useState, useEffect } from "react";
import Logo from "../assets/logo/logo.svg";
import InputForm from "./InputForm";
import Prediction from "./Prediction";

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
    const [riskCategoryColor, setRiskCategoryColor] = useState(null);
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
        setRiskCategoryColor(location.getRiskCategoryColor());
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
                <Prediction
                    floodHeight={floodHeight}
                    riskCategory={riskCategory}
                    riskCategoryColor={riskCategoryColor}
                    riskLevel={riskLevel}
                    elevationLevel={elevationLevel}
                    precipitationLevel={precipitationLevel}
                />
            </div>
        </div>
    )
}

export default SidePanel;
