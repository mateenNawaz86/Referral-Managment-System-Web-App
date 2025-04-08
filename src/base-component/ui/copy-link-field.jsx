import { combineClasses, useClipboardCopy } from "../../utils/utility";

export const CopyField = ({ value }) => {
  const { inputRef, handleCopy, isCopied } = useClipboardCopy();

  const defaultClasses = `flex items-center border-2 border-lightGray rounded-lg py-6 w-full px-5 outline-none bg-[#f6f6f6] h-[70px]`;
  const classes = combineClasses(defaultClasses);

  return (
    <div className="w-full">
      <div className={classes}>
        <p
          ref={inputRef}
          className="text-lg font-medium mr-14 xl:mr-3 truncate select-none w-full"
        >
          {value}
        </p>

        <button
          onClick={handleCopy}
          className={`${
            isCopied ? "bg-primary rounded-md text-white" : "bg-transparent"
          } px-4 py-2 text-primary`}
        >
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
};
