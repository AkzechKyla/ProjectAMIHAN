import { useState } from "react"
import MapComponent from './components/MapComponent'
import SidePanel from './components/SidePanel'
import Location from './models/Location';

function App() {
    const [clickedLocation, setClickedLocation] = useState(null);
    const defaultLocation = {
        lat: 14.5875,
        lng: 121.0447
    }

    async function handleMapClick(event) {
        const lat = event.detail.latLng.lat;
        const lng = event.detail.latLng.lng;
        setClickedLocation({ lat, lng });

        const loc = new Location(lat, lng);

        try {
            const elevation = await loc.getElevation();
            const precipitation = await loc.getPrecipitation();

            console.log("Elevation:", elevation);
            console.log("Precipitation:", precipitation);
        } catch (error) {
            console.error("API call failed: ", error);
        }
    }

    return (
      <div className="h-screen w-screen flex">
        <SidePanel />
        <MapComponent
          clickedLocation={clickedLocation}
          defaultLocation={defaultLocation}
          handleMapClick={handleMapClick}
        />
      </div>
    )
}

export default App
