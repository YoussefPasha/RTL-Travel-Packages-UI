import Image from "next/image";
import KW from "@SVGs/currency.svg";

const Currency = () => (
  <div>
    <Image width={24} height={24} priority src={KW} alt="EXPAND" />
  </div>
);

export default Currency;
