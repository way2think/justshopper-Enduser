import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <>
      <div id="search-wrapper">
        <img src="../images/Search.png" alt="" width={25} height={25} />
        <input type="text" id="search" placeholder="Search..." />
      </div>
    </>
  );
};

export default SearchBar;
