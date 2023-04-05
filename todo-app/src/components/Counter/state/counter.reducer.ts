import { IAction } from "../../../common/types/action";
import { ICounterState, ICounterActions } from "../Counter.types";

export function reducer(state: ICounterState, action: IAction) {
  switch (action.type) {
    case ICounterActions.INCREMENT:
      return { count: state.count + 1 };
    case ICounterActions.DECREMENT:
      return { count: state.count - 1 };
    case ICounterActions.RESET:
      const count: number = action.payload?.count ?? 0;
      return { count: (state.count = count) };
    default:
      return { count: state.count };
  }
}
