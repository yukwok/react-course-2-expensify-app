import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


const ExpenseList = (props) =>  {
    //console.log(props.expenses);
    //console.log(props.filters);
    return (
        <div>
            <h1>Expense list</h1>
            {props.expenses.map( (expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />
            }


            )}

        </div>    
      )
};


const mapStoP = (state)=>{
    return {
       expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect( mapStoP )(ExpenseList);

