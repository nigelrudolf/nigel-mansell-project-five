import React, { Component } from 'react';
import CloseButton from './CloseButton';
import PostButton from './PostButton';

class PostForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            date: '',
            content: ''
        }
    }

    handleChange = (event) => {
        const value = event.target.value;
        
        const date = new Date().toDateString();
        
        this.setState({
            [event.target.name]: value,
            [event.target.name]: value,
            date: date
        })
      }
      
    clearInput = () => {
        this.setState({
            title: '',
            date: '',
            content: ''
        })
    }  



    render() {
        const {closePostForm, handleClick} = this.props;
        return (
            <div className="modal-wrapper">
                <div className="Modal">
                    <div className="ModalHeader">
                        <CloseButton 
                            closePostForm={closePostForm}
                            />
                    </div>
                    <form className="PostForm">
                        <input
                            value={this.state.title}
                            onChange={this.handleChange}
                            name="title"
                            type="text"

                            placeholder="Title"
                            className="title-input"
                        />
                        <textarea
                            value={this.state.content}
                            onChange={this.handleChange}
                            name="content"

                            placeholder="What's your idea"
                        />
                    </form>
                    <div className="ModalFooter">
                        <PostButton
                            handleClick={handleClick}
                            userInput={this.state}
                            clearInput={this.clearInput}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default PostForm;