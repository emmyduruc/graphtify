import { BudgetNew } from "../../assets/types";

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
