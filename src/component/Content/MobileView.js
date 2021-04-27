import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MobileGetInTouch from "./MobileGetInTouch"
import MobileMaintain from "./MobileMaintain";
import MobileWhatWeDo from "./MobileWhatWeDo";
import MobileHome from "./MobileHome";

const MobileView = () => {
    return (
        <Fragment>
          <div className="MobileWrapper">
            <Router>
              <section id="MobileSection">
                <Switch>
                  <Route exact path='/' component={MobileHome} />
                  <Route exact path='/WhatWeDo' component={MobileWhatWeDo} />
                  <Route exact path='/Maintain' component={MobileMaintain} />
                  <Route exact path='/GetInTouch' component={MobileGetInTouch} />
                </Switch>
              </section>
            </Router>
          </div>
        </Fragment>
      );

  };
  
  export default MobileView;
  