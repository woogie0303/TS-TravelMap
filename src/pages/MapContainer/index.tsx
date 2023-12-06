import React from "react";
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
    <>
      <Map location={location} />
    </>
  );
};

export default MapContainer;
