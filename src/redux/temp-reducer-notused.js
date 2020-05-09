//reducer.js pure function: redux, to provide state to whole program, storing the state ex: below are js object storing info of various

import {LEADERS} from '../shared/leaders';


export const initialState= {
        dishes: DISHES,
        comments:COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS,
};


//state= initialState means the default state if no state is passed, default state when nothing is passed
// Reducer function is immutable, and only provides read-only access meaning only getters no setters
export const Reducer=(state, action)=>{
    return state;
}