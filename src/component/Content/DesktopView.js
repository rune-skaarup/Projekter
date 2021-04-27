import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from "./Navigation.js";
import GetInTouch from "./GetInTouch"
import Maintain from "./Maintain";
import WhatWeDo from "./WhatWeDo";
import Home from "./Home";

const DesktopView = () => {
    return (
        <Fragment>
          <div className="wrapper">
            <Router>
              <section id="section">
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/WhatWeDo' component={WhatWeDo} />
                  <Route exact path='/Maintain' component={Maintain} />
                  <Route exact path='/GetInTouch' component={GetInTouch} />
                </Switch>
              </section>
              <Navigation />
            </Router>
          </div>
        </Fragment>
      );

  };
  
  export default DesktopView;
  