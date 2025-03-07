import { useEmptyStates } from "../../utils/hooks";
import { PointHistoryTableRows } from "./table/table-rows";
import { PointHistoryTableHeadings } from "./table/table-heading";
import { Pagination } from "../../base-component/ui/pagination/pagination";
import { usePointHistory } from "../../hooks/pointHistory/usePointHistory";

export const PointHistory = () => {
  const {
    totalCount,
    totalItems,
    isLoading,
    itemsPerPage,
    currentPage,
    headings,
    currentPageRows,
    handlePageChange,
  } = usePointHistory();

  const CurrentComponent = useEmptyStates(
    <PointHistoryTableRows data={currentPageRows} />,
    totalCount !== 0,
    isLoading
  );

  return (
    <>
      <PointHistoryTableHeadings headings={headings} />
      {CurrentComponent}

      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};
