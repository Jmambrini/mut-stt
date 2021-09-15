import React, { useState } from 'react';
import {
  Carousel, Row, Col, Collapse, Card, Modal,
} from 'antd';

import AOD from '../../generics/imgs/AOD.png';
import AOR from '../../generics/imgs/AOR.png';
import ASR from '../../generics/imgs/ASR.png';
import BCR from '../../generics/imgs/BCR.png';
import COD from '../../generics/imgs/COD.png';
import COI from '../../generics/imgs/COI.png';
import CRP from '../../generics/imgs/CRP.png';
import DDL from '../../generics/imgs/DDL.png';
import EHD from '../../generics/imgs/EHD.png';
import EXS from '../../generics/imgs/EXS.png';
import IHD from '../../generics/imgs/IHD.png';
import IOD from '../../generics/imgs/IOD.png';
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
        width="700px"
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
                onClick={() => showModal({
                  headerTitle: 'AOD - arithmetic operator deletion',
                  content: () => (
                    <div>
                      <Row>
                        O operador AOD remove um operador aritmético.
                      </Row>
                      <Row>
                        No exemplo abaixo, o operador ( - )
                        foi removido:
                      </Row>
                      <Row>
                        <Col>
                          Original:
                        </Col>
                        <Col>
                          Mutante:
                        </Col>
                      </Row>
                      <Row justify="center" className="images">
                        <img src={AOD} alt="AOD" style={{ marginTop: '16px' }} />
                      </Row>
                    </div>
                  ),
                })}
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
                onClick={() => showModal({
                  headerTitle: 'ASR - assignment operator replacement',
                  content: () => (
                    <div>
                      <Row>
                        O operador ASR altera um operador de atribuição por outro.
                      </Row>
                      <Row>
                        No exemplo abaixo, o operador ( += )
                        foi alterado para o ( -= ):
                      </Row>
                      <Row justify="center" className="images">
                        <img src={ASR} alt="ASR" style={{ marginTop: '16px' }} />
                      </Row>
                    </div>
                  ),
                })}
              >
                ASR
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({
                  headerTitle: 'BCR - break continue replacement',
                  content: () => (
                    <div>
                      <Row>
                        O operador BCR altera um break por um continue, e o inverso também.
                      </Row>
                      <Row>
                        No exemplo abaixo, o ( break )
                        foi alterado para o ( continue ):
                      </Row>
                      <Row justify="center" className="images">
                        <img src={BCR} alt="BCR" style={{ marginTop: '16px' }} />
                      </Row>
                    </div>
                  ),
                })}
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
                onClick={() => showModal({
                  headerTitle: 'DDL - decorator deletion',
                  content: () => (
                    <div>
                      <Row>
                        Esse operador trabalha com decoradores de Python.
                        Um decorador precisa ser definido com @staticmethod ou @classmethod.
                        Então, o que esse operador faz é remover um dos parâmetros
                        citados anteriormente.
                      </Row>
                      <Row>
                        No exemplo abaixo, o ( @staticmethod ) é removido:
                      </Row>
                      <Row justify="center" className="images">
                        <img src={DDL} alt="DDL" style={{ marginTop: '16px' }} />
                      </Row>
                    </div>
                  ),
                })}
              >
                DDL
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({
                  headerTitle: 'EHD - exception handler deletion',
                  content: () => (
                    <div>
                      <Row>
                        O operador EHD remove a função que trataria o erro da exceção,
                        e insere uma função raise no lugar, que retornará o erro novamente
                      </Row>
                      <Row>
                        No exemplo abaixo, o ( return 1 )
                        foi alterado para o ( raise ):
                      </Row>
                      <Row justify="center" className="images">
                        <img src={EHD} alt="EHD" style={{ marginTop: '16px' }} />
                      </Row>
                    </div>
                  ),
                })}
              >
                EHD
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({
                  headerTitle: 'EXS - exception swallowing',
                  content: () => (
                    <div>
                      <Row>
                        Esse operador causa uma &quot;swallowing exception&quot;. Explicando,
                        é a prática de detectar um erro ou exceção e, em seguida,
                        continuar sem registrar, processar ou relatar o erro a outras
                        partes do software.
                        <a href="https://en.wikipedia.org/wiki/Error_hiding">[1]</a>
                      </Row>
                      <Row>
                        No exemplo abaixo, o ( return 1 )
                        foi alterado para o ( pass ):
                      </Row>
                      <Row justify="center" className="images">
                        <img src={EXS} alt="EXS" style={{ marginTop: '16px' }} />
                      </Row>
                    </div>
                  ),
                })}
              >
                EXS
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({
                  headerTitle: 'IHD - hiding variable deletion',
                  content: () => (
                    <div>
                      <Row>
                        O operador IHD altera um operador aritmético por outro.
                      </Row>
                      <Row>
                        No exemplo abaixo, o operador ( + )
                        foi alterado para o ( - ):
                      </Row>
                      <Row justify="center" className="images">
                        <img src={IHD} alt="IHD" style={{ marginTop: '16px' }} />
                      </Row>
                    </div>
                  ),
                })}
              >
                IHD
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({
                  headerTitle: 'IOD - overriding method deletion',
                  content: () => (
                    <div>
                      <Row>
                        Quando utilizamos a lógica de orientação a objetos, temos que uma classe
                        pode ser criada a partir de outra. No nosso caso, temos a classe Base como
                        pai, e a classe Teste como filho, e também podemos observar que ambas
                        possuem a função foo(). Quando chamamos uma função da classe filho,
                        ela irá sobrescrever a função já existente da classe pai. Esse operator
                        remove a função da classe filho que sobrescreve a pré-existente na classe
                        pai, no nosso caso, a função da classe Teste, que sobrescreve a da classe
                        Base.
                      </Row>
                      <Row>
                        No exemplo abaixo, a função ( foo() )
                        da classe Teste foi removida:
                      </Row>
                      <Row justify="center" className="images">
                        <img src={IOD} alt="IOD" style={{ marginTop: '16px' }} />
                      </Row>
                    </div>
                  ),
                })}
              >
                IOD
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({
                  headerTitle: 'IOP - overridden method calling position change',
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
                onClick={() => showModal({
                  headerTitle: 'LOD - logical operator deletion',
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
                LOD
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({
                  headerTitle: 'LOR - logical operator replacement',
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
                onClick={() => showModal({
                  headerTitle: 'SCD - super calling deletion',
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
                SCD
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({
                  headerTitle: 'SCI - super calling insert',
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
                SCI
              </Card>
            </Col>
            <Col offset={1} span={5} justify="center" className="text">
              <Card
                onClick={() => showModal({
                  headerTitle: 'SIR - slice index remove',
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
