import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MyComponent} from './symptopmnfo';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
      <MyComponent></MyComponent>
      </div>
    );
  }
}