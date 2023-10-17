import Image from "next/image";
import SPECIAL from "@SVGs/Special.svg";

const Special = () => (
  <div
    style={{
      paddingTop: "5px",
      paddingRight: "5px",
    }}
  >
    <Image priority src={SPECIAL} alt="SPECIAL" />
  </div>
);

export default Special;
