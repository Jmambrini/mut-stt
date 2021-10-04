import React, { useState } from 'react';
import {
  Carousel, Radio, Space, Card, Button,
} from 'antd';
// import { RightCircleFilled } from '@ant-design/icons';

import './testeMutacao.scss';

function testeMutacao() {
  const [value1, setValue1] = useState(-1);
  const [color1, setColor1] = useState(['#fdd872', '#fdd872', '#fdd872']);

  function checarResposta1() {
    setColor1(['#F96462', '#F96462', '#A1C181']);
  }

  return (
    <div className="testeMutacao">
      <Carousel
        dotPosition="bottom"
        arrows
        infinite={false}
      >
        <div>
          Nessa página, daremos um breve resumo sobre o que é um
          teste de mutação.
        </div>
        <div>
          Histórico de teste de mutação
          Hipotese do programador competente
          Hipotese do efeito de acoplamento
          Programas equivalentes
        </div>
        <div>
          O QUE É UM MUTANTE - PROGRAMA ORIGINAL, MUTANTE
          SURGE BASEADO QUE PROGRAMADORES SÃO COMPETENTES, PROGRAMAS COM BOA QUALIDADE
          O TESTE DE MUTACAO ASSUME QUE VOCE TEM UM PROGRAMA LIVRE DE DEFEITOS, E PARA TESTAR,
          CRIAMOS PROGRAMAS QUE POSSUEM DEFEITOS.
        </div>
        <div>
          comentar sobre as criações dos mutantes
          classes de modelos baseados em uma linguagem (principais erros)
        </div>
        <div>
          <div className="quizz-question">
            O que é um teste de mutação?
          </div>
          <div>
            <Radio.Group onChange={(e) => setValue1(e.target.value)} value={value1}>
              <Space direction="vertical">
                <Card className="cards1" style={{ backgroundColor: color1[0] }}>
                  <Radio value={1}>Um teste</Radio>
                </Card>
                <Card className="cards1" style={{ backgroundColor: color1[1] }}>
                  <Radio value={2}>Uma mutação</Radio>
                </Card>
                <Card className="cards1" style={{ backgroundColor: color1[2] }}>
                  <Radio value={3}>Um teste de mutação</Radio>
                </Card>
              </Space>
            </Radio.Group>
          </div>
          <Button onClick={() => checarResposta1(value1)}>
            Conferir
          </Button>
        </div>
      </Carousel>
    </div>
  );
}

export default testeMutacao;
