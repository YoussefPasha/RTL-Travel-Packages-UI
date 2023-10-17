import Image from "next/image";
import MLOGO from "@SVGs/MiniLogo.svg";

interface MiniLogoProps {
  width?: number;
  height?: number;
}

const MiniLogo: React.FC<MiniLogoProps> = ({ width, height }) => (
  <div>
    <Image width={width} height={height} priority src={MLOGO} alt="MLOGO" />
  </div>
);

export default MiniLogo;
