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
              Operadores de Muta????o
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              Um operador de muta????o ?? um conjunto de regras que ir??o definir
              qual altera????o ser?? feita no c??digo original, o qual o usu??rio possui
              casos de teste criados e deseja testar a efetividade desses.
            </Col>
          </Row>
          <Row justify="center">
            <img src={exMutStep} alt="exMutStep" style={{ marginTop: '14px' }} />
          </Row>
          <Row>
            <Col span={24} className="text">
              Por exemplo, um determinado operador de muta????o possui regras desenvolvidas
              para alterar um operador aritm??tico por outro. Ent??o ao utilizar esse
              operador em um c??digo que realiza uma soma de dois n??meros, o mutante
              trocar?? essa soma por uma subtra????o, e tentar?? utilizar os casos de teste para
              verificar se essa mudan??a ser?? testada por eles.
              <br />
              <br />
              Seguindo o exemplo acima, o pequeno trecho de c??digo abaixo sofreu uma muta????o
              por um operador, e gerou um mutante, que possui o
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>operador de adi????o</i>
              {' '}
              alterado pelo
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>operador de subtra????o</i>
              .
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Operadores de Muta????o x Mutantes
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              Com ambos os conceitos de operadores de muta????o e mutantes explicados,
              ?? poss??vel entender melhor como funciona um teste de muta????o na pr??tica.
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              Com um c??digo inicial, s??o utilizados operadores de muta????o
              para gerar v??rios mutantes do mesmo c??digo. Esse c??digo ?? analisado,
              e ent??o verifica-se quais dos operadores poder??o ser utilizados.
              <br />
              Ser??o usados somente os operadores compat??veis com o c??digo,
              por exemplo, um operador de muta????o que altera um operador aritm??tico n??o
              poder?? ser usado em um c??digo que n??o realiza opera????es aritm??ticas.
            </Col>
          </Row>
          <Row>
            <Col span={12} className="text">
              Na ilustra????o ao lado ?? poss??vel visualizar como esse fluxo ocorre.
              <br />
              No exemplo, o Operador 1 consegue gerar um n??mero de mutantes representados
              pelos &quot;Mutantes x&quot;, o Operador 2 consegue gerar outros mutantes,
              representados pelos &quot;Mutantes z&quot;, e o Operador 3 consegue gerar
              outros mutantes, representados pelos &quot;Mutantes x&quot;.
              <br />
              <br />
              E a gera????o de mutantes segue dessa maneira, at?? gerar todos os
              poss??veis para o c??digo original, dado seu conjunto limitado de operadores.
            </Col>
            <Col offset={1}>
              <img src={mutations} alt="mutations" style={{ height: '250px' }} />
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Gera????o de Mutantes
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              Utilizando o mesmo exemplo do t??pico anterior, e possuindo o conhecimento
              do conceito de operadores de muta????o, ?? poss??vel analisar os mutantes abaixo de
              outra maneira.
              <br />
              Clique em cada um do mutantes para observar como a altera????o ocorreu.
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
                            No Programa Mutante 1, foi utilizado um operador de muta????o
                            que altera uma constante por outra constante.
                            <br />
                            <br />
                            Nesse caso, o n??mero
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>3</i>
                            {' '}
                            da linha 2 do C??digo Original foi alterado pelo n??mero
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>5</i>
                            .
                          </div>
                        );
                      case '2':
                        return (
                          <div>
                            No Programa Mutante 2, foi utilizado um operador de muta????o
                            que altera um operador relacional por outro operador relacional.
                            <br />
                            <br />
                            Nesse caso, o operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; &gt; &quot;</i>
                            {' '}
                            da linha 2 do C??digo Original foi alterado pelo operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; &lt; &quot;</i>
                            .
                          </div>
                        );
                      case '3':
                        return (
                          <div>
                            No Programa Mutante 3, foi utilizado um operador de muta????o
                            que altera um operador aritm??tico por outro operador aritm??tico.
                            <br />
                            <br />
                            Nesse caso, o operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; * &quot;</i>
                            {' '}
                            da linha 6 do C??digo Original foi alterado pelo operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; / &quot;</i>
                            .
                          </div>
                        );
                      case '4':
                        return (
                          <div>
                            No Programa Mutante 4, foi utilizado um operador de muta????o
                            que altera um operador de compara????o por outro operador de compara????o.
                            <br />
                            <br />
                            Nesse caso, o operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; == &quot;</i>
                            {' '}
                            da linha 5 do C??digo Original foi alterado pelo operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; != &quot;</i>
                            .
                          </div>
                        );
                      case '5':
                        return (
                          <div>
                            No Programa Mutante 5, foi utilizado um operador de muta????o
                            que insere um operador de compara????o no c??digo original.
                            <br />
                            <br />
                            Nesse caso, o operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>not</i>
                            {' '}
                            foi inserido na linha 2 do C??digo Original
                            .
                          </div>
                        );
                      case '6':
                        return (
                          <div>
                            No Programa Mutante 6, foi utilizado um operador de muta????o
                            que altera um operador aritm??tico por outro operador aritm??tico.
                            <br />
                            <br />
                            Nesse caso, o operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; + &quot;</i>
                            {' '}
                            da linha 3 do C??digo Original foi alterado pelo operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; - &quot;</i>
                            .
                          </div>
                        );
                      case 'original':
                        return (
                          <div>
                            Esse c??digo foi criado com o intuito de ser o mais
                            simples poss??vel, justamente para explicar como s??o
                            gerados os mutantes. Por exemplo, as duas condi????es
                            inseridas no c??digo,
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
                            sempre ser??o verdadeiras por n??o dependerem de
                            constantes externas ?? fun????o.
                            <br />
                            Al??m disso, devido a simplicidade do c??digo utilizado, o caso
                            de teste desenvolvido tamb??m ser?? simples. Ele apenas verifica se
                            o retorno do programa ser??
                            {' '}
                            <div style={{ color: 'red', fontWeight: 'bold', textAlignLast: 'center' }}>( 7 e 12 )</div>
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
                Operadores de muta????o suportados pela MutPy
                <Tooltip placement="right" title="Clique nos cards para visualizar as informa????es do operador">
                  {' '}
                  {' '}
                  <ExclamationCircleOutlined />
                </Tooltip>
              </Col>
            </Row>
            <Row>
              <Col className="text">
                Nesse REA s??o utilizados operadores de muta????o da linguagem Python, em espec??fico
                os da ferramenta MutPy.
                Abaixo est??o todos os operadores que a ferramenta possui.
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
                            O operador AOD cria um programa mutante ?? partir do c??digo original
                            removendo um operador aritm??tico.
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={AOD} alt="AOD" style={{ marginTop: '14px' }} />
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo acima, o operador aritm??tico
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; - &quot;</i>
                            {' '}
                            foi removido.
                          </div>
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
                          O operador AOR cria um programa mutante ?? partir do c??digo original
                          alterando um operador aritm??tico por outro.
                        </Row>
                        <Row justify="center">
                          <img src={AOR} alt="AOR" style={{ marginTop: '14px' }} />
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo acima, o operador aritm??tico
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; + &quot;</i>
                            {' '}
                            foi alterado pelo operador aritm??tico
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; - &quot;</i>
                            .
                          </div>
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
                          O operador ASR cria um programa mutante ?? partir do c??digo original
                          alterando um operador de atribui????o por outro.
                        </Row>
                        <Row justify="center">
                          <img src={ASR} alt="ASR" style={{ marginTop: '14px' }} />
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo acima, o operador de atribui????o
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; += &quot;</i>
                            {' '}
                            foi alterado pelo operador de atribui????o
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; -= &quot;</i>
                            .
                          </div>
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
                            O operador BCR cria um programa mutante ?? partir do c??digo original
                            alterando o comando
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>break</i>
                            {' '}
                            pelo comando
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>continue</i>
                            {' '}
                            . O inverso tamb??m pode ocorrer.
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={BCR} alt="BCR" style={{ marginTop: '14px' }} />
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo acima, o comando
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>break</i>
                            {' '}
                            foi alterado para o comando
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>continue</i>
                            .
                          </div>
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
                          O operador COD cria um programa mutante ?? partir do c??digo
                          original removendo um operador condicional.
                        </Row>
                        <Row justify="center">
                          <img src={COD} alt="COD" style={{ marginTop: '14px' }} />
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo acima, o operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>not</i>
                            {' '}
                            foi removido no c??digo.
                          </div>
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
                          O operador COI cria um programa mutante ?? partir do c??digo
                          original inserindo um operador condicional.
                        </Row>
                        <Row justify="center">
                          <img src={COI} alt="COI" style={{ marginTop: '14px' }} />
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo acima, o operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>not</i>
                            {' '}
                            foi inserido no c??digo.
                          </div>
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
                          O operador CRP cria um programa mutante ?? partir do c??digo original
                          alterando uma contante por outra.
                          {' '}
                        </Row>
                        <Row justify="center">
                          <img src={CRP} alt="CRP" style={{ marginTop: '14px' }} />
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo acima, a constante
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; 0 &quot;</i>
                            {' '}
                            foi alterada no c??digo pela constante
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; 1 &quot;</i>
                            .
                          </div>
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
                            O operador DDL cria um programa mutante ?? partir do c??digo
                            original removendo um decorador. Na linguagem Python,
                            um decorador precisa ser definido com
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>@staticmethod</i>
                            {' '}
                            ou
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>@classmethod</i>
                            {' '}
                            .
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={DDL} alt="DDL" style={{ marginTop: '14px' }} />
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo acima, o
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>@staticmethod</i>
                            {' '}
                            foi removido.
                          </div>
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
                            O operador EHD cria um programa mutante ?? partir do c??digo original
                            removendo um m??todo que trataria um erro da exce????o, inserindo
                            o comando
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>raise</i>
                            {' '}
                            no lugar, que retornar?? o erro novamente.
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={EHD} alt="EHD" style={{ marginTop: '14px' }} />
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo acima, o
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>return 1</i>
                            {' '}
                            foi alterado para o
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>raise</i>
                            .
                          </div>
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
                            O operador EXS cria um programa mutante ?? partir do c??digo original
                            causando uma &quot;swallowing exception&quot;. Explicando,
                            ?? a pr??tica de detectar um erro ou exce????o e, em seguida,
                            continuar sem registrar, processar ou relatar o erro a outras
                            partes do software.
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={EXS} alt="EXS" style={{ marginTop: '14px' }} />
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo acima, o
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>return 1</i>
                            {' '}
                            foi alterado para o
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>pass</i>
                            .
                          </div>
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
                            O operador IHD cria um programa mutante ?? partir do c??digo original
                            removendo a declara????o do
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; X &quot;</i>
                            {' '}
                            na classe filho. Assim, quando uma valida????o for
                            executada, ela retornar?? o valor de
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; X &quot;</i>
                            {' '}
                            declarado na classe pai, causando
                            um retorno de erro do nosso caso de teste.
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={IHD} alt="IHD" style={{ marginTop: '14px' }} />
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo acima, a vari??vel
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; X &quot;</i>
                            {' '}
                            da classe Teste foi removida.
                          </div>
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
                            O operator IOD cria um programa mutante ?? partir do c??digo original
                            removendo um m??todo da classe filho que
                            sobrescreve um pr??-existente na classe pai.
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={IOD} alt="IOD" style={{ marginTop: '14px' }} />
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo acima, o m??todo
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>foo()</i>
                            {' '}
                            da classe Teste foi removido.
                          </div>
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
                            O operador IOP cria um programa mutante ?? partir do c??digo original
                            mudando a ordem dos m??todos dentro da classe filho, para que
                            ele tente usar a vari??vel antes dela ser chamada da classe pai,
                            retornando um erro.
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={IOP} alt="IOP" style={{ marginTop: '14px' }} />
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo acima, as duas linhas do m??todo
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>bar()</i>
                            {' '}
                            presente na classe
                            Teste foram trocadas de posi????o.
                          </div>
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
                          O operador LCR cria um programa mutante ?? partir do c??digo
                          original alterando um conector l??gico por outro.
                        </Row>
                        <Row justify="center">
                          <img src={LCR} alt="LCR" style={{ marginTop: '14px' }} />
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo acima, o conector
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>or</i>
                            {' '}
                            foi alterado no c??digo pelo conector
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>and</i>
                            .
                          </div>
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
                          O operador LOD cria um programa mutante ?? partir do c??digo
                          original removendo um operador l??gico.
                        </Row>
                        <Row justify="center">
                          <img src={LOD} alt="LOD" style={{ marginTop: '14px' }} />
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo acima, o operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; ~ &quot;</i>
                            {' '}
                            foi removido.
                          </div>
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
                          O operador LOR cria um programa mutante ?? partir do c??digo
                          original alterando um operador l??gico por outro.
                        </Row>
                        <Row justify="center">
                          <img src={LOR} alt="LOR" style={{ marginTop: '14px' }} />
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo acima, o operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; | &quot;</i>
                            {' '}
                            foi alterado para o
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; & &quot;</i>
                            .
                          </div>
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
                          O operador ROR cria um programa mutante ?? partir do c??digo
                          original alterando um operador relacional por outro.
                        </Row>
                        <Row justify="center">
                          <img src={ROR} alt="ROR" style={{ marginTop: '14px' }} />
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo acima, o operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; &gt; &quot;</i>
                            {' '}
                            foi alterado no c??digo pelo operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; &lt; &quot;</i>
                            .
                          </div>
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
                            O operador SCD cria um programa mutante ?? partir do c??digo
                            original removendo um chamado
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>super</i>
                            {' '}
                            de um met??do j?? existente na classe filho, reescrita
                            da classe pai. Assim, ao remover, ela passar?? a utilizar
                            sua pr??pria l??gica, ao inv??s da l??gica escrita na classe pai.
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={SCD} alt="SCD" style={{ marginTop: '14px' }} />
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo acima, o
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>super.bar()</i>
                            {' '}
                            foi trocado pelo
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>pass</i>
                            {' '}
                            no m??todo da classe filho.
                          </div>
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
                            O operador cria um programa mutante ?? partir do c??digo
                            original inserindo um chamado
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>super</i>
                            {' '}
                            em um m??todo j?? existente na classe filho, reescrito
                            da classe pai. Assim, mesmo sendo reescrito, ele utilizar?? as
                            informa????es da classe pai, no nosso caso, o m??todo
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>foo()</i>
                            {' '}
                            .
                          </div>
                        </Row>
                        <Row justify="center">
                          <img src={SCI} alt="SCI" style={{ marginTop: '14px' }} />
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo acima, foi inserido o
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>super.foo()</i>
                            {' '}
                            no m??todo da classe filho.
                          </div>
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
                          O operator SIR cria um programa mutante ?? partir do c??digo
                          original modificando a l??gica de acesso ?? vetores de um subconjunto.
                        </Row>
                        <Row justify="center">
                          <img src={SIR} alt="SIR" style={{ marginTop: '14px' }} />
                        </Row>
                        <Row>
                          <div>
                            <br />
                            No exemplo acima, o operador
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>x[2:]</i>
                            , que retornaria somente os itens a partir da segunda posi????o
                            foi alterado para o
                            {' '}
                            <i style={{ color: 'red', fontWeight: 'bold' }}>x[:]</i>
                            , que retorna todos os itens do vetor.
                          </div>
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
              A seguir ser?? discutido com detalhes os tipos de mutantes.
              Voc?? pode fazer alguns exerc??cios de fixa????o, ou seguir para o pr??ximo t??pico.
            </Col>
            <Col offset={2} span={8} style={{ alignSelf: 'center' }}>
              <Button
                onClick={() => {
                  slider.current.next();
                }}
              >
                Exerc??cios propostos
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
              Exerc??cio 1
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="quizz-question">
                Analizando o Programa Original, qual das alternativas sofreu
                uma inser????o de operador condicional?
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
                    O c??digo com a inser????o de operador condicional ?? o terceiro.
                  </div>
                ) : null}
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Exerc??cio 2
            </Col>
          </Row>
          <div className="quizz-question">
            Uma ferramenta hipot??tica de apoio ao teste de muta????o suporta cem
            operadores de muta????o.
            <br />
            Ao utiliz??-la em um c??digo, todos os operadores de muta????o dispon??veis realizar??o alguma
            modifica????o no C??digo Original.
            <br />
            <br />
            Essa afirma????o est??:
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
                    Pela teoria explicada anteriormente, a afirma????o est??
                    incorreta pois, como os operadores de muta????o possuem regras
                    para realizar a muta????o, somente os Operadores compat??veis
                    com o c??digo que ser??o utilizados. Por exemplo, um operador
                    de muta????o que altera um operador aritm??tico n??o ser usado em
                    um c??digo que n??o realiza opera????es aritm??ticas.
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
