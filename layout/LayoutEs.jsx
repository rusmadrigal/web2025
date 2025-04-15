"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedLine from "@/src/components/ui/AnimatedLine";
import useMediaQuery from "@/src/hooks/useMediaQuery";
import RightNav from "/layout/RightnavEs";
import SidebarProfile from "/layout/SidebarprofileEs";
import MobileMenuBar from "/layout/mobile/MobileMenuBarEs";
import MobileNav from "/layout/mobile/MobileNavEs";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1199px)");
  const midContainer = useRef(null);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (!isMobile && isOpen) {
      toggleDrawer();
    }
  }, [isMobile]);

  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash.substr(1);
      const section = document.getElementById(hash);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollToSection();

    const handleHashChange = () => {
      scrollToSection();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div>
      <div className="relative pt-10 minfo__app max-xl:pt-20">
        <div className="max-lg:px-4">
          <MobileMenuBar toggleDrawer={toggleDrawer} />
          <MobileNav isOpen={isOpen} toggleDrawer={toggleDrawer} />
          <SidebarProfile />
          <RightNav midContainer={midContainer} />
          <div
            className="relative mx-auto minfo__contentBox max-w-container xl:max-2xl:max-w-65rem"
            ref={midContainer}
          >
            {children}
          </div>
        </div>
      </div>
      <AnimatedLine />
    </div>
  );
};

export default Layout;
