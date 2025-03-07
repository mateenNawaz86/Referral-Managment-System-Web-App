import { SortIcon } from "../../assets/svgs/components/sort-icon";

export const TableHeading = ({ title }) => (
  <div className="flex items-center gap-x-1.5">
    <span className="text-base font-medium text-gray-500">{title}</span>
    <SortIcon />
  </div>
);
