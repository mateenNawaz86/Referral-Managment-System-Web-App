export const ReferralGuide = ({ onReferral }) => {
  return (
    <div className="bg-white h-full py-[45px] border border-[#E0E0E0] rounded-[14px] flex flex-col items-center">
      <h1 className="text-[21px] font-semibold text-center">
        How to get paid by sharing this app?
      </h1>

      <button
        onClick={onReferral}
        className="py-3 px-5 bg-[#055860] rounded-[4.8px] text-white w-fit"
      >
        Show Referral
      </button>
    </div>
  );
};
