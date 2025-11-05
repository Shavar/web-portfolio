"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.scss";

type NavItem = {
  slug: string;
  title: string;
};

const Header: React.FC<{ navItems: NavItem[] }> = ({ navItems }) => {
  const pathname = usePathname();
  const items = navItems || [];
  if (!items.length) return null;

  return (
    <header className="floating-header">
      <div className="header-content">
        <div className="logo-container">
          <div className="logo-icon">Logo</div>
        </div>
        <nav className="main-nav">
          {items.map((item: NavItem) => {
            const isActive = pathname === `/${item.slug}`;
            return (
              <Link key={item.slug} href={`/${item.slug}`} className={`header__nav-link ${isActive ? " is-active" : ""}`}>
                {item.title}
              </Link>
            );
          })}
        </nav>
        <div className="social-links">
          <a href="#" className="social-icon">
            <span className="material-symbols-outlined">code</span>
          </a>
          <a href="#" className="social-icon">
            <span className="material-symbols-outlined">group</span>
          </a>
          <a href="#" className="social-icon">
            <span className="material-symbols-outlined">chat_bubble</span>
          </a>
        </div>
        <div className="mobile-menu-button">
          <button>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
