import { CountDetailCard } from "../../base-component/ui/count-detail-card";

export const DetailCards = ({ dummyData }) => {
  return (
    <div className="grid grid-cols-2 xMaxSize:grid-cols-4 gap-[28px] mb-[28px]">
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
