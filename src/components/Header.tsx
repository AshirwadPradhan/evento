import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/events/all",
    label: "All Events",
  },
];

function Header() {
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />
      <nav>
        <ul className="flex gap-x-6 text-sm">
          {routes.map((route) => (
            <li
              key={route.href}
              className="text-white/50 hover:text-white transition duration-250"
            >
              <Link href={route.href}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
