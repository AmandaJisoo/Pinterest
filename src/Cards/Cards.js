import React, {Component} from 'react'
import Card from './CardUI';
import img1 from '../assets/index.jpg';
import StackGrid from "react-stack-grid";
class Cards extends Component {
    constructor(props) {
        super(props);
        this.state= {};
    }
    render() {
        return(
            <StackGrid>
                 <div key="key1">
                    <Card imgsrc={img1} title="Console"/>
                </div> 
                <div key="key2">
                    <Card imgsrc={img1} title="Console2"/>
                </div>
                <div key="key3">
                    <Card imgsrc={img1} title="Console3"/>
                </div>                          
            </StackGrid>
        );
    }
}

export default Cards;