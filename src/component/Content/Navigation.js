import React from 'react';
import { Link } from 'react-router-dom';
import DarkBlue from '../../Assets/nav-1.png';
import LightBlue from '../../Assets/nav-2.png';
import Orange from '../../Assets/nav-3.png';

const Navigation = () => {
    return (
        <div id="navigation">
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
export default Navigation;