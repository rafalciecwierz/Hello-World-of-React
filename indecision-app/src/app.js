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

const user = {
    name: 'Rafcio C.',
    age: 30,
    location: 'Poznań'
};


function getLocation(location){
    if(location) {
        return <p>Location: {location}</p>
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {user.age > 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);


const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);