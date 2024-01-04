import {
  MapPinIcon,
  AdjustmentsHorizontalIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import NavBarCategory from "./NavBarCategory";
import { NavCategory, SelectedPage } from "@/type";
import { useState } from "react";

const navCategories: NavCategory[] = [
  {
    id: SelectedPage.Surround,
    name: "내 주변",
    icon: <MapPinIcon className="mr-1 w-4" />,
  },
  {
    id: SelectedPage.Filter,
    name: "필터",
    icon: <AdjustmentsHorizontalIcon className="mr-1 w-4" />,
  },
];

const Navbar = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Surround,
  );

  return (
    <nav className="flex h-[12%] w-full items-center justify-between px-8 py-4 font-medium">
      <div>
        <GlobeAltIcon className="w-10 text-primary" />
      </div>
      {/* 카테고리 Container */}
      <div className="flex justify-between">
        {navCategories.map((category) => (
          <NavBarCategory
            key={category.id}
            category={category}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        ))}
      </div>
      <div>
        <button className="transition-color text-third duration-500 ease-in-out hover:text-inherit">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
