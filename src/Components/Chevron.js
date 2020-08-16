import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faChevronDown} size="1x"/>;

function Chevron({ togglePostOptions }) {
    return <button className="ChevButton" onClick={togglePostOptions}>{element}</button>;
}

export default Chevron;