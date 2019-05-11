import React from 'react';
import createHistory from 'history/createBrowserHistory';
import AddExpense from '../components/AddExpense'
import LoginPage from '../components/LoginPage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'

export const history = createHistory();

const AppRouter = () => (
    // Instead of using browserrouter which already has the history built in, we use router 
    // and pass our own history in
    <Router history={history}>
    <div>
        <Switch>
            <Route path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
            <PrivateRoute path="/create" component={AddExpense} />
            <PrivateRoute path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </Router>
);

export default AppRouter;