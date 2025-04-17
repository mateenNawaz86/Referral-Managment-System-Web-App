import profileIcon from "../assets/pngs/profile.jpg";
import { MobileHamburgerIcon } from "../assets/svgs/components/mobile-hamburger-icon";

export const MobileHeader = ({ handleDrawer, pageTitle, profile }) => {
  return (
    <div className="bg-primary px-[18px] py-[15px] flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        <MobileHamburgerIcon onClick={handleDrawer} />
        <span className="text-white text-[22px] font-bold">{pageTitle}</span>
      </div>

      <div className="border border-white rounded-full">
        <img
          src={profile || profileIcon}
          alt="profile"
          className="max-w-[35px] max-h-[35px] min-w-[35px] min-h-[35px] rounded-full object-cover"
        />
      </div>
    </div>
  );
};
