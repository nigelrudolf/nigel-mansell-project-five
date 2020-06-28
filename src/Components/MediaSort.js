import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

 
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
 
// library.add( faHome, faTwitter, faFacebook, faInstagram, faTiktok);

let icons = [ faHome, faTwitter, faFacebook, faInstagram, faTiktok];

let listIcons = icons.map((icon, i) =>
    <li key={i} ><button><FontAwesomeIcon icon={icon} size="2x"/></button></li>
);

class MediaSort extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <ul className="media-sort" >
               {listIcons}
            </ul>
        )
    }
}

export default MediaSort;