"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// The nav items are imported from the typrscript folder for better maintainability
import { NAV_ITEMS } from "@/lib/constants";

// it is a navigation component that highlights the active link based on the current pathname
const NavItems = () => {
  const pathname = usePathname() || "/";

  // Function to determine if the nav item is active and
  // and if so, apply specific styles like text-yellow-500 to highlight it
  const isActive = (path: string): boolean => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {NAV_ITEMS.map(({ label, href }) => (
        <li key={href}>
          <Link
            href={href}
            className={`hover:text-yellow-500 transition-colors ${
              isActive(href) ? "text-yellow-500" : ""
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;