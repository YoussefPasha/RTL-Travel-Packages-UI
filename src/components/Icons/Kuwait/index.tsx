import Image from "next/image";
import Icon from "@SVGs/Select/kuwait.svg";

const kuwait = () => (
  <div>
    <Image
      style={{ borderRadius: "50%" }}
      width={30}
      height={30}
      priority
      src={Icon}
      alt="EXPAND"
    />
  </div>
);

export default kuwait;
