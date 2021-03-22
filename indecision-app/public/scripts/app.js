'use strict';

console.log("This is react app");

var app = {
    title: 'Indecision',
    subtitle: 'This app will make every decision easy!',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    if (option.trim()) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    appRender();
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    appRender();
};

var onMakeDecision = function onMakeDecision() {
    if (app.options.length > 0) {
        var number = Math.floor(Math.random() * app.options.length);
        var option = app.options[number];
        alert(option);
    } else {
        alert("Put some options first.");
    }
};

// Mounting the template
var appRoot = document.getElementById('app');
var appRender = function appRender() {
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
            app.options && app.options.length > 0 ? "Here are your option" : "No options"
        ),
        React.createElement(
            'button',
            { disabled: app.options.length == 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (item, index) {
                return React.createElement(
                    'li',
                    { key: index },
                    item
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

appRender();
