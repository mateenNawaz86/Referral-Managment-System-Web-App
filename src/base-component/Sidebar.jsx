import logoIcon from "../assets/pngs/logo.png";

export const SideBar = () => {
  return (
    <div className="w-[265px] bg-white fixed h-full shadow-md">
      <div className="flex items-center justify-center py-[26px] bg-white">
        <img src={logoIcon} alt="logo" />
      </div>
    </div>
  );
};
