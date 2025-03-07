import { TableHeading } from "../../../base-component/ui/table-heading";

export const FreeUsersTableHeadings = ({ headings }) => {
  return (
    <div className="py-2.5 px-4 grid grid-cols-[minmax(200px,_4fr)_minmax(170px,_3fr)_minmax(100px,_100px)] items-center mb-3">
      {headings?.map((heading) => (
        <TableHeading key={heading} title={heading} />
      ))}
    </div>
  );
};
