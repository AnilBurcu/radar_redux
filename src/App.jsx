import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <div className="view-buttons">
        <button>Harita Görünümü</button>
        <button>Liste Görünümü</button>
      </div>
    </div>
  );
};

export default App;
