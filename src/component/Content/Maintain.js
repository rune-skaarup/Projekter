import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MPic from '../../Assets/front-maintainable.png';
import NavWhere2 from '../../Assets/nav-2-where.png';
import back from '../../Assets/back.png';

const Maintain = () => {
    return (
        <Fragment>
        <div id="MaintainContaier">
            <div className="MPic">
                <img src={MPic}  alt="lightBlue" />
            </div>
            <div className="NMPic">
                <img src={NavWhere2}  alt="lightBlue" />   
            </div>
            <div className="back">
                <Link to="/"><img src={back}  alt="Back" />  </Link>
            </div>
            <div className="text2">
                <h3>Design is the <span>matter of choise</span>...</h3>
                <p>But I explain to you how all this mistaken idea of denouncing <br/> <br/> pleasure and praisin pain was born and I will give you a complete account of the system, and <br/> expound the actual teachings of the great explorer of the truth, the master-builder of human <br/>happiness. No one reject, dislikes, or aviods pleausre itself, becasuse it is pleasure, but because<br/> those who do not know how to pursue pleacure rationally encounter consequences that are. <br/><br/> But I explain to you how all this mistaken idea of denouncing pleasure and praisin pain was <br/>born and I will give you a complete account of the system, and expound the actual teachings of the<br/> great explorer of the truth, the master-builder of human happiness.
                </p>                
            </div>
        </div>            
        </Fragment>
    )
}

export default Maintain;