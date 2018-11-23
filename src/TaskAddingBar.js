import React, { Component } from 'react';
import {connect} from './ToDoListStore'

class TaskAddingBar extends Component {
    render() {
        const { handleClick, inputText, handleChanged } = this.props;

        return (
            <div>
                <input id="ttt" type="text" onChange={(e) => handleChanged(e.target.value)} value={inputText}/>
                <button onClick={() => handleClick(inputText)}>Add</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskAddingBar);

function mapDispatchToProps(dispatch){
    return {
        handleClick: (task) => dispatch({type: 'ADD', task: task}),
        handleChanged: (inputText) => dispatch({type: 'CHANGED_INPUT_TEXT', inputText: inputText})
    }
};

function mapStateToProps(state) {
    return {
        inputText: state.inputText
    };
}
