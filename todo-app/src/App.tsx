import { useMemo, useState } from "react";

import "./App.css";
import Counter from "./components/Counter/Counter";

function App() {
  const [initialCount, setInitialCount] = useState<number>(0);

  const initialCountDiv = useMemo(
    () => (
      <div style={{ marginBottom: 20 }}>
        <label style={{ fontWeight: "bold" }}>Initial Count</label>
        <input
          type="number"
          style={{ width: 30, marginLeft: 20 }}
          onChange={(e: any) => setInitialCount(parseInt(e.target.value))}
        />
      </div>
    ),
    []
  );

  return (
    <div className="App">
      {initialCountDiv}
      <Counter initialCount={initialCount} />
    </div>
  );
}

export default App;
