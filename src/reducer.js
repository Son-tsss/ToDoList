export default  (state, action) => {
    switch (action.type) {

        case 'ADD':
            return {
                tasks: [...state.tasks, {
                task: action.task,
                number: state.length > 0 ? state[state.length - 1].number + 1 : 1,
                done: false
                }],
                inputText: ""
            };

        case 'CHECKED':
            return  {
                tasks: state.tasks.map((task) => {
                    if(task.number === action.number)
                        task.done = !task.done;
                    return task;
                }),
                inputText: state.inputText
            };

        case 'CHANGED_INPUT_TEXT':
            return  {
                tasks: [...state.tasks],
                inputText: action.inputText
            };

        case 'DELETE':
            return {
                tasks: state.tasks.filter( task => task.number !== action.number ),
                inputText: state.inputText
            };

        case 'DELETE_ALL_DONE':
            return {
                tasks: state.tasks.filter( task => !task.done ),
                inputText: state.inputText
            };
    }
};