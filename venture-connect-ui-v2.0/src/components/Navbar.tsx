import {useState} from 'react';
import axios from 'axios';
// import SignIn from 'pages/SignIn';
// import SignUp from 'pages/SignUp';
// import Home from 'pages/Home.jsx'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';


// import { Routes, Route, Navigate, useLocation,Link, Router } from "react-router-dom";

 
const NavBar = (): JSX.Element => {
	const  [inputValue, setInputValue] =  useState('');

	const  handleChange = (event) => {
		setInputValue(event.target.value);
	};


	// function getCookie(name) {
	// 	const value = `; ${document.cookie}`;
	// 	const parts = value.split(`; ${name}=`);
	// 	if (parts.length === 2) 
    //     return parts.pop().split(';').shift();
	// }
	

return  (
  <div>

{['sm'].map((expand,index) => (
        <Navbar key={expand} expand={expand} className="bg-body-primary mb-3">
          <Container fluid>
            <Navbar.Brand href="/Home"><b>Venture Connect</b></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Venture Connect
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/SignIn">Login</Nav.Link>
                  <Nav.Link href="/SignUp">Sign up</Nav.Link>
                  <NavDropdown
                    title="Account"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Settings
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-dark">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
  </div>
)};
export default NavBar;
