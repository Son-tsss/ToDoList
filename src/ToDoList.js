import React, { Component } from 'react';
import ToDoListItem from './ToDoListItem';
import {connect}  from './ToDoListStore'

class ToDoList extends Component {
    render() {
        const listItems = this.props.store.map((item) =>
            <ToDoListItem key={item.number} {...item}/>
        );

        return (
            <div>
                {listItems}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

function mapDispatchToProps(dispatch){
    return { }
}

function mapStateToProps(state) {
    return {
        store: state.tasks
    };
}

