import { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import {Textarea} from "@nextui-org/react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './CommentForm.module.scss';
import { MdOutlineSend } from "react-icons/md";
import AvatarWithTextbox from '../AvatarWithTextbox';
import styles from './CommentForm.module.scss';
const CommentForm = ({ label="add", initialValue="" , func, parentId = null, level  }) => {
  const [message, setMessage] = useState(initialValue)

  const handleSubmit = (e) => {
    e.preventDefault();
    func(message);
    setMessage("");
 };

  return (
    <form onSubmit={handleSubmit}>
      <div  className={styles.textareaContainer}>
      <AvatarWithTextbox level={level} type = {"commentForm"} height={100} setMessage={setMessage} message = {message} visible={false} text="Add your comment..."/>
      {message && <button className={styles.postButton} type="submit">
        Post
      </button>}
      </div>
    </form>
  );
};
export default CommentForm;
