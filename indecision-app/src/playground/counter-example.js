
const addOne = () => {
    count += 1;
    console.log('addOne');
    console.log(count);
    renderApp();
};

const minusOne = () => {
    count -= 1;
    console.log('minusOne');
    console.log(count);
    renderApp();
};

const reset = () => {
    count = 0;
    console.log('reset');
    console.log(count);
    renderApp();
};



let count = 0;

// Mounting the template
const appRoot = document.getElementById('app');


const renderApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderApp();