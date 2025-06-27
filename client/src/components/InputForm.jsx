import InputBox from "./InputBox";

function InputForm({ formData, setFormData, handlePredictButton }) {
    return (
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
                    onClick={handlePredictButton}
                >
                    Predict Flood Level
                </button>
            </form>
        </div>
    )
}

export default InputForm;
