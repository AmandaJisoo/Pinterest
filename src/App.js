import React from 'react';
// import './App.css';
import {MyComponent} from './symptopmnfo';
import {MyTitle1} from './WarningHeader.js';
// import Card from './Cards/CardUI.js/index.js';
import Cards from './Cards/Cards';
import CommentOverview from './experience/CommentOverview'
export class App extends React.Component {
  //for index1
  // render() {
  //   return (
  //     <div className="App">
  //     <MyTitle1></MyTitle1>
  //     <Cards></Cards>
  //     </div>
  //   );
  // }
  render() {
    return(
      <CommentOverview></CommentOverview>
    )
  }
}