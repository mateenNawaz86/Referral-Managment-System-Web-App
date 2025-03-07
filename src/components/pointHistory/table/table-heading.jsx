import { TableHeading } from "../../../base-component/ui/table-heading";

export const PointHistoryTableHeadings = ({ headings }) => {
  return (
    <div className="py-2.5 px-4 grid grid-cols-[minmax(200px,_4fr)_minmax(170px,_3fr)_minmax(170px,_3fr)_minmax(170px,_3fr)] items-center mb-3">
      {headings?.map((heading, index) => (
        <TableHeading
          key={index}
          title={heading}
          isFirst={index === 0}
          isAligned={true}
        />
      ))}
    </div>
  );
};
