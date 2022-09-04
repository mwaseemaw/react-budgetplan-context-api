import React, {useContext} from 'react';
import ExpenseItem from './ExpenseItem';
import {AppContext} from '../content/AppContext';
function ExpenseList() {
    const state = useContext(AppContext);
    return (
        <ul className='list-group'>
            {state.expenses.map((expense) => <ExpenseItem expense={expense}/>)}
        </ul>
    )
}

export default ExpenseList;