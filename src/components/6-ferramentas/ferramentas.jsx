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

import infection from '../../generics/languages/infection.png';
import pitest from '../../generics/languages/pitest.png';
import stryker from '../../generics/languages/stryker.png';

import prot from '../../generics/ferramentas/prot.png';
import muterEx from '../../generics/ferramentas/muter.png';
import muterEx2 from '../../generics/ferramentas/muter2.png';

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
              Existem diversas ferramentas.
              A seguir são apresentadas um conjunto de ferramentas para teste de mutação.
            </Col>
          </Row>
          <Row style={{ marginBottom: '16px' }}>
            <Col span={24} justify="center" className="text">
              As linguagens foram selecionadas baseando-se nas mais usadas em 2021,
              de acordo com o ranking da IEEE.
              <sup><a href="https://spectrum.ieee.org/top-programming-languages-2021" target="_blank" rel="noreferrer">[Link]</a></sup>
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
              Proteum
            </Col>
          </Row>
          <Row>
            <Col span={8} justify="center" className="text" style={{ marginTop: '16px' }}>
              A primeira ferramenta que abordaremos é a
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>Proteum</i>
              {' '}
              .
              <br />
              <br />
              A
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>Proteum</i>
              {' '}
              é uma ferramenta de teste de mutação implementada para a linguagem
              de programação
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>C</i>
              .
              Essa ferramenta possui uma interface gráfica implementada, mas também pode ser
              utilizada via terminal, utilizando os comandos citados na documentação.
            </Col>
            <Col span={16} style={{ textAlign: '-webkit-center' }}>
              <img src={prot} alt="prot" style={{ width: '70%' }} />
              <sup>
                Interface da Proteum
                -
                Fonte:
                {' '}
                <a href="https://www.inf.ufpr.br/silvia/testesw/protmanual.pdf" target="_blank" rel="noreferrer">https://www.inf.ufpr.br/silvia/testesw/protmanual.pdf</a>
              </sup>
            </Col>
          </Row>
          <Collapse accordion>
            <Panel header="Documentação" key="1">
              <p>
                <a href="https://github.com/magsilva/proteum" target="_blank" rel="noreferrer">https://github.com/magsilva/proteum</a>
              </p>
            </Panel>
          </Collapse>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Muter
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              <div>
                A
                {' '}
                <i style={{ color: 'red', fontWeight: 'bold' }}>Muter</i>
                {' '}
                é uma ferramenta de apoio ao teste de mutação para a linguagem de progração
                {' '}
                <i style={{ color: 'red', fontWeight: 'bold' }}>Swift</i>
                , linguagem desenvolvida pela Apple para ser utilizada nos seus produtos
                (iOS, macOS, watchOS, tvOS).
                <br />
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              <div>
                Alguns dos operadores suportados pela ferramenta:
                <ul>
                  <li>
                    Negação de operadores condicionais: esse operador inverte um
                    operador condicional;
                  </li>
                  <li>
                    Alteração de operador lógico: esse operador invert um
                    operador lógico;
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={12} style={{ textAlign: '-webkit-center' }}>
              <img src={muterEx} alt="muterEx" />
              <sup>
                Negação de operador condicional
              </sup>
            </Col>
            <Col span={12} style={{ textAlign: '-webkit-center' }}>
              <img src={muterEx2} alt="muterEx2" />
              <sup>
                Alteração de operador lógico
              </sup>
              <br />
              <br />
              <sub>
                Fonte das tabelas:
                {' '}
                <a href="https://github.com/muter-mutation-testing/muter/blob/master/Docs/mutation_operators.md" target="_blank" rel="noreferrer">https://github.com/muter-mutation-testing/muter/blob/master/Docs/mutation_operators.md</a>
              </sub>
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
            <Col span={12} justify="center" className="text">
              <div>
                A
                {' '}
                <i style={{ color: 'red', fontWeight: 'bold' }}>Infection</i>
                {' '}
                é uma ferramenta de apoio ao teste de mutação para a linguagem de progração
                {' '}
                <i style={{ color: 'red', fontWeight: 'bold' }}>PHP</i>
                , linguagem utilizada prioritariamente para o desenvolvimento de aplicações
                Web e sites.
                <br />
              </div>
              <div style={{ textAlignLast: 'center' }}>
                <br />
                Os operadores suportados pela ferramenta estão disponíveis no link:
                <br />
                <a className="operators" href="https://infection.github.io/guide/mutators.html" target="_blank" rel="noreferrer">
                  Operadores de mutação da Infection
                </a>
              </div>
            </Col>
            <Col offset={1} span={11} style={{ textAlign: '-webkit-center' }}>
              <img src={infection} alt="infection" style={{ width: '200px' }} />
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
            <Col span={14} justify="center" className="text">
              A
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>Stryker</i>
              {' '}
              é uma ferramenta de apoio ao teste de mutação para a linguagem de progração
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>JavaScript</i>
              , linguagem utilizada prioritariamente para o desenvolvimento de aplicações
              Web e sites. Além disso, a ferramenta também suporta integração com bibliotecas como
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>React</i>
              ,
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>VueJS</i>
              ,
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>Angular</i>
              {' '}
              e
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>NodeJS</i>
              .
              <br />
              <br />
              Uma ferramenta muito interessante disponível no
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>StrykerJS</i>
              {' '}
              é a disponibilidade de um Dashboard online que mostra os resultados do teste de
              mutação. Só é necessário se cadastrar na plataforma, e sincronizar
              com o GitHub de um projeto já configurado com o
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>StrykerJS</i>
              .
              <br />
              <br />
              <div style={{ textAlignLast: 'center' }}>
                Os operadores suportados pela ferramenta estão disponíveis no link:
                <br />
                <a className="operators" href="https://stryker-mutator.io/docs/mutation-testing-elements/supported-mutators" target="_blank" rel="noreferrer">
                  Operadores de mutação da StrykerJS
                </a>
              </div>
            </Col>
            <Col offset={1} span={9} style={{ textAlign: '-webkit-center' }}>
              <img src={stryker} alt="stryker" style={{ width: '200px' }} />
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
              A
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>PITest</i>
              {' '}
              é uma ferramenta de apoio ao teste de mutação para a linguagem de progração
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>Java</i>
              .
              <br />
              <br />
              A ferramenta oferece suporte integrado para as ferramentas
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>Maven</i>
              {' '}
              e
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>Ant</i>
              , ambas utilizadas para compilação e organização das dependencias de um projeto.
              Além disso, a ferramenta também suporta que o usuário utilize o terminal de comando
              para executar o teste de mutação.
              <br />
              <br />
              <div style={{ textAlignLast: 'center' }}>
                Os operadores suportados pela ferramenta estão disponíveis no link:
                <br />
                <a className="operators" href="http://pitest.org/quickstart/mutators/" target="_blank" rel="noreferrer">
                  Operadores de mutação da PITest
                </a>
              </div>
            </Col>
            <Col offset={1} span={9} style={{ textAlign: '-webkit-center' }}>
              <img src={pitest} alt="pitest" style={{ marginTop: '60px' }} />
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
