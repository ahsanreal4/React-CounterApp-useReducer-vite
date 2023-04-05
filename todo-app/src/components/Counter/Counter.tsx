import { useMemo, useReducer } from "react";
import { ICounterActions, ICounterProps } from "./Counter.types";
import { reducer } from "./state/counter.reducer";

const Counter: React.FC<ICounterProps> = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });

  const buttons = useMemo(
    () => (
      <>
        <button onClick={() => dispatch({ type: ICounterActions.INCREMENT })}>
          Add
        </button>
        <button onClick={() => dispatch({ type: ICounterActions.DECREMENT })}>
          Subtract
        </button>
        <button
          onClick={() =>
            dispatch({
              type: ICounterActions.RESET,
              payload: { count: initialCount },
            })
          }
        >
          Reset
        </button>
      </>
    ),
    [initialCount]
  );

  return (
    <>
      {buttons}
      <p>{state.count}</p>
    </>
  );
};

export default Counter;
