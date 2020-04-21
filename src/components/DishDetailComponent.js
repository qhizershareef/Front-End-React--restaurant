import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText} from 'reactstrap';
import Moment from 'moment';

/* DishDetail Component, below the dishes describe and show comments as a card */
class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            dishs:null
        };
    }
    renderDish(dish){
        //console.log(dish);
        return(
            <div className="col-12 col-md-5 mt-3 ml-3">
                <Card >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    renderComments(dish){

        if(dish==null){
            return(<div>No Comments</div>)
        }
        const cmmnts=dish.comments.map(comment=>{
            //refer moment.js to create date format 'MMMM,Do,YYYY'
            return(
                <div class="container">
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, {Moment(comment.date).format('MMMM, Do ,YYYY')}</p>
                    </div>
                </div>
                
            )
        })
        return(
            <div className="col-md-5 col-12 mt-3">
                <h3>Comments :</h3>
                <div>
                    {cmmnts}
                </div>
            </div>
        )
    }
    render(){
        const Dish=this.props.dish;  //note that the props is given a name and that is used as this.props.<name assigned to var>
        //const DishProps= this.props.selectedDish;
        console.log('this is any name for the props', Dish);
        let dishComments=this.renderComments(Dish);
        //console.log(Dish);
        if(Dish==null){
            return(<div>None Selected</div>)
        }
        let dishItem=this.renderDish(Dish);
        return(
            <div className="row">
                {dishItem}
                {dishComments}
            </div>
        )
    }

}
export default DishDetail;