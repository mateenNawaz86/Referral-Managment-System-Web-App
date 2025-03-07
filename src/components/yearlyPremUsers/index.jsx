import { useEmptyStates } from "../../utils/hooks";
import { MonthlyPremUsersTableRows } from "./table/table-rows";
import { Pagination } from "../../base-component/ui/pagination/pagination";
import { MonthlyPremUserTableHeadings } from "./table/table-heading";
import { DetailCards } from "../freeUser/detail-card";
import { useYearlyUsers } from "../../hooks/yearly-users/useYearlyUsers";

export const YearlyPremUsers = () => {
  const {
    dummyData,
    totalCount,
    totalItems,
    isLoading,
    itemsPerPage,
    currentPage,
    headings,
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
      <MonthlyPremUserTableHeadings headings={headings} />
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
