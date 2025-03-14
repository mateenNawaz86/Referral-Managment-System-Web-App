import { useEmptyStates } from "../../utils/hooks";
import { CouponHistoryTableRows } from "./table/table-rows";
import { CouponHistoryTableHeadings } from "./table/table-heading";
import { Pagination } from "../../base-component/ui/pagination/pagination";
import { useCouponHistory } from "../../hooks/couponHistory/useCouponHistory";
import SelectField from "../../base-component/ui/fields/select-fields";
import { CouponDetailsCard } from "../../base-component/ui/coupon-details-card";
import { NoDataEmptyState } from "../../base-component/ui/loadingEffect/no-data-state";

export const CouponHistory = () => {
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
  } = useCouponHistory();

  const CurrentComponent = useEmptyStates(
    <CouponHistoryTableRows data={currentPageRows} />,
    totalCount !== 0,
    isLoading
  );

  return (
    <>
      <div className="hidden md:block">
        <CouponHistoryTableHeadings headings={headings} />
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
                  label: "Type",
                  value: "Type",
                },
                {
                  label: "Coupons",
                  value: "Coupons",
                },
                {
                  label: "Redeemed Date",
                  value: "Redeemed Date",
                },
              ]}
            />
          </div>
          <CouponDetailsCard data={records} />
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
