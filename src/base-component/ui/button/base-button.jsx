export const BaseButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-3 px-5 bg-[#691188] rounded-[4.8px] text-white hover:bg-white border border-[#691188] hover:text-[#691188] transition-all"
    >
      {text}
    </button>
  );
};
