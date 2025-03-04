import { Header } from "../base-component/Header";
import { SideBar } from "../base-component/sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="bg-[#fafbfd] h-screen">
      <SideBar />
      <Header />

      <div className="ml-[265px] px-[60px]">{children}</div>
    </div>
  );
};
