import React, { useState } from "react";
import Task1 from "./Task1"; 
import Task2 from "./Task2"; 

function App() {
  const [currentTask, setCurrentTask] = useState(1);

  return (
    <div>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <button onClick={() => setCurrentTask(1)}>ЛР 4</button>
        <button onClick={() => setCurrentTask(2)}>Галерея товарів</button>
      </div>
      {currentTask === 1 ? <Task1 /> : <Task2 />}
    </div>
  );
}

export default App;

