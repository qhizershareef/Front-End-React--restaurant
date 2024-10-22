import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postFeedback} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

// here the dishes,comments etc are received as props from App.js Provider component, since we used redux to handle this
// there are methods provided by redux inorder to connect the state to Main component or other component
const mapStateToProps = state=>{
    return{
        dishes: state.dishes,
        comments:state.comments,
        promotions:state.promotions,
        leaders:state.leaders,
    }
}

const mapDispatchToProps = dispatch =>({
    postComment:(dishId,rating,author,comment)=>dispatch(postComment(dishId,rating,author,comment)), //firstly addComment is called within dishDetail component thereby the props are passed to dispatch then it gets added to comment array
    fetchDishes:()=>{dispatch(fetchDishes())},
    resetFeedbackForm:()=>{dispatch(actions.reset('feedback'))},//'feedback' here is the model name which is contact
    //pass this reset as props to contact compo
    fetchComments:()=>{dispatch(fetchComments())},
    fetchPromos:()=>{dispatch(fetchPromos())},
    fetchLeaders:()=>{dispatch(fetchLeaders())},

    postFeedback:(firstname,lastname,telnum,email,agree,contactType,message)=>dispatch(postFeedback(firstname,lastname,telnum,email,agree,contactType,message))
})


class Main extends Component {
    componentDidMount(){
        console.log(this.props);
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
        console.log(this.props)
    
    }

    //render method should not have any error otherwise the componentDidMount method will not be called 
    render() {
    console.log('Main Component"s Render Method');
        console.log(this.props);
       const HomePage= ()=>{
           
           return(
                <Home
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promoLoading={this.props.promotions.isLoading}
                    promoErrMess={this.props.promotions.errMess}
                    leader= {this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    leadersLoading={this.props.leaders.isLoading}
                    leadersErrMess={this.props.leaders.errMess}
                    
                />
            )
        }
        const DishWithId=({match})=>{
            return(
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                    commentErrMess={this.props.comments.errMess}
                    postComment={this.props.postComment}
                />
            )
        }

        const AboutUs=()=>{
            return(
                <About
                    leaders={this.props.leaders.leaders}
                    isLoading={this.props.leaders.isLoading}
                    leadersErrMess={this.props.leaders.errMess} 
                />
            )
        }

        return (
            <div>
                <Header/>
                
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames='page' timeout={300}> 
                        <Switch location={this.props.location}>
                            <Route path="/home" component={HomePage}/>
                            <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}/>}/>
                            <Route path="/menu/:dishId" component={DishWithId} />
                            <Route exact path="/contactus" component={()=><Contact reset={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>} />
                            <Route exact path="/aboutus" component={AboutUs} />
                            <Redirect to="/home" /> {/* default */}
                        </Switch>
                    </CSSTransition>    
                </TransitionGroup>
                <Footer/>
            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
