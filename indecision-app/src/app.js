console.log("This is react app")


// JSX - JavaScript XML
var template = (
    <div>
        <h1>Does this change?</h1>
        <p>This is a paragraph</p>
        <ol>
            <li>This is list item</li>
            <li>This is list item</li>
        </ol>
    </div>
);


var templateTwo = (
    <div>
        <h1>Rafał Ciećwierz</h1>
        <p>Age: 29</p>
        <p>Location: Poznań</p>
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);