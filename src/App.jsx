import React, { useState } from "react";
import Search from "./components/Search";
import Header from "./components/Header";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <Header />
          <Search seacrhTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <h1 className="text-white">{searchTerm}</h1>
        </div>
      </div>
    </main>
  );
}
