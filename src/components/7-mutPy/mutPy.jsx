import React, { useState } from 'react';
import {
  Carousel, Row, Col, Collapse,
} from 'antd';

import './mutPy.scss';

function mutPy() {
  const [collapseKey, setCollapseKey] = useState(0);
  const { Panel } = Collapse;

  function callback(key) {
    console.log(key);
    setCollapseKey(key);
  }

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
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              <Collapse activeKey={collapseKey} onChange={(key) => callback(key)}>
                <Panel header="Versões do Python suportadas" key="1">
                  <p>A MutPu suporta versões do Python acima da versão 3.3</p>
                  <a href="https://www.python.org/" target="_blank" rel="noreferrer">https://www.python.org/</a>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>asdasdasdasd</p>
                </Panel>
                <Panel header="Documentação da ferramenta" key="3">
                  <p>asdasdasdasd</p>
                </Panel>
              </Collapse>
            </Col>
          </Row>
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

export default mutPy;
