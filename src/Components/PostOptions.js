import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';
import useOutsideAlerter from '../Hooks/useOutsideAlerter';

const trash = <FontAwesomeIcon icon={faTrashAlt} size="1x"/>
const edit = <FontAwesomeIcon icon={faEdit} size="1x"/>


function PostOptions({editPost, deletePost, setPostOptionsIsVisible}) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, () => setPostOptionsIsVisible(false));

    return (
        <div  ref={wrapperRef} className="PostOptionsModal">
            <ul>
                <li><button onClick={() => editPost()}>{edit} Edit</button></li>
                <li><button onClick={() => deletePost()}>{trash} Delete</button></li>
            </ul>
        </div>
        )
}

export default PostOptions;