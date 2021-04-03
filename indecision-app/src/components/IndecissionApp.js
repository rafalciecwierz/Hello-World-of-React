import React from 'react'

// COMPONENTS
import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    };


    handleDeleteOptions = () => {
        this.setState(() => ({ options: []}))
    };

    hanldeClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }

    handlePick = () => {
        const number = Math.floor(Math.random() * this.state.options.length);
        this.setState(() => ({
            selectedOption: this.state.options[number]
        }) )
        // alert(this.state.options[number])
    };

    handleAddOption = (option) => {

        if(!option){
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option),
        }))
    };

    handleDeleteOption = (option) => {
        this.setState( (prevState) => ({
            options: prevState.options.filter((opt) => opt !== option ),
        }));
    };

    //Lifecycle methdods
    componentDidMount(){
        try{
            const options = JSON.parse(localStorage.getItem("options"));
            if(options) this.setState(() => ({ options }));
        } catch(e){
            // Stay cool 8-)
        }
    };

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    };

    render(){
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0 ? false : true}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        handleDelete={this.hanldeClearSelectedOption}
                    />
                </div>
            </div>
        )
    }
}

