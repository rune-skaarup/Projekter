import React from 'react';
import { Fragment } from 'react';
import WhatWeDoPic from '../../Assets/mobil-whatwedo.png';
import LogoA from '../../Assets/logo-a.png';
import NavWhere1 from '../../Assets/nav-1-where.png'
import MobileNavigation2 from './MobileNavigation2';

const MobileWhatWeDo = () => {
    return (
        <Fragment>
            <div id="MobileWWD">
                <div id="NavImg">
                    <img src={NavWhere1} id="NavWhere1" alt="DarkBlue" />
                    <MobileNavigation2 />
                    <img src={WhatWeDoPic} id="WhatWeDo" alt="DarkBlue" />
                </div>
                <div className="Mtext1">
                    <h3>Design is the <span>matter of choise</span>...</h3>
                    <p>But I explain to you how all this mistaken idea of denouncing <br /> pleasure and praisin pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one reject, dislikes, or aviods pleausre itself, becasuse it is pleasure, but because those who do not know how to pursue pleacure rationally encounter consequences that are. <br /><br /> But I explain to you how all this mistaken idea of denouncing pleasure and praisin pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one reject, dislikes, or aviods pleausre itself, becasuse it is pleasure, but because those who do not know how to pursue pleacure rationally encounter consequences that are. <br /><br /> because those who do not know how to pursue pleacure rationally encounter consequences that are.
                    </p>
                </div>
                <div className="LogoA">
                    <img src={LogoA} id="LogoA" alt="DarkBlue" />
                </div>
            </div>


        </Fragment>
    )
}

export default MobileWhatWeDo;