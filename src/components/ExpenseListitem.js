import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListitem = ({ dispatch, id, description, amount, createdAt }) => (
    // {dispatch} was needed for the button which was later moved to the editexpensepage
    <div>
        <Link to={`/edit/${ id }`} >
            <h3>{ description }</h3>
        </Link>
        <p> 
            { numeral(amount / 100).format('$0.00') } 
            - 
            { moment(createdAt).format('do MMMM, YYYY') }
        </p>
    </div>
);

export default ExpenseListitem;