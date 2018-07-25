import { createStore } from 'redux';

const incrementCount = ( {incrementBy = 1} ={} ) =>({
    type: 'INCRE',
    incrementBy
});

const countReducer =(state = {count:0 }, action) => {
    switch(action.type){
        case 'INCRE' :
        return {
            count: state.count + action.incrementBy
        }
        case 'DECRE' :
        return {
            count : state.count - 1
        };
        case 'RESET' :
        return {
            count : 0,
        };
        case 'SET' :
        return {
            count : action.payload
        };
        default: 
        return state;
    }
};


const store = createStore( countReducer );

store.subscribe( () =>{
    console.log(store.getState());
});



store.dispatch({type : 'INCRE'});


store.dispatch({type : 'RESET'});

store.dispatch({type : 'SET', payload: 0});



store.dispatch({type : 'DECRE'});
store.dispatch(incrementCount({incrementBy: 100000, in: 200000, a: 234, b: 456}));
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy: -100000}));



