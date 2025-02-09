import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useTitleHook = () => {
  const location = useLocation();

  useEffect(() => {
    const titleMap = {
      "/": "Rebehayan",
      "/about": "About Rebehayan",
      "/portfolio": "Portfolio Rebehayan",
      "/contact": "Contact Rebehayan",
    };

    document.title = titleMap[location.pathname] || "Rebehayan";
  }, [location.pathname]);
};
