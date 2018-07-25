import {  createStore, combineReducers } from 'redux';
import uuid from 'uuid';


// add expense
const addExpense = (
    {
        description= '',
        note = 'no notes',
        amount = 999999999,
        createdAt = 1997
    } = {}
) => (
      {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
      }
     );
//Remove expense
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id

});
//Edit expense
const editExpense = ( id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// set text filter
const setTextFilter = ( text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

//sort_by_date
const sortByDate = () =>({
    type: 'SORT_BY_DATE'
});
//sort_by_amount
const sortByAmount= () =>({
    type: 'SORT_BY_AMOUNT'
});
//set_start_date
const setStartDate= (date = undefined) =>({
    type: 'SET_START_DATE',
    date
});
//set_endDate
const setEndDate= (date = undefined) =>({
    type: 'SET_END_DATE',
    date
});


//expense reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
      case 'ADD_EXPENSE':
        return [...state, action.expense];
      case 'REMOVE_EXPENSE':
        return state.filter( ({ id }) => id !== action.id );
      case 'EDIT_EXPENSE':
        return state.map( (eachElement) => {
            if(eachElement.id === action.id){
                return {
                  ...eachElement,
                  ...action.updates    
                };
            } else {
                return eachElement;
            };
        });
        return
      default:
        return state;
  }
};

//filter reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date', 
    startDate: undefined,
    endDate: undefined
};
const filterReducer = ( state = filterReducerDefaultState, action ) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
          return {
            ...state, 
            text: action.text
          };
        case 'SORT_BY_DATE':
          return {
            ...state, 
            sortBy: 'date'
          };
        case 'SORT_BY_AMOUNT':
          return {
            ...state, sortBy: 'amount'
          };
        case 'SET_START_DATE':
          return {
            ...state, startDate: action.date
          };
        case 'SET_END_DATE':
          return {
            ...state, endDate: action.date
          };          
        default:
          return state;
    }      
};

//Get Visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };


//store creation

const store = createStore( 
  combineReducers(
    {
        expenses: expensesReducer,
        filters: filterReducer
    }
  ) 
);

store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);

});

const expenseOne = store.dispatch( addExpense({ description: 'Rent', amount: 100 , createdAt: 10000}));
const expenseTwo = store.dispatch( addExpense({ description: 'coffoe', amount: 3 , createdAt: 1}));
const expenseThree = store.dispatch( addExpense({ description: 'Ice-cream', amount: 5 ,createdAt: -100}));


// store.dispatch( removeExpense( { id: expenseThree.expense.id }));
// store.dispatch( addExpense() );

// store.dispatch( editExpense( expenseOne.expense.id, {description: 'mai on rental'}));
// store.dispatch( editExpense( expenseOne.expense.id, {amount: 6000 }));

// store.dispatch( setTextFilter('rent') );
// store.dispatch( setTextFilter() );

 store.dispatch( sortByAmount() );
// store.dispatch( sortByDate() );

// store.dispatch( setStartDate(125 ));
// store.dispatch( setStartDate() );
// store.dispatch( setEndDate(1250));


const demoState = {
    expenses: [{
      id: 'poijasdfhwer',
      description: 'January Rent',
      note: 'This was the final payment for that address',
      amount: 54500,
      createdAt: 0
    }],
    filters: {
      text: 'rent',
      sortBy: 'amount', // date or amount
      startDate: undefined,
      endDate: undefined
    }
};

// const user = {
//     name: 'Jen',
//     age: 20
// };


// console.log( {...user, age: 100, location: "taipo", dshd:"56476854dyjff"} );

// const arraay = [1,2,3,4,5];

// console.log( [2244, ...arraay, 67]);