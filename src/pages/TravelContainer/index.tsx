import TravelBoxes from "@/components/Travel/TravelBoxes";
import useMediaQuery from "@/hooks/useMediaQuery";
import { CurrentLocation } from "@/type";

type Props = {
  location: CurrentLocation | undefined;
};

const TravelContainer = ({ location }: Props) => {
  const isSmallDevice = useMediaQuery("(max-width: 768px)");
  const TravelContainerCss = isSmallDevice
    ? "absolute bottom-0 z-10 h-[50%] w-full"
    : "";

  return (
    <div
      className={`${TravelContainerCss} bg-white px-6 py-4 sm:relative sm:h-full sm:basis-[60%]`}
    >
      <TravelBoxes />
    </div>
  );
};

export default TravelContainer;
