import React from 'react';
import {
  Carousel,
} from 'antd';

import './critMutacao.scss';

function critMutacao() {
  return (
    <div className="critMutacao">
      <Carousel
        dotPosition="bottom"
        arrows
        infinite={false}
      >
        <div>
          Nessa página, daremos um breve resumo as critMutacao
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

export default critMutacao;
