import React from 'react';
import {
  Carousel, Row, Col, Collapse,
} from 'antd';

import './mutPy.scss';

function mutPy() {
  const { Panel } = Collapse;

  return (
    <div className="mutPy">
      <Carousel
        dotPosition="bottom"
        arrows
        infinite={false}
      >
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              O que é a MutPy?
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              A MutPy é uma ferramenta para teste de mutação com a linguagem Python.
              Ela foi a ferramenta escolhida para ser abordada nesse REA pois a linguagem
              Python foi a mais utilizada nos últimos anos, novamente de acordo com o ranking
              da IEEE:
              {' '}
              <a href="https://spectrum.ieee.org/top-programming-languages-2021" target="_blank" rel="noreferrer">ieee.org</a>
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              Além disso, a ferramenta ainda possui pontos positivos que podem auxiliar
              no aprendizado, como os listados abaixo:
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              <ul>
                <li className="list">
                  Tem um grande número de operadores, todos muito bem explicados na documentação;
                </li>
                <li className="list">
                  Ferramenta fácil de ser usada, com poucas linhas de comando já é possível ver
                  os mutantes sendo gerados;
                </li>
                <li className="list">
                  Documentação clara e direta;
                </li>
                <li className="list">
                  Possibilidade de retornar os resultados em uma página HTML, mais
                  fácil de analisar;
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col offset={1} span={20} justify="center" className="text" style={{ marginTop: '-16px' }}>
              <Collapse accordion>
                <Panel header="Versões do Python suportadas" key="1">
                  <p>
                    A MutPy suporta versões do Python acima da versão 3.3.
                    Porém, durante o desenvolvimento desse REA, não consegui utilizar
                    a ferramenta com versões do Python acima da 3.9. Então, fica a dica se
                    você encontrar esse erro:
                    {' '}
                    <a href="https://stackoverflow.com/questions/64940369/getting-error-while-running-mutation-testing-on-python-code-attributeerror-m" target="_blank" rel="noreferrer">link</a>
                  </p>
                </Panel>
                <Panel header="Documentação da ferramenta" key="3">
                  <p>A documentação do MutPy pode ser encontrada no seguinte link:</p>
                  <a href="https://github.com/mutpy/mutpy" target="_blank" rel="noreferrer">https://github.com/mutpy/mutpy</a>
                </Panel>
              </Collapse>
            </Col>
          </Row>
        </div>
      </Carousel>
    </div>
  );
}

export default mutPy;
