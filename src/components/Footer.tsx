import Link from "next/link";
import React from "react";

const routes = [
  { path: "/privacy-policy", name: "Privacy Policy" },
  { path: "/terms-conditions", name: "Terms & Conditions" },
];

function Footer() {
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25 ">
      <small className="text-xs">&copy; 2050 AP. All rights reserved.</small>
      <ul className="flex gap-x-3 sm:gap-x-6">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
