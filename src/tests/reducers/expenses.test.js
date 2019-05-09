import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expense if ID is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add expense to state', () => {
    const expense = {
        id: '1',
        description: 'Gum',
        note: '',
        amount: 200,
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('Should edit expense with a valid ID', () => {
    const updates = {
        id: '1',
        description: 'Playstation',
        note: '',
        amount: 2000,
        createdAt: 0
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([updates, expenses[1], expenses[2]]);
});

test('Should not edit expense with an invalid ID', () => {
    const updates = {
        id: '1',
        description: 'Playstation',
        note: '',
        amount: 2000,
        createdAt: 0
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: 100,
        updates
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('Should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});