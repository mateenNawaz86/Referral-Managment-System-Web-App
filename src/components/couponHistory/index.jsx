import { useEmptyStates } from "../../utils/hooks";
import { CouponHistoryTableRows } from "./table/table-rows";
import { CouponHistoryTableHeadings } from "./table/table-heading";
import { Pagination } from "../../base-component/ui/pagination/pagination";
import { useCouponHistory } from "../../hooks/couponHistory/useCouponHistory";

export const CouponHistory = () => {
  const {
    totalCount,
    totalItems,
    isLoading,
    itemsPerPage,
    currentPage,
    headings,
    currentPageRows,
    handlePageChange,
  } = useCouponHistory();

  const CurrentComponent = useEmptyStates(
    <CouponHistoryTableRows data={currentPageRows} />,
    totalCount !== 0,
    isLoading
  );

  return (
    <>
      <CouponHistoryTableHeadings headings={headings} />
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
