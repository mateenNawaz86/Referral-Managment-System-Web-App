import { formatDate } from "../../../utils/function";
import { getRedeemStatusStyles } from "../../../utils/utility";

export const RedeemHistoryTableRows = ({ data, onPaymentDetails }) => {
  return (
    <div className={`overflow-y-visible flex flex-col gap-y-[10px]`}>
      {data?.map((item, index) => {
        const { bg, text } = getRedeemStatusStyles(item?.status);

        return (
          <div
            key={index}
            onClick={() =>
              onPaymentDetails(
                item?.createdAt,
                item?.points,
                item?.approvedDate,
                item?.paymentMethod,
                item?.paymentDate,
                item?.status
              )
            }
            className="bg-white cursor-pointer hover:bg-tableHoverColor rounded-[5px] py-[26px] px-10 grid grid-cols-[minmax(170px,_3fr)_minmax(170px,_3fr)_minmax(170px,_170px)] items-center"
          >
            <span className="text-base font-medium">
              {formatDate(item?.createdAt)}
            </span>

            <span className="text-base font-medium flex items-center justify-center">
              {item?.points}
            </span>

            <div className="flex items-center justify-center">
              <div
                className={`px-[7.2px] py-[5px] min-w-[77px] max-w-[77px] rounded-[3px] text-center ${bg} ${text}`}
              >
                <span className={`text-xs font-medium ${bg} ${text}`}>
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
