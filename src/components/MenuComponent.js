import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
//the way we use props for classes, In functional components we use them as parameters or JSX
function RenderMenuItem({dish}){
    return (
        <Card key={dish.id}>
            <Link to={`/menu/${dish.id}`}>{/* this acts as onClick by directly routing */}
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}
const Menu=(props)=>{
        console.log('Under Render of Menu Component.')
        const menu = props.dish.map(dish => {
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
export default Menu; 