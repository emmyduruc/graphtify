import { Action, BudgetNew, BudgetValues } from "./actions";
import { budgetState } from "./reduxTypes";

export type ForInit = {
  budgets: BudgetNew[];
  sum: number;
};

const initState: ForInit = {
  budgets: [],
  sum: 0
};

const budgetReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case "BUDGETS": {
      const existingBudgets = state.budgets;
      const incomingChannel = action.payload;
      const incomingChannelName = incomingChannel
        ? incomingChannel.channelName
        : "";
      //const incomingName = incomingCountry ? incomingCountry.name : "";
      const livingBudgets = state.budgets.find((budget) => {
        if (incomingChannelName === budget.channelName) {
          return true;
        } else {
          return false;
        }
      });
      if (livingBudgets) {
        return state;
      } else {
        return {
          ...state,
          budgets: [...existingBudgets, action.payload],
        };
      }

      
    }
    case "SUMUP":{

    return{
      ...state,
      sum : action.payload
    }

    }

     
    default:
      return state;
  }
};

export default budgetReducer;
