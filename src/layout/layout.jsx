import { useState } from "react";
import { Header } from "../base-component/Header";
import { SideBar } from "../base-component/Sidebar";
import { motion } from "framer-motion";

export const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="bg-[#fafbfd] h-full overflow-y-auto relative">
      <motion.div
        initial={{ x: -312 }}
        animate={{ x: isSidebarOpen ? 0 : -312 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 h-full"
      >
        <SideBar />
      </motion.div>

      {isSidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-10 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <motion.div
        animate={{ marginLeft: isSidebarOpen ? "312px" : "0px" }}
        transition={{ type: "spring", stiffness: 100 }}
        className="px-[30px] transition-all"
      >
        {children}
      </motion.div>
    </div>
  );
};
