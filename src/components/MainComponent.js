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
//router configuring
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
//we can either use App() as function or 
// As class App which extends Component and render it in index.js, when using class we do have to specify the state
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
/*    onSelectedDish(dishId) {
        this.setState({
            selectedDish: dishId,
        })
    }
*/    render() {
    //if a react component takes props use this way to add the props
        const HomePage= ()=>{
            //add in the props to be used inside HomeComponent
            return(
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }
        //under <Menu props could be either this.state.dishes or directly {DISHES}

        //this DishWithId is a callback function from menu comp, since it uses LINK so we get the id through dish component we cycle through the respective id and fetch the details and comments
        // we pass the dishdetail component the parameters after matching it with the id 
        const DishWithId=({match})=>{
            return(
                <DishDetail 
                    dish={this.state.dishes.filter((dish)=> dish.id=== parseInt(match.params.dishId,10) )}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            )//under match theres an object called params which locally stores the history or the content when invoked
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/qhome" component={HomePage}/>
                    {/*inside component={} you can also use {HomePage};*/}
                    {/*you can directly or use arrow fnction to specify the component */}
                    <Route exact path="/menu" component={()=> <Menu dish={this.state.dishes}/>}/>
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/qhome" /> {/* default */}
                </Switch>
                <Footer />
            </div>
        );//DishDetail needs a selectedDish
    }
}
export default Main;
