import React, { useRef, useState } from 'react';
import {
  Carousel, Row, Col, Card, Collapse, Modal,
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

import pitest from '../../generics/languages/pitest.png';
import muter from '../../generics/languages/muter.png';

import stryker from '../../generics/ferramentas/stryker.png';
import muter1 from '../../generics/ferramentas/muter.png';
import muter2 from '../../generics/ferramentas/muter2.png';
import pit1 from '../../generics/ferramentas/pit1.png';
import pit2 from '../../generics/ferramentas/pit2.png';
import infection from '../../generics/ferramentas/infection.png';
import prot from '../../generics/ferramentas/prot.png';

import './ferramentas.scss';

function ferramentas(props) {
  const slider = useRef();
  const { Panel } = Collapse;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalHeaderTitle, setModalHeaderTitle] = useState();
  const [modalContent, setModalContent] = useState();

  const showModal = ({ headerTitle, content }) => {
    setModalHeaderTitle(headerTitle);
    setModalContent(content);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="ferramentas">
      <Modal
        title={modalHeaderTitle}
        visible={isModalVisible}
        footer={false}
        closable
        onCancel={handleCancel}
        width="fit-content"
        bodyStyle={{ fontSize: '16px' }}
        style={{ maxWidth: '800px' }}
        centered
      >
        {modalContent}
      </Modal>
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
          <Row align="middle">
            <Col span={8} justify="center" className="text" style={{ marginTop: '16px' }}>
              A
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>Proteum</i>
              {' '}
              é uma ferramenta de apoio ao teste de mutação implementada para a linguagem
              de programação
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>C</i>
              . Ela possui uma interface gráfica implementada, mas também pode ser
              utilizada via terminal, com os comandos citados na documentação.
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
                é uma ferramenta de apoio ao teste de mutação para a linguagem de programação
                {' '}
                <i style={{ color: 'red', fontWeight: 'bold' }}>Swift</i>
                , linguagem desenvolvida pela Apple para ser utilizada nos seus produtos
                (iOS, macOS, watchOS, tvOS).
                <br />
                <br />
                Abaixo estão alguns dos operadores de mutação suportados pela ferramenta:
              </div>
            </Col>
          </Row>
          <Row align="middle" style={{ textAlign: '-webkit-center' }}>
            <Col span={14} className="text">
              <Card
                style={{ width: '400px' }}
                onClick={() => showModal({
                  headerTitle: 'Alteração de operador lógico',
                  content: () => (
                    <div>
                      <Row>
                        <div>
                          Esse operador altera um operador lógico do programa original
                          para outro, no programa mutante.
                          <br />
                          Por exemplo:
                          <ul>
                            <li>
                              O operador lógico
                              {' '}
                              <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; && &quot;</i>
                              {' '}
                              é alterado para o operador
                              {' '}
                              <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; || &quot;</i>
                              {' '}
                              no programa mutante;
                            </li>
                          </ul>
                          <Row style={{ textAlign: '-webkit-center' }}>
                            <Col span={24}>
                              <img src={muter2} alt="muter2" style={{ width: '80%' }} />
                              <br />
                              <sup>
                                Exemplo da mutação
                                -
                                Fonte:
                                {' '}
                                <a href="https://github.com/muter-mutation-testing/muter/blob/master/Docs/mutation_operators.md" target="_blank" rel="noreferrer">https://github.com/muter-mutation-testing/muter/blob/master/Docs/mutation_operators.md</a>
                              </sup>
                            </Col>
                          </Row>
                        </div>
                      </Row>
                    </div>
                  ),
                })}
              >
                Alteração de operador lógico
              </Card>
              <br />
              <Card
                style={{ width: '400px' }}
                onClick={() => showModal({
                  headerTitle: 'Alteração de operadores condicionais',
                  content: () => (
                    <div>
                      <Row>
                        <div>
                          Esse operador altera um operador condicional do programa original
                          para outro, no programa mutante.
                          <br />
                          Por exemplo:
                          <ul>
                            <li>
                              O operador condicional
                              {' '}
                              <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; == &quot;</i>
                              {' '}
                              é alterado para o operador
                              {' '}
                              <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; != &quot;</i>
                              {' '}
                              no programa mutante;
                            </li>
                          </ul>
                          <Row style={{ textAlign: '-webkit-center' }}>
                            <Col span={24}>
                              <img src={muter1} alt="muter1" style={{ width: '100%' }} />
                              <br />
                              <sup>
                                Exemplo da mutação
                                -
                                Fonte:
                                {' '}
                                <a href="https://github.com/muter-mutation-testing/muter/blob/master/Docs/mutation_operators.md" target="_blank" rel="noreferrer">https://github.com/muter-mutation-testing/muter/blob/master/Docs/mutation_operators.md</a>
                              </sup>
                            </Col>
                          </Row>
                        </div>
                      </Row>
                    </div>
                  ),
                })}
              >
                Alteração de operador condicional
              </Card>
              <br />
              <a
                style={{ fontWeight: 'bold', textDecoration: 'underline' }}
                href="https://github.com/muter-mutation-testing/muter/blob/master/Docs/mutation_operators.md"
                target="_blank"
                rel="noreferrer"
              >
                Lista completa dos operadores da Muter
              </a>
            </Col>
            <Col offset={2} span={7} style={{ textAlign: '-webkit-center' }}>
              <img src={muter} alt="muter" style={{ width: '-webkit-fill-available' }} />
              <sup>
                Logo da Muter
                -
                Fonte:
                {' '}
                <a href="https://github.com/muter-mutation-testing/muter" target="_blank" rel="noreferrer">https://github.com/muter-mutation-testing/muter</a>
              </sup>
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
              Infection
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              <div>
                A
                {' '}
                <i style={{ color: 'red', fontWeight: 'bold' }}>Infection</i>
                {' '}
                é uma ferramenta de apoio ao teste de mutação para a linguagem de programação
                {' '}
                <i style={{ color: 'red', fontWeight: 'bold' }}>PHP</i>
                , linguagem utilizada prioritariamente para o desenvolvimento de aplicações
                Web e sites.
                Ela dispõe de um ambiente de playground para que o usuário possa testar
                a ferramenta antes de utilizar localmente em seus projetos.
              </div>
            </Col>
          </Row>
          <Row>
            <Col offset={3} span={17} style={{ textAlign: '-webkit-center' }}>
              <img src={infection} alt="infection" style={{ width: '-webkit-fill-available' }} />
              <sup>
                Playground da Infection
                -
                Fonte:
                {' '}
                <a href="https://infection-php.dev/" target="_blank" rel="noreferrer">https://infection-php.dev/</a>
              </sup>
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
              StrykerJS
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              A
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>StrykerJS</i>
              {' '}
              é uma ferramenta de apoio ao teste de mutação para a linguagem de programação
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>JavaScript</i>
              , linguagem utilizada prioritariamente para o desenvolvimento de aplicações
              Web e sites. Um componente auxiliar que essa ferramenta oferece é um dashboard
              online, que mostrará os resultados dos testes executados.
            </Col>
          </Row>
          <Row>
            <Col offset={6} span={13} style={{ textAlign: '-webkit-center' }}>
              <img src={stryker} alt="stryker" style={{ width: '-webkit-fill-available' }} />
              <sup>
                Dashboard da StrykerJS
                -
                Fonte:
                {' '}
                <a href="https://dashboard.stryker-mutator.io/reports/github.com/stryker-mutator/robobar-example/master#mutant" target="_blank" rel="noreferrer">https://dashboard.stryker-mutator.io/reports/github.com/stryker-mutator/robobar-example/master#mutant</a>
              </sup>
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
              PITest
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
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
              Abaixo estão alguns dos operadores de mutação suportados pela ferramenta:
            </Col>
          </Row>
          <Row align="middle" style={{ textAlign: '-webkit-center' }}>
            <Col span={14} className="text">
              <Card
                style={{ width: '400px' }}
                onClick={() => showModal({
                  headerTitle: 'Alteração de operador aritmético',
                  content: () => (
                    <div>
                      <Row>
                        <div>
                          Esse operador altera um operador aritmético do programa original
                          para outro, no programa mutante.
                          <br />
                          Por exemplo:
                          <ul>
                            <li>
                              O operador aritmético
                              {' '}
                              <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; + &quot;</i>
                              {' '}
                              é alterado para o operador
                              {' '}
                              <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; - &quot;</i>
                              {' '}
                              no programa mutante;
                            </li>
                          </ul>
                          <Row style={{ textAlign: '-webkit-center' }}>
                            <Col span={24}>
                              <img src={pit2} alt="pit2" style={{ width: '60%' }} />
                              <br />
                              <sup>
                                Exemplo da mutação
                                -
                                Fonte:
                                {' '}
                                <a href="http://pitest.org/quickstart/mutators/" target="_blank" rel="noreferrer">http://pitest.org/quickstart/mutators/</a>
                              </sup>
                            </Col>
                          </Row>
                        </div>
                      </Row>
                    </div>
                  ),
                })}
              >
                Alteração de operador aritmético
              </Card>
              <br />
              <Card
                style={{ width: '400px' }}
                onClick={() => showModal({
                  headerTitle: 'Alteração de operador condicional',
                  content: () => (
                    <div>
                      <Row>
                        <div>
                          Esse operador altera um operador condicional do programa original
                          para outro, no programa mutante.
                          <br />
                          Por exemplo:
                          <ul>
                            <li>
                              O operador condicional
                              {' '}
                              <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; &lt; &quot;</i>
                              {' '}
                              é alterado para o operador
                              {' '}
                              <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; &lt;= &quot;</i>
                              {' '}
                              no programa mutante;
                            </li>
                          </ul>
                          <Row style={{ textAlign: '-webkit-center' }}>
                            <Col span={24}>
                              <img src={pit1} alt="pit1" style={{ width: '60%' }} />
                              <br />
                              <sup>
                                Exemplo da mutação
                                -
                                Fonte:
                                {' '}
                                <a href="http://pitest.org/quickstart/mutators/" target="_blank" rel="noreferrer">http://pitest.org/quickstart/mutators/</a>
                              </sup>
                            </Col>
                          </Row>
                        </div>
                      </Row>
                    </div>
                  ),
                })}
              >
                Alteração de operador condicional
              </Card>
              <br />
              <a
                style={{ fontWeight: 'bold', textDecoration: 'underline' }}
                href="http://pitest.org/quickstart/mutators/"
                target="_blank"
                rel="noreferrer"
              >
                Lista completa dos operadores da PITest
              </a>
            </Col>
            <Col offset={2} span={7} style={{ textAlign: '-webkit-center' }}>
              <img src={pitest} alt="pitest" style={{ width: '-webkit-fill-available' }} />
              <sup>
                Logo da PITest
                -
                Fonte:
                {' '}
                <a href="http://pitest.org/" target="_blank" rel="noreferrer">http://pitest.org/</a>
              </sup>
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
