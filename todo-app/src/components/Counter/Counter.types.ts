export interface ICounterProps {
  initialCount: number;
}

export interface ICounterState {
  count: number;
}

export const ICounterActions = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
};
