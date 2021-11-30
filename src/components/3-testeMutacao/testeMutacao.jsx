import React, { useState, useRef } from 'react';
import {
  Carousel, Radio, Space, Card, Button, Row, Col, Modal,
} from 'antd';
import ImageMapper from 'react-image-mapper';

import { CaretRightOutlined, CaretDownOutlined } from '@ant-design/icons';

import mutEx from '../../generics/mutExample/mutEx.png';
import teste1 from '../../generics/exercicios/teste1.png';
import teste2 from '../../generics/exercicios/teste2.png';
import teste3 from '../../generics/exercicios/teste3.png';

import './testeMutacao.scss';

function testeMutacao(props) {
  const slider = useRef();

  const [value1, setValue1] = useState(-1);
  const [color1, setColor1] = useState(['#fdd872', '#fdd872']);
  const [disabled1, setDisabled1] = useState(false);

  const [value2, setValue2] = useState(-1);
  const [color2, setColor2] = useState(['#fdd872', '#fdd872', '#fdd872', '#fdd872']);
  const [disabled2, setDisabled2] = useState(false);

  const [value3, setValue3] = useState(-1);
  const [color3, setColor3] = useState(['#fdd872', '#fdd872', '#fdd872', '#fdd872']);
  const [disabled3, setDisabled3] = useState(false);

  const [value4, setValue4] = useState(-1);
  const [color4, setColor4] = useState(['#fdd872', '#fdd872', '#fdd872', '#fdd872']);
  const [disabled4, setDisabled4] = useState(false);

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

  function checarResposta1() {
    if (value1 !== -1) {
      setColor1(['#A1C181', '#F96462']);
      setDisabled1(true);
    }
  }

  function checarResposta2() {
    if (value2 !== -1) {
      setColor2(['#F96462', '#F96462', '#A1C181', '#F96462']);
      setDisabled2(true);
    }
  }

  function checarResposta3() {
    if (value3 !== -1) {
      setColor3(['#F96462', '#F96462', '#F96462', '#A1C181']);
      setDisabled3(true);
    }
  }

  function checarResposta4() {
    if (value4 !== -1) {
      setColor4(['#A1C181', '#F96462', '#F96462', '#F96462']);
      setDisabled4(true);
    }
  }

  const AREAS_MAP = {
    name: 'my Map',
    areas: [
      {
        key: '1',
        name: 'Programa Mutante 1:',
        shape: 'rect',
        coords: [160, 24, 0, 125],
      },
      {
        key: '2',
        name: 'Programa Mutante 2:',
        shape: 'rect',
        coords: [162, 147, 2, 247],
      },
      {
        key: '3',
        name: 'Programa Mutante 3:',
        shape: 'rect',
        coords: [272, 270, 115, 372],
      },
      {
        key: '4',
        name: 'Programa Mutante 4:',
        shape: 'rect',
        coords: [329, 270, 490, 372],
      },
      {
        key: '5',
        name: 'Programa Mutante 5:',
        shape: 'rect',
        coords: [439, 148, 599, 248],
      },
      {
        key: '6',
        name: 'Programa Mutante 6:',
        shape: 'rect',
        coords: [439, 22, 599, 124],
      },
      {
        key: 'original',
        name: 'Programa Original:',
        shape: 'rect',
        coords: [217, 96, 379, 198],
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
              Teste de Mutação
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              O teste de mutação é um critério utilizado para que um testador possa
              criar novos casos, e também avaliar a qualidade do conjunto
              de casos de teste já existente.
              <br />
              <br />
              Ele se assemelha ao critério de semeadura de defeitos
              citado no tópico anterior, porém, com a introdução de conceitos importantes,
              como o de mutantes e o de operadores de mutação.
              <br />
              <br />
              Ele se baseia em dois conceitos: o primeiro é
              o do &ldquo;Programador Competente&ldquo;, e o segundo é o do &ldquo;Efeito de
              Acoplamento&ldquo;, ambos explicadas abaixo:
              <br />
            </Col>
          </Row>
          <Row style={{ marginTop: '18px' }}>
            <Col span={12} align="middle" className="title">
              <Card
                style={{ width: '400px' }}
                onClick={() => showModal({
                  headerTitle: 'Hipótese do Programador Competente',
                  content: () => (
                    <div>
                      <Row>
                        <div>
                          A Hipótese do Programador Competente assume que um programador
                          experiente consegue escrever programas corretos, ou muito
                          próximo do correto.
                          <br />
                          <br />
                          Por esse motivo, a hipótese assume que os defeitos de um código criado
                          por um programador experiente são ocasionadas por pequenos equívocos
                          comentidos no código, como um erro da sintaxe da linguagem.
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
                      <Row>
                        <div>
                          O Efeito de Acoplamento assume que casos de testes
                          capazes de detectar defeitos simples, também possuem uma
                          alta porcentagem de detecção de defeitos complexos.
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
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Mutantes
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              O teste de mutação envolve a criação de programas mutantes, isto é,
              programas que possuem uma alteração, que são geradas a partir do
              código original, introduzindo um pequeno
              defeito dentro desse código.
              Abaixo, estão representados exemplos
              de programas mutantes, sendo derivados de um código original.
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" align="middle">
              <ImageMapper
                src={mutEx}
                width={600}
                map={AREAS_MAP}
                onClick={(area) => showModal({
                  headerTitle: area.name,
                  content: () => {
                    switch (area.key) {
                      case '1':
                        return (
                          <div>
                            No Programa Mutante 1, o número
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>3</i>
                            {' '}
                            da linha 2 do Código Original foi alterado pelo número
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>5</i>
                            .
                            <br />
                            <br />
                            Dessa maneira, a comparação realizada na linha 2 nunca
                            será verdadeira, e o retorno do programa será somente
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>( 12 )</i>
                            {' '}
                            , expondo um defeito no programa executado.
                          </div>
                        );
                      case '2':
                        return (
                          <div>
                            No Programa Mutante 2, o operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; &gt; &quot;</i>
                            {' '}
                            da linha 2 do Código Original foi alterado pelo operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; &lt; &quot;</i>
                            .
                            <br />
                            <br />
                            Dessa maneira, a comparação realizada na linha 2 não
                            será verdadeira, e o retorno do programa será somente
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>( 12 )</i>
                            {' '}
                            , expondo um defeito no programa executado.
                          </div>
                        );
                      case '3':
                        return (
                          <div>
                            No Programa Mutante 3, o operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; * &quot;</i>
                            {' '}
                            da linha 6 do Código Original foi alterado pelo operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; / &quot;</i>
                            .
                            <br />
                            <br />
                            Dessa maneira, o retorno do programa será
                            <br />
                            <i style={{ color: 'red', fontWeight: 'bold' }}>( 7 e 0.75 )</i>
                            {' '}
                            , expondo um defeito no programa executado.
                          </div>
                        );
                      case '4':
                        return (
                          <div>
                            No Programa Mutante 4, o operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; == &quot;</i>
                            {' '}
                            da linha 5 do Código Original foi alterado pelo operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; != &quot;</i>
                            .
                            <br />
                            <br />
                            Dessa maneira, a comparação realizada na linha 5 não
                            será verdadeira, e o retorno do programa será somente
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>( 7 )</i>
                            {' '}
                            , expondo um defeito no programa executado.
                          </div>
                        );
                      case '5':
                        return (
                          <div>
                            No Programa Mutante 5, foi inserido um operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>not</i>
                            {' '}
                            na linha 2 do Código Original
                            .
                            <br />
                            <br />
                            Dessa maneira, a comparação realizada na linha 2 não
                            será verdadeira, e o retorno do programa será somente
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>( 12 )</i>
                            {' '}
                            , expondo um defeito no programa executado.
                          </div>
                        );
                      case '6':
                        return (
                          <div>
                            No Programa Mutante 6, o operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; + &quot;</i>
                            {' '}
                            da linha 3 do Código Original foi alterado pelo operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; - &quot;</i>
                            .
                            <br />
                            <br />
                            Dessa maneira, o retorno do programa será
                            <br />
                            <i style={{ color: 'red', fontWeight: 'bold' }}>( -1 e 12 )</i>
                            {' '}
                            , expondo um defeito no programa executado.
                          </div>
                        );
                      case 'original':
                        return (
                          <div>
                            Esse código foi criado com o intuito de ser o mais
                            simples possível, justamente para explicar como são
                            gerados os mutantes. Por exemplo, as duas condições
                            inseridas no código,
                            <br />
                            {' '}
                            <div style={{ textAlignLast: 'center' }}>
                              <div style={{ color: 'red', fontWeight: 'bold' }}>
                                if (4 &gt; 3)
                              </div>
                              e
                              <div style={{ color: 'red', fontWeight: 'bold' }}>
                                if (1 + 1 == 2)
                              </div>
                            </div>
                            {' '}
                            sempre serão verdadeiras por não dependerem de
                            constantes externas à função.
                            <br />
                            Além disso, devido a simplicidade do código utilizado, o caso
                            de teste desenvolvido também será simples. Ele apenas verifica se
                            o retorno do programa será
                            {' '}
                            <div style={{ color: 'red', textAlignLast: 'center', fontWeight: 'bold' }}>( 7 e 12 )</div>
                          </div>
                        );
                      default:
                        return null;
                    }
                  },
                })}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text" style={{ marginTop: '16px' }}>
              Clique inicialmente no
              {' '}
              <b>
                código original
              </b>
              {' '}
              e depois em cada um dos
              {' '}
              <b>
                programas mutantes
              </b>
              {' '}
              para observar o que foi alterado.
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Operadores de Mutação
            </Col>
          </Row>
          <Row style={{ height: '400px' }}>
            <Col span={12} className="text" style={{ alignSelf: 'center' }}>
              A seguir será discutido com detalhes os operadores de mutação.
              Você pode fazer alguns exercícios de fixação, ou seguir para o próximo tópico.
            </Col>
            <Col offset={2} span={8} style={{ alignSelf: 'center' }}>
              <Button
                onClick={() => {
                  slider.current.next();
                }}
              >
                Exercícios propostos
                <CaretRightOutlined style={{ fontSize: '20px' }} />
              </Button>
              <Button
                onClick={() => props.history.push('/operadores')}
              >
                Operadores de Mutação
                <CaretDownOutlined style={{ fontSize: '20px' }} />
              </Button>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Exercício 1
            </Col>
          </Row>
          <div className="quizz-question">
            Sobre a hipótese do programador competente: programadores experientes
            escrevem programas corretos, ou muito próximos do correto.
            <br />
            <br />
            Essa afirmação está:
          </div>
          <Row>
            <Col span={10}>
              <div>
                <Radio.Group
                  onChange={(e) => setValue1(e.target.value)}
                  value={value1}
                  disabled={disabled1}
                >
                  <Space direction="vertical">
                    <Card className="cards1" style={{ backgroundColor: color1[0], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={1}>Correta</Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color1[1], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={2}>Errada</Radio>
                    </Card>
                  </Space>
                </Radio.Group>
              </div>
            </Col>
            <Col offset={1} span={13} className="text" style={{ textAlign: '-webkit-center' }}>
              {disabled1
                ? (
                  <div style={{ width: '80%', textAlign: 'center' }}>
                    A afirmação está correta pois, conforme a Hipótese do Programador
                    Competente, programadores experientes
                    escrevem programas corretos, ou muito próximos do correto.
                  </div>
                ) : null}
            </Col>
          </Row>
          <Button onClick={() => checarResposta1(value1)}>
            Conferir
          </Button>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Exercício 2
            </Col>
          </Row>
          <div className="quizz-question">
            Analizando o código ao lado, qual foi a mutação que ocorreu?
          </div>
          <Row>
            <Col span={10}>
              <div>
                <Radio.Group
                  onChange={(e) => setValue2(e.target.value)}
                  value={value2}
                  disabled={disabled2}
                >
                  <Space direction="vertical">
                    <Card className="cards1" style={{ backgroundColor: color2[0], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={1}>Um operador de atribuição foi alterado</Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color2[1], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={2}>Um operador condicional foi alterado</Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color2[2], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={3}>Um operador aritmético foi alterado</Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color2[3], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={4}>Um operador lógico foi alterado</Radio>
                    </Card>
                  </Space>
                </Radio.Group>
                <Button onClick={() => checarResposta2(value2)}>
                  Conferir
                </Button>
              </div>
            </Col>
            <Col offset={1} span={13} className="text" style={{ textAlign: '-webkit-center' }}>
              <img src={teste1} alt="teste1" style={{ marginBottom: '14px', width: '-webkit-fill-available' }} />
              {disabled2
                ? (
                  <div style={{ width: '80%', textAlign: 'center' }}>
                    A mutação que ocorreu foi uma alteração de operador aritmético,
                    que pode ser observada na mudança do
                    <div style={{ textAlignLast: 'center' }}>
                      <div style={{ color: 'red' }}>
                        print(a + b)
                      </div>
                      por
                      <div style={{ color: 'red' }}>
                        print(a - b)
                      </div>
                    </div>
                  </div>
                ) : null}
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Exercício 3
            </Col>
          </Row>
          <div className="quizz-question">
            Analizando o código ao lado, qual foi a mutação que ocorreu?
          </div>
          <Row>
            <Col span={10}>
              <div>
                <Radio.Group
                  onChange={(e) => setValue3(e.target.value)}
                  value={value3}
                  disabled={disabled3}
                >
                  <Space direction="vertical">
                    <Card className="cards1" style={{ backgroundColor: color3[0], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={1}>Um operador de atribuição foi alterado</Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color3[1], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={2}>Um operador condicional foi alterado</Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color3[2], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={3}>Um operador aritmético foi alterado</Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color3[3], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={4}>Um operador lógico foi alterado</Radio>
                    </Card>
                  </Space>
                </Radio.Group>
              </div>
              <Button onClick={() => checarResposta3(value3)}>
                Conferir
              </Button>
            </Col>
            <Col offset={1} span={13} className="text" style={{ textAlign: '-webkit-center' }}>
              <img src={teste2} alt="teste2" style={{ marginBottom: '14px', width: '-webkit-fill-available' }} />
              {disabled3
                ? (
                  <div style={{ width: '80%', textAlign: 'center' }}>
                    A mutação que ocorreu foi uma alteração de operador lógico,
                    que pode ser observada na mudança do
                    <div style={{ textAlignLast: 'center' }}>
                      <div style={{ color: 'red' }}>
                        (a &gt; b and a &lt; j )
                      </div>
                      por
                      <div style={{ color: 'red' }}>
                        (a &gt; b or a &lt; j )
                      </div>
                    </div>
                  </div>
                ) : null}
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Exercício 4
            </Col>
          </Row>
          <div className="quizz-question">
            Analizando o código ao lado, qual foi a mutação que ocorreu?
          </div>
          <Row>
            <Col span={10}>
              <div>
                <Radio.Group
                  onChange={(e) => setValue4(e.target.value)}
                  value={value4}
                  disabled={disabled4}
                >
                  <Space direction="vertical">
                    <Card className="cards1" style={{ backgroundColor: color4[0], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={1}>Um operador de atribuição foi alterado</Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color4[1], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={2}>Um operador condicional foi alterado</Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color4[2], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={3}>Um operador relacional foi alterado</Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color4[3], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={4}>Um operador lógico foi alterado</Radio>
                    </Card>
                  </Space>
                </Radio.Group>
              </div>
              <Button onClick={() => checarResposta4(value4)}>
                Conferir
              </Button>
            </Col>
            <Col offset={1} span={13} className="text" style={{ textAlign: '-webkit-center' }}>
              <img src={teste3} alt="teste3" style={{ marginBottom: '14px', width: '-webkit-fill-available' }} />
              {disabled4
                ? (
                  <div style={{ width: '80%', textAlign: 'center' }}>
                    A mutação que ocorreu foi uma alteração de operador de atribuição,
                    que pode ser observada na mudança do
                    <div style={{ textAlignLast: 'center' }}>
                      <div style={{ color: 'red' }}>
                        j += 2
                      </div>
                      por
                      <div style={{ color: 'red' }}>
                        j -= 2
                      </div>
                    </div>
                  </div>
                ) : null}
            </Col>
          </Row>
        </div>
      </Carousel>
    </div>
  );
}

export default testeMutacao;
