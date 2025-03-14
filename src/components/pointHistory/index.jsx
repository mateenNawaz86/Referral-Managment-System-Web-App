import { useEmptyStates } from "../../utils/hooks";
import { PointHistoryTableRows } from "./table/table-rows";
import { PointHistoryTableHeadings } from "./table/table-heading";
import { Pagination } from "../../base-component/ui/pagination/pagination";
import { usePointHistory } from "../../hooks/pointHistory/usePointHistory";
import SelectField from "../../base-component/ui/fields/select-fields";
import { RecordCard } from "../../base-component/ui/record-card";
import { NoDataEmptyState } from "../../base-component/ui/loadingEffect/no-data-state";

export const PointHistory = () => {
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
  } = usePointHistory();

  const CurrentComponent = useEmptyStates(
    <PointHistoryTableRows data={currentPageRows} />,
    totalCount !== 0,
    isLoading
  );

  return (
    <>
      <div className="hidden md:block">
        <PointHistoryTableHeadings headings={headings} />
        {CurrentComponent}
      </div>

      {records?.length > 0 ? (
        <div className="md:hidden mb-10">
          <div className="flex items-center justify-between mt-[15px] mb-3">
            <p className="text-[20px] font-semibold">Users Listing</p>
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
          <RecordCard data={records} isPointHistory={true} />
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
