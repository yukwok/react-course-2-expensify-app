const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
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


