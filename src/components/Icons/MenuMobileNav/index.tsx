import Image from "next/image";
import MENU from "@SVGs/MenuMobileNav.svg";

const menu = () => (
  <div>
    <Image priority src={MENU} alt="MENU" />
  </div>
);

export default menu;
