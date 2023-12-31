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
import Postcomponent from './Postcomponent';
export default function Feedoptions()  {
return  (
    <div>
 <div id="base-feed-options">
     <Container>
        <Row>
        <Col id="wpostcol">
    <div id="wpost">
    <DriveFileRenameOutlineOutlinedIcon color="disabled"/>
    <text id="wtext">Start your venture .....</text>
    </div>
    </Col>
    {/* <Col id="wtextmain">
    <text id="wtext">Start your venture .....</text>
    </Col> */}
    </Row>
    <hr />
    <Row>
        <Col><AddPhotoAlternateOutlinedIcon color="disabled"/><text id="wtext">Write a pitch</text></Col>
        <Col><VideocamOutlinedIcon color="disabled"/><text id="wtext">Collaborate</text></Col>
        <Col><EventAvailableOutlinedIcon color="disabled"/><text id="wtext">Event</text></Col>
        <Col><ArticleOutlinedIcon color="disabled"/><text id="wtext">Article</text></Col>
    </Row>
    </Container>
 </div>
 <br></br>

 <Postcomponent name="Elon Musk" prof="EM" color="blue" content="Entrepreneur Elon Musk has achieved global fame as the chief executive officer (CEO) of electric automobile maker Tesla (TSLA) and the private space company SpaceX. Musk was an early investor in several tech companies, and in October 2022, he completed a deal to take X (formerly Twitter) private.

His success and personal style have given rise to comparisons to other colorful tycoons from U.S. history, including Steve Jobs, Howard Hughes, and Henry Ford. He was named the richest person in the world in 2021, surpassing Amazon (AMZN) founder Jeff Bezos.
1
 Musk is the richest person in the world as of September 2023." src="https://image.cnbcfm.com/api/v1/image/104633824-GettyImages-494587915.jpg?v=1533671450"></Postcomponent><br></br>
  <Postcomponent name="Tech Crunch" prof="TC" color="orange" content="Tech Crunch | @TechCrunch. You've probably heard of it before, and for good reason. Tech Crunch is one of the leading platforms for technology-related updates catered to founders and startups." src=""></Postcomponent><br></br>
 <Postcomponent name="Mark Zuck" prof="MZ" color="purple" content="Brand New Oculus #meta #mark #facebook" src="https://image.cnbcfm.com/api/v1/image/107121537-1663699194580-gettyimages-612997102-OCULUS_CONNECT.jpeg?v=1694264401"></Postcomponent>
 </div>
)};
