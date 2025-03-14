import { getStatusStyles } from "../../../utils/utility";

export const CouponHistoryTableRows = ({ data }) => {
  return (
    <div className={`overflow-y-visible flex flex-col gap-y-[10px]`}>
      {data?.map((item, index) => {
        const { bg, text } = getStatusStyles(item?.status);
        return (
          <div
            key={index}
            className="bg-white hover:bg-tableHoverColor rounded-[5px] py-[26px] px-10 grid grid-cols-[minmax(170px,_3fr)_minmax(170px,_3fr)_minmax(170px,_3fr)_minmax(170px,_170px)] items-center"
          >
            <span className="text-base font-medium">{item?.type}</span>

            <span className="text-base font-medium flex items-center justify-center">
              {item?.coupon}
            </span>
            <span className="text-base font-medium flex items-center justify-center">
              {item?.redeemDate}
            </span>

            <div className="flex items-center justify-center">
              <div
                className={`px-2 py-[5px] min-w-[77px] max-w-[77px] rounded-[3px] text-center cursor-pointer ${bg}`}
              >
                <span className={`text-xs font-medium ${text}`}>
                  {item?.status}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
