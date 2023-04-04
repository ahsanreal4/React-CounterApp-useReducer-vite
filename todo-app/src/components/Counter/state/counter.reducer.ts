import { IAction } from "../../../common/types/action";
import { ICounterState, ICounterActions } from "../Counter.types";

export function reducer(state: ICounterState, action: IAction) {
  switch (action.type) {
    case ICounterActions.INCREMENT:
      return { count: state.count + 1 };
    case ICounterActions.DECREMENT:
      return { count: state.count - 1 };
    case ICounterActions.RESET:
      return { count: (state.count = 0) };
    default:
      return { count: state.count };
  }
}
