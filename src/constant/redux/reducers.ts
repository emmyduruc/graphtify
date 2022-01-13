import { BudgetValues } from "./actions";
import { budgetState } from "./reduxTypes";

const initState = {
  budgets: [],
};

const budgetReducer = (state = initState, action: BudgetValues) => {
  switch (action.type) {
    case "BUDGETS": {
      const currentValues = action.payload;
      const existingBudgets = state.budgets;
      // if (existingBudgets.length === 0) {
      //   return existingBudgets.reduce((a, b) => a + b, 0);
      // }
      return {
        ...state,
        budgets: [...existingBudgets, currentValues],
      };
    }
    default:
      return state;
  }
};

export default budgetReducer;
