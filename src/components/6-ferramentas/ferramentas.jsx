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
  mdiLanguageC,
} from '@mdi/js';

import cpp from '../../generics/languages/c++.png';
import infection from '../../generics/languages/infection.png';
import muter from '../../generics/languages/muter.png';
import pitest from '../../generics/languages/pitest.png';
import stryker from '../../generics/languages/stryker.png';

import './ferramentas.scss';

function ferramentas(props) {
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
              Existem diversas ferramentas que podem apoiar o teste de mutação.
              https://spectrum.ieee.org/top-programming-languages-2021
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              As linguagens foram selecionadas baseando-se nas mais usadas em 2021,
              de acordo com o ranking da IEEE:
              {' '}
              <a href="https://spectrum.ieee.org/top-programming-languages-2021" target="_blank" rel="noreferrer">ieee.org</a>
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              As linguagens e ferramentas selecionadas foram:
            </Col>
          </Row>
          <Row justify="center">
            <Col span={6}>
              <Card onClick={() => {
                slider.current.goTo(1);
              }}
              >
                <Icon path={mdiLanguageC} size={1} color="black" />
                <div className="languageText">
                  Proteum
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
                props.history.push('/mutpy-def');
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
              Proteum - C
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              A primeira ferramenta que abordaremos é a
              {' '}
              <i style={{ color: 'red' }}>Proteum</i>
              {' '}
              .
            </Col>
          </Row>
          <Row>
            <Col span={12} justify="center" className="text" style={{ marginTop: '80px' }}>
              Ela realiza mutações em códigos com a linguagem
              {' '}
              <i style={{ color: 'red' }}>C</i>
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
          <Collapse accordion>
            <Panel header="Documentação" key="1">
              <p>
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
            <Col span={14} justify="center" className="text">
              <div>
                A
                {' '}
                <i style={{ color: 'red' }}>Muter</i>
                {' '}
                é uma ferramenta de apoio ao teste de mutação para a linguagem de progração
                {' '}
                <i style={{ color: 'red' }}>Swift</i>
                , linguagem desenvolvida pela Apple para ser utilizada nos seus produtos
                (iOS, macOS, watchOS, tvOS).
              </div>
              <div>
                https://github.com/muter-mutation-testing/muter/blob/master/Docs/mutation_operators.md
              </div>
            </Col>
            <Col offset={1} span={7}>
              <img src={muter} alt="muter" style={{ width: '400px', textAlign: '-webkit-right' }} />
            </Col>
          </Row>
          <Collapse accordion>
            <Panel header="Documentação" key="1">
              <p>
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
              https://infection.github.io/guide/mutators.html
            </Col>
            <Col>
              <img src={infection} alt="cpp" />
            </Col>
          </Row>
          <Collapse accordion>
            <Panel header="Documentação" key="1">
              <p>
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
              https://stryker-mutator.io/docs/mutation-testing-elements/supported-mutators
            </Col>
            <Col>
              <img src={stryker} alt="stryker" />
            </Col>
          </Row>
          <Collapse accordion>
            <Panel header="Documentação" key="1">
              <p>
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
              http://pitest.org/quickstart/mutators/
            </Col>
            <Col>
              <img src={pitest} alt="pitest" />
            </Col>
          </Row>
          <Collapse accordion>
            <Panel header="Documentação" key="1">
              <p>
                <a href="http://pitest.org/" target="_blank" rel="noreferrer">http://pitest.org/</a>
              </p>
            </Panel>
          </Collapse>
        </div>
      </Carousel>
    </div>
  );
}

export default ferramentas;
