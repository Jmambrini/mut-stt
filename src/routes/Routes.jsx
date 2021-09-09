import React from 'react';
import {
  Switch, BrowserRouter,
} from 'react-router-dom';

import PublicRoutes from './PublicRoutes';

import pagInicial from '../components/1-pagInicial/pagInicial';
import Intro from '../components/2-intro/Intro';
import testeMutacao from '../components/3-testeMutacao/testeMutacao';
import operadores from '../components/4-operadores/operadores';
import mutantes from '../components/5-mutantes/mutantes';

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
          component={Intro}
        />
        <PublicRoutes
          path="/teste-mutacao"
          exact
          component={testeMutacao}
        />
        <PublicRoutes
          path="/operadores"
          exact
          component={operadores}
        />
        <PublicRoutes
          path="/mutantes"
          exact
          component={mutantes}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
