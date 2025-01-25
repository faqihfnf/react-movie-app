import React, { useState } from "react";
import Search from "./components/Search";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="hero-banner" />
            <h1>
              Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle
            </h1>
          </header>
          <Search seacrhTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <h1 className="text-white">{searchTerm}</h1>
        </div>
      </div>
    </main>
  );
}
