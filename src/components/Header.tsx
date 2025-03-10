"use client";

import { GlobalContext } from "@/context";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import Sidebar from "./Sidebar";

import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/favicon.ico";
import menuIcon from "../../public/Images/menu-icon.png";
import telegramIcon from "../../public/Images/telegram-icon.png";

import "@/style/components/_header.scss";

export default function Header() {
  const { setShowSidebar } = useContext(GlobalContext);

  const router = useRouter();

  const handleShowSidebar = () => {
    setShowSidebar(true);
  };

  const handleAboutUsClick = () => {
    setShowSidebar(false);
    router.push("/about-us");
  };

  const handleMainIcon = () => {
    setShowSidebar(false);
  };

  return (
    <>
      <header className="header">
        <Link onClick={handleMainIcon} href="/">
          <Image
            className="logo"
            src={Logo}
            alt="Logo"
            height={60}
            width={70}
          />
        </Link>
        <div className="header-buttons-wrapper">
          <Link
            href="https://t.me/+bK8YH2frmcc5NmRi"
            target="_blank"
            className="join-telegram"
          >
            <Image src={telegramIcon} alt="Telegram Icon"></Image>
            Join Telegram
          </Link>
          <button onClick={handleAboutUsClick} className="about-us">
            <span className="text-container">
              <span className="text">About us</span>
            </span>
          </button>
        </div>
        <Image
          onClick={handleShowSidebar}
          className="menu-icon"
          src={menuIcon}
          width={40}
          height={40}
          alt="Menu icon"
        ></Image>
      </header>
      <Sidebar />
    </>
  );
}
