// Export a stateless functional component
// description, amount, createdAt

const ExpenseListItem = ({ description, amount, createdAt }) => (
    <div>
        <h3>Description: {description}.</h3>
        <p>
            Amount: {amount}. CratedAt: {createdAt}
        </p>
    </div>
)

export default ExpenseListItem;

