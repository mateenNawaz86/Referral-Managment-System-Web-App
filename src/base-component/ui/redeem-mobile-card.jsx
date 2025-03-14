import { getRedeemStatusStyles } from "../../utils/utility";

export const RedeemMobileCard = ({ data, onClick }) => {
  return (
    <div className="flex flex-col gap-y-3">
      {data?.map((item, index) => {
        const { bg, text } = getRedeemStatusStyles(item?.status);

        return (
          <div
            key={index}
            onClick={onClick}
            className="cursor-pointer p-[18px] rounded-[12px] bg-white shadow-md flex items-center justify-between"
          >
            <div className="flex flex-col gap-y-2">
              <p className="text-base font-semibold">{item?.redeemDate}</p>
              <div className="flex items-center gap-x-1">
                <span className="text-xs font-medium text-[#848484]">
                  Redeemed Points
                </span>
                <span className="text-xs font-medium text-primary">
                  {item?.redeemPoint}
                </span>
              </div>
            </div>

            <div
              className={`px-[4.5px] py-[2.5px] min-w-[61px] max-w-[61px] rounded-[3px] text-center ${bg} ${text}`}
            >
              <span className={`text-[10px] font-medium`}>{item?.status}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
