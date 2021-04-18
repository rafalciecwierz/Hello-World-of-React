// Export a stateless functional component
// description, amount, createdAt
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
    <div>
        <h3>Description: {description}.</h3>
        <p>
            Amount: {amount}. CratedAt: {createdAt}
        </p>
        <button onClick={()=>{
            dispatch(removeExpense({ id }));
        }}>Remove</button>
    </div>
)

export default connect()(ExpenseListItem);

