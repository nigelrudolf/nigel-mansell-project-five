import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';
import useOutsideAlerter from '../Hooks/useOutsideAlerter';
import {useTransition, animated} from 'react-spring'



const trash = <FontAwesomeIcon icon={faTrashAlt} size="1x"/>
const edit = <FontAwesomeIcon icon={faEdit} size="1x"/>


function PostOptions({editPost, deletePost, postOptionsIsVisible, setPostOptionsIsVisible}) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, () => setPostOptionsIsVisible(false));

    let transitions = useTransition(postOptionsIsVisible, null, {
        from: { opacity: 0, transform: 'scale(0.95)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale:(0.95)' },
        config: (item, state) => ({
            easing: state === 'leave' ? 75 : 100,
        }),
    });


    return (
        transitions.map(({item, key, props}) =>
            item && 
            <animated.div key={key} style={props} ref={wrapperRef} className="PostOptionsModal">
                <ul>
                    <li><button onClick={() => editPost()}><span className="post-options-icon">{edit}</span><span className="post-options-name">Edit</span></button></li>
                    <li><button onClick={() => deletePost()}><span className="post-options-icon">{trash}</span><span className="post-options-name">Delete</span></button></li>
                </ul>
            </animated.div>
        )
    )
}

export default PostOptions;