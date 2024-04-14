import { useState, useEffect } from "react";
import CommentForm from "../CommentForm";
import Comment from "../Comment";
import './Comments.module.scss';
import axios from 'axios';
import API_ENDPOINTS from '../../utils/api';

const Comments = ({ currentUserId , post_id}) => {
  const [comments, setComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  // Fetching all comments from the API
  useEffect(() => {
 const getComments = async (id) => {
    try {
      const response = await axios.get(`${API_ENDPOINTS.COMMENTS_GET}/${id}`);
      setComments(response.data);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  };
  getComments(post_id);
  }, []);  
  // Creating new comment
  const addComment = (message, author_id, author_name, parentId) => {
    return axios.post(API_ENDPOINTS.COMMENTS_ADD, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        commentText: message,
        id: author_id,
        name: author_name,
        parentId: parentId
      }),
    })
      .then((response) => {
        setComments([response, ...comments]);
        setActiveComment(null);
      })
      .catch((error) => {
        console.error("Failed to add comment:", error);
      });
  };
  

  // Update comment
  const updateComment = async (body, commentId) => {
    try {
      const response = await axios.post(API_ENDPOINTS.COMMENTS_UPDATE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      setComments(
        comments.map((comment) =>
          comment.id === commentId ? { ...comment, body } : comment
        )
      );
      setActiveComment(null);
    } catch (error) {
      console.error("Failed to update comment:", error);
    }
  };

  // Delete comment
  const handleDeleteComment = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this comment?");
    if (confirmed) {
      try {
        const response = await axios.post(API_ENDPOINTS.COMMENTS_DELETE, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(id),
        });
        const newComments = comments.filter((comment) => comment.id !== id);
        setComments(newComments);
        console.log(`Comment ${id} deleted successfully.`);
      } catch (error) {
        console.error(`Failed to delete comment ${id}:`, error);
      }
    }
  };
  // {comments.map((comment) => (
  //   <div key={comment.id}> {/* Parent element wrapping each comment and button */}
  //     <Comment
  //       currentUserId={currentUserId}
  //     />
  //   </div>
  // ))}
  return (
    <div className="comments" style={{ width: '120%',height: '500px' }}>
      <CommentForm level={0} func={addComment}/>
      <Comment
      comment={{
        body:
      "anandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhuanandheuhidhduhrhfdhurhu",
    id: 1,
    userId: 1,

  }}
  activeComment={activeComment}
  setActiveComment={setActiveComment}
  addComment={addComment}
  updateComment={updateComment}
  deleteComment={handleDeleteComment}
  currentUserId={1}
/>
<Comment
comment={{
    body:
      "anurima vaishnavi kumar",
    id : 2,
    userId: 1,
    repliesCount : 7,
  }}
  activeComment={activeComment}
  setActiveComment={setActiveComment}
  addComment={addComment}
  updateComment={updateComment}
  deleteComment={handleDeleteComment}
  currentUserId={1}
/>


    </div>
  
  );
};
  
export default Comments;
