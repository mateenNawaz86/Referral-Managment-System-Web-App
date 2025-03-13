import { combineClasses } from "../../../utils/utility";

export const CrossIcon = ({ onClick, className }) => {
  const defaultClasses = combineClasses("cursor-pointer", className);

  return (
    <div className={defaultClasses} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 18 18"
        fill="none"
      >
        <g clip-path="url(#clip0_2211_562)">
          <path
            d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0Z"
            fill="#616161"
          />
          <path
            d="M12.3143 11.2537C12.6075 11.5471 12.6075 12.021 12.3143 12.3143C12.1681 12.4606 11.9761 12.534 11.784 12.534C11.592 12.534 11.4 12.4606 11.2537 12.3143L9.00002 10.0605L6.74631 12.3143C6.60006 12.4606 6.40807 12.534 6.21608 12.534C6.02396 12.534 5.83197 12.4606 5.68572 12.3143C5.39252 12.021 5.39252 11.5471 5.68572 11.2537L7.93956 9.00002L5.68572 6.74631C5.39252 6.45298 5.39252 5.97905 5.68572 5.68572C5.97905 5.39252 6.45298 5.39252 6.74631 5.68572L9.00002 7.93956L11.2537 5.68572C11.5471 5.39252 12.021 5.39252 12.3143 5.68572C12.6075 5.97905 12.6075 6.45298 12.3143 6.74631L10.0605 9.00002L12.3143 11.2537Z"
            fill="#FAFAFA"
          />
        </g>
        <defs>
          <clipPath id="clip0_2211_562">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
