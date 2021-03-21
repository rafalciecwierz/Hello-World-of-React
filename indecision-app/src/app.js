console.log("This is react app")


const app =  {
    title: 'Indecision',
    subtitle: 'This app will make every decision easy!',
    option: ['One', 'Two', 'Three']
};


// JSX - JavaScript XML
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{ ( app.option && app.option.length > 0 )  ? "Here are your option" : "No options" }</p>
        <ol>
            <li>This is list item</li>
            <li>This is list item</li>
        </ol>
    </div>
);

let count = 0;

const addOne = () => {
    count += 1;
    console.log('addOne');
    console.log(count);
};

const minusOne = () => {
    count -= 1;
    console.log('minusOne');
    console.log(count);
};

const reset = () => {
    count = 0;
    console.log('reset');
    console.log(count);
};

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);



// Mounting the template
const appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);