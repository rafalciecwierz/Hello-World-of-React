import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';

// Config
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();



store.dispatch(addExpense({
    description: 'Water bill',
    amount: 1000,
    note: 'Why so high?!'
}));

store.dispatch(addExpense({
    description: 'Gas bill',
    amount: 800,
    createdAt: 1000,
    note: 'Less farts, more cakes'
}));

store.dispatch(addExpense({
    description: 'Rent',
    amount: 10950,
    note: 'Less farts, more cakes'
}));

store.dispatch(addExpense({
    description: 'Media',
    amount: 1200,
    note: 'Mobile, TV, Netflix',
    createdAt: 500
}));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);


// COMPONENTS
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

// CSS STYLE
import 'normalize.css/normalize.css'
import './styles/styles.scss'

ReactDOM.render(jsx, document.getElementById('app'));