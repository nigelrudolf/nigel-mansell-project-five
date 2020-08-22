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
                <form className="PostForm" onSubmit={(event) => {handleClick(event, userInput); clearInput();}}>
                    <input
                        value={userInput.title}
                        onChange={handleChange}
                        name="title"
                        type="text"
                        required
                        placeholder="Title"
                        className="title-input"
                    />
                    <textarea
                        value={userInput.content}
                        onChange={handleChange}
                        name="content"
                        type="text"
                        required
                        placeholder="What's your idea"
                    />
                    <div className="ModalFooter">
                    <PostButton/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PostForm;