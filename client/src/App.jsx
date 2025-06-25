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
    const loc = new Location(defaultLocation.lat, defaultLocation.lng)

    async function handleMapClick(event) {
        const lat = event.detail.latLng.lat;
        const lng = event.detail.latLng.lng;
        setClickedLocation({ lat, lng });

        loc.setLatitude(lat);
        loc.setLongitude(lng);

        try {
            const elevation = await loc.fetchElevation();
            const precipitation = await loc.fetchPrecipitation();

            loc.setElevation(elevation);
            loc.setPrecipitation(precipitation);

            console.log("Elevation:", loc.getElevation());
            console.log("Precipitation:", loc.getPrecipitation());
        } catch (error) {
            console.error("API call failed: ", error);
        }
    }

    return (
      <div className="h-screen w-screen flex">
        <SidePanel loc={loc} />
        <MapComponent
          clickedLocation={clickedLocation}
          defaultLocation={defaultLocation}
          handleMapClick={handleMapClick}
        />
      </div>
    )
}

export default App
