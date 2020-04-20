import React,{Component} from 'react';
//import {Media} from 'reactstrap';
import {Card,CardBody,CardImg,CardText,CardTitle,CardImgOverlay} from 'reactstrap';
//similar to that of parameters in functions, props work the same from one parent to child class,
//for example there's some array of data in some file and is imported to App.js(the ancestor or parent class)
//in the App class we make that data available through state(this) and store the array in it, then through props 
//we send it to the class that needs the data , through this the data will be available to Menu or the class that needs data through props
class Menu extends Component{
    constructor(props){ //this props is actually what is passed from App class and we can replace it with state
        super(props);
        // we don't need this.state for dish array this.state={[]}
        this.state= {
            selectedDish:null,
        }
    }
    onDishSelected(dish){
        this.setState({
            selectedDish:dish       
        });
    }
    renderDish(dish){
        if(dish!=null){
            return(
            <Card className="ml-5">
                <CardImg className="w-25" src={dish.image} alt={dish.name}/>
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>    
            </Card>)
        }
        else{
            return(<div></div>);
        }
    }


    render(){//note that onClick is a function 
        const menu= this.props.dishes.map(dish=>{
            return(
                <div>
                    <Card  key={dish.id} className="m-5 w-100 p-2" onClick={()=>this.onDishSelected(dish)}> 
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
          );
        })
        return (
            <div className="container col-9">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>   
            </div>
        );
    }   
}
export default Menu;

/*
    previous Media component under return (now Card):
    <div key={dish.id} className="col-12 mt-5">
                <Media tag="li">
                    <Media left middle>
                    <Media object src={dish.image} alt={dish.name} />
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>{dish.name}</Media>
                        <p>{dish.description}</p>
                    </Media>
                </Media>
            <hr></hr>
    </div>

*/