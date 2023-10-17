import Image from "next/image";
import ICON from "@GIF/okay.gif";

const HandGif = () => (
  <div
    style={{
      paddingTop: "5px",
      paddingRight: "5px",
    }}
  >
    <Image
      width={67}
      height={67}
      unoptimized={true}
      priority
      src={ICON}
      alt="ICON"
    />
  </div>
);

export default HandGif;
