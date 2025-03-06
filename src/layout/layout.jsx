import { Header } from "../base-component/Header";
import { SideBar } from "../base-component/Sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="bg-[#fafbfd] h-full overflow-y-auto">
      <SideBar />
      {/* <Header /> */}

      <div className="ml-[312px] px-[30px]">{children}</div>
    </div>
  );
};
