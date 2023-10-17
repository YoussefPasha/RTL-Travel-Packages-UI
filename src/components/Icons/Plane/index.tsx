import Image from "next/image";
import MLOGO from "@SVGs/PlaneIcon.svg";

interface PlanProps {
  width?: number; // Replace 'number' with the actual type of 'width' prop
  height?: number; // Replace 'number' with the actual type of 'height' prop
}

const Plan: React.FC<PlanProps> = ({ width, height }) => (
  <div>
    <Image width={width} height={height} priority src={MLOGO} alt="MLOGO" />
  </div>
);

export default Plan;
