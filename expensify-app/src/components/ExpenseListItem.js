// Export a stateless functional component
// description, amount, createdAt
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>Description: {description}.</h3>
        </Link>
        <p>
            Amount: {amount}. CratedAt: {createdAt}
        </p>
    </div>
)

export default ExpenseListItem;

