import React from 'react';
import { Fragment } from 'react';
import MobileMaintainPic from '../../Assets/mobil-maintainable.png';
import LogoA from '../../Assets/logo-a.png';
import NavWhere2 from '../../Assets/nav-2-where.png'
import MobileNavigation2 from './MobileNavigation2';

const MobileMaintain = () => {
    return (
        <Fragment>
            <div id="MobileMaintain">
                <div id="NavImg">
                    <img src={NavWhere2} id="NavWhere2" alt="LightBlue" />
                    <MobileNavigation2 />
                    <img src={MobileMaintainPic} id="Maintainable" alt="LightBlue" />
                </div>
                <div className="Mtext2">
                    <h2>Keeping your all <span>upto date</span>...</h2>
                    <p>But I explain to you how all this mistaken idea of denouncing <br /> <br/> pleasure and praisin pain was born and I will give you a complete account of the system, and  expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one reject, dislikes, or aviods pleausre itself, becasuse it is pleasure, but because those who do not know how to pursue pleacure rationally encounter consequences that are. <br /><br /> But I explain to you how all this mistaken idea of denouncing pleasure and praisin pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                </p>
                </div>
                <div className="LogoA">
                    <img src={LogoA} id="LogoA" alt="DarkBlue" />
                </div>
            </div>
        </Fragment>
    )
}

export default MobileMaintain;