import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import '../node_modules/normalize.css/normalize.css'
import './styles/styles.scss';
import '../node_modules/react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));