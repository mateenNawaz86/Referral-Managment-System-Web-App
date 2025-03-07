import { DetailCards } from "./detail-card";
import { useEmptyStates } from "../../utils/hooks";
import { FreeUsersTableRows } from "./table/table-rows";
import { useFreeUser } from "../../hooks/free-users/userFreeUser";
import { Pagination } from "../../base-component/ui/pagination/pagination";

export const FreeUserListing = () => {
  const {
    dummyData,
    records,
    totalCount,
    totalItems,
    isLoading,
    itemsPerPage,
    currentPage,
    currentPageRows,
    handlePageChange,
  } = useFreeUser();

  const CurrentComponent = useEmptyStates(
    <FreeUsersTableRows data={currentPageRows} />,
    totalCount !== 0,
    isLoading
  );

  return (
    <div>
      <DetailCards dummyData={dummyData} />
      {CurrentComponent}

      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
};
