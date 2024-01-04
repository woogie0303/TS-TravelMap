import { HeartIcon, UserIcon } from "@heroicons/react/24/solid";

type Props = {};

const TravelBox = (props: Props) => {
  return (
    <div className="">
      {/* Travel Img */}
      <div className="w-50 h-60 cursor-pointer rounded-xl">
        <img
          src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg"
          alt="자연"
          className="h-full w-full rounded-xl object-cover  "
        />
      </div>
      {/* Travel Box Caption */}
      <div className="mt-2 ">
        <div className="mb-2 flex justify-between px-2">
          <div>
            <p className="font-medium">서울 먹방 로드</p>
            <p className="text-sm text-gray-500">일정: 3일</p>
          </div>
          <div className="">
            <HeartIcon className="mr-1 inline-block w-6" />
            <span>10</span>
          </div>
        </div>
        {/* Travel User */}
        <div className="flex cursor-pointer items-center">
          <UserIcon className="w-5 text-gray-300" />
          <p className="ml-1  text-sm">travelBest</p>
        </div>
      </div>
    </div>
  );
};

export default TravelBox;
