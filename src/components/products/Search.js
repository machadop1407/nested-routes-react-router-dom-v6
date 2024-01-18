import React from "react";

function Search() {
  return (
    <div>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="What are you looking for?"
          />
          <button type="submit" className="searchButton">
            &#128270;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
