import { useEmptyStates } from "../../utils/hooks";
import { DetailCards } from "../freeUser/detail-card";
import { YearlyPremUsersTableRows } from "./table/table-rows";
import { RecordCard } from "../../base-component/ui/record-card";
import { YearlyPremUserTableHeadings } from "./table/table-heading";
import SelectField from "../../base-component/ui/fields/select-fields";
import { useYearlyUsers } from "../../hooks/yearly-users/useYearlyUsers";
import { Pagination } from "../../base-component/ui/pagination/pagination";
import { NoDataEmptyState } from "../../base-component/ui/loadingEffect/no-data-state";

export const YearlyPremUsers = () => {
  const {
    dummyData,
    totalCount,
    totalItems,
    isLoading,
    itemsPerPage,
    currentPage,
    headings,
    pageTitle,
    mobilePageTitle,
    currentPageRows,
    handlePageChange,
  } = useYearlyUsers();

  const CurrentComponent = useEmptyStates(
    <YearlyPremUsersTableRows data={currentPageRows?.metrics?.data} />,
    totalCount !== 0,
    isLoading
  );

  return (
    <>
      <DetailCards dummyData={dummyData} />

      <div className="hidden md:block">
        <YearlyPremUserTableHeadings headings={headings} />
        {CurrentComponent}
      </div>

      {currentPageRows?.metrics?.data?.length > 0 ? (
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
            />
          </div>
          <RecordCard
            data={currentPageRows?.metrics?.data}
            pageTitle={pageTitle}
          />
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
