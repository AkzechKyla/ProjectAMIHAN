import { useState } from "react"
import MapComponent from './components/MapComponent'
import SidePanel from './components/SidePanel'
import Location from './models/Location';

function App() {
    const defaultLocation = new Location(14.5875, 121.0447);
    const [currentLocation, setCurrentLocation] = useState(defaultLocation);

    async function handleMapClick(event) {
        const lat = event.detail.latLng.lat;
        const lng = event.detail.latLng.lng;

        const location = new Location(lat, lng);
        setCurrentLocation(location);
    }

    return (
      <div className="h-screen w-screen flex overflow-hidden">
        <div className="min-w-2xl overflow-y-auto scrollbar-hide">
          <SidePanel location={currentLocation} />
        </div>
        <div className="flex-1">
          <MapComponent
            currentLocation={currentLocation}
            defaultLocation={defaultLocation}
            handleMapClick={handleMapClick}
          />
        </div>
      </div>
    )
}

export default App
