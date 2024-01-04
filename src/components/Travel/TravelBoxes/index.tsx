import TravelBox from "./TravelBox";

type Props = {};

const TravelBoxes = (props: Props) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-primary">내 주변 여행지</h1>
      {/* Travel Boxes Container */}
      <div className=" mt-6 grid h-[90%] w-full grid-cols-2 gap-4 overflow-y-scroll md:grid-cols-3">
        <TravelBox />
        <TravelBox />
        <TravelBox />
        <TravelBox />
        <TravelBox />
        <TravelBox />
        <TravelBox />
        <TravelBox />
        <TravelBox />
      </div>
    </>
  );
};

export default TravelBoxes;
