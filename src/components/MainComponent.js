import React,{Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import {DISHES} from '../shared/dishes';
//we can either use App() as function or 
// As class App which extends Component and render it in index.js, when using class we do have to specify the state
class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,
            selectedDish:null,
        }
    }
    onSelectedDish(dishId) {
        this.setState({
            selectedDish: dishId,
        })
    }
    render(){
        //under <Menu props could be either this.state.dishes or directly {DISHES}
        return (
        <div>
            <Navbar dark color="danger" id="navbar">
                <div className="container">
                <NavbarBrand href="/" id="nav">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <div className="container ">
                <Menu dish={this.state.dishes}
                    onClick={(dishId) => this.onSelectedDish(dishId)}
                />
                <DishDetail dish={this.state.dishes.filter(dish=> dish.id===this.state.selectedDish)[0]}/>
            </div>
            </div>
        );//DishDetail needs a selectedDish
    } 
}
export default Main;
