import React, { useState } from 'react';
import {
  Carousel, Row, Col, Collapse, Card, Modal,
} from 'antd';

import AOR from '../../generics/imgs/AOR.png';

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
            <Col offset={1} span={16} justify="center" className="text">
              <Collapse accordion>
                <Panel header="Versões do Python suportadas" key="1">
                  <p>A MutPy suporta versões do Python acima da versão 3.3</p>
                  <a href="https://www.python.org/" target="_blank" rel="noreferrer">https://www.python.org/</a>
                </Panel>
                <Panel header="Documentação da ferramenta" key="3">
                  <p>A documentação do MutPy pode ser encontrada no seguinte link</p>
                  https://www.python.org/ftp/python/3.7.9/python-3.7.9.exe
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
                onClick={() => showModal({ headerTitle: 'COD - conditional operator deletion' })}
              >
                COD
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({ headerTitle: 'COI - conditional operator insertion' })}
              >
                COI
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({ headerTitle: 'CRP - constant replacement' })}
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
                onClick={() => showModal({ headerTitle: 'LCR - logical connector replacement' })}
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
                onClick={() => showModal({ headerTitle: 'ROR - relational operator replacement' })}
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
