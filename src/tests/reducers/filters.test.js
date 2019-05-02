import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORTBY_AMOUNT' });
    expect(state.sortBy).toEqual('amount');
});

test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORTBY_DATE'}
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toEqual('date');
});

test('Should set text for filter state', () => {
    const text = "nemmindegy?"
    const state = filtersReducer(undefined, { type: 'SETTEXT_FILTER', text: text });
    expect(state.text).toEqual(text);
});

test('Should set startDate filter', () => {
    const startDate = moment(0);
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: startDate });
    expect(state.startDate).toEqual(startDate);
});

test('Should set endDate filter', () => {
    const endDate = moment(0);
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: endDate });
    expect(state.endDate).toEqual(endDate);
});