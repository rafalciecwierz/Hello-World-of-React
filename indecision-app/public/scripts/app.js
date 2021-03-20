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

var user = {
    name: 'Rafcio C.',
    age: 30,
    location: 'Poznań'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age > 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
