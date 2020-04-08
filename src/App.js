import React from "react";
import Activity from "./components/activity";
import CatList from "./components/catList";
import AddCat from "./components/addCat";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Activity></Activity> */}
        <CatList></CatList>
        <AddCat />
      </header>
    </div>
  );
}

export default App;
