import profile from "../../../assets/pngs/profile.jpg";

export const FreeUsersTableRows = ({ data }) => {
  return (
    <div className={`overflow-y-visible flex flex-col gap-y-[10px]`}>
      {data?.map((item, index) => (
        <div
          key={index}
          className="bg-white hover:bg-tableHoverColor rounded-[5px] py-[10px] px-[15px] grid grid-cols-[minmax(200px,_4fr)_minmax(170px,_3fr)_minmax(100px,_100px)] items-center"
        >
          <div className="flex items-center gap-x-[18px]">
            <img
              src={profile}
              alt="profile"
              className="min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] rounded-full object-cover"
            />
            <span className="text-base font-medium">{item?.username}</span>
          </div>

          <span className="text-base font-medium">{item?.date}</span>
          <span className="text-base font-medium">{item?.status}</span>
        </div>
      ))}
    </div>
  );
};
