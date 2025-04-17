import { DetailCards } from "./detail-card";
import { useEmptyStates } from "../../utils/hooks";
import { FreeUserCard } from "./mobile/free-user-card";
import { FreeUsersTableRows } from "./table/table-rows";
import { FreeUsersTableHeadings } from "./table/table-heading";
import { useFreeUser } from "../../hooks/free-users/userFreeUser";
import SelectField from "../../base-component/ui/fields/select-fields";
import { Pagination } from "../../base-component/ui/pagination/pagination";
import { NoDataEmptyState } from "../../base-component/ui/loadingEffect/no-data-state";
import { CustomLoader } from "../../base-component/ui/loadingEffect/custom-loader";

export const FreeUserListing = () => {
  const {
    dummyData,
    loading,
    itemsPerPage,
    currentPage,
    headings,
    currentPageRows,
    handlePageChange,
    freeUser,
    totalCount,
    sort,
    hanldeSortChange,
  } = useFreeUser();

  const CurrentComponent = useEmptyStates(
    <FreeUsersTableRows data={currentPageRows?.data?.freeUsers} />,
    totalCount !== 0,
    loading
  );

  return (
    <>
      <DetailCards dummyData={dummyData} />

      <div className="hidden md:block">
        <FreeUsersTableHeadings
          headings={headings}
          handleSort={hanldeSortChange}
          sortValue={sort}
        />
        {CurrentComponent}
      </div>

      <div className="flex items-center justify-between mt-[15px] mb-3 md:hidden">
        <p className="text-[20px] font-semibold min-w-[123px]">User Listing</p>

        <SelectField
          handleChange={(value) => hanldeSortChange(value)}
          value={sort || "None"}
          options={[
            {
              label: "Name",
              value: "name",
            },
            {
              label: "Install Date",
              value: "installedDate",
            },
          ]}
          containerClassName="w-[350px]"
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center md:hidden">
          <CustomLoader />
        </div>
      ) : currentPageRows?.data?.freeUsers?.length > 0 ? (
        <div className="md:hidden mb-10">
          <FreeUserCard data={freeUser?.freeUsers} />
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
            totalItems={itemsPerPage}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      )}
    </>
  );
};
