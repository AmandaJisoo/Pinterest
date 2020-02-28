// import React, { Component } from 'react';
// import { directive } from '@babel/types';
// import { PinterestGrid, PinterestPinWidget } from './react-pinterest';

// class SymptomInfo extends Component {
//     // In the constructor, set the initial state of search to empty string
//     // Also *bind `this`* to the handleChange function
//     constructor(props) {
//         // super(props);
//         // this.handleChange = this.handleChange.bind(this);
//         // this.state = {
//     }
//     render() {
//         return (
//             <PinterestGrid gutter={gutter}>
//             <PinterestPinWidget pin="530158187357124374" />
//             <PinterestPinWidget pin="356417757989339525" />
//             <PinterestPinWidget pin="356417757986524080" />
//             <PinterestPinWidget pin="356417757986724718" />
//             <PinterestPinWidget pin="356417757988564358" />
//             <PinterestPinWidget pin="356417757988206582" />
//             <PinterestPinWidget pin="202802789445693269" />
//             <PinterestPinWidget pin="89438742571585339" />
//             <PinterestPinWidget pin="232850243203755319" />
//             <PinterestPinWidget pin="137008013639035297" />
//             <PinterestPinWidget pin="264797653065817757" />
//             <PinterestPinWidget pin="144467100519920447" />
//             </PinterestGrid>
//         )
//     } 
// }  


import React, { Component } from "react";
import StackGrid from "react-stack-grid";

export class MyComponent extends React.Component {
  render() {
    return (
      <StackGrid
        columnWidth={150}
      >
        <div key="key1">Item 1</div>
        <div key="key2">Item 2</div>
        <div key="key3">Item 3</div>
        <div key="key4">Item 1</div>
        <div key="key5">Item 2</div>
        <div key="key6">Item 3</div>
        <div key="key7">Item 1</div>
        <div key="key8">Item 2</div>
        <div key="key9">Item 3</div>
      </StackGrid>
    );
  }
}
