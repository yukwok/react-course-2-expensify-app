import React from 'react';

import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  console.log("in EditExpensePage component");
  console.log(props);
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={ (expenseupdated) =>{
          props.dispatch(editExpense(props.expense.id, expenseupdated));
          props.history.push('/');
          ////console.log('updated', expenseupdated)
        }}
      />
      <button
      onClick={ () => {
          props.dispatch( removeExpense({id: props.expense.id}));
          props.history.push('/');

        }
      }
    
      >
        Remove
      </button>  
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return{
    expense: state.expenses.find( (expenseEdit) => {
      return expenseEdit.id === props.match.params.id
    })
    // expense: state.expenses.find( (expense) =>  expense.id === props.match.params.id)

  };
};



export default connect(mapStateToProps)(EditExpensePage);
