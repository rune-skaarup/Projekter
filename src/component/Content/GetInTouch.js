import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import GITPic from '../../Assets/front-get-in-touch.png';
import NavWhere3 from '../../Assets/nav-3-where.png';
import SmallPic1 from '../../Assets/getintouch-small.png';
import SmallPic2 from '../../Assets/maintainable-small.png';
import SmallPic3 from '../../Assets/whatwedo-small.png';
import back from '../../Assets/back.png';

const GetInTouch = () => {
    return (
        <Fragment>
            <div id="GetInTouchContaier">
                <div className="GITPic">
                    <img src={GITPic} alt="Orange" />
                </div>
                <div className="NGPic">
                    <img src={NavWhere3} alt="Orange" />
                </div>
                <div className="back">
                    <Link to="/"><img src={back} alt="Back" />  </Link>
                </div>
                <div className="text3">
                    <div className="textArea">
                        <h4>There for you and <span>care for you</span>...</h4>
                        <p>But I explain to you how all this mistaken idea of denouncing <br /> pleasure and praisin pain was born and I will give you a complete account of the system, and <br /> expound the actual teachings of the great explorer of the truth, the master-builder of human <br />happiness. No one reject, dislikes, or aviods pleausre itself, becasuse it is pleasure, but because<br /> those who do not know how to pursue pleacure rationally encounter consequences that are. <br /><br /> But I explain to you how all this mistaken idea of denouncing pleasure and praisin pain was <br />born and I will give you a complete account of the system, and expound the actual teachings of the<br /> great explorer of the truth, the master-builder of human happiness.
                        </p>
                    </div>
                    <div className="smallPics">
                        <img src={SmallPic3} alt="orange" />
                        <img src={SmallPic2} alt="Orange" />
                        <img src={SmallPic1} alt="Orange" />
                    </div>
                    <div className="mails">
                        <h5>it@coolish.com</h5>
                        <h5>pr@coolish.com</h5>
                        <h5>mn@coolish.com</h5>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default GetInTouch;