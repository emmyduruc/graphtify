export type Props = {
  id: string;
  name: string;
};
export type RowChannelProps = {
  rowChannel: Props;
};
export type BudgetNew = {
  channelName: string;
  channelValue: string;
};
export type BudgetValues = {
  type: "BUDGETS";
  payload: string;
};

export type BudgetValueAction = {
  type: "BUDGETS";
  payload: BudgetNew;
};
export type Sum = {
  type: "SUMUP";
  payload: number;
};
export type RootState = {
  budgetReducer: ForInit;
};
export type ForInit = {
  budgets: BudgetNew[];
  sum: number;
};
export type budgetState = {
  budgets: [];
};
export type Action = BudgetValueAction | Sum;
