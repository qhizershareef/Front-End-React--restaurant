import {COMMENTS} from '../shared/comments';
import * as ActionType from './ActionTypes';

export const Comments=(state=COMMENTS,action)=>{
    switch(action.type){
        case ActionType.ADD_COMMENT:
            var comment= action.payload;
            comment.id= state.length;//here state means COmment which is an array so id is the index of that element;
            comment.date= new Date().toISOString();
            console.log("comment: "+ comment);
            return state.concat(comment);

        default:
            return state;
    }
};