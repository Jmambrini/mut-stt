import React from 'react';
import { Carousel } from 'antd';

import './mutantes.scss';

const mutantes = () => (
  <div className="mutantes">
    <Carousel
      dotPosition="bottom"
    >
      <div className="pag1">
        Nessa página, explicaremos o que são os mutantes
      </div>
      <div>
        criar exemplos em código com os operadores
      </div>
      <div>
        criar exemplos em código com os operadores
      </div>
    </Carousel>
  </div>
);

export default mutantes;
