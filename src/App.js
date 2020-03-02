import React from 'react';
import './App.css';
import {MyComponent} from './symptopmnfo';
import {MyTitle1} from './WarningHeader.js';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
// import Card from './Cards/CardUI.js/index.js';
import Cards from './Cards/Cards';
import CommentOverview from './experience/CommentOverview';
import Navi from './navCom/Navi.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Divider} from '@material-ui/core';

import ReactDOM from 'react-dom'
 
// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
 
// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
 
// import reducers from './reducers' 

export class App extends React.Component {
    // for index1 fix image render() {   return (     <div className="App">
    // <MyTitle1></MyTitle1>     <Cards></Cards>     </div>   ); } return( )
    //         <CommentOverview class="centered"></CommentOverview>
    render() {
        return (        
            <BrowserRouter>
               <div className="container">
                   <h3 className= "m-3 d-flex justify-content-center">
                       This is Nav bar
                   </h3>
                   <h5 className= "m-3 d-flex justify-content-center">
                    Check
                   </h5>
                   {/* this Navi is not working */}
                    {/* <Navi></Navi> */}
                    <Switch>
                    <Route exact path='/' component={Cards} />
                    <Route exact path='/commentOverview' component={CommentOverview} />
                    </Switch>
                </div>
            </BrowserRouter> 
        );
    }
}
