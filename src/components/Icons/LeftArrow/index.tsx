import Image from "next/image";
import LeftArrowIcon from "@SVGs/LeftArrow.svg";

const LeftArrow = () => (
  <div
    style={{
      paddingTop: "5px",
      paddingRight: "5px",
    }}
  >
    <Image priority src={LeftArrowIcon} alt="LeftArrow" />
  </div>
);

export default LeftArrow;
