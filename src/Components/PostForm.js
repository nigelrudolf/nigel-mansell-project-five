import React, { useState, useRef } from 'react';
import CloseButton from './CloseButton';
import PostButton from './PostButton';
import useOutsideAlerter from '../Hooks/useOutsideAlerter';

function PostForm({closePostForm, handleClick}) {

    const [userInput, setUserInput] = useState({
        title: '',
        date: '',
        content: '',
    });

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, () => closePostForm());

    const handleChange = (event) => {
        const value = event.target.value;
        const date = new Date().toDateString();
        setUserInput({
            ...userInput,
            [event.target.name]: value,
            date: date,
        });        
    }


    const clearInput = () => {
        setUserInput({
            ...userInput,
            title: '',
            content: '',
        });
    }

    return (
        <div className="modal-wrapper">
            <div ref={wrapperRef} className="Modal">
                <div className="ModalHeader">
                    <CloseButton 
                        closePostForm={closePostForm}
                        />
                </div>
                <form className="PostForm">
                   
           
                    <input
                        value={userInput.title}
                        onChange={handleChange}
                        name="title"
                        type="text"
                        

                        placeholder="Title"
                        className="title-input"
                    />
                    <textarea
                        value={userInput.content}
                        onChange={handleChange}
                        name="content"
                        type="text"

                        placeholder="What's your idea"
                    />
                </form>
                <div className="ModalFooter">
                    <PostButton
                        handleClick={handleClick}
                        userInput={userInput}

                        clearInput={clearInput}
                    />
                </div>
            </div>
        </div>
    )
}

export default PostForm;