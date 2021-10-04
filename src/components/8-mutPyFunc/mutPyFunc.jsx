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
            <Row>
              O Mut.py funciona da seguinte maneira:
            </Row>
            <Row>
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
            <Row>
              Com o nosso código inicial, precisamos criar casos de teste
              para validar e testar nosso código.
            </Row>
            <Row>
              Abaixo temos a classe Tests, com casos escritos em unittest:
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
            <Row>
              Com o código e os casos de teste, a Mut.py modifica nosso código
              com os operadores citados anteriormente (somente os que encaixam no
              contexto do nosso código).
            </Row>
            <Row>
              <div>
                Por exemplo, temos o mutante abaixo, que foi gerado com o operador
                AOR, e trocou o
                {' '}
                <i style={{ color: 'red' }}>+</i>
                {' '}
                pelo
                {' '}
                <i style={{ color: 'red' }}>-</i>
                {' '}
                na linha 4, na primeira condição do nosso if:
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
            <Row>
              Com o mutante, a Mut.py utiliza os casos de teste para verificar
              se o mesmo vai ser morto.
            </Row>
            <Row>
              <div>
                Por exemplo, temos o mutante do passo anterior sendo testado
                com o caso de teste mostrado abaixo. Podemos analisar que
                com esse caso escolhido o mutante será morto, pois a condição
                {' '}
                <i style={{ color: 'red' }}>(1 - 2 &gt;= 3)</i>
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
            <Row align="middle">
              <Col span={16}>
                Com isso, concluímos a explicação do fluxo básico
                da Mut.py
                <ul>
                  <li className="list">
                    Desenvolvemos nosso código e nossos casos testes;
                  </li>
                  <li className="list">
                    Rodamos a Mut.py, que criará diversos mutantes;
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
                  icon={<SmileOutlined />}
                  title="Agora, vamos colocar a Mut.py na prática!"
                  extra={<Button type="primary" onClick={() => props.history.push('/mutpy-app')}>Próximo tópico!</Button>}
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
