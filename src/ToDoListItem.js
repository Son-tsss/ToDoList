import React, { Component } from 'react';
import DeleteButton from './DeleteButton';
import {connect} from "./ToDoListStore";

class ToDoListItem extends Component {
    render() {
        const { number, task, done, handleChecked} = this.props;

        let element;
        const checkboxId = 'checkbox_' + number;

        if(done) {
            element = <div >
                <input id={checkboxId} type="checkbox" onChange={() => handleChecked(number)} checked/>  //there is no need to duplicate code you can just padd checked={done} :)
                <label htmlFor={checkboxId}>{task}</label>
                <DeleteButton number={number}/>
            </div>
        }
        else{
            element = <div >
                <input id={checkboxId} type="checkbox" onChange={() => handleChecked(number)}/>
                <label htmlFor={checkboxId}>{task}</label>
                <DeleteButton number={number}/>
            </div>
        }

        return (
           element
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListItem);

function mapDispatchToProps(dispatch){
    return {
        handleChecked: (number) => dispatch({type: 'CHECKED', number: number})
    }
}

function mapStateToProps(state) {
    return { };
}
