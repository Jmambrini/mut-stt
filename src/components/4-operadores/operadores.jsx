import React, { useState, useRef } from 'react';
import {
  Carousel, Row, Col, Card, Modal, Tooltip, Button, Radio, Space,
} from 'antd';

import { CaretRightOutlined, CaretDownOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

import ImageMapper from 'react-image-mapper';

import './operadores.scss';

import AOD from '../../generics/operators/AOD.png';
import AOR from '../../generics/operators/AOR.png';
import ASR from '../../generics/operators/ASR.png';
import BCR from '../../generics/operators/BCR.png';
import COD from '../../generics/operators/COD.png';
import COI from '../../generics/operators/COI.png';
import CRP from '../../generics/operators/CRP.png';
import DDL from '../../generics/operators/DDL.png';
import EHD from '../../generics/operators/EHD.png';
import EXS from '../../generics/operators/EXS.png';
import IHD from '../../generics/operators/IHD.png';
import IOD from '../../generics/operators/IOD.png';
import IOP from '../../generics/operators/IOP.png';
import LCR from '../../generics/operators/LCR.png';
import LOD from '../../generics/operators/LOD.png';
import LOR from '../../generics/operators/LOR.png';
import ROR from '../../generics/operators/ROR.png';
import SCD from '../../generics/operators/SCD.png';
import SCI from '../../generics/operators/SCI.png';
import SIR from '../../generics/operators/SIR.png';

import exMutStep from '../../generics/mutExample/mutExStep.png';
import mutEx from '../../generics/mutExample/mutEx.png';
import mutations from '../../generics/mutExample/mutations.png';

import oper1 from '../../generics/exercicios/oper1.png';
import oper2 from '../../generics/exercicios/oper2.png';
import oper3 from '../../generics/exercicios/oper3.png';
import oper4 from '../../generics/exercicios/oper4.png';

function operadores(props) {
  const slider = useRef();

  const [value1, setValue1] = useState(-1);
  const [color1, setColor1] = useState(['#fdd872', '#fdd872', '#fdd872']);
  const [disabled1, setDisabled1] = useState(false);

  const [value2, setValue2] = useState(-1);
  const [color2, setColor2] = useState(['#fdd872', '#fdd872']);
  const [disabled2, setDisabled2] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalHeaderTitle, setModalHeaderTitle] = useState();
  const [modalContent, setModalContent] = useState();

  function checarResposta1() {
    if (value1 !== -1) {
      setColor1(['#F96462', '#F96462', '#A1C181']);
      setDisabled1(true);
    }
  }

  function checarResposta2() {
    if (value2 !== -1) {
      setColor2(['#F96462', '#A1C181']);
      setDisabled2(true);
    }
  }

  const showModal = ({ headerTitle, content }) => {
    setModalHeaderTitle(headerTitle);
    setModalContent(content);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const AREAS_MAP = {
    name: 'my Map',
    areas: [
      {
        key: '1',
        name: 'Mutante 1:',
        shape: 'rect',
        coords: [160, 24, 0, 125],
      },
      {
        key: '2',
        name: 'Mutante 2:',
        shape: 'rect',
        coords: [162, 147, 2, 247],
      },
      {
        key: '3',
        name: 'Mutante 3:',
        shape: 'rect',
        coords: [272, 270, 115, 372],
      },
      {
        key: '4',
        name: 'Mutante 4:',
        shape: 'rect',
        coords: [329, 270, 490, 372],
      },
      {
        key: '5',
        name: 'Mutante 5:',
        shape: 'rect',
        coords: [439, 148, 599, 248],
      },
      {
        key: '6',
        name: 'Mutante 6:',
        shape: 'rect',
        coords: [439, 22, 599, 124],
      },
      {
        key: 'original',
        name: 'Código Original:',
        shape: 'rect',
        coords: [217, 96, 379, 198],
      },
    ],
  };

  return (
    <div className="operadores">
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
              Operadores de Mutação
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              Um Operador de Mutação é um conjunto de regras que irão definir
              qual alteração será feita no código original, o qual o usuário possui
              casos de teste criados e deseja testar a efetividade desses.
              <br />
              <br />
              Por exemplo, um determinado Operador de Mutação possui regras desenvolvidas
              para modificar um operador aritmético por outro. Então ao utilizar esse
              operador em um código que realiza uma simples soma de dois números, o mutante
              trocará essa soma por uma subtração, e tentará utilizar os casos de teste para
              verificar se essa mudança será testada por eles.
              <br />
              <br />
              Seguindo o exemplo acima, o pequeno trecho de código abaixo sofreu uma mutação
              por um operador, e gerou um mutante, que possui o
              {' '}
              <i style={{ color: 'red' }}>operador +</i>
              {' '}
              alterado pelo
              {' '}
              <i style={{ color: 'red' }}>operador -</i>
              .
            </Col>
          </Row>
          <Row justify="center">
            <img src={exMutStep} alt="exMutStep" style={{ marginTop: '14px' }} />
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Operadores de Mutação x Mutantes
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              Com ambos os conceitos de Operadores de Mutação e Mutantes explicados,
              é possível entender melhor como funciona um Teste de Mutação na prática.
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              Com um código inicial, o Teste de Mutação utiliza dos seus Operadores
              de Mutação para gerar vários Mutantes do mesmo código.
              <br />
              Utilizando as regras de cada Operador, o código inicial é analisado,
              e verifica-se quais dos Operadores poderão ser utilizados.
              Então, somente os Operadores compatíveis com o código que serão utilizados.
              Por exemplo, um Operador de Mutação que altera um operador aritmético não
              ser usado em um código que não realiza operações aritméticas.
            </Col>
          </Row>
          <Row>
            <Col span={12} className="text">
              Na ilustração ao lado é possível visualizar como esse fluxo ocorre.
              <br />
              No exemplo, o Operador 1 consegue gerar um número de mutantes representados
              pelos &quot;Mutantes x&quot;, o Operador 2 consegue gerar outros mutantes,
              representados pelos &quot;Mutantes z&quot;, e o Operador 3 consegue gerar
              outros mutantes, representados pelos &quot;Mutantes x&quot;.
              <br />
              <br />
              E o Teste de Mutação segue dessa maneira, até gerar todos os mutantes
              possíveis para o código original, dado seu conjunto limitado de Operadores.
            </Col>
            <Col offset={1}>
              <img src={mutations} alt="mutations" style={{ height: '250px' }} />
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Operadores de Mutação x Mutantes
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              Utilizando o mesmo exemplo do tópico anterior, e possuindo o conhecimento
              do conceito de Operadores de Mutação, é possível analisar os mutantes abaixo de
              outra maneira.
              <br />
              <b>
                Clique em cada um do Mutantes para observar como a alteração ocorreu.
              </b>
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
                            No Mutante 1, foi utilizado um Operador de Mutação
                            que altera uma constante por outra constante.
                            <br />
                            <br />
                            Nesse caso, o
                            {' '}
                            <i style={{ color: 'red' }}>número 3</i>
                            {' '}
                            da linha 2 do Código Original foi alterado pelo
                            {' '}
                            <i style={{ color: 'red' }}>número 5</i>
                            .
                          </div>
                        );
                      case '2':
                        return (
                          <div>
                            No Mutante 2, foi utilizado um Operador de Mutação
                            que altera um operador relacional por outro operador relacional.
                            <br />
                            <br />
                            Nesse caso, o
                            {' '}
                            <i style={{ color: 'red' }}>operador &gt;</i>
                            {' '}
                            da linha 2 do Código Original foi alterado pelo
                            {' '}
                            <i style={{ color: 'red' }}>operador &lt;</i>
                            .
                          </div>
                        );
                      case '3':
                        return (
                          <div>
                            No Mutante 3, foi utilizado um Operador de Mutação
                            que altera um operador aritmético por outro operador aritmético.
                            <br />
                            <br />
                            Nesse caso, o
                            {' '}
                            <i style={{ color: 'red' }}>operador *</i>
                            {' '}
                            da linha 6 do Código Original foi alterado pelo
                            {' '}
                            <i style={{ color: 'red' }}>operador /</i>
                            .
                          </div>
                        );
                      case '4':
                        return (
                          <div>
                            No Mutante 4, foi utilizado um Operador de Mutação
                            que altera um operador de comparação por outro operador de comparação.
                            <br />
                            <br />
                            Nesse caso, o
                            {' '}
                            <i style={{ color: 'red' }}>operador ==</i>
                            {' '}
                            da linha 5 do Código Original foi alterado pelo
                            {' '}
                            <i style={{ color: 'red' }}>operador !=</i>
                            .
                          </div>
                        );
                      case '5':
                        return (
                          <div>
                            No Mutante 5, foi utilizado um Operador de Mutação
                            que insere um operador de comparação no código original.
                            <br />
                            <br />
                            Nesse caso, o
                            {' '}
                            <i style={{ color: 'red' }}>operador not</i>
                            {' '}
                            foi inserido na linha 2 do Código Original
                            .
                          </div>
                        );
                      case '6':
                        return (
                          <div>
                            No Mutante 6, foi utilizado um Operador de Mutação
                            que altera um operador aritmético por outro operador aritmético.
                            <br />
                            <br />
                            Nesse caso, o
                            {' '}
                            <i style={{ color: 'red' }}>operador +</i>
                            {' '}
                            da linha 3 do Código Original foi alterado pelo
                            {' '}
                            <i style={{ color: 'red' }}>operador -</i>
                            .
                          </div>
                        );
                      case 'original':
                        return (
                          <div>
                            Esse código foi criado com o intuito de ser o mais
                            simples possível, justamente para explicar como são
                            gerados os Mutantes. Por exemplo, as duas condições
                            inseridas no código,
                            <br />
                            {' '}
                            <div style={{ textAlignLast: 'center' }}>
                              <div style={{ color: 'red' }}>
                                if (4 &gt; 3)
                              </div>
                              e
                              <div style={{ color: 'red' }}>
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
                            <div style={{ color: 'red', textAlignLast: 'center' }}>( 7 e 12 )</div>
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
        </div>
        <div>
          <div>
            <Row>
              <Col span={24} justify="center" align="middle" className="title">
                Operadores de mutação suportados pela MutPy
                <Tooltip placement="right" title="Clique nos cards para visualizar as informações do operador">
                  {' '}
                  {' '}
                  <ExclamationCircleOutlined />
                </Tooltip>
              </Col>
            </Row>
            <Row>
              <Col className="text">
                Nesse REA, foi utilizada a ferramenta de apoio Mut.py para ajudar no entendimento
                dos conceitos, e também para introduzir um pouco de como essas ferramentas
                funcionam na prática.
                Existe um tópico dedicado a explicação dela, porém como o
                tópico atual é sobre os Operadores de Mutação, abaixo estão todos os que a
                ferramenta utiliza.
              </Col>
            </Row>
            <Row justify="center">
              <Col span={5} justify="center" className="text">
                <Card
                  onClick={() => showModal({
                    headerTitle: 'AOD - arithmetic operator deletion',
                    content: () => (
                      <div>
                        <Row justify="center">
                          <div>
                            O operador AOD é utilizado pela ferramenta para criar um mutante do
                            código
                            original, no qual esse mutante possui um operador aritmético removido
                            do código original.
                          </div>
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo abaixo, o operador
                            {' '}
                            <i style={{ color: 'red' }}>-</i>
                            {' '}
                            foi removido:
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={AOD} alt="AOD" style={{ marginTop: '14px' }} />
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
                        <Row justify="center">
                          O operador AOR é utilizado pela ferramenta para criar um mutante do código
                          original, no qual esse mutante possui um operador aritmético alterado
                          por outro operador aritmético.
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo abaixo, o operador
                            {' '}
                            <i style={{ color: 'red' }}>+</i>
                            {' '}
                            foi alterado para o
                            {' '}
                            <i style={{ color: 'red' }}>-</i>
                            {' '}
                            :
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={AOR} alt="AOR" style={{ marginTop: '14px' }} />
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
                          O operador ASR é utilizado pela ferramenta para criar um mutante do código
                          original, no qual esse mutante possui um operador de atribuição alterado
                          por outro operador de atribuição.
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo abaixo, o operador
                            {' '}
                            <i style={{ color: 'red' }}>+=</i>
                            {' '}
                            foi alterado para o
                            {' '}
                            <i style={{ color: 'red' }}>-=</i>
                            {' '}
                            :
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={ASR} alt="ASR" style={{ marginTop: '14px' }} />
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
                        <Row justify="center">
                          <div>
                            O operador BCR é utilizado pela ferramenta para criar um mutante
                            do código
                            original, no qual esse mutante possui um operador
                            {' '}
                            <i style={{ color: 'red' }}>break</i>
                            {' '}
                            alterado por um operador
                            {' '}
                            <i style={{ color: 'red' }}>continue</i>
                            {' '}
                            . O inverso também pode ocorrer.
                          </div>
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo abaixo, o
                            {' '}
                            <i style={{ color: 'red' }}>break</i>
                            {' '}
                            foi alterado para o
                            {' '}
                            <i style={{ color: 'red' }}>continue</i>
                            {' '}
                            :
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={BCR} alt="BCR" style={{ marginTop: '14px' }} />
                        </Row>
                      </div>
                    ),
                  })}
                >
                  BCR
                </Card>
              </Col>
            </Row>
            <Row justify="center">
              <Col span={5} justify="center" className="text">
                <Card
                  onClick={() => showModal({
                    headerTitle: 'COD - conditional operator deletion',
                    content: () => (
                      <div>
                        <Row>
                          O operador COD é utilizado pela ferramenta para criar um mutante do código
                          original, no qual esse mutante possui um operador condicional removido
                          do código original.
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo abaixo, o operador
                            {' '}
                            <i style={{ color: 'red' }}>not</i>
                            {' '}
                            foi removido no código:
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={COD} alt="COD" style={{ marginTop: '14px' }} />
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
                          O operador COI é utilizado pela ferramenta para criar um mutante do código
                          original, no qual esse mutante possui um operador condicional inserido
                          no código original.
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo abaixo, o operador
                            {' '}
                            <i style={{ color: 'red' }}>not</i>
                            {' '}
                            foi inserido no código:
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={COI} alt="COI" style={{ marginTop: '14px' }} />
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
                          O operador CRP é utilizado pela ferramenta para criar um mutante do código
                          original, no qual esse mutante possui uma contante  do código original
                          alterada por outra contante.
                          {' '}
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo abaixo, a constante
                            {' '}
                            <i style={{ color: 'red' }}>0</i>
                            {' '}
                            foi alterada no código pela constante
                            {' '}
                            <i style={{ color: 'red' }}>1</i>
                            {' '}
                            :
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={CRP} alt="CRP" style={{ marginTop: '14px' }} />
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
                          <div>
                            O operador DDL trabalha com decoradores de Python.
                            Um decorador precisa ser definido com
                            {' '}
                            <i style={{ color: 'red' }}>@staticmethod</i>
                            {' '}
                            ou
                            {' '}
                            <i style={{ color: 'red' }}>@classmethod</i>
                            {' '}
                            .
                            Então, o que esse operador faz é utilizar a ferramenta para criar
                            um mutante do código original, removendo um dos parâmetros
                            citados anteriormente.
                          </div>
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo abaixo, o
                            {' '}
                            <i style={{ color: 'red' }}>@staticmethod</i>
                            {' '}
                            é removido:
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={DDL} alt="DDL" style={{ marginTop: '14px' }} />
                        </Row>
                      </div>
                    ),
                  })}
                >
                  DDL
                </Card>
              </Col>
            </Row>
            <Row justify="center">
              <Col span={5} justify="center" className="text">
                <Card
                  onClick={() => showModal({
                    headerTitle: 'EHD - exception handler deletion',
                    content: () => (
                      <div>
                        <Row>
                          <div>
                            O operador EHD é utilizado pela ferramenta para criar um mutante
                            do código
                            original, no qual esse mutante remove a função que trataria
                            o erro da exceção, e insere uma função raise no lugar, que
                            retornará o erro novamente.
                          </div>
                        </Row>
                        <Row>
                          <br />
                          <div>
                            No exemplo abaixo, o
                            {' '}
                            <i style={{ color: 'red' }}>return 1</i>
                            {' '}
                            foi alterado para o
                            {' '}
                            <i style={{ color: 'red' }}>raise</i>
                            :
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={EHD} alt="EHD" style={{ marginTop: '14px' }} />
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
                          <div>
                            O operador EXS é utilizado pela ferramenta para criar um
                            mutante do código
                            original, no qual esse mutante causa uma
                            &quot;swallowing exception&quot;. Explicando,
                            é a prática de detectar um erro ou exceção e, em seguida,
                            continuar sem registrar, processar ou relatar o erro a outras
                            partes do software.
                          </div>
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo abaixo, o
                            {' '}
                            <i style={{ color: 'red' }}>return 1</i>
                            {' '}
                            foi alterado para o
                            {' '}
                            <i style={{ color: 'red' }}>pass</i>
                            {' '}
                            :
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={EXS} alt="EXS" style={{ marginTop: '14px' }} />
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
                          <div>
                            Quando utilizamos a lógica de orientação a objetos, temos que
                            uma classe pode ser criada a partir de outra. No nosso caso,
                            temos a classe Base como pai, e a classe Teste como filho, e
                            também temos a variável
                            {' '}
                            <i style={{ color: 'red' }}>X</i>
                            {' '}
                            sendo declarada em ambos, porém
                            com valores diferentes. Nos nossos testes, utilizamos o
                            {' '}
                            <i style={{ color: 'red' }}>X</i>
                            {' '}
                            da classe filho para fazer uma validação.
                          </div>
                        </Row>
                        <Row>
                          <div>
                            O operador IHD é utilizado pela ferramenta para criar um
                            mutante do código
                            original, no qual esse mutante remove
                            a declaração do
                            {' '}
                            <i style={{ color: 'red' }}>X</i>
                            {' '}
                            na classe filho, assim, quando fizermos nossa
                            validação, ela retornará o valor de
                            {' '}
                            <i style={{ color: 'red' }}>X</i>
                            {' '}
                            declarado na classe pai, causando
                            um retorno de erro do nosso caso de teste.
                          </div>
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo abaixo, a variável
                            {' '}
                            <i style={{ color: 'red' }}>X</i>
                            {' '}
                            da classe Teste foi removida:
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={IHD} alt="IHD" style={{ marginTop: '14px' }} />
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
                          <div>
                            Quando utilizamos a lógica de orientação a objetos, temos que uma classe
                            pode ser criada a partir de outra. No nosso caso, temos a classe Base
                            como pai, e a classe Teste como filho, e também podemos observar
                            que ambas possuem a função
                            {' '}
                            <i style={{ color: 'red' }}>foo()</i>
                            {' '}
                            . Quando chamamos uma função da classe filho,
                            ela irá sobrescrever a função já existente da classe pai.
                          </div>
                        </Row>
                        <Row>
                          <div>
                            O operator IOD é utilizado pela ferramenta para criar um mutante
                            do código
                            original, no qual esse mutante remove a função da classe filho que
                            sobrescreve a pré-existente na classe pai.
                          </div>
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo abaixo, a função
                            {' '}
                            <i style={{ color: 'red' }}>foo()</i>
                            {' '}
                            da classe Teste foi removida:
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={IOD} alt="IOD" style={{ marginTop: '14px' }} />
                        </Row>
                      </div>
                    ),
                  })}
                >
                  IOD
                </Card>
              </Col>
            </Row>
            <Row justify="center">
              <Col span={5} justify="center" className="text">
                <Card
                  onClick={() => showModal({
                    headerTitle: 'IOP - overridden method calling position change',
                    content: () => (
                      <div>
                        <Row>
                          <div>
                            Quando utilizamos a lógica de orientação a objetos, temos que uma classe
                            pode ser criada a partir de outra. No nosso caso, temos a classe
                            Base como
                            pai, e a classe Teste como filho. No código inicial, utilizamos o
                            {' '}
                            <i style={{ color: 'red' }}>super().bar()</i>
                            {' '}
                            na classe Teste para chamar a função
                            {' '}
                            <i style={{ color: 'red' }}>bar()</i>
                            {' '}
                            da classe Base, e depois utilizamos o
                            {' '}
                            <i style={{ color: 'red' }}>x</i>
                            {' '}
                            que retornou.
                          </div>
                        </Row>
                        <Row>
                          <div>
                            O operador IOP é utilizado pela ferramenta para criar um mutante
                            do código
                            original, no qual esse mutante muda a ordem das funções dentro da classe
                            filho, para que
                            ela tente usar a variável antes dela ser chamada da classe pai,
                            retornando um erro.
                          </div>
                        </Row>
                        <Row>
                          <br />
                          No exemplo abaixo, as duas linhas da função bar presente da classe
                          Teste, foram trocadas de posição:
                        </Row>
                        <Row justify="center">
                          <img src={IOP} alt="IOP" style={{ marginTop: '14px' }} />
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
                          O operador LCR é utilizado pela ferramenta para criar um mutante do código
                          original, no qual esse mutante possui um conector lógico alterado
                          por outro conector lógico.
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo abaixo, o conector
                            {' '}
                            <i style={{ color: 'red' }}>or</i>
                            {' '}
                            foi alterado no código pelo conector
                            {' '}
                            <i style={{ color: 'red' }}>and</i>
                            {' '}
                            :
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={LCR} alt="LCR" style={{ marginTop: '14px' }} />
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
                          O operador LOD é utilizado pela ferramenta para criar um mutante do código
                          original, no qual esse mutante possui um operador lógico removido
                          do código original.
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo abaixo, o operador
                            {' '}
                            <i style={{ color: 'red' }}>~</i>
                            {' '}
                            foi removido:
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={LOD} alt="LOD" style={{ marginTop: '14px' }} />
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
                          O operador LOR é utilizado pela ferramenta para criar um mutante do código
                          original, no qual esse mutante possui um operador lógico alterado
                          por outro operador lógico.
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo abaixo, o operador
                            {' '}
                            <i style={{ color: 'red' }}>|</i>
                            {' '}
                            foi alterado para o
                            {' '}
                            <i style={{ color: 'red' }}>&</i>
                            {' '}
                            :
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={LOR} alt="LOR" style={{ marginTop: '14px' }} />
                        </Row>
                      </div>
                    ),
                  })}
                >
                  LOR
                </Card>
              </Col>
            </Row>
            <Row justify="center">
              <Col offset span={5} justify="center" className="text">
                <Card
                  onClick={() => showModal({
                    headerTitle: 'ROR - relational operator replacement',
                    content: () => (
                      <div>
                        <Row>
                          O operador ROR  é utilizado pela ferramenta para criar um mutante
                          do código
                          original, no qual esse mutante possui um operador relacional alterado
                          por outro operador relacional.
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo abaixo, o operador
                            {' '}
                            <i style={{ color: 'red' }}>&gt;</i>
                            {' '}
                            foi alterado no código pelo operador
                            {' '}
                            <i style={{ color: 'red' }}>&lt;</i>
                            {' '}
                            :
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={ROR} alt="ROR" style={{ marginTop: '14px' }} />
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
                          <div>
                            Quando utilizamos a lógica de orientação a objetos, temos que uma classe
                            pode ser criada a partir de outra. No nosso caso, temos a classe
                            Base como pai, e a classe Teste como filho. Quando desejamos utilizar
                            uma função daclasse pai, utilizamos o
                            {' '}
                            <i style={{ color: 'red' }}>super</i>
                            {' '}
                            .
                          </div>
                        </Row>
                        <Row>
                          <div>
                            O operador SCD é utilizado pela ferramenta para criar um
                            mutante do código original, no qual esse mutante remove um chamado
                            {' '}
                            <i style={{ color: 'red' }}>super</i>
                            {' '}
                            em uma função já existente na classe filho, reescrita
                            da classe pai. Assim, ao remover, ela passará a utilizar
                            sua própria lógica, ao invés da lógica escrita na função pai.
                          </div>
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo abaixo, o
                            {' '}
                            <i style={{ color: 'red' }}>super.bar()</i>
                            {' '}
                            foi trocado pelo
                            {' '}
                            <i style={{ color: 'red' }}>pass</i>
                            {' '}
                            na função da classe filho:
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={SCD} alt="SCD" style={{ marginTop: '14px' }} />
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
                          <div>
                            Quando utilizamos a lógica de orientação a objetos, temos que uma classe
                            pode ser criada a partir de outra. No nosso caso, temos a classe
                            Base como pai, e a classe Teste como filho. Quando desejamos
                            utilizar uma função da classe pai, utilizamos o
                            {' '}
                            <i style={{ color: 'red' }}>super</i>
                            {' '}
                            .
                          </div>
                        </Row>
                        <Row>
                          <div>
                            O operador SCI é utilizado pela ferramenta para criar um mutante
                            do código
                            original, no qual esse mutante insere um chamado
                            {' '}
                            <i style={{ color: 'red' }}>super</i>
                            {' '}
                            em uma função já existente na classe filho, reescrita
                            da classe pai. Assim, mesmo sendo reescrita, ela utilizará as
                            informações da classe pai, no nosso caso, a função
                            {' '}
                            <i style={{ color: 'red' }}>foo()</i>
                            {' '}
                            .
                          </div>
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo abaixo, foi inserido o
                            {' '}
                            <i style={{ color: 'red' }}>super.foo()</i>
                            {' '}
                            na função da classe filho:
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={SCI} alt="SCI" style={{ marginTop: '14px' }} />
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
                          <div>
                            Um elemento de um vetor pode ser referenciado usando o
                            operador de acesso
                            {' '}
                            <i style={{ color: 'red' }}>[ ]</i>
                            {' '}
                            . Também é possível usar o mesmo operador para obter
                            um subconjunto desse vetor. Para isso, podemos utilizar a seguinte
                            sintaxe:
                            {' '}
                            <i style={{ color: 'red' }}>vetor[início:fim:intervalo]</i>
                            , onde início determina a posição do primeiro item do subconjunto,
                            fim determina o último item do subconjunto,
                            e o invervalo determina a distancia entre dois intens consecutivos.
                          </div>
                        </Row>
                        <Row>
                          O operator SIR é utilizado pela ferramenta para criar um mutante do código
                          original, no qual esse mutante modifica essa lógica do subconjunto.
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo abaixo, o operador
                            {' '}
                            <i style={{ color: 'red' }}>x[2:]</i>
                            , que retornaria somente os itens a partir da segunda posição
                            foi alterado para o
                            {' '}
                            <i style={{ color: 'red' }}>x[:]</i>
                            , que retorna todos os itens do vetor:
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={SIR} alt="SIR" style={{ marginTop: '14px' }} />
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
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Tipos de Mutantes
            </Col>
          </Row>
          <Row style={{ height: '400px' }}>
            <Col span={12} className="text" style={{ alignSelf: 'center' }}>
              Agora, será possível seguir para o tópico voltado
              aos Tipos de Mutantes, ou aprofundar o conhecimento adquirido até aqui
              com os Exercícios Propostos.
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
                onClick={() => props.history.push('/mutantes')}
              >
                Tipos de Mutantes
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
          <Row>
            <Col>
              <div className="quizz-question">
                Analizando o Programa Original, qual das alternativas sofreu
                uma inserção de operador condicional?
              </div>
            </Col>
          </Row>
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
                      <Radio value={1}>
                        <img src={oper2} alt="oper2" style={{ height: '60px' }} />
                      </Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color1[1], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={2}>
                        <img src={oper3} alt="oper3" style={{ height: '60px' }} />
                      </Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color1[2], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={3}>
                        <img src={oper4} alt="oper4" style={{ height: '60px' }} />
                      </Radio>
                    </Card>
                  </Space>
                </Radio.Group>
              </div>
              <Button onClick={() => checarResposta1(value1)}>
                Conferir
              </Button>
            </Col>
            <Col offset={1} span={13} className="text" style={{ textAlign: '-webkit-center' }}>
              <img src={oper1} alt="oper1" style={{ marginBottom: '14px' }} />
              {disabled1
                ? (
                  <div>
                    O código com a inserção de operador condicional é o terceiro.
                    <br />
                    <br />
                    O primeiro apresenta uma alteração de operador relacional.
                    <br />
                    <br />
                    O segundo apresenta uma alteração de operador aritmético.
                  </div>
                ) : null}
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Exercício 2
            </Col>
          </Row>
          <div className="quizz-question">
            Uma ferramenta hipotética de apoio ao Teste de Mutação possui cem operadores diferentes.
            <br />
            Ao utilizá-la em um código, todos os Operadores de Mutação disponíveis realizarão alguma
            modificação no Código Original.
            <br />
            <br />
            Essa afirmação está:
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
                      <Radio value={1}>Correta</Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color2[1], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={2}>Errada</Radio>
                    </Card>
                  </Space>
                </Radio.Group>
              </div>
              <Button onClick={() => checarResposta2(value2)}>
                Conferir
              </Button>
            </Col>
            <Col offset={1} span={13} className="text" style={{ textAlign: '-webkit-center' }}>
              {disabled2
                ? (
                  <div>
                    Pela teoria explicada anteriormente, a afirmação está
                    incorreta pois, como os Operadores de Mutação possuem regras
                    para realizar a mutação, somente os Operadores compatíveis
                    com o código que serão utilizados. Por exemplo, um Operador
                    de Mutação que altera um operador aritmético não ser usado em
                    um código que não realiza operações aritméticas.
                  </div>
                ) : null}
            </Col>
          </Row>
        </div>
      </Carousel>
    </div>
  );
}

export default operadores;
