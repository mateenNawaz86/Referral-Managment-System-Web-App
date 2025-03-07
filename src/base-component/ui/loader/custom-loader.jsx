import logo from "../../../assets/svgs/logo.svg";

export default function CustomLoader() {
  return (
    <div className="flex space-x-2 justify-center items-center bg-transparent h-[300px] mt-10">
      <img src={logo} alt="Logo" className="h-[139px] w-[137px]" />
    </div>
  );
}
