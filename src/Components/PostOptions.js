import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';

const trash = <FontAwesomeIcon icon={faTrashAlt} size="1x"/>
const edit = <FontAwesomeIcon icon={faEdit} size="1x"/>

function PostOptions({editPost, deletePost, setPostOptionsIsVisible}) {
    return (
        <div className="PostOptionsModal" onClick={() => setPostOptionsIsVisible(false)}>
            <ul>
                <li><button onClick={() => editPost()}>{edit} Edit</button></li>
                <li><button onClick={() => deletePost()}>{trash} Delete</button></li>
            </ul>
        </div>
        )
}

export default PostOptions;