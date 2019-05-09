//Expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
// spreading operators can be used instead of concat so that the array is not reused
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(( expense ) => {
                return expense.id !== action.id
            })
        case 'EDIT_EXPENSE':
            return state.map(( expense ) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            })
        case 'SET_EXPENSES':
        return action.expenses;
        default: 
            return state;
    }
};

export default expensesReducer;