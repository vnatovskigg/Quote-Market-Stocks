import React, { useState } from "react";
import Quote from "./Stock-quote";
import "./styles/App.css";

function Screen() {
  return (
    <div id="stocks-screen">
      <Quote ticker="SPOT" />
      <Quote ticker="ATVI" />
      <Quote ticker="KO" />
      <Quote ticker="AAPL" />
      <Quote ticker="DIS" />
    </div>
  );
}

export default Screen;
