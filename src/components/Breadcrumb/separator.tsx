import React, { CSSProperties } from "react";
import Image from "next/image";
import separator from "@SVGs/separator.svg";

interface SeparatorProps {
  style?: CSSProperties;
}

const Separator = ({ style }: SeparatorProps) => (
  <div>
    <Image
      style={style}
      width={15}
      height={15}
      priority
      src={separator}
      alt="EXPAND"
    />
  </div>
);

export default Separator;
