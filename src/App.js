import React, { Component } from 'react';
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
      posts: [
        // {
        //   title: "Difficult Project",
        //   date: "2020 Jun 20",
        //   content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat iusto optio quae harum autem nostrum iste quia vitae eum excepturi quidem dicta"
        // },
        // {
        //   title: "Coding Blog Post",
        //   date: "2020 Jun 19",
        //   content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat iusto optio quae harum autem nostrum iste quia vitae eum excepturi quidem dicta"
        // },
        // {
        //   title: "Space Related",
        //   date: "2020 Jun 19",
        //   content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat iusto optio quae harum autem nostrum iste quia vitae eum excepturi quidem dicta"
        // },
        // {
        //   title: "Mars Photos",
        //   date: "2020 Jun 19",
        //   content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat iusto optio quae harum autem nostrum iste quia vitae eum excepturi quidem dicta"
        // },
        // {
        //   title: "Perseverance Rover",
        //   date: "2020 Jun 19",
        //   content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat iusto optio quae harum autem nostrum iste quia vitae eum excepturi quidem dicta"
        // },
        // {
        //   title: "Social Distancing in Pandemic",
        //   date: "2020 Jun 19",
        //   content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat iusto optio quae harum autem nostrum iste quia vitae eum excepturi quidem dicta"
        // },
        // {
        //   title: "The New Normal",
        //   date: "2020 Jun 19",
        //   content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat iusto optio quae harum autem nostrum iste quia vitae eum excepturi quidem dicta"
        // }
      ],
      postFormIsVisible: false
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
    const postsRef = [...this.state.posts];
    postsRef.push(userInput);

    this.setState({
      posts: postsRef,
      postFormIsVisible: false
    })
    
  }

  /** Used for firebase
   * 
   */
  componentDidMount() {
  
  }

  componentDidUpdate(){
    console.log(this.state.posts);
  }


  render() {
    return (
      <div className="App App-wrapper">

        <h1>Social Media Planner</h1>
        <main>
        {this.state.posts.map((post) => {
            return (
              <PostCard
              key={post.title}
              title={post.title}
              date={post.date}
              content={post.content}
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