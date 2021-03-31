import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Jobs from '../pages/Jobs';
import PostJob from '../pages/Jobs/Post';
import JobDetails from '../pages/Jobs/Job';
import JobEdit from '../pages/Jobs/Edit';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Jobs" component={Jobs} />
    <Route path="/PostJob" component={PostJob} />
    <Route path="/Job/:id" component={JobDetails} />
    <Route path="/Edit/:id" component={JobEdit} />
  </Switch>
);

export default Routes;
