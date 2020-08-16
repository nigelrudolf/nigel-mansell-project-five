import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
 
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

let icons = [ faHome, faTwitter, faFacebook, faInstagram, faTiktok];

function MediaSort() {
    let listIcons = icons.map((icon, i) => 
    <li key={i} ><button><FontAwesomeIcon icon={icon} size="2x"/></button></li>
);
    return (
        <ul className="media-sort" >
           {listIcons}
        </ul>
    )
}

export default MediaSort;