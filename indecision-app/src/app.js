console.log("This is react app")


const app =  {
    title: 'Indecision',
    subtitle: 'This app will make every decision easy!',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option.trim()){
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    appRender();
};

const onRemoveAll = () => {
    app.options = [];
    appRender();
}

const onMakeDecision = () => {
    if(app.options.length > 0) {
        const number = Math.floor(Math.random() * app.options.length);
        const option = app.options[number];
        alert(option);
    } else {
        alert("Put some options first.")
    }
}



// Mounting the template
const appRoot = document.getElementById('app');
const appRender = () => {
    // JSX - JavaScript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{ ( app.options && app.options.length > 0 )  ? "Here are your option" : "No options" }</p>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((item, index) => <li key={index}>{item}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

appRender();