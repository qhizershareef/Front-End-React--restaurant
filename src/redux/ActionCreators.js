import * as ActionTypes from './ActionTypes';
//import {DISHES} from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

//since everything is fetched from the server  which is json-server, everythng here is dynamically added 
//thus comments,promos, dishes are all fetched from the server (on port 3001)

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload:comment
});

export const addFeedback=(feedback)=>({
    type:ActionTypes.ADD_FEEDBACK,
    payload:feedback
})

export const postFeedback=(firstname,lastname,telnum,email,agree,contactType,message)=>(dispatch)=>{
    const newFeedback={
        firstname: firstname,
        lastname:lastname,
        telnum:telnum,
        email:email,
        agree:agree,
        contactType:contactType,
        message:message,
    }
    newFeedback.date= new Date().toISOString();
    return fetch(baseUrl+'feedback',{
        method:'POST',
        body:JSON.stringify(newFeedback),
        headers:{
            'Content-Type':'application/json'
        },
        credentials:"same-origin"
        })
            .then(response => {
                        if (response.ok) {
                            return response;
                        }
                        else {
                            var error = new Error('Error' + response.status + ':' + response.statusText);
                            error.response = response;
                            throw error;
                        }
                    },
                        error => {
                            var errMess = new Error(error.message);
                            throw errMess;
                        })
        .then(response=>response.json())
        .then(response=>{
            dispatch(addFeedback(response)
        )
            alert('Thank you for your feedback'+JSON.stringify(response));
    })
        .catch(error=>{
            console.log('Feedback error:'+ error.message)
            alert('Feedback cannot be posted \n'+ error.message)
        })
}

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();
    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(response=> dispatch(addComment(response)))
        .catch(error=> 
            {
                console.log('Post Comments '+ error.message)
                alert('Comment cannot be posted \n'+ error.message);
    })

}

console.log('action creators')
export const fetchDishes = () =>(dispatch) => {
    dispatch(dishesLoading(true));
    console.log('under FetchDishes')
    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => {
            dispatch(dishesFailed(error.message));
        })
}

export const fetchLeaders=()=>(dispatch)=>{
    dispatch(leadersLoading(true))
    console.log('under fetchLeaders');
    return fetch(baseUrl+'leaders')
        .then(response=> {
                if(response.ok){
                    return response;
                }
                else{
                    var error=new Error('Error' + response.status + ': '+ response.statusText);
                    error.response=response;
                    throw error;
                }
            },
                error=>{
                    var errmess = new Error(error.message);
                    throw errmess;
            })
            .then(response=>response.json())
            .then(leaders=>dispatch(addLeaders(leaders)))
            .catch(error=>dispatch(leadersFailed(error)));
}



export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};



export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING,
})

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
})

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})


export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
})

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

export const addLeaders = (leaders)=>({
    type:ActionTypes.ADD_LEADERS,
    payload:leaders
})

export const fetchPromos = () => (dispatch) => {

    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});


export const leadersLoading=()=>({
    type: ActionTypes.LEADERS_LOADING
})


export const leadersFailed=(errmess)=>({
    type:ActionTypes.LEADERS_FAILED,
    payload:errmess
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});