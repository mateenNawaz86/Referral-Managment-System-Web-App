import { CountDetailCard } from "../../base-component/ui/count-detail-card";
import { useFreeUser } from "../../hooks/free-users/userFreeUser";

export const FreeUserListing = () => {
  const { dummyData } = useFreeUser();
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[28px] mb-[28px]">
      {dummyData?.map((item, index) => {
        return (
          <CountDetailCard
            points={item.points}
            title={item.title}
            key={index}
          />
        );
      })}
    </div>
  );
};
