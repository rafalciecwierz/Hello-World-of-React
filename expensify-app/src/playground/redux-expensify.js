












store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});



const expenseOne = store.dispatch(addExpense({
    description: 'Rent',
    amount: 500,
    createdAt: 1000
}));

const expenseTwo = store.dispatch(addExpense({
    description: 'Coffee',
    amount: 300,
    note: 'It was delicious',
    createdAt: 200
}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));

// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-215));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(500));
// store.dispatch(setEndDate());


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

