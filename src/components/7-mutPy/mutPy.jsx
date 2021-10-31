import React from 'react';
import {
  Carousel, Row, Col,
} from 'antd';

import './mutPy.scss';

function mutPy() {
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
              A MutPy é uma ferramenta para teste de mutação de programas escritos em Python.
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              Abaixo estão listadas algumas das características dessa ferramenta:
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              <ul>
                <li className="list">
                  Possui 20 operadores de mutação implementados;
                </li>
                <li className="list">
                  Ferramenta de uso livre;
                </li>
                <li className="list">
                  A ferramenta oferece a possibilidade de escolher os operadores de mutação
                  que serão utilizados;
                </li>
                <li className="list">
                  A ferramenta oferece a possibilidade de retornar os resultados nos
                  formatos HTML e YAML;
                </li>
              </ul>
            </Col>
          </Row>
          <Row style={{ marginTop: '16px' }}>
            <Col span={24} justify="center" className="text">
              A MutPy suporta versões do Python acima da versão
              {' '}
              <b>3.3</b>
              . Porém, durante o desenvolvimento desse REA, não consegui utilizar a ferramenta
              com versões do Python acima da
              {' '}
              <b>3.9</b>
              .
              <br />
              <br />
              Recomenda-se cuidado ao utilizar versões superiores a
              {' '}
              <b>3.9</b>
              {' '}
              devido ao erro reportado em:
              <br />
              <a
                href="https://stackoverflow.com/questions/64940369/getting-error-while-running-mutation-testing-on-python-code-attributeerror-m"
                target="_blank"
                rel="noreferrer"
              >
                https://stackoverflow.com/questions/64940369/getting-error-while-running-mutation-testing-on-python-code-attributeerror-m
              </a>
              <br />
              <br />
              A documentação da ferramenta pode ser encontrada no seguinte link:
              <br />
              <a href="https://github.com/mutpy/mutpy" target="_blank" rel="noreferrer">https://github.com/mutpy/mutpy</a>
            </Col>
          </Row>
        </div>
      </Carousel>
    </div>
  );
}

export default mutPy;
