import Image from "next/image";
import LecftIcon from "@SVGs/scrollLeft.svg";

const ScrollLeft = () => (
  <div
    style={{
      paddingTop: "5px",
      paddingRight: "5px",
    }}
  >
    <Image priority src={LecftIcon} alt="ScrollLeft" />
  </div>
);

export default ScrollLeft;
