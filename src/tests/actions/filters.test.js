import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('Should set sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORTBY_AMOUNT'
    });
});

test('Should set sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORTBY_DATE'
    });
});

test('Should generate default text action object', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SETTEXT_FILTER',
        text: ""
    });
});

test('Should generate text action object', () => {
    const text = 'Gas bill'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SETTEXT_FILTER',
        text: text
    });
});