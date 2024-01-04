import Navbar from "./components/Navbar";
import MapContainer from "./pages/MapContainer";
import TravelContainer from "./pages/TravelContainer";
import { useState, useEffect } from "react";
import { CurrentLocation } from "@/type";

function App() {
  const [location, setLocation] = useState<CurrentLocation>();

  const locationSuccess = (position: GeolocationPosition) => {
    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude;

    setLocation({ longitude, latitude });
  };

  const locationError = () => {
    console.log("can not fetch current location");
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
    }
  }, []);

  return (
    <div className="h-screen min-h-[778px]">
      <Navbar />
      <main className="h-[88%] sm:flex">
        <TravelContainer location={location} />
        <MapContainer location={location} />
      </main>
    </div>
  );
}

export default App;
