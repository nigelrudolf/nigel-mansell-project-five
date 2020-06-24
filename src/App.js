import React, { Component } from 'react';
import * as firebase from 'firebase';
import PostForm from './PostForm';
import PostCard from './PostCard';
import MenuBar from './MenuBar';

// import axios from 'axios';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      postFormIsVisible: false,
      editPostIsVisible: false
    }
  }


  displayPostForm = () => {
    const postFormIsVisible = this.state.postFormIsVisible;
    this.setState({
      postFormIsVisible: true,
    });
  }

  closePostForm = () => {
    const postFormIsVisible = this.state.postFormIsVisible;
    this.setState({
      postFormIsVisible: false,
    });
  }
  

  handleClick = (event, userInput) => {
    event.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.push(userInput);

    this.setState({
      postFormIsVisible: false
    })
    
  }

  
  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyCW9UhpevFkU0UtsuAfGOs1krgLdqAjVYM",
      authDomain: "social-media-planner-2fe20.firebaseapp.com",
      databaseURL: "https://social-media-planner-2fe20.firebaseio.com",
      projectId: "social-media-planner-2fe20",
      storageBucket: "social-media-planner-2fe20.appspot.com",
      messagingSenderId: "995865750758",
      appId: "1:995865750758:web:333fa1a679a8dc0e63df27"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  

    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const newState = [];
      const data = response.val();

      console.log(data);

      for (let key in data) {
        newState.push({
          post: data[key],
          id: key
        })
      }


      this.setState({
        posts: newState,
      });
    });
    
  }

  componentDidUpdate(){

  }


  render() {
    
    return (
      <div className="App App-wrapper">

        <h1>Social Media Planner</h1>
        <main>
        {this.state.posts.map((post) => {
            return (
              <PostCard
              key={post.id}
              title={post.post.title}
              date={post.post.date}
              content={post.post.content}
              />
            )
          })}
        { this.state.postFormIsVisible ? <PostForm
          closePostForm={this.closePostForm}
          handleClick={this.handleClick}
        /> : null }
        </main>
      
        <MenuBar 
          displayPostForm={this.displayPostForm}
        />
      </div>
    );
  }
}

export default App;