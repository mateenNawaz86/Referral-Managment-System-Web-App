import React from "react";
import { NoDataEmptyState } from "../base-component/ui/loadingEffect/no-data-state";
import { CustomLoader } from "../base-component/ui/loadingEffect/custom-loader";

export const EmptyStateType = {
  hasData: "hasData",
  loading: "loading",
  hasNoData: "hasNoData",
};

export const useEmptyStates = (CurrentComponent, condition, isLoading) => {
  const isEmpty = isLoading
    ? EmptyStateType.loading
    : condition
    ? EmptyStateType.hasData
    : EmptyStateType.hasNoData;

  const lookup = {
    [EmptyStateType.hasData]: CurrentComponent,
    [EmptyStateType.loading]: <CustomLoader />,
    [EmptyStateType.hasNoData]: (
      <div className="my-6">
        <NoDataEmptyState
          containerClassName="xMini:py-[153px] w-full flex items-center justify-center"
          className="py-5 px-3 xMini:py-10 xMini:px-6 w-[531px]"
        />
      </div>
    ),
  };

  console.log(lookup[isEmpty], "returned component");

  return lookup[isEmpty];
};
