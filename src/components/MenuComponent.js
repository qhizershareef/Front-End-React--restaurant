import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
//the way we use props for classes, In functional components we use them as parameters or JSX
function RenderMenuItem({dish}){
    return (
        <Card key={dish.id}>
            <Link to={`/menu/${dish.id}`}>{/* this acts as onClick by directly routing */}
                <CardImg width="100%" src={baseUrl+dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}
const Menu=(props)=>{
        ///this props has dishes{ isLoading,errmess, dish[]}
        //thus
        if(props.dishes.isLoading){
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            )
        }
        else if (props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.dishes.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        
        else{
                console.log('Under Render of Menu Component.')
                console.log(props);
                const menu = props.dishes.dishes.map(dish => {
                    //note that the onClick can also be passed as props from Main component
                    return (
                        <div className="col-12 col-md-5 m-1"  key={dish.id}>
                            <RenderMenuItem dish={dish} />
                        </div>
                    );
                });
            return (
                <div className='container'>
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr />
                        </div>
                    </div>
                    <div className='row'>
                        {menu}
                    </div>
                </div>
            );
        }        
}
export default Menu; 