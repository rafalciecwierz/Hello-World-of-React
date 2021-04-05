const MyWorkPage = (props) => (
    <div>
        <h2>A thing that I've done</h2>
        <p>This page is for the item with id of {props.match.params.id}</p>
    </div>
);

export default MyWorkPage;