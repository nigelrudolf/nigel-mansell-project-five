import React, { useState, useEffect } from 'react';
import Chevron from './Chevron';
import PostOptions from './PostOptions';


function PostCard(props) {

  const [postOptionsIsVisible, setPostOptionsIsVisible] = useState(false);

  const [editPostIsVisible, setEditPostIsVisible] = useState(false);

  const [panelId, setPanelId] = useState({panelId: ''});
   
  const {title, date, content, deletePost, postId, currentPostOptionPanel, setCurrentPostOptionPanel} = props;

  const [userInput, setUserInput] = useState({
    title: title,
    content: content,
  });

  const handleUpdateChange = (event) => {
    const value = event.target.value;
        setUserInput({
            ...userInput,
            [event.target.name]: value,
        });        
  }

  const editPost = () => {
    setEditPostIsVisible(true);
    setPostOptionsIsVisible(false);
  }

  const togglePostOptions = (postId) => {
    let panelId = postId;
    setPostOptionsIsVisible(true);
    setEditPostIsVisible(false);

    setPanelId({panelId: panelId});

    setCurrentPostOptionPanel({currentPanel: panelId})

  }

  const cancelEditPost = () => {
    setEditPostIsVisible(false);
  }

  const displayPost = () => {
    return (
      <>
      <div className="display-post">
        <h2 className="post-card-heading">{title}</h2>
        <p className="post-card-date">{date}</p>
        <p className="post-card-content">{content}</p>
      </div>
      <Chevron togglePostOptions={() => togglePostOptions(postId)}/> 
      </>
    )
  }

  const displayEditPost = () => {

  return (
    <form className="display-edit-post">
      <input 
        value={userInput.title}
        onChange={handleUpdateChange}
        name="title"
        type="text"
        className="edit-title-input" 
      />
      <p className="post-card-date">{date}</p>
      <textarea
        value={userInput.content}
        onChange={handleUpdateChange}
        name="content"
        className="edit-textarea"
      />
      <div className="display-edit-post-footer">
        <button className="cancel-update-button" onClick={cancelEditPost}>Cancel</button> 
        <button className="update-button" type="submit">Update</button>
      </div>
    </form>
    )
  }  

  useEffect(() => {
    if (panelId.panelId !== currentPostOptionPanel.currentPanel) {
      setPostOptionsIsVisible(false);
    }
  }, [currentPostOptionPanel.currentPanel, panelId.panelId])
  
  return (
    <div className="PostCard">
      {editPostIsVisible ? displayEditPost() : displayPost() }
      
      { postOptionsIsVisible ? <PostOptions
        postOptionsIsVisible={postOptionsIsVisible}
        setPostOptionsIsVisible={setPostOptionsIsVisible}
        deletePost={deletePost}
        editPost={editPost}
      /> : null}
    </div>
  );
}

export default PostCard;