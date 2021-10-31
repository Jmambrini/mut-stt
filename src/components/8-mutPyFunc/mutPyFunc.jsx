import React from 'react';
import {
  Carousel, Row, Col, Result, Button,
} from 'antd';

import { SmileOutlined } from '@ant-design/icons';

import mutpyStep1 from '../../generics/codes/mutpyStep1.png';
import mutpyStep2 from '../../generics/codes/mutpyStep2.png';
import mutpyStep3 from '../../generics/codes/mutpyStep3.png';
import mutpyStep4 from '../../generics/codes/mutpyStep4.png';

import './mutPyFunc.scss';

function mutPyFunc(props) {
  return (
    <div className="mutPyFunc">
      <Carousel
        dotPosition="bottom"
        arrows
        infinite={false}
      >
        <div>
          <div style={{ width: '100%' }}>
            <Row>
              <Col span={24} justify="center" align="middle" className="title">
                Código Inicial
              </Col>
            </Row>
            <Row className="text">
              O Mut.py funciona da seguinte maneira:
            </Row>
            <Row className="text">
              Inicialmente, temos um código que desejamos testar. Por
              exemplo, um código para validar triângulos, mostrado abaixo:
            </Row>
            <Row justify="center">
              <img src={mutpyStep1} alt="mutpyStep1" style={{ marginTop: '14px' }} />
            </Row>
          </div>
        </div>
        <div>
          <div style={{ width: '100%' }}>
            <Row>
              <Col span={24} justify="center" align="middle" className="title">
                Casos de teste
              </Col>
            </Row>
            <Row className="text">
              Com o código inicial, é necessário criar casos de teste
              para testar o código.
            </Row>
            <Row className="text">
              Abaixo é apresentado um conjunto de caoses de teste
              escritos em unittest:
            </Row>
            <Row justify="center">
              <img src={mutpyStep2} alt="mutpyStep2" style={{ marginTop: '14px' }} />
            </Row>
          </div>
        </div>
        <div>
          <div style={{ width: '100%' }}>
            <Row>
              <Col span={24} justify="center" align="middle" className="title">
                Criação do mutante
              </Col>
            </Row>
            <Row className="text">
              Com o código e os casos de teste, a Mut.py modifica o código inicial
              com os operadores de mutação suportados pela ferramenta.
            </Row>
            <Row className="text">
              <div>
                Por exemplo, o mutante abaixo foi gerado com o operador
                AOR, e trocou o
                {' '}
                <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; + &quot;</i>
                {' '}
                pelo
                {' '}
                <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; - &quot;</i>
                {' '}
                na linha 4, na primeira condição do
                {' '}
                <i style={{ color: 'red', fontWeight: 'bold' }}>if</i>
                :
              </div>
            </Row>
            <Row justify="center">
              <img src={mutpyStep3} alt="mutpyStep3" style={{ marginTop: '14px' }} />
            </Row>
          </div>
        </div>
        <div>
          <div style={{ width: '100%' }}>
            <Row>
              <Col span={24} justify="center" align="middle" className="title">
                Teste do mutante
              </Col>
            </Row>
            <Row className="text">
              Com o programa mutante, a Mut.py vai executar o conjunto de casos de
              teste nos mutantes. Se eles identificarem um defeito, o programa mutante
              será morto.
            </Row>
            <Row className="text">
              <div>
                Por exemplo, temos o mutante do passo anterior sendo testado
                com o caso de teste mostrado abaixo. Podemos analisar que
                com esse caso escolhido o mutante será morto, pois a condição
                {' '}
                <i style={{ color: 'red', fontWeight: 'bold' }}>(1 - 2 &gt;= 3)</i>
                {' '}
                é falsa, e o caso de teste espera um retorno verdadeiro.
              </div>
            </Row>
            <Row justify="center">
              <img src={mutpyStep4} alt="mutpyStep4" style={{ marginTop: '14px' }} />
            </Row>
          </div>
        </div>
        <div>
          <div style={{ width: '100%', marginLeft: '14px' }}>
            <Row>
              <Col span={24} justify="center" align="middle" className="title">
                Resumo
              </Col>
            </Row>
            <Row align="middle" className="text">
              <Col span={16}>
                Com isso, concluímos a explicação do fluxo básico
                da Mut.py
                <ul>
                  <li className="list">
                    Foi desenvolvido código e um conjunto de casos de testes;
                  </li>
                  <li className="list">
                    A ferramenta Mut.py foi executada, criando diversos mutantes;
                  </li>
                  <li className="list">
                    Com os mutantes, a ferramenta testará cada um deles
                    com o conjunto de casos de testes;
                  </li>
                  <li className="list">
                    Com a validação anterior, teremos o score de mutação.
                  </li>
                </ul>
              </Col>
              <Col span={8}>
                <Result
                  icon={<SmileOutlined style={{ color: '#df5a01' }} />}
                  title="Agora, vamos colocar a Mut.py na prática!"
                  extra={(
                    <Button
                      onClick={() => props.history.push('/mutpy-app')}
                    >
                      Próximo tópico!
                    </Button>
                  )}
                />
              </Col>
            </Row>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default mutPyFunc;
