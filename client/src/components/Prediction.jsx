function Prediction({ floodHeight, riskCategory, riskLevel, elevationLevel, precipitationLevel }) {
    return(
        <div className="pl-7 pr-15 rounded-xl">
            <div className="p-6 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                {floodHeight === null &&
                    <p>Select a location and click "Predict Flood Level" to see results.</p>
                }
                {floodHeight !== null && <div>
                    <div>Prediction Results</div>
                    <div>
                        <p>As of 6:09:02 PM, Wednesday June 25, 2025</p>
                        <p>Philippine Time (UTC+08:00)</p>
                    </div>
                    <div>
                        <div>
                            <p>{floodHeight.toFixed(2)}</p>
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
                </div>}
            </div>
        </div>
    )
}

export default Prediction;
