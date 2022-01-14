export const budgetValue = (budgetSum: BudgetNew) => {
  return {
    type: "BUDGETS",
    payload: budgetSum,
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

export type Action = BudgetValueAction;
