import React from 'react';


function PostButton({handleClick, userInput, clearInput}) {
    return <button className="PostButton" onClick={(event) => {handleClick(event, userInput); clearInput();}}>Post</button>
}

export default PostButton;