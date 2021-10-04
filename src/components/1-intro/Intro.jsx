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
              O MUT-STT é um Recurso Educacional Aberto (REA) que foi desenvolvido para
              apoiar o ensino de Teste de Mutação, com foco em alunos de graduação.
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              Nesse REA, serão abordados os seguintes tópicos:
              <ul style={{ marginTop: '12px' }}>
                <li className="list">
                  <Link to="/criterio-defeitos">
                    Critérios de teste
                  </Link>
                  : um breve resumo sobre os critérios de teste baseados em erros
                </li>
                <li className="list">
                  <Link to="/teste-mutacao">
                    Teste de Mutação
                  </Link>
                  : explicação mais aprofundada sobre Teste de Mutação
                </li>
                <li className="list">
                  <Link to="/operadores">
                    Operadores de Mutação
                  </Link>
                  : explicação sobre os operadores de mutação, com um foco nos operadores
                  da Mut.py
                </li>
                <li className="list">
                  <Link to="/mutantes">
                    Tipos de Mutantes
                  </Link>
                  : listagem dos diferentes tipos de mutantes existentes, e também uma explicação
                  sobre os mesmos
                </li>
                <li className="list">
                  <Link to="/ferramentas">
                    Ferramentas
                  </Link>
                  : compilado de algumas ferramentas que podem apoiar o teste de mutação
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
                  {' '}
                  da mesma
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              Além dos tópicos, você também poderá realizar pequenos testes
              sobre o conteúdo apresentado, a fim de aprofundar o conhecimento obtido.
            </Col>
          </Row>
        </div>
      </Carousel>
    </div>
  );
}

export default Intro;
