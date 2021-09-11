import React from 'react';
import {
  Carousel,
} from 'antd';

import './mutantes.scss';

function mutantes() {
  return (
    <div className="mutantes">
      <Carousel
        dotPosition="bottom"
        arrows
        infinite={false}
      >
        <div>
          Nessa página, daremos um breve resumo as mutantes
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

export default mutantes;
