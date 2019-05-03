import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should render ExpensesSummary with 1 expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={200} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary with multiple expenses correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={100} expensesTotal={200223} />);
    expect(wrapper).toMatchSnapshot();
});