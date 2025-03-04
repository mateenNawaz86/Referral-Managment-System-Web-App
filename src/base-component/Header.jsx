import hamburgerIcom from "../assets/pngs/hamburger.png";

export const Header = () => {
  return (
    <div className="fixed w-full bg-white ml-[265px] border-b borderb-[#E0E0E0]">
      <div className="flex items-center gap-x-5 py-[26px] pl-[14px]">
        <img
          src={hamburgerIcom}
          alt="icon"
          className="h-6 w-6 cursor-pointer"
        />
        <span className="text-lg font-semibold">Dashboard</span>
      </div>
    </div>
  );
};
