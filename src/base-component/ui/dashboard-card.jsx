import arrowRightIcon from "../../assets/pngs/arrow-right-icon.png";

export const DashboardCard = ({ points, title, icon, bgColor, link }) => {
  return (
    <div className="max-h-[129px]">
      <div
        className={`px-[14px] py-4 flex justify-between rounded-t-[5px]`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex flex-col gap-y-3">
          <span className="text-white text-[30px] font-bold">{points}</span>
          <span className="text-white text-lg font-bold">{title}</span>
        </div>
        <img src={icon} alt="icon" className="h-[50px] w-[50px]" />
      </div>
      <div className="bg-red-500 rounded-b-[5px]">
        <div className="flex items-center justify-center gap-x-1 py-[7px]">
          <span className="text-[13px] font-semibold text-white">
            More Info
          </span>
          <img src={arrowRightIcon} alt="icon" className="h-[18px] w-[18px]" />
        </div>
      </div>
    </div>
  );
};
