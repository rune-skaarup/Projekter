import React from 'react';
import { Fragment } from 'react';
import MobileNavigation from "./MobileNavigation.js";
import Logo from '../../Assets/logo-final.png';

const MobileHome = () => {
    return (
        <Fragment>
            <div className="Home">
                <img src={Logo} id="Logo" alt="DarkBlue" />
                <MobileNavigation />  
            </div>                        
        </Fragment>
    )
}

export default MobileHome;