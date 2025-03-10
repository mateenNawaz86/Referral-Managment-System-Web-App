import { useState } from "react";
import { combineClasses } from "../../../utils/utility";

export const LinkButton = ({
  text,
  onClick,
  icon: Icon,
  containerClassName,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerClasses = combineClasses(
    "py-2 px-4 bg-primary rounded-[4px] text-white text-xs font-semibold hover:bg-white border border-primary hover:text-primary transition-all w-fit flex items-center gap-x-2",
    containerClassName
  );

  return (
    <button
      onClick={onClick}
      className={containerClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {Icon && <Icon iconClassName={isHovered ? "#691188" : "#fff"} />}
      {text}
    </button>
  );
};
