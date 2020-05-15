import {createStore,combineReducers, applyMiddleware} from 'redux';
import {Dishes} from './dishes';
import {Comments} from './comments';
import {Leaders} from './leaders'
import {Promotions} from './promotions';

//thunk and logger from redux
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore=()=>{
    const store = createStore(
        combineReducers(
            {
                dishes:Dishes,
                leaders:Leaders,
                comments:Comments,
                promotions:Promotions,
        }),
        applyMiddleware(thunk,logger)
    )
    return store;
}