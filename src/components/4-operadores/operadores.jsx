import React from 'react';
import { Carousel } from 'antd';

import './operadores.scss';

const operadores = () => (
  <div className="operadores">
    <Carousel
      dotPosition="bottom"
    >
      <div className="pag1">
        Nessa página, explicaremos o que são os operadores
      </div>
      <div>
        Nessa página, introduziremos o MutPy, e seus operadores
      </div>
      <div>
        Lista dos operadores
      </div>
      <div>
        Explicação dos operadores
      </div>
    </Carousel>
  </div>
);

export default operadores;
