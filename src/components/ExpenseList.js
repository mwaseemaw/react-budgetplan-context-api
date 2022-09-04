import React, {useContext} from 'react';
import ExpenseItem from './ExpenseItem';
import {AppContext} from '../content/AppContext';
function ExpenseList() {
    const state = useContext(AppContext);
    const exp = [
        {
            id:1,name:'shopping',cost:10,
        },
        {
            id:2,name:'eating',cost:20,
        },
    ]
    return (
        <ul className='list-group'>
            {state.expenses.map((expense) => <ExpenseItem expense={expense}/>)}
        </ul>
    )
}

export default ExpenseList;