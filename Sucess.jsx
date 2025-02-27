import React from "react";
import { Link } from "react-router-dom";

const Success = () => (
  <div className="text-center p-4">
    <h1 className="text-2xl font-bold text-green-500">🎉 Congratulations! 🎉</h1>
    <p>You have safely escaped the building!</p>
    <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">Play Again</Link>
  </div>
);

export default Success;
