"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavProps = {
  children?: React.ReactNode;
};

const Nav = ({ children }: NavProps) => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav className="flex gap-6 p-4 bg-gray-100 shadow">
      {links.map(({ href, label }) => {
        // const isActive = pathname === href;
        const isActive = pathname.startsWith(href);

        return (
          <Link key={href} href={href} className={`nav-link${isActive ? " active" : ""}`}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
