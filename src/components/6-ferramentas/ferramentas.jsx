import React from 'react';
import {
  Carousel,
} from 'antd';

import './ferramentas.scss';

function ferramentas() {
  return (
    <div className="ferramentas">
      <Carousel
        dotPosition="bottom"
        arrows
        infinite={false}
      >
        <div>
          Nessa página, daremos um breve resumo as ferramentas
        </div>
        <div>
          Explicação com exemplos
        </div>
        <div>
          Explicação com exemplos
        </div>
        <div>
          Explicação com exemplos
        </div>
        <div>
          aaaa
        </div>
      </Carousel>
    </div>
  );
}

export default ferramentas;
