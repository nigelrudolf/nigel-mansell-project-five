import React, { Component } from 'react';
import Chevron from './Chevron';
import EditPost from './EditPost';

class PostCard extends Component {
  constructor() {
    super();
    this.state = {
        editPostIsVisible: false
    }
}

displayEditPost = () => {
  this.setState({
    editPostIsVisible: true
  });
}

closeEditPost = () => {
  this.setState({
    editPostIsVisible: false
  });
}

  render() {
    const { title, date, content } = this.props;
    return (
      <div className="PostCard">
        <div>
          <h2>{title}</h2>
          <p>{date}</p>
          <p>{content}</p>
        </div>
        
        <Chevron 
          displayEditPost={this.displayEditPost}
        /> 
        {this.state.editPostIsVisible ? <EditPost /> : null}
        
      
      </div>
    );
  }
}

export default PostCard;