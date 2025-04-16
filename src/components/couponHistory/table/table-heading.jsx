import { TableHeading } from "../../../base-component/ui/table-heading";

export const CouponHistoryTableHeadings = ({
  headings,
  handleSort,
  sortValue,
  isRedeem,
}) => {
  return (
    <div className="py-2.5 px-10  grid grid-cols-[minmax(170px,_3fr)_minmax(170px,_3fr)_minmax(170px,_3fr)_minmax(170px,_170px)] items-center mb-3">
      {headings?.map((heading, index) => (
        <TableHeading
          key={heading.value}
          title={heading.label}
          value={heading.value}
          isFirst={index === 0}
          isAligned={true}
          handleSort={handleSort}
          currentSort={sortValue}
          isRedeem={isRedeem}
        />
      ))}
    </div>
  );
};
