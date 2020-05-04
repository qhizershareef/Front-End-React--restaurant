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

class Main extends Component {
    constructor(props) {
        super(props);
    }
   render() {
       const HomePage= ()=>{
           return(
                <Home
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }
        const DishWithId=({match})=>{
            return(
                <DishDetail 
                    dish={this.props.dishes.filter((dish)=> dish.id=== parseInt(match.params.dishId,10) )}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            )
        }

        const AboutUs=()=>{
            return(
                <About
                    leaders={this.props.leaders}
                />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={()=> <Menu dish={this.props.dishes}/>}/>
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route exact path="/aboutus" component={AboutUs} />
                    <Redirect to="/home" /> {/* default */}
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps)(Main));
