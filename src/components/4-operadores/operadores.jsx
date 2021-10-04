import React, { useState } from 'react';
import {
  Carousel, Row, Col, Card, Modal, Tooltip,
} from 'antd';

import { ExclamationCircleOutlined } from '@ant-design/icons';

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

function operadores() {
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
    <div className="operadores">
      <Modal
        title={modalHeaderTitle}
        visible={isModalVisible}
        footer={false}
        closable
        onCancel={handleCancel}
        width="fit-content"
        style={{ maxWidth: '800px' }}
      >
        {modalContent}
      </Modal>
      <Carousel
        dotPosition="bottom"
        arrows
        infinite={false}
      >
        <div>
          Nessa página, daremos um breve resumo as operadores
          expplicar o que sao, falar que o rea será focado na linguamge python
        </div>
        <div>
          Colocar os operadores da mutpy nessa página
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
            <Row justify="center">
              <Col span={5} justify="center" className="text">
                <Card
                  onClick={() => showModal({
                    headerTitle: 'AOD - arithmetic operator deletion',
                    content: () => (
                      <div>
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
                            O operador AOD é utilizado pela ferramenta para criar um mutante do
                            código
                            original, no qual esse mutante possui um operador aritmético removido
                            do código original.
                          </div>
                        </Row>
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          O operador ASR é utilizado pela ferramenta para criar um mutante do código
                          original, no qual esse mutante possui um operador de atribuição alterado
                          por outro operador de atribuição.
                        </Row>
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          O operador COD é utilizado pela ferramenta para criar um mutante do código
                          original, no qual esse mutante possui um operador condicional removido
                          do código original.
                        </Row>
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          O operador COI é utilizado pela ferramenta para criar um mutante do código
                          original, no qual esse mutante possui um operador condicional inserido
                          no código original.
                        </Row>
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          O operador CRP é utilizado pela ferramenta para criar um mutante do código
                          original, no qual esse mutante possui uma contante  do código original
                          alterada por outra contante.
                          {' '}
                        </Row>
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
                            O operador EHD é utilizado pela ferramenta para criar um mutante
                            do código
                            original, no qual esse mutante remove a função que trataria
                            o erro da exceção, e insere uma função raise no lugar, que
                            retornará o erro novamente.
                          </div>
                        </Row>
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
                            O operador EXS é utilizado pela ferramenta para criar um
                            mutante do código
                            original, no qual esse mutante causa uma
                            &quot;swallowing exception&quot;. Explicando,
                            é a prática de detectar um erro ou exceção e, em seguida,
                            continuar sem registrar, processar ou relatar o erro a outras
                            partes do software.
                          </div>
                        </Row>
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                          <div style={{ textAlign: 'center' }}>
                            O operator IOD é utilizado pela ferramenta para criar um mutante
                            do código
                            original, no qual esse mutante remove a função da classe filho que
                            sobrescreve a pré-existente na classe pai.
                          </div>
                        </Row>
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                          <div style={{ textAlign: 'center' }}>
                            O operador IOP é utilizado pela ferramenta para criar um mutante
                            do código
                            original, no qual esse mutante muda a ordem das funções dentro da classe
                            filho, para que
                            ela tente usar a variável antes dela ser chamada da classe pai,
                            retornando um erro.
                          </div>
                        </Row>
                        <Row justify="center">
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
                        <Row justify="center">
                          O operador LCR é utilizado pela ferramenta para criar um mutante do código
                          original, no qual esse mutante possui um conector lógico alterado
                          por outro conector lógico.
                        </Row>
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          O operador LOD é utilizado pela ferramenta para criar um mutante do código
                          original, no qual esse mutante possui um operador lógico removido
                          do código original.
                        </Row>
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          O operador LOR é utilizado pela ferramenta para criar um mutante do código
                          original, no qual esse mutante possui um operador lógico alterado
                          por outro operador lógico.
                        </Row>
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          O operador ROR  é utilizado pela ferramenta para criar um mutante
                          do código
                          original, no qual esse mutante possui um operador relacional alterado
                          por outro operador relacional.
                        </Row>
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
                        <Row justify="center">
                          O operator SIR é utilizado pela ferramenta para criar um mutante do código
                          original, no qual esse mutante modifica essa lógica do subconjunto.
                        </Row>
                        <Row justify="center">
                          <div style={{ textAlign: 'center' }}>
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
          Explicação com exemplos
        </div>
        <div>
          aaaa
        </div>
      </Carousel>
    </div>
  );
}

export default operadores;
