import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import aboutme from './aboutme';
import contact from './contact';
import projects from './projects';
import resume from './resume';



const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route  path="/aboutme" component={aboutme} />
    <Route  path="/contact" component={contact} />
    <Route  path="/projects" component={projects} />
    <Route  path="/resume" component={resume} />

  </Switch>
)

export default Main;
