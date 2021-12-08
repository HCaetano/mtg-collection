import React from 'react';
import { Router as ReachRouter } from '@reach/router';
import Home from './pages/Home';

const Router = () => (
  <ReachRouter>
    <Home path="/" />
  </ReachRouter>
);

export default Router;
