import React, {Component} from 'react'
import Card from './CardsUI';
import img1 from '../assets/index.jpg';
class Cards extends Component {
    constructor(props) {
        super(props);
        this.state= {};
    }
    render() {
        return(
            <div className="container-fluid d-flex justify-content-center"> 
                <div className="row">
                <div className="col-md-4">
                    <Card imgsrc={img1} title="Console"/>
                </div> 
                <div className="col-md-4"> 
                    <Card imgsrc={img1} title="Console2"/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img1} title="Console3"/>
                </div>             s               
                </div>
            </div>
        );
    }
}

export default Cards;