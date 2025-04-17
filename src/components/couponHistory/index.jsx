import { useEmptyStates } from "../../utils/hooks";
import { CouponHistoryTableRows } from "./table/table-rows";
import { CouponHistoryTableHeadings } from "./table/table-heading";
import { Pagination } from "../../base-component/ui/pagination/pagination";
import { useCouponHistory } from "../../hooks/couponHistory/useCouponHistory";
import SelectField from "../../base-component/ui/fields/select-fields";
import { CouponDetailsCard } from "../../base-component/ui/coupon-details-card";
import { NoDataEmptyState } from "../../base-component/ui/loadingEffect/no-data-state";
import { CustomLoader } from "../../base-component/ui/loadingEffect/custom-loader";

export const CouponHistory = () => {
  const {
    totalItems,
    loading,
    itemsPerPage,
    currentPage,
    headings,
    couponHistory,
    currentPageRows,
    handlePageChange,
    hanldeSortChange,
    sort,
    totalCount,
  } = useCouponHistory();

  const CurrentComponent = useEmptyStates(
    <CouponHistoryTableRows data={currentPageRows?.data} />,
    totalCount !== 0,
    loading
  );

  return (
    <>
      <div className="hidden md:block">
        <CouponHistoryTableHeadings
          headings={headings}
          handleSort={hanldeSortChange}
          sortValue={sort}
          isRedeem={true}
        />
        {CurrentComponent}
      </div>

      <div className="flex items-center justify-between mt-[15px] mb-3 md:hidden">
        <p className="text-[20px] font-semibold">Redeemed Listing</p>
        <SelectField
          handleChange={(value) => hanldeSortChange(value)}
          value={sort || "None"}
          options={[
            {
              label: "Type",
              value: "type",
            },
            {
              label: "Coupons",
              value: "coupon",
            },
            {
              label: "Redeemed Date",
              value: "createdAt",
            },
            {
              label: "Status",
              value: "status",
            },
          ]}
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center md:hidden">
          <CustomLoader />
        </div>
      ) : currentPageRows?.data?.length > 0 ? (
        <div className="md:hidden mb-10">
          <CouponDetailsCard data={couponHistory} />
        </div>
      ) : (
        <div className="md:hidden mt-10">
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
