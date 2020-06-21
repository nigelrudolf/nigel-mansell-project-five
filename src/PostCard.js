import React, { Component } from 'react';

class PostCard extends Component {
  render() {
    const { title, date, content } = this.props;
    return (
      <div key={title} className="PostCard">
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{content}</p>
      </div>
    );
  }
}

export default PostCard;