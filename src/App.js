import React from "react";
import ColorPicker from "./ColorPicker";
import "./App.css"; // Make sure to import the CSS for App component

function App() {
  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "pink",
    "teal",
    "cyan",
    "lime",
    "brown",
    "gray",
    "black",
    "maroon",
    "navy",
    "olive",
    "fuchsia",
    "aqua",
    "silver",
    "gold",
    "indigo",
    "violet",
    "magenta",
    "turquoise",
    "plum",
    "salmon",
    "coral",
    "lavender",
    "peru",
    "orchid",
    "sienna",
    "tan",
    "khaki",
    "chartreuse",
    "thistle",
    "crimson",
    "tomato",
    "royalblue",
    "darkgreen",
    "slategray",
    "chocolate",
    "firebrick",
    "steelblue",
    "seagreen",
    "darkorchid",
    "darkgoldenrod",
    "rosybrown",
    "cadetblue",
    "slateblue",
    "springgreen",
    "forestgreen",
    "powderblue",
    "darkviolet",
    "mediumturquoise",
    "mediumseagreen",
    "dodgerblue",
    "darkslategray",
    "saddlebrown",
    "mediumvioletred",
    "dimgray",
    "burlywood",
    "navajowhite",
    "lightcoral",
    "goldenrod",
    "greenyellow",
    "lightseagreen",
    "lightsteelblue",
    "palevioletred",
    "mediumaquamarine",
    "cadetblue",
  ];
  return (
    <div className="app-container">
      <h2>Color Picker</h2>
      <div className="color-picker-container">
        <ColorPicker colors={colors} />
      </div>
    </div>
  );
}

export default App;