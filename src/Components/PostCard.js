import React, { useState, Component } from 'react';
import Chevron from './Chevron';
import PostOptions from './PostOptions';
import UpdateButton from './UpdateButton';

function PostCard(props) {
  const [post, setPost] = useState({
    title: '',
    content: '',
  });

  const [postOptionsIsVisible, setPostOptionsIsVisible] = useState(false);

  const [editPostIsVisible, setEditPostIsVisible] = useState(false);

  const [panelId, setPanelId] = useState('');

   
  const {title, date, content, deletePost, postId, mainPanelId, updateMainPanel} = props;

  const handleUpdateChange = (event) => {
    const value = event.target.defaultValue;
    setPost({
      [event.target.name]: value,
    });
  }

  const displayPostOptions = () => {
    setPostOptionsIsVisible(true);
    setEditPostIsVisible(false);
  }

  const editPost = () => {
    setEditPostIsVisible(true);
    setPostOptionsIsVisible(false);
  }

  const togglePostOptions = (panelId) => {
    setPostOptionsIsVisible(true);
    setEditPostIsVisible(false);
    setPanelId(panelId);
    updateMainPanel(panelId);
  }

  const inputField = <input 
    value={post.title}
    onChange={handleUpdateChange}
    name="title"
    type="text"

    className="title-input" 
  />;

  const textArea = <textarea 
      value={post.content}
      onChange={handleUpdateChange}
      name="content"
  />;


  const postButton = <div className="ModalFooter"><UpdateButton handleUpdateChange={handleUpdateChange} /></div>

  return (
    <div className="PostCard">
      <div>
        <h2 className="post-card-heading">{ editPostIsVisible ? inputField : title }</h2>
        <p className="post-card-date">{date}</p>
        <p className="post-card-content">{editPostIsVisible ? textArea : content}</p>
        {editPostIsVisible ? postButton : null}
      </div>
      
      <Chevron 
        // displayPostOptions={this.displayPostOptions}
        togglePostOptions={() => togglePostOptions(postId, mainPanelId)}
      /> 
      { 
      postOptionsIsVisible ? <PostOptions 
        deletePost={deletePost}
        editPost={editPost}
      /> : null}
    </div>
  );

}

export default PostCard;