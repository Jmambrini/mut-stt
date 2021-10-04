import React from 'react';
import {
  Switch, BrowserRouter,
} from 'react-router-dom';

import PublicRoutes from './PublicRoutes';

import notFound from '../components/0-notFound/notFound';
import Intro from '../components/1-intro/Intro';
import critMutacao from '../components/2-critMutacao/critMutacao';
import testeMutacao from '../components/3-testeMutacao/testeMutacao';
import operadores from '../components/4-operadores/operadores';
import mutantes from '../components/5-mutantes/mutantes';
import ferramentas from '../components/6-ferramentas/ferramentas';
import mutPy from '../components/7-mutPy/mutPy';
import mutPyFunc from '../components/8-mutPyFunc/mutPyFunc';
import mutPyAp from '../components/9-mutPyAp/mutPyAp';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoutes
          path="/"
          exact
          component={Intro}
        />
        <PublicRoutes
          path="/criterio-defeitos"
          exact
          component={critMutacao}
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
        <PublicRoutes
          path="/ferramentas"
          exact
          component={ferramentas}
        />
        <PublicRoutes
          path="/mutpy-def"
          exact
          component={mutPy}
        />
        <PublicRoutes
          path="/mutpy-func"
          exact
          component={mutPyFunc}
        />
        <PublicRoutes
          path="/mutpy-app"
          exact
          component={mutPyAp}
        />
        <PublicRoutes
          component={notFound}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
