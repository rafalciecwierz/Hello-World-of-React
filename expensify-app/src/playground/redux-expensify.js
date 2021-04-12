import { createStore, combineReducers } from 'redux';


// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TExT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE


// Expenses Reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filersReducer
    })
    );

console.log(store.getState());


const demoState = {
    expences: [{
        id: 'asdfgasdf',
        description: 'January Rent',
        note: 'This was the final payment form that address',
        amount: 54500,
        createdAt: 0
    }],
     filters: {
         text: 'rent',
         sortBy: 'ammount', //date or amount
         startDate: undefined,
         endDate: undefined
     }
}