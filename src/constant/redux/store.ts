import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import budgetReducer from "./reducers";

const initState = { budgetReducer: { budgets: [] } };
const rootReducers = combineReducers({ budgetReducer });

const storeFactory = () => {
  const middleware = [thunk];

  const reduxStore = createStore(
    rootReducers,
    initState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return reduxStore;
};

export default storeFactory;
