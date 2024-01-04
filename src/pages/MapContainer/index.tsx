import Map from "./Map";
import { CurrentLocation } from "@/type";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

type Props = {
  location: CurrentLocation | undefined;
};

const MapContainer = ({ location }: Props) => {
  return (
    <div className=" h-full w-full sm:relative sm:basis-[40%]">
      <Map location={location} />
    </div>
  );
};

export default MapContainer;
