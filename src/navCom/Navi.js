import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'

export default class Navi extends Component{
    render() {
        console.log("Hey");
        return(
            <Navbar bg="dark" expand="lg">
            <Navbar.toggle aria-controls="basic-navbar-nav"></Navbar.toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/">HOME</NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/commentOverview">CONNECT</NavLink>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}
