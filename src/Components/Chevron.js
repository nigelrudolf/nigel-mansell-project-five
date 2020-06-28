import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faChevronDown} size="1x"/>

class Chevron extends Component {
    render() {
        return <button className="ChevButton" onClick={this.props.displayPostOptions}>{element}</button>        
    }
}

export default Chevron;