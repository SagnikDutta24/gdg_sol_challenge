import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const [hasExtinguisher, setHasExtinguisher] = useState(false);
  const [doorIsSafe, setDoorIsSafe] = useState(false);
  const navigate = useNavigate();

  const handleEscape = () => {
    if (hasExtinguisher && doorIsSafe) navigate("/success");
    else navigate("/gameover");
  };

  return (
    <div className="text-center p-4">
      <h2 className="text-xl font-bold">🚪 You are in a smoke-filled room!</h2>
      <p>There's a fire extinguisher on the wall and a door ahead. Choose wisely.</p>
      <button onClick={() => setHasExtinguisher(true)} className="bg-green-500 text-white px-4 py-2 m-2">
        Pick up Fire Extinguisher
      </button>
      <button onClick={() => setDoorIsSafe(true)} className="bg-yellow-500 text-white px-4 py-2 m-2">
        Check the Door
      </button>
      <button onClick={handleEscape} className="bg-red-500 text-white px-4 py-2 m-2">
        Escape!
      </button>
    </div>
  );
};

export default Game;
