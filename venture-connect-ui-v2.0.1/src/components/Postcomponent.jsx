import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comments  from './Comments';
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
import { Image, Shimmer } from 'react-shimmer';
import API_ENDPOINTS from '../utils/api';
import Images from './PictureGrid';

function Postcomponent(props) {
    const [showComments, setShowComments] = useState(false);
    const [posts, setPosts] = useState([])
    const handleCommentClick = () => {
      setShowComments(!showComments);
    };
  
    return (
      <div id="base-post">
        <Container>
          <Row>
            <Col id="r1c1">
              <Avatar src={API_ENDPOINTS.PROFILEPICVIEW + props.prof}></Avatar>&nbsp;
              <b id="r1c1t">{props.name}</b>
            </Col>
            <Col id="r1c2">
              <MoreVertOutlinedIcon color="disabled" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col id="r2c1">
              <text>{props.content}</text>
            </Col>
          </Row>
          <Row>
            <Col id="r3c1img" style={{position:"relative", width:"100%", height:"600px"}}>
              <Images media={props.media}/>
            </Col>
          </Row>
          <hr />
          <Row xs="auto">
            <Col id="r4c1">
              <FavoriteBorderOutlinedIcon />
            </Col>
            <Col id="r4c2" onClick={handleCommentClick}>
              <ForumOutlinedIcon />
            </Col>
            <Col id="r4c3">
              <SendOutlinedIcon />
            </Col>
          </Row>
          {showComments && <Row id="comments" style={{position:"relative", width:"100%", height:"100%"}}>
            <Comments currentUserId={""}  post_id={""}/>
          </Row>}
        </Container>
      </div>
    );
}

export default Postcomponent;