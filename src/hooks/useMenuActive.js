"use client";

import { useState, useEffect } from "react";

const useMenuActive = (ref, selector) => {
  const [activeMenuItem, setActiveMenuItem] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const rightContainer = ref?.current;
      if (!rightContainer) return;

      const scrollPosition = window.scrollY;
      const menuItems = document.querySelectorAll(selector);

      let activeMenu = null;

      menuItems.forEach((menuItem) => {
        const rawSection = menuItem.getAttribute("data-section");

        if (!rawSection) return;

        // ✅ Extraer solo el fragmento ID del selector
        let sectionId = null;

        if (rawSection.startsWith("#")) {
          sectionId = rawSection;
        } else if (rawSection.includes("#")) {
          const parts = rawSection.split("#");
          sectionId = `#${parts[1]}`;
        }

        if (!sectionId) return;

        const targetSection = document.querySelector(sectionId);
        if (!targetSection) return;

        const targetSectionOffset = targetSection.offsetTop;
        const targetSectionHeight = targetSection.offsetHeight;

        if (
          scrollPosition >= targetSectionOffset &&
          scrollPosition < targetSectionOffset + targetSectionHeight
        ) {
          activeMenu = rawSection;
        } else if (
          scrollPosition >= targetSectionOffset - window.innerHeight / 2 &&
          scrollPosition < targetSectionOffset
        ) {
          activeMenu = rawSection;
        }
      });

      setActiveMenuItem(activeMenu);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, selector]);

  return activeMenuItem;
};

export default useMenuActive;
