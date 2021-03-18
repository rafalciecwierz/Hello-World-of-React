console.log("This is react app")


// JSX - JavaScript XML
var template = React.createElement(
    "h1",
    { id: "someid" },
    "Hello world with old syntax"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);