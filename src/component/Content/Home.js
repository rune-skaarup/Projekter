import React from 'react';
import { Fragment } from 'react';
import GetInTouchPic from '../../Assets/front-get-in-touch.png';
import MaintainPic from '../../Assets/front-maintainable.png';
import WhatWeDoPic from '../../Assets/front-what-we-do.png';
import Logo from '../../Assets/logo-final.png';

const Home = () => {
    return (
        <Fragment>
            <div id="logo">
                <img src={Logo} className="Logo" alt="Logo" style={{verticalAlign:"bottom"}} />
            </div>
            <div className="container">
                <img src={WhatWeDoPic} className="column" alt="DarkBlue" />

                <img src={MaintainPic} className="column" alt="LightBlue" />

                <img src={GetInTouchPic} className="column" alt="Orange" />
            </div>
        </Fragment>
    )
}

export default Home;