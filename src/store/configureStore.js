import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Store creation
 export default () => {  
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer
        }),
        // We need the following line to setup redux to accept functions as arguments to dispatch 
        // /firebase/ and to be able to use the devtools as well.
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
 };

