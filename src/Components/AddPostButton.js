import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faPen} size="2x"/>;

class AddPostButton extends Component {
    render() {
        const {displayPostForm} = this.props;
        return (
                <button className="AddPostButton" onClick={displayPostForm}>{element}</button>
                )
        }
}

export default AddPostButton;