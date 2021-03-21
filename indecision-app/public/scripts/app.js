'use strict';

console.log("This is react app");

var app = {
    title: 'Indecision',
    subtitle: 'This app will make every decision easy!',
    option: ['One', 'Two', 'Three']
};

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.option && app.option.length > 0 ? "Here are your option" : "No options"
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'This is list item'
        ),
        React.createElement(
            'li',
            null,
            'This is list item'
        )
    )
);

var addOne = function addOne() {
    count += 1;
    console.log('addOne');
    console.log(count);
    renderApp();
};

var minusOne = function minusOne() {
    count -= 1;
    console.log('minusOne');
    console.log(count);
    renderApp();
};

var reset = function reset() {
    count = 0;
    console.log('reset');
    console.log(count);
    renderApp();
};

var count = 0;

// Mounting the template
var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderApp();
