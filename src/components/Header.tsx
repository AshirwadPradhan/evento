import Link from "next/link";
import React from "react";
import Logo from "./Logo";

function Header() {
  return (
    <header>
      <Logo />
      <Link href="/">Home</Link>
      <Link href="events/all">All Events</Link>
    </header>
  );
}

export default Header;
