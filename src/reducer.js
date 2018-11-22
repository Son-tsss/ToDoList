export default  (state, action) => {
    switch (action.type) {

        case 'ADD':
            return [...state, {
                task: action.task,
                number: state.length > 0 ? state[state.length - 1].number + 1 : 1,
                done: false
            }];

        case 'CHECKED':
            return state.map((task) => {
                if(task.number === action.number)
                    task.done = !task.done;
                return task;
            });

        case 'DELETE':
            debugger;
            return state.filter( task => task.number !== action.number );

        case 'DELETE_ALL_DONE':
            return state.filter( task => !task.done );
    }
};