import InputBox from './InputBox';

function SidePanel() {
    return (
        <div className="w-7xl">
            <div className="text-6xl font-bold mb-4">🌍 LOGO</div>
            <div className="p-5 rounded-xl">
                <form className="space-y-4 bg-white p-6 rounded-lg shadow-md">
                    <div className="text-lg">Input Parameters</div>
                    <InputBox label="Latitude" type="number" name="latitude" />
                    <InputBox label="Longitude" type="number" name="longitude" />
                    <InputBox label="Elevation (meters)" type="number" name="elevation" />
                    <InputBox label="Precipitation (mm)" type="number" name="precipitation" />
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
