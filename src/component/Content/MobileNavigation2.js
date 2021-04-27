import React from 'react';
import { Link } from 'react-router-dom';
import DarkBlue from '../../Assets/nav-1.png';
import LightBlue from '../../Assets/nav-2.png';
import Orange from '../../Assets/nav-3.png';
import Back from '../../Assets/back.png'

const MobileNavigation2 = () => {
    return (
        <div id="MobileNavigation2">
            <nav>
                <ul>
                    <li>
                        <Link to="/"><img src={Back} id="Back" alt="DarkBlue" /></Link>
                    </li>
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
export default MobileNavigation2;