import { CompanyLogoLoader } from "./custom-logo-loader";

export const CustomLoader = () => {
  return (
    <div className="flex space-x-2 justify-center items-center bg-transparent h-[300px] mt-10">
      <CompanyLogoLoader />
    </div>
  );
};
