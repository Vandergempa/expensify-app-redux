import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListitem = ({ dispatch, id, description, amount, createdAt }) => (
    // {dispatch} was needed for the button which was later moved to the editexpensepage
        <Link className="list-item" to={`/edit/${ id }`} >
            <div>
                <h3 className="list-item__title">{ description }</h3>
                <span className="list-item__subtitle"> { moment(createdAt).format('DD MMMM, YYYY') } </span>
            </div>
            <h3 className="list-item__data">{ numeral(amount / 100).format('$0.00') } </h3>
        </Link>
);

export default ExpenseListitem;