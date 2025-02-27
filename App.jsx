import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameIntro from "./components/GameIntro";
import Game from "./components/Game";
import Success from "./components/Success";
import GameOver from "./components/GameOver";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<GameIntro />} />
      <Route path="/game" element={<Game />} />
      <Route path="/success" element={<Success />} />
      <Route path="/gameover" element={<GameOver />} />
    </Routes>
  </Router>
);

export default App;