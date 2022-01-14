import { Action, BudgetNew, BudgetValues } from "./actions";
import { budgetState } from "./reduxTypes";

type ForInit = {
  budgets: BudgetNew[];
};

const initState: ForInit = {
  budgets: [],
};

const budgetReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case "BUDGETS": {
      const existingBudgets = state.budgets;
      return {
        ...state,
        budgets: [...existingBudgets, action.payload],
      };
    }
    default:
      return state;
  }
};

export default budgetReducer;
