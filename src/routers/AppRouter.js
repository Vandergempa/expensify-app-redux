import React from 'react';
import AddExpense from '../components/AddExpense'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header/>
    </div>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpense} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;