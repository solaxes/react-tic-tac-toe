import React, { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="border border-blue-200 w-20 h-20"
      onClick={onSquareClick}
    >
      <span className="text-3xl font-bold">{value}</span>
    </button>
  );
}

export default Square;
