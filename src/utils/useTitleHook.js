import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ID = "Rebehayan";

export const useTitleHook = () => {
  const location = useLocation();

  useEffect(() => {
    const titleMap = {
      "/": ID,
      "/about": `About ${ID}`,
      "/portfolio": `Portfolio ${ID}`,
      "/contact": `Contact ${ID}`,
      "/education": `Education ${ID}`,
      "/service": `Product ${ID}`,
    };

    document.title = titleMap[location.pathname] || ID;
  }, [location.pathname]);
};
