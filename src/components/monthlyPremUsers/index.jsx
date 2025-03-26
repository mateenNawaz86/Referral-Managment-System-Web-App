import { useEmptyStates } from "../../utils/hooks";
import { MonthlyPremUsersTableRows } from "./table/table-rows";
import { Pagination } from "../../base-component/ui/pagination/pagination";
import { MonthlyPremUserTableHeadings } from "./table/table-heading";
import { useMonthlyUses } from "../../hooks/monthly-users/useMonthlyUsers";
import { DetailCards } from "../freeUser/detail-card";
import { RecordCard } from "../../base-component/ui/record-card";
import { NoDataEmptyState } from "../../base-component/ui/loadingEffect/no-data-state";
import SelectField from "../../base-component/ui/fields/select-fields";

export const MonthlyPremUsers = () => {
  const {
    dummyData,
    totalCount,
    totalItems,
    loading,
    itemsPerPage,
    currentPage,
    headings,
    records,
    pageTitle,
    mobilePageTitle,
    currentPageRows,
    handlePageChange,
  } = useMonthlyUses();

  const CurrentComponent = useEmptyStates(
    <MonthlyPremUsersTableRows data={currentPageRows} />,
    totalCount !== 0,
    loading
  );

  return (
    <>
      <DetailCards dummyData={dummyData} />
      <div className="hidden md:block">
        <MonthlyPremUserTableHeadings headings={headings} />
        {CurrentComponent}
      </div>

      {currentPageRows?.length > 0 ? (
        <div className="md:hidden mb-10">
          <div className="flex items-center justify-between mt-[15px] mb-3">
            <p className="text-[20px] font-semibold min-w-fit">
              {mobilePageTitle}
            </p>
            <SelectField
              // handleChange={(value) => hanldeSortChange(value)}
              value={"None"}
              options={[
                {
                  label: "Name",
                  value: "Name",
                },
                {
                  label: "Install Date",
                  value: "Install Date",
                },
                {
                  label: "Subscribed Date",
                  value: "Subscribed Date",
                },
                {
                  label: "Clearance Datet",
                  value: "Clearance Date",
                },
              ]}
              containerClassName="w-[350px]"
            />
          </div>
          <RecordCard data={records} pageTitle={pageTitle} />
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
