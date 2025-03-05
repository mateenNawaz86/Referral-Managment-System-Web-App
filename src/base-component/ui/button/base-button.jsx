export const BaseButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-3 px-5 bg-[#055860] rounded-[4.8px] text-white hover:bg-white border border-[#055860] hover:text-[#055860] transition-all"
    >
      {text}
    </button>
  );
};
