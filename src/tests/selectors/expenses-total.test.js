import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const expenses = [];
    const result = getExpensesTotal(expenses);
    expect(result).toEqual(0);
});

test('Should correctly add up a single expense', () => {
    const expenses = [{
        id: '1',
        description: 'Gum',
        note: '',
        amount: 200,
        createdAt: 0
    }];
    const result = getExpensesTotal(expenses);
    expect(result).toEqual(200);
});

test('Should correctly add up multiple expenses', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toEqual(15200);
});