import React, {Component} from 'react'
import Card from './CardUI';
import img1 from '../assets/index.jpg';
import StackGrid from "react-stack-grid";
import sizeMe from 'react-sizeme';
import Data from './warningpic.js';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state= {};
    }

    create = () => {
        let Data = [
            ["https://cdn.pixabay.com/photo/2017/06/12/19/02/cat-2396473__480.jpg", 
                   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."],
            ["https://cdn.pixabay.com/photo/2015/06/03/13/13/cats-796437__480.jpg", 
                   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."],
            ["https://cdn.pixabay.com/photo/2012/11/26/13/58/cat-67345__480.jpg",, 
                   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]
        ]
        // console.log(Data.length);
        let ele = [];
        for (let i = 0; i < Data.length; i++) {
            // console.log("pnted");
            ele.push(
                <Card key={Data[i][0]} imgsrc={Data[i][0]} comment={Data[i][1]}/>
            )
        }
        return ele;
    }

    render() {
        // let res = this.create();
        const { 
            size: { 
              width
            } 
        } = this.props;

        return(
            <div>
            <StackGrid columnWidth={width <= 500 ? '40%' : '30%'}>
                {this.create()}
            </StackGrid>
            </div>
        );
    }
}

export default sizeMe()(Cards);