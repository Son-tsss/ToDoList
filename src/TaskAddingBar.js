import React, { Component } from 'react';
import {connect} from './ToDoListStore'

class TaskAddingBar extends Component {
    constructor(props){
        super(props);
        this.state = { inputText: "" };
    }

    render() {
        const { handleClick } = this.props;
        return (
            <div>
                <input type="text" onChange={this.handleChanged} value={this.state.inputText}/>
                <button onClick={() => handleClick(this.state.inputText)}>Add</button>
            </div>
        );
    }

    handleChanged = (e) => {
        this.setState({inputText: e.target.value});
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskAddingBar);

function mapDispatchToProps(dispatch){
    return {
        handleClick: (task) => dispatch({type: 'ADD', task: task})
    }
};

function mapStateToProps(state) {
    return { };
}
