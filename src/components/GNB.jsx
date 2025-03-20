import React, { useEffect } from "react";
import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGNB } from "../store/navigation";

const links = [
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/education", label: "Education" },
  { to: "/service", label: "Product" },
  { to: "/contact", label: "Contact" },
];

const GNB = forwardRef(({ className, ...props }, ref) => {
  const location = useLocation();
  const { open, setGNB } = useGNB();

  const linkClass = (path) => `uppercase text-2xl font-[teko] ${location.pathname === path ? "text-cyan-700" : ""}`;
  const handleMobileGNB = () => {
    if (window.innerWidth < 1024) {
      setGNB(!open);
    }
  };

  return (
    <nav ref={ref} className={className} {...props}>
      <ul className="mobile:grid tablet:flex gap-5">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to} className={linkClass(to)} onClick={handleMobileGNB}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default GNB;
