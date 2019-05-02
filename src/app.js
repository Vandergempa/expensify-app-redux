import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
});

store.dispatch(addExpense( {description: 'Water bill', amount: 1400, createdAt: 100 } ));
store.dispatch(addExpense( {description: 'Gas bill', amount: 2500, createdAt: 1000 } ));
store.dispatch(addExpense( {description: 'Rent', amount: 109500, createdAt: 100 } ));

const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));