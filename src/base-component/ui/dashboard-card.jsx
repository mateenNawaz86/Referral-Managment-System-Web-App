import arrowRightIcon from "../../assets/pngs/arrow-right-icon.png";

export const DashboardCard = ({ points, title, icon, bgColor, link }) => {
  const bottomBgColorMap = {
    "#17A2B7": "bg-[#1392A4]",
    "#F3B700": "bg-[#D9A403]",
    "#0F9D58": "bg-[#048345]",
    "#055860": "bg-[#034E55]",
    "#F31A1A": "bg-[#D91616]",
    "#9AA000": "bg-[#878C01]",
  };

  return (
    <div className="h-full flex flex-col">
      <div
        className={`px-[15px] md:px-[25px] py-5 md:py-[30px] flex flex-col rounded-t-[10px] md:h-[180px]`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex items-start gap-x-[15px]">
          <div className="bg-white rounded-full w-[56px] h-[56px] md:h-[70px] md:w-[70px] flex items-center justify-center">
            {icon}
          </div>
          <div className="flex flex-col gap-y-2 flex-1">
            <span className="text-[26px] md:text-[30px] font-bold text-white select-none">
              {points}
            </span>
            <span className="text-base md:text-lg font-bold text-white line-clamp-2 overflow-hidden select-none">
              {title}
            </span>
          </div>
        </div>
      </div>

      <div
        className={`${
          bottomBgColorMap[bgColor] || "bg-red-500"
        } rounded-b-[10px]`}
      >
        <div className="flex items-center justify-center gap-x-1 py-[7px]">
          <span className="text-base font-semibold text-white">More Info</span>
          <img src={arrowRightIcon} alt="icon" className="h-[18px] w-[18px]" />
        </div>
      </div>
    </div>
  );
};
