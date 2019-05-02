import moment from 'moment';

//Filter reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SETTEXT_FILTER':
            return {
                ...state,
                text:action.text
            }
        case 'SORTBY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORTBY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default: 
            return state;
    }
}

export default filterReducer;
