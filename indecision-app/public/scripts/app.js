"use strict";

console.log("This is react app");

// JSX - JavaScript XML
var template = React.createElement(
  "p",
  null,
  "Does this change?"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
