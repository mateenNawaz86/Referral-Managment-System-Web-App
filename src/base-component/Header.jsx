import profileIcon from "../assets/pngs/profile.jpg";
import { HambugerIcon } from "../assets/svgs/components/hamburger-icon";

export const Header = ({
  handleDrawer,
  pageTitle,
  profile,
  name,
  isSidebarOpen,
}) => {
  return (
    <div
      className={` ${
        isSidebarOpen && "ml-[312px]"
      } flex items-center justify-between mb-[33px] px-[30px] pt-[31px]`}
    >
      <div className="flex items-center gap-x-5 maxSize:gap-x-0">
        <HambugerIcon onClick={handleDrawer} />
        <span className="text-[40px] font-bold">{pageTitle}</span>
      </div>

      <div className="flex items-center gap-x-4">
        <img
          src={profile || profileIcon}
          alt="icon"
          className="h-[58px] w-[58px] rounded-full object-cover"
        />
        <span className="text-[22px] font-semibold">{name}</span>
      </div>
    </div>
  );
};
