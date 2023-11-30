import { NavCategory, SelectedPage } from "@/type";

type Props = {
  category: NavCategory;
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
};

const NavBarCategory = ({ category, selectedPage, setSelectedPage }: Props) => {
  return (
    <div
      className={`${
        category.id === selectedPage
          ? "text-primary  bg-gray-100 shadow "
          : "text-third bg-transparent"
      } mx-6 flex cursor-pointer items-center rounded-md p-3 transition-all duration-500`}
      onClick={() => setSelectedPage(category.id)}
    >
      {category.icon}
      <a> {category.name}</a>
    </div>
  );
};

export default NavBarCategory;
