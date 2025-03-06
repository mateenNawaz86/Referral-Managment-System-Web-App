import { UsersIcon } from "../../assets/svgs/components/users-icon";

export const CountDetailCard = ({ title, points }) => {
  return (
    <div className="bg-white rounded-3 p-5">
      <div className="flex items-start gap-x-3">
        <div className="bg-[#691188] w-[71px] h-[71px] rounded-full flex items-center justify-center">
          <UsersIcon iconClassName="#fff" />
        </div>

        <div className="flex flex-col items-start gap-y-1">
          <span className="text-lg font-semibold text-[#A3AED0]">{title}</span>
          <span className="text-[22px] font-semibold text-[#002639]">
            {points}
          </span>
        </div>
      </div>
    </div>
  );
};
