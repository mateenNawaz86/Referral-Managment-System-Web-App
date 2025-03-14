import { useEmptyStates } from "../../utils/hooks";
import { RedeemHistoryTableRows } from "./table/table-rows";
import { ReedeemHistoryTableHeadings } from "./table/table-heading";
import { Pagination } from "../../base-component/ui/pagination/pagination";
import { useRedeemHistory } from "../../hooks/redeemHistory/useRedeemHistory";
import SelectField from "../../base-component/ui/fields/select-fields";
import { RedeemMobileCard } from "../../base-component/ui/redeem-mobile-card";

export const RedeemHistory = () => {
  const {
    totalCount,
    totalItems,
    isLoading,
    itemsPerPage,
    currentPage,
    headings,
    records,
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
      <div className="hidden md:block">
        <ReedeemHistoryTableHeadings headings={headings} />
        {CurrentComponent}
      </div>

      {records?.length > 0 ? (
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
          <RedeemMobileCard data={records} onClick={handlePaymentDetails} />
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

      <div className="hidden md:block">
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};
