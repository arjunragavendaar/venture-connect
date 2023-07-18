import {useState} from 'react';
import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Layout from '../src/components/Layout';
import Entrepreneurform from '../src/components/Entrepreneurform';
import Technocratform from '../src/components/Technocratform';
import Investorform from '../src/components/Investorform';
import Companyform from '../src/components/Companyform';
import Managementform from '../src/components/Managementform';
import ProfileData from '../src/data_models/profiledata';
 
export default function  SignUp()  {
	const  [inputValue, setInputValue] =  useState('');
  const [userType,setUserType]=useState(1);

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
  
  function getUserTypeData(event){
    if(event.target.value){
      setUserType(event.target.value);
    }
  }
  const get_entrepreneur_data= (data)=>{
    console.log(data);
  }

  const get_technocrat_data= (data)=>{
    console.log(data);
  }

  const get_investor_data= (data)=>{
    console.log(data);
  }

  const get_company_data= (data)=>{
    console.log(data);
  }

  const get_management_data= (data)=>{
    console.log(data);
  }
	
return  (
  <Layout>

  <div>
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
       <Form.Label>Who you are?</Form.Label>
        <Form.Select className="mb-3" onChange={getUserTypeData} aria-label="Default select example">
        {ProfileData.user_data_val.map((item,index)=>(
          <option value={item.id}>{item.name}</option>
        ))}
       </Form.Select>
       {userType=="1" && <Entrepreneurform func={get_entrepreneur_data}></Entrepreneurform>}
       {userType=="2" && <Technocratform  func={get_technocrat_data}></Technocratform>}
       {userType=="3" && <Investorform  func={get_investor_data}></Investorform>}
       {userType=="4" && <Companyform func={get_company_data}></Companyform>}
       {userType=="5" && <Managementform func={get_management_data}></Managementform>}
     
      <Button variant="outline-dark"  style={{width:"100%",background:"#0070f3",color:"white",border:"none",boxShadow:"0 4px 14px 0 rgba(0, 0, 0, 0.2)"}}>
        Sign Up
      </Button>

    </Form>
    </Stack>

  </div>
  </Layout>
)};
