import { createStore } from 'redux';

// Action generators instead of inline action objects (prevent typos)!!
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT_COUNT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT_COUNT',
    decrementBy
});

const setCount = ({ count = 1 } = {}) => ({
    type: 'SET_COUNT',
    count
});

const resetCount = () => ({
    type: 'RESET_COUNT',
});

//Reducers

const countReducer = (state = { count:0 }, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT_COUNT':
            return {
                count: state.count - action.decrementBy
        }
        case 'SET_COUNT':
        return {
            count: action.count
    }
        case 'RESET_COUNT':
            return {
                count: 0
        }
        default:
            return state;
    }
}

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

//These are the actions

store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch({
//     type: 'INCREMENT_COUNT',
//     incrementBy: 5
// });

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 20 }));

store.dispatch(setCount({ count: 100 }));

