import React from 'react';
import {
  Row, Col,
} from 'antd';

import './Sobre.scss';

function Sobre() {
  return (
    <div className="Sobre">
      <Row>
        <Col span={24} justify="center" align="middle" className="title">
          Sobre
        </Col>
      </Row>
      <Row>
        <Col span={24} justify="center" className="text">
          Esse REA foi criado no segundo semestre de 2021, durante o desenvolvimento do Trabalho
          de Conlusão de Curso do aluno João Pedro Silva Mambrini Ruiz, discente do curso de
          Engenharia de Computação da Universidade de São Paulo - USP, campus de São Carlos.
          <br />
          <br />
          O trabalho foi desenvolvido em conjunto com sua orientadora,
          Professora Doutora Simone Do Rocio Senger de Souza, e seu coorientador, Ms.
          Leo Natan Paschoal.
        </Col>
      </Row>
    </div>
  );
}

export default Sobre;
