import Image from "next/image";
import ICON from "@SVGs/SelectOption.svg";

const SelectOption = () => (
  <div
    style={{
      paddingTop: "5px",
      paddingRight: "5px",
    }}
  >
    <Image priority src={ICON} alt="ICON" />
  </div>
);

export default SelectOption;
