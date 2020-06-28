import React, { Component } from 'react';
import Chevron from './Chevron';
import PostOptions from './PostOptions';
import UpdateButton from './UpdateButton';

class PostCard extends Component {
  constructor() {
    super();
    this.state = {
        title: '',
        content: '',

        visible: {
          postOptionsIsVisible: false,
          editPostIsVisible: false,
        }
    }
}

handleUpdateChange = (event) => {
  const value = event.target.defaultValue;

  this.setState({
      [event.target.name]: value,
      [event.target.name]: value,
  })
}

displayPostOptions = () => {
  this.setState({
    visible: {
    postOptionsIsVisible: true
    }
  });
}

editPost = () => {
  this.setState({
    visible: {
    editPostIsVisible: true
    }
  })
}

// closePostOptions = () => {
//   this.setState({
//     postOptionsIsVisible: false
//   });
// }




  render() {
    const { title, date, content, deletePost } = this.props;

    const inputField = <input 
      value={this.state.title}
      onChange={this.handleUpdateChange}
      name="title"
      type="text"

      className="title-input" 
    />;
  
    const textArea = <textarea 
        value={this.state.content}
        onChange={this.handleUpdateChange}
        name="content"
      />;


    const postButton = <div className="ModalFooter"><UpdateButton handleUpdateChange={this.handleUpdateChange} /></div>

    return (
      <div className="PostCard">
        <div>
          <h2 className="post-card-heading">{ this.state.visible.editPostIsVisible ? inputField : title }</h2>
          <p className="post-card-date">{date}</p>
          <p className="post-card-content">{this.state.visible.editPostIsVisible ? textArea : content}</p>
          {this.state.visible.editPostIsVisible ? postButton : null}
        </div>
        
        <Chevron 
          displayPostOptions={this.displayPostOptions}
        /> 
        { this.state.visible.postOptionsIsVisible ? <PostOptions 
          deletePost={deletePost}
          editPost={this.editPost}
        /> : null}
      </div>
    );
  }
}

export default PostCard;