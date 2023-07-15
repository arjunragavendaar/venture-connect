import {useState} from 'react';
import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
 
export default function  SignUp()  {
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
    {/* <form>
        <label>Sign Up</label>
      <label>Input Value:
      <input  type="text"  value={inputValue} onChange={handleChange} />
      </label>
      <p>Input Value: {inputValue}</p>
      <button onClick={save}>Submit</button>
      </form> */}

<Stack className="col-md-5 mx-auto">
<Form>
      
<h2 className="text-center"><b>Sign Up</b></h2>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
     
      <Button variant="outline-dark" type="submit" style={{width:"100%"}}>
        Sign Up
      </Button>

    </Form>
    </Stack>

  </div>
)};
