import React,{ useState } from "react";
import './App.css';
import KanbanBoard from "./components/KanbanBoard"

function App() {
  const [darkMode,setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="header-text">
      <h1>Kanban Board</h1>
      </div>
      <div className="mode">
      <button  className="mode-button" onClick={() =>  setDarkMode(!darkMode)}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
     </div>
      <KanbanBoard/>
    </div>
  );
}

export default App;
