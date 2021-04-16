import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expenses";
import filersReducer from "../reducers/filters";

export default () => {
	// Store creation
	const store = createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filersReducer,
		})
	);

    return store;
};
