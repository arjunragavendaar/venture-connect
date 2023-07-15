import {useState} from 'react';
import axios from 'axios';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Home from 'pages/Home.jsx'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Routes, Route, Navigate, useLocation,Link, Router } from "react-router-dom";

 
export default function  ControlledComponent()  {
	const  [inputValue, setInputValue] =  useState('');

	const  handleChange = (event) => {
		setInputValue(event.target.value);
	};
  const  save = (event) => {
	event.preventDefault();
		const form_obj = {
			name:inputValue
		  };
		  const csrftoken = getCookie('csrftoken');
		  const config = {
			headers: {
			  'Content-Type': 'application/json',
			  'X-CSRFToken': csrftoken,	
			  
			}
		  };
	
		axios.post('http://127.0.0.1:8000/venture_connect_services/add',form_obj,config).then(function(response){
			console.log(response);
		})
	};


	function getCookie(name) {
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${name}=`);
		if (parts.length === 2) return parts.pop().split(';').shift();
	}
	

return  (
  <div>
   
   {/* <li>
      <Link to="/pages/SignIn">Sign In</Link>
    </li>
    <li>
      <Link to="/pages/SignUp">Sign Up</Link>
    </li> */}

{['sm'].map((expand,index) => (
        <Navbar key={expand} expand={expand} className="bg-body-primary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Venture Connect</Navbar.Brand>
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
                  <Nav.Link href="/pages/SignIn">Login</Nav.Link>
                  <Nav.Link href="/pages/SignUp">Sign Up</Nav.Link>
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
   
  <Routes>
  
        <Route path="/pages/SignUp" element={<SignUp />} />
        <Route path="/pages/SignIn" element={<SignIn />} />
        <Route path="/" element={<Home/>}  />
      </Routes>
     
    {/* <form>
      <label>Input Value:
      <input  type="text"  value={inputValue} onChange={handleChange} />
      </label>
      <p>Input Value: {inputValue}</p>
      <button onClick={save}>Submit</button>
      </form> */}
  </div>
)};
