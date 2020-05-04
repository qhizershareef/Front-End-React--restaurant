import {createStore} from 'redux';
import {Reducer, initialState} from './reducer';

export const ConfigureStore=()=>{
    const store = createStore(
        Reducer,
        initialState,
    ); //takes two params Reducer and initial state
    return store;
}