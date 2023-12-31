import {useState} from 'react';
import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileData from '../data_models/profiledata';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { Container, Row, Col } from 'react-bootstrap';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Avatar from '@mui/material/Avatar';
import { blue, deepPurple } from '@mui/material/colors';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
export default function Postcomponent(props)  {
return  (
 <div id="base-post">
   <Container>
    <Row>
        <Col id="r1c1"><Avatar sx={{ bgcolor: blue[500] }}>{props.prof}</Avatar> &nbsp;<b id="r1c1t">{props.name}</b></Col>
       
        <Col id="r1c2"><MoreVertOutlinedIcon color="disabled"/></Col>
    </Row>
    <br></br>
    <Row>
        <Col id="r2c1">
        <text>{props.content}</text>
        </Col>
    </Row>
    <Row>
        <Col>
        <img id ="r3c1img" src={props.src}></img>
        </Col>
    </Row>
    <hr />
    <Row xs="auto">
    <Col id="r4c1"><FavoriteBorderOutlinedIcon/></Col>
    <Col id="r4c2"><ForumOutlinedIcon /></Col>
    <Col id="r4c3"><SendOutlinedIcon /></Col>
      </Row>
   </Container>
 </div>
)};
