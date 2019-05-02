import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListitem } from '../../components/ExpenseListitem';
import expenses from '../fixtures/expenses';

test('Should render a single ExpenseListitem', () => {
    const wrapper = shallow(<ExpenseListitem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});