import React, { Component } from 'react';
import data from './data';
import reducer from './reducer';
import createStore from './redux';

const ToDoListContext = React.createContext();
let store;

class ToDoListStore extends Component {
    constructor(props){
        super(props);
        store = createStore({tasks: [...data.tasks], inputText: ""}, reducer);
        this.store = store;
    }

    render() {
        return (
            <ToDoListContext.Provider value={this.store}>
                {this.props.children}
            </ToDoListContext.Provider>
        );
    }
}

function connect(mapStateToProps, mapDispatchToProps) {
    return function(Component){
        return class ToDoListItem extends Component {
            render() {
                return (
                    <ToDoListContext.Consumer>
                        {store => (
                            <Component
                                {...this.props}
                                {...mapStateToProps(store.getState())}
                                {...mapDispatchToProps(store.dispatch)}
                            />
                        )}
                    </ToDoListContext.Consumer>
                );
            }

            componentDidMount() {
                this.unsubscribe = store.subscribe(this.handleChange.bind(this));
            }

            componentWillUnmount() {
                this.unsubscribe();
            }

            handleChange() {
                this.forceUpdate();
            }
        }
    }
}

export {
    ToDoListStore,
    ToDoListContext,
    connect
};

