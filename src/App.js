import React from 'react';
import './App.css';
import {MyComponent} from './symptopmnfo';
import {MyTitle1} from './WarningHeader.js';
import {HashRouter as Router, Route, Link} from "react-router-dom";
// import Card from './Cards/CardUI.js/index.js';
import Cards from './Cards/Cards';
import CommentOverview from './experience/CommentOverview';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Divider} from '@material-ui/core';
import Navbar from './NavCom/Navbar';

export class App extends React.Component {
    // for index1 fix image render() {   return (     <div className="App">
    // <MyTitle1></MyTitle1>     <Cards></Cards>     </div>   ); } return( )
    //         <CommentOverview class="centered"></CommentOverview>
    render() {
        return (
            <Router>
                <div className="container">
                    <Link to="/">Home</Link>
                    {' '}
                    <Link to="/projects">Connect</Link>
                    {' '}
                    <Link to="/about">About</Link>
                    <Route exact="exact" path="/" component={Cards}/>
                    <Route path="/projects" component={CommentOverview}/> {/* <Route path="/about" component={ About } /> */}
                </div>
            </Router>
        );
    }
}