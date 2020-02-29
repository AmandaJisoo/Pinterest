import React, {Component} from 'react'
import Card from './CardUI';
import img1 from '../assets/index.jpg';
import StackGrid from "react-stack-grid";
import data from './warningpic.js';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state= {};
    }
    
    // create = () => {
    //     let ele = [];
    //     for (let i = 0; data.length; i++) {
    //         // console.log("pnted");
    //         ele.push(
    //             <Card key={data[i][0]} imgsrc={data[i][0]} comment={data[i][1]}/>
    //         )
    //     }
    //     return ele;
    // }

    render() {
        // let res = this.create();
        return(
            <div>
            <StackGrid columnWidth={"66%"}>
            </StackGrid>
            </div>
        );
    }
}

export default Cards;