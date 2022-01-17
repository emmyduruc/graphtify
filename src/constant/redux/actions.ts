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
export const savedBudgets = (budgetsSaved: BudgetNew) => {
  return {
    type: "SAVEDBUDGETS",
    payload: budgetsSaved,
  };
};
