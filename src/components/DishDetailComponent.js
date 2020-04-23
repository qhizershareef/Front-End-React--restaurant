import React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import Moment from 'moment';

/* DishDetail Component, below the dishes describe and show comments as a card */
const DishDetail = ({ dish }) => {
    console.log(dish);
    const Dish = dish;  //note that the props is given a name and that is used as this.props.<name assigned to var>
    //const DishProps= this.props.selectedDish;
    console.log('this is any name for the props', Dish);
    let dishComments = renderComments(Dish);
    //console.log(Dish);
    if (Dish == null) {
        return (<div>None Selected</div>)
    }
    let dishItem = renderDish(Dish);
    return (
        <div className="container">
            <div className="row">
                {dishItem}
                {dishComments}
            </div>
        </div>
    )
}
function renderDish(dish) {
    //console.log(dish);
    return (
        <div className="col-12 col-md-5 m-1">
            <Card key={dish.id} >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}
function renderComments(dish) {
    if (dish == null) {
        return (<div>No Comments</div>)
    }
    const cmmnts = dish.comments.map(comment => {
        //refer moment.js to create date format 'MMMM,Do,YYYY'
        return (
            <div key={comment.id}>
                <div >
                    <p>{comment.comment}</p>
                    <p>--{comment.author}, {Moment(comment.date).format('MMMM, Do ,YYYY')}</p>
                </div>
            </div>

        )
    })
    return (
        <div className="col-md-5 col-12 m-1">
            <h3>Comments :</h3>
            <div>
                {cmmnts}
            </div>
        </div>
    )
}

export default DishDetail;