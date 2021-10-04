const menuItems = [
  {
    name: 'Introdução',
    path: '/',
    type: 'normal',
    key: '',
  },
  {
    name: 'Critérios de teste',
    path: '/criterio-defeitos',
    type: 'normal',
    key: 'criterio-defeitos',
  },
  {
    name: 'Teste de Mutação',
    path: '/teste-mutacao',
    type: 'normal',
    key: 'teste-mutacao',
  },
  {
    name: 'Operadores de Mutação',
    path: '/operadores',
    type: 'normal',
    key: 'operadores',
  },
  {
    name: 'Tipos de Mutantes',
    path: '/mutantes',
    type: 'normal',
    key: 'mutantes',
  },
  {
    name: 'Ferramentas',
    path: '/ferramentas',
    type: 'normal',
    key: 'ferramentas',
  },
  {
    name: 'MutPy',
    type: 'sub',
    key: 'sub1',
    sub: [
      {
        name: 'Definição',
        path: '/mutpy-def',
        key: 'mutpy-def',
      },
      {
        name: 'Funcionamento',
        path: '/mutpy-func',
        key: 'mutpy-func',
      },
      {
        name: 'Aplicação',
        path: '/mutpy-app',
        key: 'mutpy-app',
      },
    ],
  },
  {
    name: 'Sobre',
    path: '/sobre',
    type: 'normal',
    key: 'sobre',
  },
];

export default menuItems;
