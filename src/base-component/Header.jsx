import profileIcon from "../assets/pngs/profile.jpg";
import { HambugerIcon } from "../assets/svgs/components/hamburger-icon";

export const Header = ({
  isSidebarOpen,
  setIsSidebarOpen,
  handleDrawer,
  pageTitle,
}) => {
  return (
    <div
      className={`flex items-center justify-between mb-[33px] px-[30px] pt-[31px] transition-all duration-300 ${
        isSidebarOpen ? "ml-[312px]" : "ml-0"
      }`}
    >
      <div className="flex items-center">
        <button onClick={() => setIsSidebarOpen((prev) => !prev)}>
          <HambugerIcon onClick={handleDrawer} />
        </button>
        <span className="text-2xl lg:text-[40px] font-bold">{pageTitle}</span>
      </div>

      <div className="flex items-center gap-x-4">
        <img
          src={profileIcon}
          alt="icon"
          className="h-[58px] w-[58px] rounded-full object-cover"
        />
        <span className="text-[22px] font-semibold">Nathan Collins</span>
      </div>
    </div>
  );
};
