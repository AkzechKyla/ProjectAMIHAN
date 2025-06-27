import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate();

    function handleButtonClick() {
        navigate('/flood-prediction');
    }

    return(
        <div className="flex justify-center items-center h-screen flex-col gap-4">
            <div>This is the landing page.</div>
            <button
                className="bg-blue-600 text-white font-medium px-6 py-2 rounded hover:bg-blue-700 transition"
                onClick={handleButtonClick}
            >
                Try Flood Prediction Tool
            </button>
        </div>
    )
}

export default LandingPage;
