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

export type BUDGETVALUEACTION = {
  type: "BUDGETS";
  payload: BudgetNew;
};
export type SUM = {
  type: "SUMUP";
  payload: number;
};
export type MEDIATEXT = {
  type: "MEDIAPLANTEXT";
  payload: string;
};
export type SAVEDBUDGETS = {
  type: "SAVEDBUDGETS";
  payload: BudgetNew;
};
export type RootState = {
  budgetReducer: ForInit;
};
export type ForInit = {
  budgets: BudgetNew[];
  sum: number;
  savedBudgets: BudgetNew[];
};
export type budgetState = {
  budgets: [];
};
export type Action = BUDGETVALUEACTION | SUM | SAVEDBUDGETS | MEDIATEXT;
