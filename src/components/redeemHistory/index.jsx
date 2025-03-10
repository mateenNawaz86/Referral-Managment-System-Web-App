import { useEmptyStates } from "../../utils/hooks";
import { RedeemHistoryTableRows } from "./table/table-rows";
import { ReedeemHistoryTableHeadings } from "./table/table-heading";
import { Pagination } from "../../base-component/ui/pagination/pagination";
import { useRedeemHistory } from "../../hooks/redeemHistory/useRedeemHistory";

export const RedeemHistory = () => {
  const {
    totalCount,
    totalItems,
    isLoading,
    itemsPerPage,
    currentPage,
    headings,
    currentPageRows,
    handlePageChange,
    handlePaymentDetails,
  } = useRedeemHistory();

  const CurrentComponent = useEmptyStates(
    <RedeemHistoryTableRows
      data={currentPageRows}
      onPaymentDetails={handlePaymentDetails}
    />,
    totalCount !== 0,
    isLoading
  );

  return (
    <>
      <ReedeemHistoryTableHeadings headings={headings} />
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
