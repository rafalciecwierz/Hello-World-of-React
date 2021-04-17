import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';

import ExpenseListitem from './ExpenseListItem'


const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense)=> (
            <ExpenseListitem key={expense.id} {...expense}/>
        ))}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);

