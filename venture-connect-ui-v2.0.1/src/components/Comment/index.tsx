import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";
import CommentForm from "../CommentForm";
import API_ENDPOINTS from '../../utils/api';
import avatarpic from "../../images/avatar.jpeg";
import AvatarWithTextbox from "../AvatarWithTextbox";
import { FaGlasses } from "react-icons/fa";
// comment,
//   currentUserId,
//   deleteComment,
//   addComment,
//   updateComment,
//   activeComment,
//   setActiveComment
const Comment = (props) => {
    const [avatar, setAvatar] = useState(null);
    const [replies, setReplies] = useState([]);
    const [type, setType] = useState("commentDisplay");
    const [isReplyButtonClicked, setIsReplyButtonClicked] = useState(false);
    const [isEditButtonClicked, setIsEditButtonClicked] = useState(false);
    const currentUserId = 1;
    // useEffect(() => {
    //   const getAvatar = async () => {
    //     const { data } = await axios.get(`${API_ENDPOINTS.GET_USER}/comment.author.id`);
    //     const buffer = Buffer.from(data);
    //     setAvatar(buffer.toString('base64'));
    //   };
    //   getAvatar();
    // }, [comment.author.id]);


    const handleReplyButtonClick = (commentId) => {
      props.setActiveComment({id:commentId , type: "reply"})
      setIsEditButtonClicked(false);
      setType("commentDisplay");
      setIsReplyButtonClicked(true);
    };

    const handleEditButtonClick = (commentId) => {
      props.setActiveComment({id: commentId, type: "edit"})
      setIsReplyButtonClicked(false);
      setIsEditButtonClicked(true);
      setType("commentForm");
    };
  
    const handlePostClick = (commentId) => {
      axios
        .get(`${API_ENDPOINTS.COMMENTS_GET}/${commentId}`)
        .then((response) => {
          setReplies(response.data);
        })
        .catch((error) => {
          console.error('Failed to fetch replies:', error);
        });
    };
  return (
    <div className="comment">
    <div className="header">
      {type === "commentForm" && (props.activeComment &&
            props.activeComment.type === "edit" &&
            props.activeComment.id === props.comment.id) && (isEditButtonClicked)? <CommentForm func={props.updateComment} level={0} initialValue={props.comment.body} label="update"/>  : <AvatarWithTextbox type = {type} height={120} message = {props.comment.body} visible={false}/>}
      <div className="actions">
        {props.comment.userId && (
      <button onClick={() => handleReplyButtonClick(props.comment.id)}>
      Reply
      </button>
    )}
    {/* author id of the comment should match currentuserid for him to edit */}
    {props.comment.userId === currentUserId && (
        <button onClick={() => handleEditButtonClick(props.comment.id)}>
          Edit
        </button>)}
    {currentUserId === props.comment.userId && (
        <button onClick={() => props.deleteComment(props.comment.id)}>
          Delete
        </button>)}
    {isReplyButtonClicked &&
    props.activeComment &&
    props.activeComment.type === "reply" &&
    props.activeComment.id === props.comment.id && (
    <CommentForm func={props.addComment} level={1} parentId={props.comment.id} />
  )}
    </div>
    <div className="replies">
      {
        props.comment.repliesCount > 0 && (
          <button onClick={() => handlePostClick(props.comment.id)}>
            View {props.comment.repliesCount} Replies
          </button>
        )
      }

    </div>
    </div>

    {/* <div className="actions">
    </div>
    <div>
    {replies.length >0 && 
    replies.map((reply)=>(
      <Comment
            comment={reply}
            currentUserId={currentUserId}
            deleteComment={deleteComment}
            addComment={addComment}
            updateComment={updateComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
          />
    ))}
    </div> */}
    </div>

  );
};

export default Comment;