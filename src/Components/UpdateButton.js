import React from 'react';

function UpdateButton({ handleClick, userInput, clearInput }) {
    return (
        <button className="UpdateButton" onClick={(event) => {handleClick(event, userInput); clearInput();}}>Update</button>
        )
}

export default UpdateButton;