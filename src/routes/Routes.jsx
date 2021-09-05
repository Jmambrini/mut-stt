import React from 'react';
import {
  Switch, BrowserRouter,
} from 'react-router-dom';

import PublicRoutes from './PublicRoutes';

import Teste from '../components/Teste/Teste';
import Topico2 from '../components/Topico2/Tópico2';
import pagInicial from '../components/pagInicial/pagInicial';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoutes
          path="/"
          exact
          component={pagInicial}
        />
        <PublicRoutes
          path="/intro"
          exact
          component={Teste}
        />
        <PublicRoutes
          path="/top2"
          exact
          component={Topico2}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
