import Image from "next/image";
import Logo from "../../public/favicon.ico";

import "@/style/components/_header.scss";

export default function Header() {
  return (
    <header className="header">
      <Image className="logo" src={Logo} alt="Logo" height={60} width={70} />
    </header>
  );
}
