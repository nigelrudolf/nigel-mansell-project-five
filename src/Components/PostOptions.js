import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';

const trash = <FontAwesomeIcon icon={faTrashAlt} size="1x"/>
const edit = <FontAwesomeIcon icon={faEdit} size="1x"/>

class PostOptions extends Component {
    render() {
        
        return (
            <div className="PostOptionsModal">
                <ul>
                    <li><button onClick={() => this.props.editPost()}>{edit} Edit</button></li>
                    <li><button onClick={() => this.props.deletePost()}>{trash} Delete</button></li>
                </ul>
            </div>
            )
    }
}

export default PostOptions;