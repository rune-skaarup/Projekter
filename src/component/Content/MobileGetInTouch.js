import React from 'react';
import { Fragment } from 'react';
import MobileGetInTouchPic from '../../Assets/mobil-getintouch.png';
import LogoB from '../../Assets/logo-b.png';
import NavWhere3 from '../../Assets/nav-3-where.png'
import MobileNavigation2 from './MobileNavigation2';
import SmallPic1 from '../../Assets/getintouch-small.png';
import SmallPic2 from '../../Assets/maintainable-small.png';
import SmallPic3 from '../../Assets/whatwedo-small.png';

const MobileGetInTouch = () => {
    return (
        <Fragment>
            <div id="MobileGetInTouch">
                <div id="NavImg">
                    <img src={NavWhere3} id="NavWhere3" alt="Orange" />
                    <MobileNavigation2 />
                    <img src={MobileGetInTouchPic} id="GetInTouch" alt="Orange" />
                </div>
                <div className="Mtext3">
                    <h4>There for you and <span>care for you</span>...</h4>
                    <p>But I explain to you how all this mistaken idea of denouncing <br /> pleasure and praisin pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one reject, dislikes, or aviods pleausre itself, becasuse it is pleasure, but because those who do not know how to pursue pleacure rationally encounter consequences that are. <br /><br /> But I explain to you how all this mistaken idea of denouncing pleasure and praisin pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                    </p>

                </div>
                <div id="Contact">
                    <div className="MobileSmallPics">
                        <img src={SmallPic3} alt="orange" />
                        <img src={SmallPic2} alt="Orange" />
                        <img src={SmallPic1} alt="Orange" />
                    </div>
                    <div className="MobileMails">
                        <h5>it@coolish.com</h5>
                        <h5>pr@coolish.com</h5>
                        <h5>mn@coolish.com</h5>
                    </div>
                </div>
                <div className="LogoB">
                    <img src={LogoB} id="LogoB" alt="Orange" />
                </div>
            </div>
        </Fragment>
    )
}

export default MobileGetInTouch;