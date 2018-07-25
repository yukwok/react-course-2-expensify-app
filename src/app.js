import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

 store.dispatch( addExpense({ description: 'Rent', amount: 100 , createdAt: 23432423}));
 store.dispatch( addExpense({ description: 'coffoe', amount: 3 , createdAt: 1}));
 store.dispatch( addExpense({ description: 'Ice-cream', amount: 5 ,createdAt: -100}));
// const expenseOne = store.dispatch( addExpense({ description: 'Rent', amount: 100 , createdAt: 10000}));
// const expenseTwo = store.dispatch( addExpense({ description: 'coffoe', amount: 3 , createdAt: 1}));
// const expenseThree = store.dispatch( addExpense({ description: 'Ice-cream', amount: 5 ,createdAt: -100}));
 //store.dispatch( setTextFilter('cream') );


 const state = store.getState();
 const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
 //console.log(visibleExpenses);

 const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider> 
 );

 ReactDOM.render(jsx, document.getElementById('app'));

// const expenseOne = store.dispatch( addExpense({ description: 'Rent', amount: 100 , createdAt: 10000}));
// const expenseTwo = store.dispatch( addExpense({ description: 'coffoe', amount: 3 , createdAt: 1}));
// const expenseThree = store.dispatch( addExpense({ description: 'Ice-cream', amount: 5 ,createdAt: -100}));






