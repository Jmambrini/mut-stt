import React, { useRef } from 'react';
import {
  Carousel, Button, Row, Col,
} from 'antd';

import './mutPyAp.scss';

function mutPyAp() {
  const slider = useRef();

  return (
    <div className="mutPyAp">
      <Carousel
        dotPosition="bottom"
        arrows
        infinite={false}
        ref={(ref) => {
          slider.current = ref;
        }}
      >
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Utilizando a Mut.py
            </Col>
          </Row>
          <Button href="../../generics/mutpytest/codigo.py" download>Baixar código inicial</Button>
          <Button href="../../generics/mutpytest/testes.py" download>Baixar casos de teste</Button>
          <Button onClick={() => {
            slider.current.goTo(1);
          }}
          >
            Windows
          </Button>
          <Button onClick={() => {
            slider.current.goTo(2);
          }}
          >
            Linux
          </Button>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Configurando no Windows
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Configurando no Linux
            </Col>
          </Row>
        </div>
        <div>
          asdasdasd
        </div>
        <div>
          poipoipoipoi
        </div>
        <div>
          123123123123
        </div>
      </Carousel>
    </div>
  );
}

export default mutPyAp;
