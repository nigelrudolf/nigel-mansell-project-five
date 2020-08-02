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
        postOptions: {
          postOptionsIsVisible: false,
          
        },
        editPost: {
          editPostIsVisible: false,
        },
        panelId: {
          panelId: ""
        }
    }
}

handleUpdateChange = (event) => {
  const value = event.target.defaultValue;

  this.setState({
      [event.target.name]: value,
  })
}

displayPostOptions = () => {
  this.setState({
    postOptions: {
    postOptionsIsVisible: true
    }
  });
  this.setState({
    editPost: {
      editPostIsVisible: false
    }
  })

}

editPost = () => {
  this.setState({
    editPost: {
    editPostIsVisible: true
    }
  });
  this.setState({
    postOptions: {
      postOptionsIsVisible: false
    }
  });
}

// closePostOptions = () => {
//   this.setState({
//     postOptionsIsVisible: false
//   });
// }

togglePostOptions = (panelId) => {
  // In order to achieve only one options panel being vibile at the same time
  // this component needs to reference some global shared state perhaps App.js
  // in order to be able to see which panel is open and closing the others

  // let panel = "asdasdasd";
  // let visible = true;
  
  // if ( this.state.postOptions.postOptionsIsVisible && this.state.panelId.panelId !== panel ) {
  //   this.setState({
  //     postOptions: {
  //       postOptionsIsVisible: false
  //     } 
  //   })
  // }

  this.setState({
    postOptions: {
    postOptionsIsVisible: true
    }
  });
  this.setState({
    editPost: {
      editPostIsVisible: false
    }
  })
  this.setState({
    pandelId: {
      panelId,
    }
  })
  this.props.updateMainPanel(panelId);
  
}




render() {
  const { title, date, content, deletePost, postId, mainPanelId } = this.props;

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
        <h2 className="post-card-heading">{ this.state.editPost.editPostIsVisible ? inputField : title }</h2>
        <p className="post-card-date">{date}</p>
        <p className="post-card-content">{this.state.editPost.editPostIsVisible ? textArea : content}</p>
        {this.state.editPost.editPostIsVisible ? postButton : null}
      </div>
      
      <Chevron 
        // displayPostOptions={this.displayPostOptions}
        togglePostOptions={() => this.togglePostOptions(postId, mainPanelId)}
      /> 
      { 
      this.state.postOptions.postOptionsIsVisible ? <PostOptions 
        deletePost={deletePost}
        editPost={this.editPost}
      /> : null}
    </div>
  );
}
}

export default PostCard;