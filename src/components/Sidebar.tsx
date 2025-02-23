"use client";

import { useContext } from "react";
import { GlobalContext } from "@/context";

import telegramIcon from "../../public/Images/telegram-icon.png";
import closeModal from "../../public/Images/close-modal.png";

import Image from "next/image";
import Link from "next/link";

import "@/style/components/_sidebar.scss";

export default function Sidebar() {
  const { setShowSidebar, showSidebar } = useContext(GlobalContext);

  const handleSidebarModal = () => {
    setShowSidebar(false);
  };

  const handleCloseIcon = () => {
    setShowSidebar(false);
  };

  console.log(showSidebar);

  return (
    <>
      {showSidebar && (
        <div className="sidebar-container">
          <Link
            href="https://t.me/+bK8YH2frmcc5NmRi"
            target="_blank"
            className="join-telegram"
          >
            <Image src={telegramIcon} alt="Telegram Icon"></Image>
            Join Telegram
          </Link>
          <Link href="/about-us" className="about-us">
            <span className="text-container">
              <span className="text">About us</span>
            </span>
          </Link>
          <Image
            onClick={handleCloseIcon}
            className="close-modal"
            src={closeModal}
            alt="Close Modal"
          />
        </div>
      )}
      {showSidebar && (
        <div onClick={handleSidebarModal} className="sidebar-modal"></div>
      )}
    </>
  );
}
