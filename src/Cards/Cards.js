import React, {Component} from 'react';
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
    //ask about this
    create = () => {
        let Data = 
[["i1.jpg","When you are being manipulated by someone you are being psychologically coerced into doing something you probably don’t really want to do.A person who is targeted by manipulators who play the victim often try to help the manipulator in order to stop feeling guilty", "You feel fear, obligation and guilt"],
 ["i2.jpg","A manipulative person might twist what you say and make it about them, hijack the conversation or make you feel like you’ve done something wrong when you’re not quite sure you have, according to Stines.", "You’re questioning yourself"],
 ["i3.jpg","Rather than violently forbidding you from contacting your friends or family, a controlling partner may just gently nudge you away from them. A controlling partner will] make you feel badly for having a life outside of the relationship.A few weeks or months of fixating on your new love can be normal and fun. But if your partner actively encourages you to break away from your friends, that's unhealthy.", "You Feel Guilty When You Spend Time With Your Friends"],
 ["i4.jpg","Though almost all partners occasionally criticize each other, when the criticism is constant and contains the implication that you're incapable of making good decisions on your own, that's a red flag. And whether you're talking about your job, your friends, or your wardrobe, the idea that your partner always knows better than you do is dangerous. Their comments are not really about improving your life — they're about undermining your ability to make decisions and take action on your own","Criticize Lots Of Small Things That You Do"],
 ["i5.jpg", "On occasion, serious couples who are recovering from an incident of infidelity will allow the cheated-on partner access to the other partner's texts and emails for a limited period of time as a form of accountability. But if this is not a deal that you have specifically worked out with your partner in this context (and hopefully with the help of a counselor), it isn't right.", "They Don't Trust You"],
 ["i6.png", "A healthy partner knows that they can't protect you from the messiness of life — they can just support you and stand by your side. If you've gotten yourself into a financial mess, a healthy partner might buy you financial advice books, help you find budgeting apps, encourage you to take a financial planning class, or offer to help you go through your backlog of unopened credit card bills while providing emotional support. But they won't take your bank password, handle your bills, and give you an allowance until you pay off your credit card debt. A healthy partner will offer every kind of support that they can conceive of, but knows that you have to deal with your own problems in the end.", "They Spend A Lot Of Time Talking About Protecting You"]
]

        // console.log(Data.length);
        let ele = [];
        for (let i = 0; i < Data.length; i++) {
            ele.push(//+ Data[i][0]
                <Card key={Data[i][0]} imgsrc={Data[i][0]} comment={Data[i][1]} sign={Data[i][2]}/>
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
            <StackGrid columnWidth={width <= 500 ? '50%' : '20.33%'} gutterWidth={3} gutterWidth={6.5}>
                {this.create()}
            </StackGrid>
            </div>
        );
    }
}

export default sizeMe()(Cards);