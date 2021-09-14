import React, { useState } from 'react';
import {
  Carousel, Row, Col, Collapse, Card, Modal,
} from 'antd';

import AOR from '../../generics/imgs/AOR.png';
import COD from '../../generics/imgs/COD.png';
import COI from '../../generics/imgs/COI.png';
import CRP from '../../generics/imgs/CRP.png';
import LCR from '../../generics/imgs/LCR.png';
import ROR from '../../generics/imgs/ROR.png';

import './mutPy.scss';

function mutPy() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalHeaderTitle, setModalHeaderTitle] = useState();
  const [modalContent, setModalContent] = useState();

  const { Panel } = Collapse;

  const showModal = ({ headerTitle, content }) => {
    setModalHeaderTitle(headerTitle);
    setModalContent(content);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="mutPy">
      <Modal
        title={modalHeaderTitle}
        visible={isModalVisible}
        footer={false}
        closable
        onCancel={handleCancel}
        width="600px"
      >
        {modalContent}
      </Modal>
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
              Ela foi a ferramenta escolhida para ser utilizada nos nossos estudos
              pelos seguintes motivos:
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              <ul>
                <li className="list">
                  Tem um grande número de operadores, todos muito bem explicados na documentação;
                </li>
                <li className="list">
                  Ferramenta fácil de ser usada, com poucas linhas de comando já é possível ver
                  os mutantes sendo gerados;
                </li>
                <li className="list">
                  Documentação clara e direta;
                </li>
                <li className="list">
                  Possibilidade de retornar os resultados em uma página HTML, mais
                  fácil de analisar;
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col offset={1} span={20} justify="center" className="text" style={{ marginTop: '-16px' }}>
              <Collapse accordion>
                <Panel header="Versões do Python suportadas" key="1">
                  <p>
                    A MutPy suporta versões do Python acima da versão 3.3.
                    No desenvolvimento, utilizei a versão 3.7.9:
                  </p>
                  <a href="https://www.python.org/ftp/python/3.7.9/python-3.7.9.exe" target="_blank" rel="noreferrer"> https://www.python.org/ftp/python/3.7.9/python-3.7.9.exe</a>
                </Panel>
                <Panel header="Documentação da ferramenta" key="3">
                  <p>A documentação do MutPy pode ser encontrada no seguinte link:</p>
                  <a href="https://github.com/mutpy/mutpy" target="_blank" rel="noreferrer">https://github.com/mutpy/mutpy</a>
                </Panel>
              </Collapse>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Operadores da MutPy - clique em algum :)
            </Col>
          </Row>
          <Row>
            <Col span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({ headerTitle: 'AOD - arithmetic operator deletion' })}
              >
                AOD
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({
                  headerTitle: 'AOR - arithmetic operator replacement',
                  content: () => (
                    <div>
                      <Row>
                        O operador AOR altera um operador aritmético por outro.
                      </Row>
                      <Row>
                        No exemplo abaixo, o operador ( + )
                        foi alterado para o ( - ):
                      </Row>
                      <Row justify="center" className="images">
                        <img src={AOR} alt="AOR" style={{ marginTop: '16px' }} />
                      </Row>
                    </div>
                  ),
                })}
              >
                AOR
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({ headerTitle: 'ASR - assignment operator replacement' })}
              >
                ASR
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({ headerTitle: 'BCR - break continue replacement' })}
              >
                BCR
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({
                  headerTitle: 'COD - conditional operator deletion',
                  content: () => (
                    <div>
                      <Row>
                        O operador COD remove um operador condicional.
                      </Row>
                      <Row>
                        No exemplo abaixo, o operador ( not )
                        foi removido no código:
                      </Row>
                      <Row justify="center" className="images">
                        <img src={COD} alt="COD" style={{ marginTop: '16px' }} />
                      </Row>
                    </div>
                  ),
                })}
              >
                COD
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({
                  headerTitle: 'COI - conditional operator insertion',
                  content: () => (
                    <div>
                      <Row>
                        O operador COI insere um operador condicional.
                      </Row>
                      <Row>
                        No exemplo abaixo, o operador ( not )
                        foi inserido no código:
                      </Row>
                      <Row justify="center" className="images">
                        <img src={COI} alt="COI" style={{ marginTop: '16px' }} />
                      </Row>
                    </div>
                  ),
                })}
              >
                COI
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({
                  headerTitle: 'CRP - constant replacement',
                  content: () => (
                    <div>
                      <Row>
                        O operador CRP altera uma constante por outra.
                      </Row>
                      <Row>
                        No exemplo abaixo, a constante ( 0 )
                        foi alterada no código pela constante ( 1 ):
                      </Row>
                      <Row justify="center" className="images">
                        <img src={CRP} alt="CRP" style={{ marginTop: '16px' }} />
                      </Row>
                    </div>
                  ),
                })}
              >
                CRP
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({ headerTitle: 'DDL - decorator deletion' })}
              >
                DDL
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({ headerTitle: 'EHD - exception handler deletion' })}
              >
                EHD
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({ headerTitle: 'EXS - exception swallowing' })}
              >
                EXS
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({ headerTitle: 'IHD - hiding variable deletion' })}
              >
                IHD
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({ headerTitle: 'IOD - overriding method deletion' })}
              >
                IOD
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({ headerTitle: 'IOP - overridden method calling position change' })}
              >
                IOP
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({
                  headerTitle: 'LCR - logical connector replacement',
                  content: () => (
                    <div>
                      <Row>
                        O operador LCR altera um conector lógico.
                      </Row>
                      <Row>
                        No exemplo abaixo, o conector ( or )
                        foi alterado no código pelo conector ( and ):
                      </Row>
                      <Row justify="center" className="images">
                        <img src={LCR} alt="LCR" style={{ marginTop: '16px' }} />
                      </Row>
                    </div>
                  ),
                })}
              >
                LCR
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({ headerTitle: 'LOD - logical operator deletion' })}
              >
                LOD
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({ headerTitle: 'LOR - logical operator replacement' })}
              >
                LOR
              </Card>
            </Col>
          </Row>
          <Row>
            <Col offset span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({
                  headerTitle: 'ROR - relational operator replacement',
                  content: () => (
                    <div>
                      <Row>
                        O operador ROR altera um operador relacional por outro.
                      </Row>
                      <Row>
                        No exemplo abaixo, o operador ( &gt; )
                        foi alterado no código pelo operador ( &lt; ):
                      </Row>
                      <Row justify="center" className="images">
                        <img src={ROR} alt="ROR" style={{ marginTop: '16px' }} />
                      </Row>
                    </div>
                  ),
                })}
              >
                ROR
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({ headerTitle: 'SCD - super calling deletion' })}
              >
                SCD
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({ headerTitle: 'SCI - super calling insert' })}
              >
                SCI
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({ headerTitle: 'SIR - slice index remove' })}
              >
                SIR
              </Card>
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
          aaaa
        </div>
      </Carousel>
    </div>
  );
}

export default mutPy;
