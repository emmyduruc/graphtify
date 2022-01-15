import { ForInit } from "./reducers";

export const budgetValue = (budgetSum: BudgetNew) => {
  return {
    type: "BUDGETS",
    payload: budgetSum,
  };
};
export const sumNumbers = (sumSum: number) => {
  return {
    type: "SUMUP",
    payload: sumSum,
  };
};
export type BudgetNew = {
  channelName: string;
  channelValue: string;
};
export type BudgetValues = {
  type: "BUDGETS";
  payload: string;
};

type BudgetValueAction = {
  type: "BUDGETS";
  payload: BudgetNew;
};
type Sum = { 
  type: "SUMUP",
  payload: number;
}
export type RootState = {
  budgetReducer: ForInit;
};

export type Action = BudgetValueAction|Sum;
