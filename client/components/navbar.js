import React from "react";
import Image from "next/image";
import { navbarData } from "./navbarData";
import Link from "next/link";
import Logo from "./ellipsis logo.svg";
export default function Navbar() {
  return (
    <div className="">
      <div className="">
        <div className="">
          <Avatar />
        </div>
      </div>
      <nav className="">
        <ul className="">{navBarIcons()}</ul>
      </nav>
      <div className="">
        <div className="">
          <Logo fill="white" />
        </div>
      </div>
    </div>
  );
}
//function for generating sidebar
//NEED TO FIX THIS PROPERLY - IN TERMS OF RETURNING THE JSX ARRAY
function navBarIcons() {
  return navbarData.map((item, index) => {
    return (
      <li key={index} className="">
        <Link href={item.path}>
          <a alt={item.title}>{item.icon}</a>
        </Link>
      </li>
    );
  });
}
//function for the the user avatar
function Avatar() {
  return <img src="/avatar.jpg" alt="me" className="" />;
}
