import Image from "next/image";
import WALLET from "@SVGs/wallet.svg";

const Wallet = () => (
  <div
    style={{
      paddingTop: "5px",
      paddingRight: "5px",
    }}
  >
    <Image priority src={WALLET} alt="WALLET" />
  </div>
);

export default Wallet;
