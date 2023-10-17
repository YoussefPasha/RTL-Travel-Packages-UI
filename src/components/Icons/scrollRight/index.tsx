import Image from "next/image";
import RightArrow from "@SVGs/scrollRight.svg";

interface ScrollRightProps {
  width?: number | undefined; // Replace 'number' with the actual type of 'width' prop
  height?: number | undefined; // Replace 'number' with the actual type of 'height' prop
}

const ScrollRight = ({ width, height }: ScrollRightProps) => (
  <div
    style={{
      paddingTop: "5px",
      paddingRight: "5px",
    }}
  >
    <Image
      priority
      width={width}
      height={height}
      src={RightArrow}
      alt="RightArrow"
    />
  </div>
);

export default ScrollRight;
