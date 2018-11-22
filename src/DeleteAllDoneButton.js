import React, { Component } from 'react';
import {connect} from './ToDoListStore'

class DeleteAllDoneButton extends Component {
    render() {
        const { handleClick } = this.props;
        return (
            <button onClick={() => handleClick()}>Delete All Done</button>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAllDoneButton);

function mapDispatchToProps(dispatch){
    return {
        handleClick: () => dispatch({type: 'DELETE_ALL_DONE'})};
}

function mapStateToProps(state) {
    return { };
}
