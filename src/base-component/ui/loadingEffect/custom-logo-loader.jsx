// import { useSelector } from "react-redux";
import logo from "../../../assets/svgs/logo-icon.svg";

export const CompanyLogoLoader = () => {
  // const user = useSelector((state) => state.auth.user);

  // const isSVG = user?.company?.logo?.endsWith(".svg");

  return (
    <div>
      {/* {user?.company?.logo && (
        <>
          {isSVG ? (
            <object
              data={user.company.logo}
              width="120"
              height="100"
              type="image/svg+xml"
              className="w-fit h-fit img_loader"
            ></object>
          ) : (
            <img
              src={logo}
              alt="Company Logo"
              className="w-fit h-fit img_loader"
              width={120}
              height={100}
            />
          )}
        </>
      )} */}

      <img
        src={logo}
        alt="Company Logo"
        className="w-fit h-fit img_loader"
        width={120}
        height={100}
      />
    </div>
  );
};
