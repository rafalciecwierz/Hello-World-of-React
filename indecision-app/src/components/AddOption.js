import React from 'react'

export default class AddOption extends React.Component {

    state = {
        error: undefined
    }


    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        if(error) {
            this.setState(() => ({ error }));
        } else {
            e.target.elements.option.value = '';
            this.state.error = undefined;
        }
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}
