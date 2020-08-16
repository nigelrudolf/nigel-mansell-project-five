import React from 'react';
import AddPostButton from './AddPostButton';

function MenuBar({displayPostForm}) {
    return (
        <nav className="MenuBar">
            <AddPostButton 
                displayPostForm={displayPostForm}
                />
        </nav>
    )
}

export default MenuBar;