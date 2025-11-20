import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setisMouseOver] = useState(false);
  function handeClick() {
    setHeadingText("Submited");
  }
  function onOver() {
    setisMouseOver(true);
  }
  function onOut() {
    setisMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        // onMouseOver={(e) => (e.target.style.background = "black")}
        // onMouseOut={(e) => (e.target.style.background = "white")}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handeClick}
        onMouseOver={onOver}
        onMouseOut={onOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
