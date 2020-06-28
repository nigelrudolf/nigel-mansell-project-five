import React, { Component } from 'react';
import AddPostButton from './AddPostButton';

class MenuBar extends Component {
    render() {
        const {displayPostForm} = this.props;
        return (
            <nav className="MenuBar">
                <AddPostButton 
                    displayPostForm={displayPostForm}
                    />
            </nav>
        )
    }
}

export default MenuBar;