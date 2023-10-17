import Image from "next/image";
import SEARCH from "@SVGs/SearchIcon.svg";

const Search = () => (
  <div
    style={{
      paddingTop: "5px",
      paddingRight: "5px",
    }}
  >
    <Image priority src={SEARCH} alt="SEARCH" />
  </div>
);

export default Search;
