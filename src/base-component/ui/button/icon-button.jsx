import { combineClasses } from "../../../utils/utility";

export const IconButton = ({
  text,
  onClick,
  icon: Icon,
  containerClassName,
}) => {
  const containerClasses = combineClasses(
    "flex items-center gap-x-[10px] py-2 px-3 bg-white rounded-lg text-primary w-fit text-lg font-semibold",
    containerClassName
  );

  return (
    <button onClick={onClick} className={containerClasses}>
      {Icon && <Icon />}
      {text}
    </button>
  );
};
