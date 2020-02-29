import React, {Component} from 'react'
import Card from './CardUI';
import img1 from '../assets/index.jpg';
import StackGrid from "react-stack-grid";
import cardimage from './warningpic'
class Cards extends Component {
    constructor(props) {
        super(props);
        this.state= {};
    }
    create = () => {
        let ele = [];
        let cards = Object.entries.cardimage.map(([image, commentary]) => {
            ele.push(<div key={i}>
                <Card imgsrc={image} comment={commentary}/>
                </div> 
            )
        })
        return ele;
    }
    render() {
        return(
            <div>
                <StackGrid columnWidth={"66%"}>
                    {/* <div key="key1">
                        <Card imgsrc={img1} title="Console"/>
                    </div> 
                    <div key="key2">
                        <Card imgsrc={img1} title="Console2"/>
                    </div>
                    <div key="key3">
                        <Card imgsrc={img1} title="Console3"/>
                    </div>                           */}
                    {this.create()}
                </StackGrid>
                </div>
        );
    }
}

export default Cards;