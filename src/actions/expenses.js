import uuid from 'uuid';
import database from '../firebase/firebase';
// action generators!
// export const addExpense = (
//     { 
//         description = '', 
//         note = '', 
//         amount = 0,
//         createdAt = 0 
//    } = {}
// ) => ({
//    type: 'ADD_EXPENSE',
//    expense: {
//        id: uuid(),
//        description,
//        note,
//        amount,
//        createdAt
//    }
// });

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

// Because we set up the middleware for redux thunk, now it is possible to return a function instead of
// an object:
export const startAddExpense = (expenseData = {}) => {
   // In this case we are going to return a function. The function gets called with dispatch.
   // This lets us use dispatch in the function.
   return (dispatch, getState) => {
      const uid = getState().auth.uid;
      // This method of defining default is the same as above:
      const {
         description = '', 
         note = '', 
         amount = 0,
         createdAt = 0 
      } = expenseData;
      const expense = { description, note, amount, createdAt };

      // HOW TO MAKE THE DATABASE PRIVATE FOR EVERY USER: first we add getState as an argument,
      // get the user id with getState().auth.uid and then we change the location in ref().
      return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
         // THis dispatch is gonna make sure that the redux store changes too.
         dispatch(addExpense({
            id: ref.key,
            ...expense
         }));
      });
   };
};

// REMOVE_EXPENSE

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id }) => {
   return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
         dispatch(removeExpense({id}));
      });
   };
};

// EDIT_EXPENSE

export const editExpense = (id, updates) => ({
   type: 'EDIT_EXPENSE',
   id,
   updates
});

export const startEditExpense = (id, updates) => {
   return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
         dispatch(editExpense(id, updates));
      });
   };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
   type: 'SET_EXPENSES',
   expenses
});

export const startSetExpenses = () => {

   return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/expenses`)
      .once('value')
      .then((snapshot) => {
        const expenses = [];
    
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log(expenses); 
        dispatch(setExpenses(expenses));  
      });
   };
};
