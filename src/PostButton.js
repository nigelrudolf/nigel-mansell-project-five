import React, { Component } from 'react';



class PostButton extends Component {
    render() {
        
        return (
            <button className="PostButton" onClick={(event) => {this.props.handleClick(event, this.props.userInput); this.props.clearInput();}}>Post</button>
            )
        }
}

export default PostButton;