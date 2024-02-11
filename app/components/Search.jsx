import React from "react";

function Search() {
  return (
    <form>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter a location..."
          className="input w-full max-w-xs mb-8 mt-4"
        />
        <button className="btn mb-8 mt-4 ml-4" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
