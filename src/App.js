import React, { useState, useEffect } from 'react';
import firebase from './Components/firebase';
import MediaSort from './Components/MediaSort';
import PostForm from './Components/PostForm';
import PostCard from './Components/PostCard';
import MenuBar from './Components/MenuBar';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [postFormIsVisible, setPostFormIsVisible] = useState(false);
  const [editPostIsVisible, setEditPostIsVisible] = useState(false);
  const [currentPostOptionPanel, setCurrentPostOptionPanel] = useState({
    currentPanel: '',
  });

  const displayPostForm = () => {
    setPostFormIsVisible(true);
    document.querySelector('body').setAttribute('style', 'overflow: hidden');
  }

  const closePostForm = () => {
    setPostFormIsVisible(false);
    document.querySelector('body').removeAttribute('style');
  }

  const editPost = (postId) => {
    console.log(`editing ${postId}`);
    setEditPostIsVisible(true);
  }

  const deletePost = (postId) => {
    const dbRef = firebase.database().ref();
    dbRef.child(postId).remove();
  }  

  const handleClick = (event, userInput) => {
    event.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.push(userInput);
    closePostForm();
  }

  const handleUpdateClick = (event, userInput) => {
    event.preventDefault();
    const dbref = firebase.database().ref();
    dbref.update(userInput);
    // firebase.database().ref('/-LYYnjbTOR0Qq03ehjb1').update(settingToChange);
  }

  useEffect(() => {
      const dbRef = firebase.database().ref();

      dbRef.on('value', (response) => {
        const newState = [];
        const data = response.val();

        for (let key in data) {
          newState.push({
            post: data[key],
            id: key
          })
        }
        setPosts(newState);
      });  
  }, []);

  return (
    <div className="App App-wrapper">

      <h1 className="logo">Social Media Planner</h1>
      <main>
      <MediaSort />
      {posts.map((post) => {
          return (
            <PostCard
            key={post.id}
            title={post.post.title}
            date={post.post.date}
            content={post.post.content}
            deletePost={() => deletePost(post.id)}
            editPost={() => editPost(post.id)}
            postId={post.id}
            currentPostOptionPanel={currentPostOptionPanel}
            setCurrentPostOptionPanel={setCurrentPostOptionPanel}
            />
          )
        })}
      { postFormIsVisible ? <PostForm
        closePostForm={closePostForm}
        handleClick={handleClick}
      /> : null }
      </main>
    
      <MenuBar 
        displayPostForm={displayPostForm}
      />
    </div>
  );

}

export default App;