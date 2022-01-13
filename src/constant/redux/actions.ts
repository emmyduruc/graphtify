export const budgetValue = (budgetSum: string | undefined) => {
  return {
    type: "BUDGETS",
    payload: budgetSum,
  };
};

export type BudgetValues = {
  type: "BUDGETS";
  payload: string;
};
