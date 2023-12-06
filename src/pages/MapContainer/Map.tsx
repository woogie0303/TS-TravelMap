import { CurrentLocation } from "@/type";
import { useRef, useEffect } from "react";

type Props = {
  location: CurrentLocation | undefined;
};

const Map = ({ location }: Props) => {
  const divMap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      center: new window.kakao.maps.LatLng(
        location?.latitude,
        location?.longitude,
      ),
      level: 5,
    };

    const map = new window.kakao.maps.Map(divMap.current, options);
  }, [location]);

  return (
    <div ref={divMap} id="map" style={{ width: "100vw", height: "100vh" }} />
  );
};

export default Map;
