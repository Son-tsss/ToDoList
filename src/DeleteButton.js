import React, { Component } from 'react';
import {connect} from './ToDoListStore'

class DeleteButton extends Component {
    render() {
        const { number, handleClick } = this.props;
        return (
            <button onClick={() => handleClick(number)}>Delete</button>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);

function mapDispatchToProps(dispatch){
    return{
        handleClick: (number) => dispatch({type: 'DELETE', number: number})}
}

function mapStateToProps(state) {
    return { };
}
