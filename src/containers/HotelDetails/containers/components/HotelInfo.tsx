import Image from "next/image";
import React from "react";
import HotelImage from "@IMAGES/hotel.png";
import { Rating, Typography } from "@mui/material";

const HotelInfo = () => {
  return (
    <div style={{ display: "flex" }}>
      <Image
        style={{ borderRadius: "12px", marginRight: "7%" }}
        width={145}
        height={105}
        src={HotelImage}
        alt={"HotelImage"}
      />
      <div>
        <Rating
          readOnly
          name="half-rating"
          defaultValue={2.5}
          precision={0.5}
          size="small"
        />
        <Typography variant="subtitle2" fontWeight={"700"}>
          Golden Tulip Bahrain
        </Typography>
        <Typography
          color={"rgba(17, 36, 64, 0.82)"}
          variant="subtitle2"
          fontWeight={"400"}
        >
          Istanbul fateh, atnbul mall
        </Typography>
        <Typography variant="subtitle2" fontWeight={"400"}>
          45 km from the center
        </Typography>
      </div>
    </div>
  );
};

export default HotelInfo;
