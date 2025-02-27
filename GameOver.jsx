import React from "react";
import { Link } from "react-router-dom";

const GameOver = () => (
  <div className="text-center p-4">
    <h1 className="text-2xl font-bold text-red-500">💀 Game Over 💀</h1>
    <p>You didn't escape safely. Try again!</p>
    <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">Try Again</Link>
  </div>
);

export default GameOver;
