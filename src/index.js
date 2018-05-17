import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import '../styles/styles.scss';
import MainLayout from './main-layout';

import Flex from './flex/flex';
import EqualHeights from './flex/equal-heights';
import VerticalCenter from './flex/vertical-center';
import HorizontalCenter from './flex/horizontal-center';
import Center from './flex/center';
import Start from './flex/start';
import End from './flex/end';
import SpaceBetween from './flex/space-between';
import Wrap from './flex/wrap';

import Layout1 from './flex/layout1';
import Layout2 from './flex/layout2';
import Layout3 from './flex/layout3';
import Layout4 from './flex/layout4';
import Layout5 from './flex/layout5';
import Layout6 from './flex/layout6';
import Layout7 from './flex/layout7';
import Layout8 from './flex/layout8';
import Layout9 from './flex/layout9';
import Layout10 from './flex/layout10';

const Index = () => (
  <Router>
    <Switch>
      <MainLayout>
        <Route exact path="/" component={Flex} />
        <Route exact path="/equal-heights" component={EqualHeights} />
        <Route exact path="/vertical-center" component={VerticalCenter} />
        <Route exact path="/horizontal-center" component={HorizontalCenter} />
        <Route exact path="/center" component={Center} />
        <Route exact path="/start" component={Start} />
        <Route exact path="/end" component={End} />
        <Route exact path="/space-between" component={SpaceBetween} />
        <Route exact path="/wrap" component={Wrap} />

        <Route exact path="/layout1" component={Layout1} />
        <Route exact path="/layout2" component={Layout2} />
        <Route exact path="/layout3" component={Layout3} />
        <Route exact path="/layout4" component={Layout4} />
        <Route exact path="/layout5" component={Layout5} />
        <Route exact path="/layout6" component={Layout6} />
        <Route exact path="/layout7" component={Layout7} />
        <Route exact path="/layout8" component={Layout8} />
        <Route exact path="/layout9" component={Layout9} />
        <Route exact path="/layout10" component={Layout10} />
      </MainLayout>
    </Switch>
  </Router>
);

ReactDOM.render(<Index />, document.getElementById("index"));