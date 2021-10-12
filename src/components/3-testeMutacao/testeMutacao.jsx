import React, { useState } from 'react';
import {
  Carousel, Radio, Space, Card, Button, Row, Col, Modal,
} from 'antd';
import ImageMapper from 'react-image-mapper';

import mutEx from '../../generics/mutExample/mutEx.png';

import './testeMutacao.scss';

// const { Panel } = Collapse;

function testeMutacao() {
  const [value1, setValue1] = useState(-1);
  const [color1, setColor1] = useState(['#fdd872', '#fdd872', '#fdd872']);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalHeaderTitle, setModalHeaderTitle] = useState();
  const [modalContent, setModalContent] = useState();

  const showModal = (area) => {
    console.log(area);
    setModalHeaderTitle(area.name);
    setModalContent(area.name);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function checarResposta1() {
    setColor1(['#F96462', '#F96462', '#A1C181']);
  }

  const AREAS_MAP = {
    name: 'my Map',
    areas: [
      {
        name: 'Mutante 1',
        shape: 'rect',
        coords: [4, 168, 215, 34],
      },
      {
        name: 'Mutante 2',
        shape: 'rect',
        coords: [220, 198, 1, 331],
      },
      {
        name: 'Mutante 3',
        shape: 'rect',
        coords: [369, 364, 156, 502],
      },
      {
        name: 'Mutante 4',
        shape: 'rect',
        coords: [662, 363, 446, 500],
      },
      {
        name: 'Mutante 5',
        shape: 'rect',
        coords: [594, 199, 808, 335],
      },
      {
        name: 'Mutante 6',
        shape: 'rect',
        coords: [597, 29, 810, 169],
      },
    ],
  };

  return (
    <div className="testeMutacao">
      <Modal
        title={modalHeaderTitle}
        visible={isModalVisible}
        footer={false}
        closable
        onCancel={handleCancel}
        width="fit-content"
        bodyStyle={{ fontSize: '16px' }}
        style={{ maxWidth: '400px' }}
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
              Teste de Mutação
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              O Teste de Mutação é uma técnica utilizada para que um desenvolvedor possa
              criar novos casos de teste, e também avaliar a qualidade dos casos que já
              criou.
              <br />
              <br />
              Essa técnica se assemelha à de &ldquo;Semeadura de Defeitos&ldquo;
              citada no tópico anterior, porém, com a introdução dos conceitos de
              Mutantes e Operadores de Mutação, conceitos que serão explicados no decorrer
              dos próximos tópicos.
              <br />
              <br />
              Além disso, o Teste de Mutação se baseia em duas hipóteses: a primeira é
              a do &ldquo;Programador Competente&ldquo;, e a segunda é a do &ldquo;Efeito de
              Acoplamento&ldquo;, ambas explicadas abaixo:
              <br />
            </Col>
          </Row>
          <Row style={{ marginTop: '18px' }}>
            <Col span={12} justify="center" align="middle" className="title">
              <Card
                style={{ width: '400px' }}
                onClick={() => showModal({
                  headerTitle: 'Hipótese do Programador Competente',
                  content: () => (
                    <div>
                      <Row justify="center">
                        <div style={{ textAlign: 'center' }}>
                          A Hipótese do Programador Competente diz que um programador
                          experiente, consegue escrever programas corretos, ou muito
                          próximo do correto.
                          <br />
                          <br />
                          Por esse motivo, a hipótese afirma que as falhas de um código criado
                          por um programador experiente são ocasionadas por pequenos erros de
                          código, como um erro sintático, por exemplo.
                        </div>
                      </Row>
                    </div>
                  ),
                })}
              >
                Hipótese do Programador Competente
              </Card>
            </Col>
            <Col span={12} justify="center" align="middle" className="title">
              <Card
                style={{ width: '400px' }}
                onClick={() => showModal({
                  headerTitle: 'Efeito de Acoplamento',
                  content: () => (
                    <div>
                      <Row justify="center">
                        <div style={{ textAlign: 'center' }}>
                          O Efeito de Acoplamento diz que casos de testes
                          capazes de detectar erros simples, também possuem uma
                          alta porcentagem de detecção de erros complexos do código.
                        </div>
                      </Row>
                    </div>
                  ),
                })}
              >
                Efeito de Acoplamento
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              Baseando-se nas duas hipóteses explicadas acima, a técnica de Teste
              de Mutação utiliza dos Mutantes e dos Operadores de Mutação, conceitos que serão
              explicados a seguir.
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Mutantes
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              Os Mutantes são um dos conceitos do Teste de Mutação.
              Eles são é gerados à partir do código inicial, introduzindo um pequeno
              erro dentro desse código. Abaixo, está representado um exemplo de tipos
              de Mutantes, sendo derivados de um código original.
              <br />
              O Código Orignal é bem simples, e teria apenas um Caso de Teste, mostrando
              uma saída igual a &quot;7 12&quot;
            </Col>
          </Row>
          <Row>
            <Col offset={1}>
              <ImageMapper src={mutEx} map={AREAS_MAP} onClick={(area) => showModal(area)} />
            </Col>
            <Col offset={1} span={5}>
              {/* <Card
                onClick={() => showModal({
                  headerTitle: 'Mutante 1',
                  content: () => (
                    <div>
                      <Row justify="center">
                        <div style={{ textAlign: 'center' }}>
                          No Mutante 1, o número
                          {' '}
                          <i style={{ color: 'red' }}>3</i>
                          {' '}
                          da linha 2 do Código original
                          foi alterado pelo número
                          {' '}
                          <i style={{ color: 'red' }}>5</i>
                          .
                        </div>
                      </Row>
                    </div>
                  ),
                })}
              >
                Mutante 1:
              </Card>
              {' '}
              <Card
                style={{ marginTop: '8px', width: '130px' }}
                onClick={() => showModal({
                  headerTitle: 'Mutante 2',
                  content: () => (
                    <div>
                      <Row justify="center">
                        <div style={{ textAlign: 'center' }}>
                          No Mutante 2,
                        </div>
                      </Row>
                    </div>
                  ),
                })}
              >
                Mutante 2:
              </Card>
              {' '}
              <Card
                style={{ marginTop: '8px', width: '130px' }}
                onClick={() => showModal({
                  headerTitle: 'Mutante 3',
                  content: () => (
                    <div>
                      <Row justify="center">
                        <div style={{ textAlign: 'center' }}>
                          No Mutante 3,
                        </div>
                      </Row>
                    </div>
                  ),
                })}
              >
                Mutante 3:
              </Card>
              {' '}
              <Card
                style={{ marginTop: '8px', width: '130px' }}
                onClick={() => showModal({
                  headerTitle: 'Mutante 4',
                  content: () => (
                    <div>
                      <Row justify="center">
                        <div style={{ textAlign: 'center' }}>
                          No Mutante 4,
                        </div>
                      </Row>
                    </div>
                  ),
                })}
              >
                Mutante 4:
              </Card>
              {' '}
              <Card
                style={{ marginTop: '8px', width: '130px' }}
                onClick={() => showModal({
                  headerTitle: 'Mutante 5',
                  content: () => (
                    <div>
                      <Row justify="center">
                        <div style={{ textAlign: 'center' }}>
                          No Mutante 5,
                        </div>
                      </Row>
                    </div>
                  ),
                })}
              >
                Mutante 5:
              </Card>
              {' '}
              <Card
                style={{ marginTop: '8px', width: '130px' }}
                onClick={() => showModal({
                  headerTitle: 'Mutante 6',
                  content: () => (
                    <div>
                      <Row justify="center">
                        <div style={{ textAlign: 'center' }}>
                          No Mutante 6,
                        </div>
                      </Row>
                    </div>
                  ),
                })}
              >
                Mutante 6:
              </Card> */}
              {/* <Collapse accordion>
                <Panel header="Mutante 1" key="1">
                  <p className="ow">
                    No Mutante 1, o número
                    {' '}
                    <i style={{ color: 'red' }}>3</i>
                    {' '}
                    da linha 2 do Código original
                    foi alterado pelo número
                    {' '}
                    <i style={{ color: 'red' }}>5</i>
                    .
                  </p>
                </Panel>
                <Panel header="Mutante 2" key="2">
                  <p className="ow">
                    No Mutante 1, o número
                    {' '}
                    <i style={{ color: 'red' }}>3</i>
                    {' '}
                    da linha 2 do Código original
                    foi alterado pelo número
                    {' '}
                    <i style={{ color: 'red' }}>5</i>
                    .
                  </p>
                </Panel>
                <Panel header="Mutante 3" key="3">
                  <p className="ow">
                    No Mutante 1, o número
                    {' '}
                    <i style={{ color: 'red' }}>3</i>
                    {' '}
                    da linha 2 do Código original
                    foi alterado pelo número
                    {' '}
                    <i style={{ color: 'red' }}>5</i>
                    .
                  </p>
                </Panel>
                <Panel header="Mutante 4" key="4">
                  <p className="ow">
                    No Mutante 1, o número
                    {' '}
                    <i style={{ color: 'red' }}>3</i>
                    {' '}
                    da linha 2 do Código original
                    foi alterado pelo número
                    {' '}
                    <i style={{ color: 'red' }}>5</i>
                    .
                  </p>
                </Panel>
                <Panel header="Mutante 5" key="5">
                  <p className="ow">
                    No Mutante 1, o número
                    {' '}
                    <i style={{ color: 'red' }}>3</i>
                    {' '}
                    da linha 2 do Código original
                    foi alterado pelo número
                    {' '}
                    <i style={{ color: 'red' }}>5</i>
                    .
                  </p>
                </Panel>
                <Panel header="Mutante 6" key="6">
                  <p className="ow">
                    No Mutante 1, o número
                    {' '}
                    <i style={{ color: 'red' }}>3</i>
                    {' '}
                    da linha 2 do Código original
                    foi alterado pelo número
                    {' '}
                    <i style={{ color: 'red' }}>5</i>
                    .
                  </p>
                </Panel>
              </Collapse> */}
            </Col>
          </Row>
        </div>
        <div>
          O QUE É UM MUTANTE - PROGRAMA ORIGINAL, MUTANTE
          SURGE BASEADO QUE PROGRAMADORES SÃO COMPETENTES, PROGRAMAS COM BOA QUALIDADE
          O TESTE DE MUTACAO ASSUME QUE VOCE TEM UM PROGRAMA LIVRE DE DEFEITOS, E PARA TESTAR,
          CRIAMOS PROGRAMAS QUE POSSUEM DEFEITOS.
        </div>
        <div>
          comentar sobre as criações dos mutantes
          classes de modelos baseados em uma linguagem (principais erros)
        </div>
        <div>
          <div className="quizz-question">
            O que é um teste de mutação?
          </div>
          <div>
            <Radio.Group onChange={(e) => setValue1(e.target.value)} value={value1}>
              <Space direction="vertical">
                <Card className="cards1" style={{ backgroundColor: color1[0] }}>
                  <Radio value={1}>Um teste</Radio>
                </Card>
                <Card className="cards1" style={{ backgroundColor: color1[1] }}>
                  <Radio value={2}>Uma mutação</Radio>
                </Card>
                <Card className="cards1" style={{ backgroundColor: color1[2] }}>
                  <Radio value={3}>Um teste de mutação</Radio>
                </Card>
              </Space>
            </Radio.Group>
          </div>
          <Button onClick={() => checarResposta1(value1)}>
            Conferir
          </Button>
        </div>
      </Carousel>
    </div>
  );
}

export default testeMutacao;
