import React from "react";

export default function Search({ seacrhTerm, setSearchTerm }) {
  return (
    <div className="search">
      <div>
        <img src="./search.svg" alt="search-icon" />
        <input type="text" placeholder="Search" value={seacrhTerm} onChange={(e) => setSearchTerm(e.target.value)} className="search-input" />
      </div>
    </div>
  );
}
