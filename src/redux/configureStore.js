import {createStore,combineReducers, applyMiddleware} from 'redux';
import {Dishes} from './dishes';
import {Comments} from './comments';
import {Leaders} from './leaders'
import {Promotions} from './promotions';

//configuring react-redux form so that it stores the form state throughtout the session
import {createForms} from 'react-redux-form';
import {InitialFeedback} from './forms';
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
                ...createForms({
                    feedback: InitialFeedback
                })
        }),
        applyMiddleware(thunk,logger)
    )
    return store;
}