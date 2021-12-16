import React from 'react';
import { Link } from 'react-router-dom';
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
              O que é o MUT-STT?
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              O MUT-STT é um recurso educacional aberto (REA) que foi desenvolvido para
              apoiar o ensino introdutório de teste de mutação.
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              Nesse REA, são utilizados exemplos de código da linguagem Python
              <sup>[1]</sup>
              , linguagem escolhida devido à sua popularidade.
              <sup>[2]</sup>
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              Nesse REA, são abordados os seguintes conteúdos:
              <ul style={{ marginTop: '12px' }}>
                <li className="list">
                  <Link to="/criterio-defeitos">
                    Critérios de teste
                  </Link>
                  : um breve resumo sobre os critérios de teste baseados em defeitos;
                </li>
                <li className="list">
                  <Link to="/teste-mutacao">
                    Teste de mutação
                  </Link>
                  : explicação sobre teste de mutação;
                </li>
                <li className="list">
                  <Link to="/operadores">
                    Operadores de mutação
                  </Link>
                  : explicação sobre os operadores de mutação, com um foco nos operadores
                  da linguagem Python;
                </li>
                <li className="list">
                  <Link to="/mutantes">
                    Tipos de mutantes
                  </Link>
                  : listagem dos diferentes tipos de mutantes existentes, e também uma explicação
                  sobre eles;
                </li>
                <li className="list">
                  <Link to="/ferramentas">
                    Ferramentas
                  </Link>
                  : compilado de algumas ferramentas que podem apoiar o teste de mutação;
                </li>
                <li className="list">
                  <Link to="/mutpy-def">
                    Mut.py
                  </Link>
                  : ferramenta abordada no REA, com a explicação do
                  {' '}
                  <Link to="/mutpy-func">funcionamento</Link>
                  {' '}
                  e
                  {' '}
                  <Link to="/mutpy-app">aplicação</Link>
                  ;
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              Ainda, há testes disponíveis para você exercitar o conhecimento aprendido.
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              [1]:
              {' '}
              <a href="https://www.python.org/" target="_blank" rel="noreferrer">https://www.python.org/</a>
            </Col>
            <Col span={24} justify="center" className="text">
              [2]:
              {' '}
              <a href="https://spectrum.ieee.org/top-programming-languages-2021" target="_blank" rel="noreferrer">https://spectrum.ieee.org/top-programming-languages-2021</a>
            </Col>
          </Row>
          <div style={{ textAlign: '-webkit-right' }}>
            <a rel="license noreferrer" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">
              <img alt="Licença Creative Commons" style={{ borderWidth: '0' }} src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
            </a>
            <br />
            Esta obra está licenciada com uma Licença
            {' '}
            <a rel="license noreferrer" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Atribuição-CompartilhaIgual 4.0 Internacional</a>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Intro;
