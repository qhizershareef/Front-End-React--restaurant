//import {COMMENTS} from '../shared/comments';
import * as ActionType from './ActionTypes';

export const Comments=(state={errMess:null, comments:[],},action)=>{
    switch(action.type){
        case ActionType.ADD_COMMENTS:
            return {...state, errMess:null, comments:action.payload }
        case ActionType.COMMENTS_FAILED:
            return {...state, errMess:action.payload}
        case ActionType.ADD_COMMENT:
            var comment= action.payload;
            //comment.id= state.comments.length;//here state means COmment which is an array so id is the index of that element;
            //comment.date= new Date().toISOString();
            //console.log("comment: "+ comment);
            return {...state,comments:state.comments.concat(comment)};

        default:
            return state;
    }
};