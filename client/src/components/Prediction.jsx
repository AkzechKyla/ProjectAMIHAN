import warningIcon from '../assets/logo/Triangle_Warning.svg';

function Prediction({ floodHeight, riskCategory, riskCategoryColor, riskLevel, elevationLevel, precipitationLevel }) {
    return(
        <div className="pl-7 pr-15 rounded-xl">
            <div className="p-6 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                {floodHeight === null &&
                    <p>Select a location and click "Predict Flood Level" to see results.</p>
                }
                {floodHeight !== null && <div>
                    <div className="text-xl text-[--primary-blue] font-semibold">Prediction Results</div>
                    <div className="text-sm text-gray-400 mt-2 mb-4">
                        <p>As of <span className="font-bold">6:09:02 PM, Wednesday June 25, 2025</span></p>
                        <p>Philippine Time (UTC+08:00)</p>
                    </div>
                    <div>
                        <div className="flex flex-col text-center items-center">
                            <p className="text-3xl font-medium">{floodHeight.toFixed(2)}</p>
                            <p className="text-sm text-gray-400 mt-2">Flood Height (0-5 scale)</p>
                            <div className="inline-flex w-24 items-center text-center text-white text-sm font-semibold px-4 py-2 rounded-xl mt-4 mb-4" style={{ backgroundColor: riskCategoryColor }}>
                                <img src={warningIcon} className="pr-1"/>
                                {riskCategory}
                            </div>
                        </div>
                    </div>
                    <hr className="my-4 border-t border-gray-300" />
                    <div className="flex flex-row items-center justify-evenly text-center">
                        <div className="flex flex-col items-center">
                            <p className="text-xl font-medium">{riskLevel}</p>
                            <p className="text-sm text-gray-400">Risk Level</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-xl font-medium">{elevationLevel}</p>
                            <p className="text-sm text-gray-400">Elevation</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-xl font-medium">{precipitationLevel}</p>
                            <p className="text-sm text-gray-400">Precipitation</p>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Prediction;
