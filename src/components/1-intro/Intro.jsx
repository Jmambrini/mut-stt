import React from 'react';
import {
  Carousel, Row, Col,
} from 'antd';

import './Intro.scss';

function Intro() {
  return (
    <div className="Intro">
      <Carousel
        dotPosition="bottom"
        arrows
        infinite={false}
      >
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Introdução
            </Col>
          </Row>
        </div>
        <div>
          asdasd
        </div>
      </Carousel>
    </div>
  );
}

export default Intro;
