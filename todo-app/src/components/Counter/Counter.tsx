import { useMemo, useReducer } from "react";
import { ICounterActions, ICounterProps } from "./Counter.types";
import { reducer } from "./state/counter.reducer";

const Counter: React.FC<ICounterProps> = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });

  const performStateActions = (action: string) => {
    dispatch({ type: action });
  };

  const buttons = useMemo(
    () => (
      <>
        <button onClick={() => performStateActions(ICounterActions.INCREMENT)}>
          Add
        </button>
        <button onClick={() => performStateActions(ICounterActions.DECREMENT)}>
          Subtract
        </button>
        <button onClick={() => performStateActions(ICounterActions.RESET)}>
          Reset
        </button>
      </>
    ),
    []
  );

  return (
    <>
      {buttons}
      <p>{state.count}</p>
    </>
  );
};

export default Counter;
