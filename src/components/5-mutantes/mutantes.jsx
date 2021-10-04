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
          mutantes vivos, mortos, equivalentes, incompetente, timeout
          equivalente - nunca vai ser morto, não existe caso de teste para ele
        </div>
        <div>
          mutantes extras caso queira aprofundar na matéria
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
