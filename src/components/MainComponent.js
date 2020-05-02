import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments:COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS,
        }
    }
   render() {
       const HomePage= ()=>{
           return(
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }
        const DishWithId=({match})=>{
            return(
                <DishDetail 
                    dish={this.state.dishes.filter((dish)=> dish.id=== parseInt(match.params.dishId,10) )}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            )
        }

        const AboutUs=()=>{
            return(
                <About
                    leaders={this.state.leaders}
                />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={()=> <Menu dish={this.state.dishes}/>}/>
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
export default Main;
