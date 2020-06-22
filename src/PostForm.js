import React from 'react';
import CloseButton from './CloseButton';
import PostButton from './PostButton';

const PostForm = () => {
    return (
        <div className="Modal">
            <div className="ModalHeader">
                <CloseButton />
            </div>
            <form className="PostForm">
                <input className="title-input" type="text" placeholder="Title"></input>
                <textarea placeholder="What's your idea"></textarea>
            </form>
            <div className="ModalFooter">
                <PostButton />
            </div>
        </div>
    )
}

export default PostForm;