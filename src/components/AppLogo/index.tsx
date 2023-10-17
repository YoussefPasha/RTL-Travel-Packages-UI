import Image from "next/image";
import LOGO from "@SVGs/LOGOs/logoen.svg";
import LOGOAR from "@SVGs/LOGOs/logoar.svg";

const Logo = ({ isMobile, lng }: { isMobile: boolean; lng: string }) => (
  <div>
    <Image
      width={isMobile ? 104 : undefined}
      height={isMobile ? 21 : undefined}
      priority
      src={lng === "en" ? LOGO : LOGOAR}
      alt="logo"
    />
  </div>
);

export default Logo;
