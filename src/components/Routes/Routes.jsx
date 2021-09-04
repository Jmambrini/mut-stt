import React from 'react';
import {
  Switch, Route, BrowserRouter,
} from 'react-router-dom';

import Teste from '../Teste/Teste';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/intro"
          exact
          component={Teste}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
