import { DetailCards } from "./detail-card";
import { useEmptyStates } from "../../utils/hooks";
import { FreeUsersTableRows } from "./table/table-rows";
import { useFreeUser } from "../../hooks/free-users/userFreeUser";
import { Pagination } from "../../base-component/ui/pagination/pagination";
import { FreeUsersTableHeadings } from "./table/table-heading";
import { FreeUserCard } from "./mobile/free-user-card";
import { NoDataEmptyState } from "../../base-component/ui/loadingEffect/no-data-state";
import { FilterSortIcon } from "../../assets/svgs/components/filter-sort-icon";
import SelectField from "../../base-component/ui/fields/select-fields";

export const FreeUserListing = () => {
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
    records,
  } = useFreeUser();

  const CurrentComponent = useEmptyStates(
    <FreeUsersTableRows data={currentPageRows} />,
    totalCount !== 0,
    isLoading
  );

  return (
    <>
      <DetailCards dummyData={dummyData} />

      <div className="hidden md:block">
        <FreeUsersTableHeadings headings={headings} />
        {CurrentComponent}
      </div>

      {records?.length > 0 ? (
        <div className="md:hidden mb-10">
          <div className="flex items-center justify-between mt-[15px] mb-3">
            <p className="text-[20px] font-semibold min-w-[123px]">
              User Listing
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
              ]}
              containerClassName="w-[350px]"
            />
          </div>
          <FreeUserCard data={records} />
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
