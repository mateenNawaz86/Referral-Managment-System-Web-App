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
        className={`px-[14px] py-4 flex flex-col rounded-t-[5px]`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex justify-between">
          <span className="text-white text-[30px] font-bold">{points}</span>
          <img src={icon} alt="icon" className="h-[50px] w-[50px]" />
        </div>

        <span className="text-white text-lg font-bold">{title}</span>
      </div>

      <div
        className={`${
          bottomBgColorMap[bgColor] || "bg-red-500"
        } rounded-b-[5px]`}
      >
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
