

export const budgetValue = (budgetSum:BudgetValues) => {
    return {
      type: 'BUDGETS',
      payload: budgetSum,
    }
  }

  export type BudgetValues = {
      type: "BUDGETS"
      payload: [],
  }

  