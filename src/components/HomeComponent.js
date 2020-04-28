import React from 'react';
import {Card,CardBody,CardImg,CardText,CardTitle,CardSubtitle} from 'reactstrap';

function RenderCard({item}) {

    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props){
    return(
        <div className="container mb-5">
            <img src="assets/images/B1.jpg" alt=""  width="100%"/>
            <figcaption className="center mt-1 mb-1" style={{color:'white',textAlign:'center',fontSize:'30px',background:'purple'}}> <a href="https://www.brainsmade.me" style={{textDecoration:'none',textDecorationStyle:'none',color:'white'}}>Ristorante con Fusion</a></figcaption>
            <div className="row align-items-start">
                <div className="col-12 col-md ">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;