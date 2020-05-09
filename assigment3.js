import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, Breadcrumb, BreadcrumbItem, Button, Modal, 
    ModalBody, ModalHeader, Row, Col, Label } from 'reactstrap';
import Moment from 'moment';
import { Link } from 'react-router-dom';
import {LocalForm, Control, Errors} from 'react-redux-form';

const maxLength =(len)=>(val)=> !(val) || val.length <=15;
const minLength = (len) => (val) => val && (val.length >= len);
const required=(val)=> val && val.length;

export class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.submitHandle= this.submitHandle.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        })
        //alert(this.state.isModalOpen + " is the current state");
    }
    submitHandle(value){
        alert(JSON.stringify(value));
    }
    render() {
        return (
            <React.Fragment>
                <Button outline onClick={this.toggleModal}>
                    <span class="fa fa-pencil fa-lg" aria-hidden="true"> Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(value) => this.submitHandle(value)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={4}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" id="rating" name="rating"
                                        className="form-control"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={4}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required,minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: ' Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={4}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                        rows="6"
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{
                                            required: 'Comment is Required'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col >
                                    <Button type="submit" color="primary" >Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}



/* DishDetail Component, below the dishes describe and show comments as a card */
const DishDetail = (props) => {
    console.log(props);
    //console.log(dish);
    const dish = props.dish[0];
    const Dish = dish;  //note that the props is given a name and that is used as this.props.<name assigned to var>
    //const DishProps= this.props.selectedDish;
    console.log('this is any name for the props', Dish);
    let dishComments = renderComments(props.comments);
    //console.log(Dish);
    if (Dish == null) {
        return (<div>None Selected</div>)
    }
    let dishItem = renderDish(Dish);
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish[0].name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>

            </div>
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
    console.log(dish)
    if (dish == null) {
        return (<div>No Comments</div>)
    }
    const cmmnts = dish.map(comment => {
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
                <CommentForm />
            </div>
        </div>
    )
}

export default DishDetail;