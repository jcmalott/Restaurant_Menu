import React from "react";

const SearchBar = () => {
  return(
    <div className="searchBar">
      <div className="ui right aligned category search">
        <div className="ui icon input">
          <input className="prompt" type="text" placeholder="Food Item Search"/>
          <i className="search icon"/>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
