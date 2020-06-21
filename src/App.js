import React, { Component } from 'react';
import PostCard from './PostCard';
import MenuBar from './MenuBar';
// import axios from 'axios';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          title: "Difficult Project",
          date: "2020 Jun 20",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat iusto optio quae harum autem nostrum iste quia vitae eum excepturi quidem dicta"
        },
        {
          title: "Coding Blog Post",
          date: "2020 Jun 19",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat iusto optio quae harum autem nostrum iste quia vitae eum excepturi quidem dicta"
        },
        {
          title: "Space Related",
          date: "2020 Jun 19",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat iusto optio quae harum autem nostrum iste quia vitae eum excepturi quidem dicta"
        },
        {
          title: "Mars Photos",
          date: "2020 Jun 19",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat iusto optio quae harum autem nostrum iste quia vitae eum excepturi quidem dicta"
        },
        {
          title: "Perseverance Rover",
          date: "2020 Jun 19",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat iusto optio quae harum autem nostrum iste quia vitae eum excepturi quidem dicta"
        },
        {
          title: "Social Distancing in Pandemic",
          date: "2020 Jun 19",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat iusto optio quae harum autem nostrum iste quia vitae eum excepturi quidem dicta"
        },
        {
          title: "The New Normal",
          date: "2020 Jun 19",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat iusto optio quae harum autem nostrum iste quia vitae eum excepturi quidem dicta"
        }
      ]
    }
  }


  displayPostForm = () => {
    
  }

  addPost = () => {
    const copyOfPosts = [...this.state.posts];


  }
  /**
   * 
   */
  componentDidMount() {

  }


  render() {
    const { posts } = this.state;
    return (
      <div className="App App-wrapper">

        <h1>Social Media Planner</h1>
        <main>
        {
          this.state.posts.map( post => {
            return(
              <PostCard
              key={post.title}
              title={post.title}
              date={post.date}
              content={post.content}
              />
            )
          })
        }
        </main>
      <MenuBar />
      </div>
    );
  }
}

export default App;