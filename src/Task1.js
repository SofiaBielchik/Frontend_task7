import React from "react";
import Content from "./components/Content";
import Image from "./components/Image";
import "./styles/style.css";

function App() {
  return (
    <div>
      <h1>Бєльчик Софія Олександрівна</h1>
      <div className="layout">
        <Content />
        <Image src="sumy.jpg" alt="Суми" />
      </div>
    </div>
  );
}

export default App;

