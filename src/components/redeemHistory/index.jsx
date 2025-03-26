import { useEmptyStates } from "../../utils/hooks";
import { RedeemHistoryTableRows } from "./table/table-rows";
import { ReedeemHistoryTableHeadings } from "./table/table-heading";
import { Pagination } from "../../base-component/ui/pagination/pagination";
import { useRedeemHistory } from "../../hooks/redeemHistory/useRedeemHistory";
import SelectField from "../../base-component/ui/fields/select-fields";
import { RedeemMobileCard } from "../../base-component/ui/redeem-mobile-card";
import { NoDataEmptyState } from "../../base-component/ui/loadingEffect/no-data-state";

export const RedeemHistory = () => {
  const {
    totalCount,
    totalItems,
    loading,
    itemsPerPage,
    currentPage,
    headings,
    redeemHistory,
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
    loading
  );

  return (
    <>
      <div className="hidden md:block">
        <ReedeemHistoryTableHeadings headings={headings} />
        {CurrentComponent}
      </div>

      {redeemHistory?.length > 0 ? (
        <div className="md:hidden mb-10">
          <div className="flex items-center justify-between mt-[15px] mb-3">
            <p className="text-[20px] font-semibold">Redeemed Listing</p>
            <SelectField
              // handleChange={(value) => hanldeSortChange(value)}
              value={"None"}
              options={[
                {
                  label: "Status",
                  value: "Status",
                },
                {
                  label: "Redeemed Date",
                  value: "Redeemed Date",
                },
                {
                  label: "Redeemed Points",
                  value: "Redeemed Points",
                },
              ]}
            />
          </div>
          <RedeemMobileCard
            data={redeemHistory}
            onClick={handlePaymentDetails}
          />
        </div>
      ) : (
        <div className="md:hidden">
          <NoDataEmptyState
            imgClassName="w-14 h-14"
            textClassName="text-lg"
            className="py-5 px-3 w-full"
          />
        </div>
      )}

      {!loading && (
        <div className="hidden md:block">
          <Pagination
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      )}
    </>
  );
};
