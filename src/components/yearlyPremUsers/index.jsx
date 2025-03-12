import { useEmptyStates } from "../../utils/hooks";
import { Pagination } from "../../base-component/ui/pagination/pagination";
import { YearlyPremUserTableHeadings } from "./table/table-heading";
import { DetailCards } from "../freeUser/detail-card";
import { useYearlyUsers } from "../../hooks/yearly-users/useYearlyUsers";
import { MonthlyPremUsersTableRows } from "./table/table-rows";
import { FilterSortIcon } from "../../assets/svgs/components/filter-sort-icon";
import { RecordCard } from "../../base-component/ui/record-card";
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
    records,
    pageTitle,
    currentPageRows,
    handlePageChange,
  } = useYearlyUsers();

  const CurrentComponent = useEmptyStates(
    <MonthlyPremUsersTableRows data={currentPageRows} />,
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

      {records?.length > 0 ? (
        <div className="md:hidden mb-10">
          <div className="flex items-center justify-between mt-[15px] mb-3">
            <p className="text-[20px] font-semibold">{pageTitle}</p>
            <div className="flex items-center gap-x-[2px]">
              <span className="text-[13px] font-semibold text-primary">
                Sort by
              </span>
              <FilterSortIcon />
            </div>
          </div>
          <RecordCard data={records} pageTitle={pageTitle} />
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
