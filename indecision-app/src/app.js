
class IndecisionApp extends React.Component {
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}


class Action extends React.Component {

    handlePick(){
        alert('handle pick')
    }

    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {

    constructor(props){
        super(props);
        this.onRemoveOptions = this.onRemoveOptions.bind(this);
    }

    onRemoveOptions(){
        console.log(this.props.options)
        alert("options removed");
    }

    render(){
        return (
            <div>
                <button onClick={this.onRemoveOptions}>Remove all</button>
                <p>These are your options</p>
                {this.props.options.map((option, index) => <Option key={index} option={option} />)}
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <p>{this.props.option}</p>
        );
    }
}

class AddOption extends React.Component {
    onFormSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option){
            alert(`Option ${option} added`);
        }
        e.target.elements.option.value = '';
    }
    render(){
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));