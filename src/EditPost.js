import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';

const trash = <FontAwesomeIcon icon={faTrashAlt} size="1x"/>
const edit = <FontAwesomeIcon icon={faEdit} size="1x"/>

class EditPost extends Component {
    render() {
        
        return (
            <div className="EditPostModal">
                <ul>
                    <li><button>{edit} Edit</button></li>
                    <li><button>{trash} Delete</button></li>
                </ul>
            </div>
            )
    }
}

export default EditPost;