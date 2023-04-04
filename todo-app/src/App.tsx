import { useState } from "react";

import "./App.css";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <Counter initialCount={0} />
    </div>
  );
}

export default App;
