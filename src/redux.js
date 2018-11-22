    function createStore (initialState, reducer) {

        let state = initialState;
        const reducer1 = reducer;
        let subscribers = [];

        function getState() {
            return state;
        }

        function dispatch(action) {
            state = reducer1(state, action);
            notify();
        }

        function subscribe (subscriber) {
            subscribers.push(subscriber);

            return () => unsubscribe(subscriber);
        }

        function unsubscribe (subscriber) {
            subscribers = subscribers.filter(item => item !== subscriber);
        }

        function notify() {
            subscribers.forEach(subscriber => {
                subscriber(state);
            })
        }

        return {
            getState,
            dispatch,
            subscribe,
            unsubscribe
        }
    }



export default createStore
