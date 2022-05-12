import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import { Home } from "./Components/Home";
import { Fav } from "./Components/Fav";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
     
      </Routes>
    </div>
  );
}

export default App;
