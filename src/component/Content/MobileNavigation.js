import React from 'react';
import { Link } from 'react-router-dom';
import DarkBlue from '../../Assets/mobil-whatwedo.png';
import LightBlue from '../../Assets/mobil-maintainable.png';
import Orange from '../../Assets/mobil-getintouch.png';

const MobileNavigation = () => {
    return (
        <div id="MobileNavigation">
            <nav>
                <ul>
                    <li>
                        <Link to="/WhatWeDo"><img src={DarkBlue} id="DarkBlue" alt="DarkBlue" /></Link>
                    </li>
                    <li>
                        <Link to="/Maintain"><img src={LightBlue} id="LightBlue" alt="LightBlue" /></Link>
                    </li>
                    <li>
                        <Link to="/GetInTouch"><img src={Orange} id="Orange" alt="Orange" /></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default MobileNavigation;