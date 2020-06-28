import React, { Component } from 'react';



class UpdateButton extends Component {
    render() {
        
        return (
            <button className="UpdateButton" onClick={(event) => {this.props.handleClick(event, this.props.userInput); this.props.clearInput();}}>Update</button>
            )
        }
}

export default UpdateButton;