"use strict";

console.log("This is react app");

// JSX - JavaScript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Does this change?"
    ),
    React.createElement(
        "p",
        null,
        "This is a paragraph"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "This is list item"
        ),
        React.createElement(
            "li",
            null,
            "This is list item"
        )
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Rafa\u0142 Cie\u0107wierz"
    ),
    React.createElement(
        "p",
        null,
        "Age: 29"
    ),
    React.createElement(
        "p",
        null,
        "Location: Pozna\u0144"
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
