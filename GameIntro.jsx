import React from "react";
import { Link } from "react-router-dom";

const GameIntro = () => (
  <div className="text-center p-4">
    <h1 className="text-2xl font-bold">🔥 Fire Safety Escape Game 🔥</h1>
    <p>You are trapped in a burning building! Make the right choices to escape safely.</p>
    <Link to="/game" className="bg-blue-500 text-white px-4 py-2 rounded">Start Game</Link>
  </div>
);

export default GameIntro;
