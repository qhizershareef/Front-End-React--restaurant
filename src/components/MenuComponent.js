import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
//the way we use props for classes, In functional components we use them as parameters or JSX
function RenderMenuItem({dish,onClick}){
    return (
        <Card   onClick={() => onClick(dish.id)} key={dish.id}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}
const Menu=(props)=>{
        console.log('Under Render of Menu Component.')
        const menu = props.dish.map(dish => {
            //note that the onClick can also be passed as props from Main component
            return (
                <div className="col-12 col-md-5 m-1"  key={dish.id}>
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
            );
        });
        return (
            <div className='container'>
                <div className='row'>
                    {menu}
                </div>
            </div>
        );
}
export default Menu; 