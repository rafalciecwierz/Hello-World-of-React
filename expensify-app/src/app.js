import React from 'react'
import ReactDOM from 'react-dom'

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
    note: 'Less farts, more cakes'
}));

store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


// COMPONENTS





// CSS STYLE
import 'normalize.css/normalize.css'
import './styles/styles.scss'

ReactDOM.render(<AppRouter />, document.getElementById('app'));