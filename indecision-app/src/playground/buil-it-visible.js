

const appRoot = document.getElementById('app');

let visibility = false;

const onTextToggle = () => {
    visibility = !visibility;
    appRender();
}

const appRender = () => {

    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onTextToggle}>
             {visibility ? 'Hide details' : 'Show details'}
            </button>
            {
                visibility && <p>Hey. These are some details you can now see!</p>
            }
        </div>
    );

    ReactDOM.render(template, appRoot);
}

appRender();