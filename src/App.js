import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MyComponent} from './symptopmnfo';
import {MyTitle1} from './WarningHeader.js';
import Card from './Cards/CardsUI.js';
import Cards from './Cards/Cards';
export class App extends React.Component {
  render() {
    return (
      <div className="App">
      {/* <MyTitle1></MyTitle1> */}
      {/* <MyComponent></MyComponent> */}
      {/* <Card></Card> */}
      <Cards></Cards>
      </div>
    );
  }
}