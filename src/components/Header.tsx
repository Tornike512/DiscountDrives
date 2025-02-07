"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/favicon.ico";
import menuIcon from "../../public/Images/menu-icon.png";

import "@/style/components/_header.scss";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <Image className="logo" src={Logo} alt="Logo" height={60} width={70} />
      </Link>
      <Link href="/about-us" className="about-us">
        <span className="text-container">
          <span className="text">About us</span>
        </span>
      </Link>
      <Image
        className="menu-icon"
        src={menuIcon}
        width={40}
        height={40}
        alt="Menu icon"
      ></Image>
    </header>
  );
}
