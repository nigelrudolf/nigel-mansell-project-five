import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faPen} size="2x"/>

const AddPostButton = () => {
    return (
        <button className="AddPostButton">{element}</button>
    )
}

export default AddPostButton;