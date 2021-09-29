import React, { useRef } from 'react';
import {
  Carousel, Row, Col, Card, Collapse,
} from 'antd';
import Icon from '@mdi/react';
import {
  mdiLanguageJava,
  mdiLanguageJavascript,
  mdiLanguageSwift,
  mdiLanguagePhp,
  mdiLanguagePython,
  mdiLanguageCpp,
} from '@mdi/js';

import cpp from '../../generics/languages/c++.png';
import infection from '../../generics/languages/infection.png';
import muter from '../../generics/languages/muter.png';
import pitest from '../../generics/languages/pitest.png';
import stryker from '../../generics/languages/stryker.png';

import './ferramentas.scss';

function ferramentas() {
  const slider = useRef();
  const { Panel } = Collapse;

  return (
    <div className="ferramentas">
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
              Ferramentas
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              Nesse tópico, vamos discutir sobre algumas ferramentas para
              realizar os testes de mutação.
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              Após uma pesquisa breve em alguns materiais de ensino,
              compilei ferramentas de determinadas linguagens para
              dar uma breve explicação, e também dar a possibilidade de, caso
              for do seu interesse, aprofundar em outras ferramentas diferentes
              da que abordamos majoritamente, a Mut.py.
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              As linguagens selecionadas foram:
            </Col>
          </Row>
          <Row justify="center">
            <Col span={6}>
              <Card onClick={() => {
                slider.current.goTo(1);
              }}
              >
                <Icon path={mdiLanguageCpp} size={1} color="black" />
                <div className="languageText">
                  Mutate++
                </div>
              </Card>
            </Col>
            <Col offset={2} span={6}>
              <Card onClick={() => {
                slider.current.goTo(2);
              }}
              >
                <Icon path={mdiLanguageSwift} size={1} color="black" />
                <div className="languageText">
                  Muter
                </div>
              </Card>
            </Col>
            <Col offset={2} span={6}>
              <Card onClick={() => {
                slider.current.goTo(3);
              }}
              >
                <Icon path={mdiLanguagePhp} size={1} color="black" />
                <div className="languageText">
                  Infection
                </div>
              </Card>
            </Col>
          </Row>
          <Row justify="center" style={{ marginTop: '24px' }}>
            <Col span={6}>
              <Card onClick={() => {
                slider.current.goTo(4);
              }}
              >
                <Icon path={mdiLanguageJavascript} size={1} color="black" />
                <div className="languageText">
                  StrykerJS
                </div>
              </Card>
            </Col>
            <Col offset={2} span={6}>
              <Card onClick={() => {
                slider.current.goTo(5);
              }}
              >
                <Icon path={mdiLanguageJava} size={1} color="black" />
                <div className="languageText">
                  PITest
                </div>
              </Card>
            </Col>
            <Col offset={2} span={6}>
              <Card onClick={() => {
                slider.current.goTo(6);
              }}
              >
                <Icon path={mdiLanguagePython} size={1} color="black" />
                <div className="languageText">
                  Mut.py
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Mutate++ - C++
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              A primeira ferramenta que abordaremos é a
              {' '}
              <i style={{ color: 'red' }}>Mutate++</i>
              {' '}
              .
            </Col>
          </Row>
          <Row>
            <Col span={12} justify="center" className="text" style={{ marginTop: '80px' }}>
              Ela realiza mutações em códigos com a linguagem
              {' '}
              <i style={{ color: 'red' }}>C++</i>
              , e utiliza a linguagem
              {' '}
              <i style={{ color: 'red' }}>Python</i>
              {' '}
              para realizar os seus testes.
            </Col>
            <Col span={12} style={{ textAlign: '-webkit-center' }}>
              <img src={cpp} alt="cpp" style={{ width: '200px' }} />
            </Col>
          </Row>
          <Row style={{ marginTop: '50px' }}>
            <Col span={24} justify="center" className="text">
              Caso tenha interesse em aprofundar seu conhecimento
              , logo abaixo está a documentação da ferramenta.
            </Col>
          </Row>
          <Collapse accordion>
            <Panel header="Documentação" key="1">
              <p>
                Clique no link para acessar a documentação:
                <br />
                <br />
                <a href="https://github.com/nlohmann/mutate_cpp" target="_blank" rel="noreferrer">https://github.com/nlohmann/mutate_cpp</a>
              </p>
            </Panel>
          </Collapse>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Muter - Swift
            </Col>
          </Row>
          <Row>
            <Col span={12} justify="center" className="text">
              asdasdasdasdasd
            </Col>
            <Col span={12}>
              <img src={muter} alt="muter" style={{ width: '400px', textAlign: '-webkit-right' }} />
            </Col>
          </Row>
          <Row style={{ marginTop: '50px' }}>
            <Col span={24} justify="center" className="text">
              Caso tenha interesse em aprofundar seu conhecimento
              , logo abaixo está a documentação da ferramenta.
            </Col>
          </Row>
          <Collapse accordion>
            <Panel header="Documentação" key="1">
              <p>
                Clique no link para acessar a documentação:
                <br />
                <br />
                <a href="https://github.com/muter-mutation-testing/muter" target="_blank" rel="noreferrer">https://github.com/muter-mutation-testing/muter</a>
              </p>
            </Panel>
          </Collapse>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Infection - PHP
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              asdasdasdasdasd
            </Col>
            <Col>
              <img src={infection} alt="cpp" />
            </Col>
          </Row>
          <Row style={{ marginTop: '50px' }}>
            <Col span={24} justify="center" className="text">
              Caso tenha interesse em aprofundar seu conhecimento
              , logo abaixo está a documentação da ferramenta.
            </Col>
          </Row>
          <Collapse accordion>
            <Panel header="Documentação" key="1">
              <p>
                Clique no link para acessar a documentação:
                <br />
                <br />
                <a href="https://infection.github.io/" target="_blank" rel="noreferrer">https://infection.github.io/</a>
              </p>
            </Panel>
          </Collapse>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              StrykerJS - JavaScript
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              asdasdasdasdasd
            </Col>
            <Col>
              <img src={stryker} alt="stryker" />
            </Col>
          </Row>
          <Row style={{ marginTop: '50px' }}>
            <Col span={24} justify="center" className="text">
              Caso tenha interesse em aprofundar seu conhecimento
              , logo abaixo está a documentação da ferramenta.
            </Col>
          </Row>
          <Collapse accordion>
            <Panel header="Documentação" key="1">
              <p>
                Clique no link para acessar a documentação:
                <br />
                <br />
                <a href="https://github.com/stryker-mutator/stryker-js" target="_blank" rel="noreferrer">https://github.com/stryker-mutator/stryker-js</a>
              </p>
            </Panel>
          </Collapse>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              PITest - Java
            </Col>
          </Row>
          <Row>
            <Col span={12} justify="center" className="text">
              asdasdasdasdasd
            </Col>
            <Col>
              <img src={pitest} alt="pitest" />
            </Col>
          </Row>
          <Row style={{ marginTop: '50px' }}>
            <Col span={24} justify="center" className="text">
              Caso tenha interesse em aprofundar seu conhecimento
              , logo abaixo está a documentação da ferramenta.
            </Col>
          </Row>
          <Collapse accordion>
            <Panel header="Documentação" key="1">
              <p>
                Clique no link para acessar a documentação:
                <br />
                <br />
                <a href="http://pitest.org/" target="_blank" rel="noreferrer">http://pitest.org/</a>
              </p>
            </Panel>
          </Collapse>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Mutpy - Python
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              asdasdasdasdasd
            </Col>
          </Row>
        </div>
      </Carousel>
    </div>
  );
}

export default ferramentas;
