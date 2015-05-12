'use strict';

require('./initApp');

import React from 'react';
import Router, { Route } from 'react-router';

import AppRoot from 'components/AppRoot';
import Setup from 'components/Setup';

const routes = (
  <Route handler={AppRoot}>
    <Route name="Setup" path="setup" handler={Setup}/>
  </Route>
);

Router.run(routes, function(Handler) {
  // console.log(<Handler/>);
  // console.log(document.getElementById('content'));
  React.render(<Handler/>, document.getElementById('content'));
});
