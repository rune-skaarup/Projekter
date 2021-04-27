import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import WWDPic from '../../Assets/front-what-we-do.png';
import NavWhere1 from '../../Assets/nav-1-where.png';
import back from '../../Assets/back.png';

const WhatWeDo = () => {
    return (
        <Fragment>
        <div id="whatContaier">
            <div className="WWDPic">
                <img src={WWDPic}  alt="DarkBlue" />
            </div>
            <div className="NWPic"> 
                <img src={NavWhere1}  alt="DarkBlue" />   
            </div>
            <div className="back">
                <Link to="/"><img src={back}  alt="Back" />  </Link>
            </div>
            <div className="text1">
                <h2>Keeping your all <span>upto date</span>...</h2>
                <p>But I explain to you how all this mistaken idea of denouncing <br/> pleasure and praisin pain was born and I will give you a complete account of the system, and <br/> expound the actual teachings of the great explorer of the truth, the master-builder of human <br/>happiness. No one reject, dislikes, or aviods pleausre itself, becasuse it is pleasure, but because<br/> those who do not know how to pursue pleacure rationally encounter consequences that are. <br/><br/> But I explain to you how all this mistaken idea of denouncing pleasure and praisin pain was <br/>born and I will give you a complete account of the system, and expound the actual teachings of the<br/> great explorer of the truth, the master-builder of human happiness. No one reject, dislikes, or <br/>aviods pleausre itself, becasuse it is pleasure, but because those who do not know how to pursue <br/> pleacure rationally encounter consequences that are. <br/><br/>because those who do not know how to pursue pleacure rationally encounter consequences that are
                </p>                
            </div>
        </div>            
        </Fragment>

    )
}

export default WhatWeDo;