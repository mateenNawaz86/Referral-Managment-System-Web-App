import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "../base-component/Header";
import { SideBar } from "../base-component/Sidebar";
import { MobileHeader } from "../base-component/mobile-header";
import { useLocation } from "react-router-dom";
import { getPageTitles } from "../utils/function";

export const Layout = ({ children }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDrawer, setIsDrawer] = useState(false);
  const [isAboveMlg, setIsAboveMlg] = useState(
    window.matchMedia("(min-width:1100px)").matches
  );

  const { pageTitle, mobileHeaderTitle } = getPageTitles(location);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width:1100px)");

    const handleMediaChange = (event) => setIsAboveMlg(event.matches);

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    if (!isAboveMlg) {
      setIsSidebarOpen(false);
      setIsDrawer(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [isAboveMlg]);

  const handleDrawer = () => setIsDrawer((prev) => !prev);

  const handleClose = (e) => {
    e.stopPropagation();
    setIsDrawer(false);
  };

  return (
    <div className="bg-[#fafbfd] h-full overflow-y-auto relative">
      <motion.div
        initial={{ x: -312 }}
        animate={{ x: isSidebarOpen && isAboveMlg ? 0 : -312 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 h-full hidden md:block"
      >
        <SideBar isDrawer={false} handleDrawer={handleDrawer} />
      </motion.div>

      <div className="hidden md:block">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          handleDrawer={handleDrawer}
          pageTitle={pageTitle}
        />
      </div>

      <div className="md:hidden">
        <MobileHeader
          handleDrawer={handleDrawer}
          pageTitle={mobileHeaderTitle}
        />
      </div>

      {isDrawer && (
        <div
          className="fixed top-0 z-[999] w-screen h-screen bg-[#1E1E1E] bg-opacity-40"
          onClick={handleClose}
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-[312px] h-full bg-white"
          >
            <SideBar isDrawer={true} handleDrawer={handleClose} />
          </motion.div>
        </div>
      )}

      <motion.div
        animate={{
          marginLeft: isSidebarOpen && isAboveMlg ? "312px" : "0px",
        }}
        transition={{ type: "spring", stiffness: 100 }}
        className="px-[18px] md:px-[30px] transition-all"
      >
        {children}
      </motion.div>
    </div>
  );
};
