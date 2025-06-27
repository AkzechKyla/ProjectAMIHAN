import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MapPage from './pages/MapPage';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/flood-prediction" element={<MapPage />}/>
        </Routes>
      </Router>
    )
}

export default App
