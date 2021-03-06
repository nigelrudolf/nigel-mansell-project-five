import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faTimes} size="2x"/>

function CloseButton ({ closePostForm }) {
    return <button className="CloseButton" onClick={closePostForm}>{element}</button>;
}

export default CloseButton;