import React, { useState } from "react";
import "./Search.css"; // Import CSS file

import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleNavClose = () => {
    setIsSearchOpen(false);
  };

  return (
    <nav className={`nav ${isSearchOpen ? "openSearch" : ""} `}>
      <img
        src="../images/Search.png"
        alt=""
        width={25}
        height={25}
        onClick={handleSearchClick}
        className="search-icon "
        style={{ display: isSearchOpen ? "none" : "block" }}
      />

      <div className="search-box">
        <input type="text" placeholder="Search here..." className="input" />
        <HighlightOffIcon
          style={{
            display: !isSearchOpen ? "none" : "block",
          }}
          onClick={handleNavClose}
          className="cancelicon"
        />
      </div>
    </nav>
  );
};

export default Search;
