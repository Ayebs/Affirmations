import React, { useState } from "react";
import style from "./Search.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleSearch = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={style.searchBar}>
      <input
        type="text"
        placeholder="Search..."
        className={`${style.searchInput} ${expanded ? style.expanded : ""}`}
      />
      <div className={style.searchIcon} onClick={toggleSearch}>
        <FaSearch />
      </div>
    </div>
  );
};

export default SearchBar;
