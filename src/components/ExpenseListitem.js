import React from 'react';
import { Link } from 'react-router-dom';

export const ExpenseListitem = ({ dispatch, id, description, amount, createdAt }) => (
    // {dispatch} was needed for the button which was later moved to the editexpensepage
    <div>
        <Link to={`/edit/${ id }`} >
            <h3>{ description }</h3>
        </Link>
        <p> { amount } - { createdAt }</p>
    </div>
);

export default ExpenseListitem;
