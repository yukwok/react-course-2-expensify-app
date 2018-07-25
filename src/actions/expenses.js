import uuid from 'uuid';

// add expense
export const addExpense = (
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
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id

});
//Edit expense
export const editExpense = ( id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});