import Image from "next/image";
import RightArrowIcon from "@SVGs/RightArrowFill.svg";

const RightArrow = () => (
  <div
    style={{
      paddingTop: "5px",
      paddingRight: "5px",
    }}
  >
    <Image priority src={RightArrowIcon} alt="RightArrowIcon" />
  </div>
);

export default RightArrow;
