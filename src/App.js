import React from "react";
import "./App.css";
import StarRating from "./components/StarRating";

function App() {
  return (
    <div className="App">
      <StarRating numOfStars={4} sizeOfStars={75} />
    </div>
  );
}

export default App;
