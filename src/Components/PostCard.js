import React, { useState, useEffect } from 'react';
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

  const [panelId, setPanelId] = useState({panelId: ''});
   
  const {title, date, content, deletePost, postId, currentPostOptionPanel, setCurrentPostOptionPanel} = props;

  

  const handleUpdateChange = (event) => {
    const value = event.target.defaultValue;
    setPost({
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

  useEffect(() => {
    if (panelId.panelId !== currentPostOptionPanel.currentPanel) {
      setPostOptionsIsVisible(false);
    }
  }, [currentPostOptionPanel.currentPanel, panelId.panelId])
  
  return (
    <div className="PostCard" >
      <div>
        <h2 className="post-card-heading">{ editPostIsVisible ? inputField : title }</h2>
        <p className="post-card-date">{date}</p>
        <p className="post-card-content">{editPostIsVisible ? textArea : content}</p>
        {editPostIsVisible ? postButton : null}
      </div>
      
      <Chevron
        togglePostOptions={() => togglePostOptions(postId)}
      /> 
      { 
      postOptionsIsVisible ? <PostOptions
        setPostOptionsIsVisible={setPostOptionsIsVisible}
        deletePost={deletePost}
        editPost={editPost}
      /> : null}
    </div>
  );

}

export default PostCard;