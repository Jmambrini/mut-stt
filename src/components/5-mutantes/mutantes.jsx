import React, { useState, useRef } from 'react';
import {
  Carousel, Row, Col, Modal, Card, Button, Radio, Space,
} from 'antd';

import { CaretRightOutlined, CaretDownOutlined } from '@ant-design/icons';

import './mutantes.scss';

import vivo1 from '../../generics/tiposMut/vivo1.png';
import vivo2 from '../../generics/tiposMut/vivo2.png';
import vivo3 from '../../generics/tiposMut/vivo3.png';
import morto1 from '../../generics/tiposMut/morto1.png';
import morto2 from '../../generics/tiposMut/morto2.png';
import morto3 from '../../generics/tiposMut/morto3.png';
import incompetente1 from '../../generics/tiposMut/incompetente1.png';
import incompetente2 from '../../generics/tiposMut/incompetente2.png';
import incompetente3 from '../../generics/tiposMut/incompetente3.png';
import timeout from '../../generics/tiposMut/timeout.png';
import timeout2 from '../../generics/tiposMut/timeout2.png';
import equi from '../../generics/tiposMut/equi.png';
import equi2 from '../../generics/tiposMut/equi2.png';
import escore from '../../generics/tiposMut/escore.png';

import tipos1 from '../../generics/exercicios/tipos1.png';
import tipos2 from '../../generics/exercicios/tipos2.png';

function mutantes(props) {
  const slider = useRef();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalHeaderTitle, setModalHeaderTitle] = useState();
  const [modalContent, setModalContent] = useState();

  const [value1, setValue1] = useState(-1);
  const [color1, setColor1] = useState(['#fdd872', '#fdd872', '#fdd872', '#fdd872']);
  const [disabled1, setDisabled1] = useState(false);

  const [value2, setValue2] = useState(-1);
  const [color2, setColor2] = useState(['#fdd872', '#fdd872', '#fdd872', '#fdd872']);
  const [disabled2, setDisabled2] = useState(false);

  function checarResposta1() {
    if (value1 !== -1) {
      setColor1(['#F96462', '#F96462', '#A1C181', '#F96462']);
      setDisabled1(true);
    }
  }

  function checarResposta2() {
    if (value2 !== -1) {
      setColor2(['#F96462', '#A1C181', '#F96462', '#F96462']);
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
  return (
    <div className="mutantes">
      <Modal
        title={modalHeaderTitle}
        visible={isModalVisible}
        footer={false}
        closable
        onCancel={handleCancel}
        width="fit-content"
        bodyStyle={{ fontSize: '16px' }}
        style={{ maxWidth: '900px' }}
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
              Tipos de Mutantes
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              Para finalizar a introdução teórica sobre teste de mutação, será abordado nesse
              tópico os diferentes tipos de programas mutantes.
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              Como explicado anteriormente, os programas mutantes são criados para que o testador
              consiga avaliar os seus casos de teste, e expor defeitos do programa. Após o
              programa mutante ser avaliado pelos casos criados, ele poderá se enquadrar
              nos seguintes tipos:
            </Col>
          </Row>
          <Row style={{ marginTop: '18px' }}>
            <Col span={12} align="middle" className="title">
              <Card
                style={{ width: '400px' }}
                onClick={() => showModal({
                  headerTitle: 'Mutante Vivo',
                  content: () => (
                    <div>
                      <Row>
                        <div>
                          O mutante vivo é um mutante que sobreviveu à execução dos casos de testes.
                          <br />
                          No exemplo abaixo, o programa original sofreu uma mutação, e teve seu
                          operador aritmético
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; + &quot;</i>
                          {' '}
                          alterado pelo operador aritmético
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; * &quot;</i>
                          .
                          <Row justify="center">
                            <img src={vivo1} alt="vivo1" />
                          </Row>
                          Utilizando o caso de teste, os parâmetros
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>a, b, c</i>
                          {' '}
                          recebem os valores
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>2, 2, 1</i>
                          , respectivamente, e o caso espera um retorno igual a
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>True</i>
                          .
                          <Row justify="center">
                            <img src={vivo2} alt="vivo2" />
                          </Row>
                          <br />
                          Porém, com a substituição dos valores mostrados nos dois códigos
                          abaixo, é possível verificar que independente da mudança
                          feita pelo operador de mutação, o retorno do teste será
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>True</i>
                          , e portanto, o mutante não foi morto pelo caso de teste.
                          <Row justify="center">
                            <img src={vivo3} alt="vivo3" />
                          </Row>
                        </div>
                      </Row>
                    </div>
                  ),
                })}
              >
                Mutante Vivo
              </Card>
            </Col>
            <Col span={12} justify="center" align="middle" className="title">
              <Card
                style={{ width: '400px' }}
                onClick={() => showModal({
                  headerTitle: 'Mutante Morto',
                  content: () => (
                    <div>
                      <Row>
                        <div>
                          O mutante morto é um mutante que não sobreviveu à execução
                          dos casos de testes.
                          <br />
                          No exemplo abaixo, o programa original sofreu uma mutação, e teve seu
                          operador aritmético
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; * &quot;</i>
                          {' '}
                          alterado pelo operador aritmético
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; + &quot;</i>
                          .
                          <Row justify="center">
                            <img src={morto1} alt="morto1" />
                          </Row>
                          Utilizando o caso de teste, os parâmetros
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>a, b, c</i>
                          {' '}
                          recebem os valores
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>9, 9, 50</i>
                          , respectivamente, e o caso espera um retorno igual a
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>True</i>
                          .
                          <Row justify="center">
                            <img src={morto2} alt="morto2" />
                          </Row>
                          Porém, com a substituição dos valores mostrados nos dois códigos
                          aaixo, é possível verificar que, com a mudança
                          feita pelo operador de mutação, o retorno do teste realizado
                          no programa mutante não será
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>True</i>
                          , e portanto, o mutante foi morto pelo caso de teste.
                          <Row justify="center">
                            <img src={morto3} alt="morto3" />
                          </Row>
                        </div>
                      </Row>
                    </div>
                  ),
                })}
              >
                Mutante Morto
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: '18px' }}>
            <Col span={12} align="middle" className="title">
              <Card
                style={{ width: '400px' }}
                onClick={() => showModal({
                  headerTitle: 'Mutante Incompetente',
                  content: () => (
                    <div>
                      <Row>
                        <div>
                          O mutante incompetente é um mutante que gera um erro antes mesmo
                          de ser verificado pelo caso de teste, e por isso, ele pode ser
                          considerado como morto.
                          <br />
                          No exemplo abaixo, o programa original sofreu uma mutação, e teve seu
                          operador aritmético
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; + &quot;</i>
                          {' '}
                          alterado pelo operador aritmético
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; - &quot;</i>
                          .
                          <Row justify="center">
                            <img src={incompetente1} alt="incompetente1" />
                          </Row>
                          <br />
                          Utilizando o caso de teste, o parâmetro
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>a</i>
                          {' '}
                          recebeu a string
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot;-STT&quot;</i>
                          , e o caso espera um retorno igual a
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot;MUT-STT&quot;</i>
                          .
                          <Row justify="center">
                            <img src={incompetente2} alt="incompetente1" />
                          </Row>
                          Com a alteração feita pelo operador, o compilador retornará um
                          erro antes mesmo do código ser verificado pelo caso de teste. Isso
                          ocorre pois, no programa original é desejado &quot;somar&quot; duas
                          strings, o que é interpretado como uma concatenação. Quando o operador
                          aritmético é alterado, o programa mutante tenta &quot;subtrair&quot;
                          duas strings, o que não faz sentido.
                          <Row justify="center">
                            <img src={incompetente3} alt="incompetente3" />
                          </Row>
                        </div>
                      </Row>
                    </div>
                  ),
                })}
              >
                Mutante Incompetente
              </Card>
            </Col>
            <Col span={12} justify="center" align="middle" className="title">
              <Card
                style={{ width: '400px' }}
                onClick={() => showModal({
                  headerTitle: 'Timeout',
                  content: () => (
                    <div>
                      <Row>
                        <div>
                          O mutante que sofreu timeout é um mutante que a verificação realizada
                          pelo caso de teste levou um tempo maior do que o determinado pela
                          ferramenta de apoio.
                          No exemplo abaixo, o programa original sofreu uma mutação, e teve seu
                          operador de atribuição
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; += &quot;</i>
                          {' '}
                          alterado pelo operador de atribuição
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; -= &quot;</i>
                          .
                          <Row justify="center">
                            <img src={timeout} alt="timeout" />
                          </Row>
                          Utilizando o caso de teste, que não possui parâmetros de entrada,
                          e espera um retorno igual a
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>10</i>
                          .
                          <Row justify="center">
                            <img src={timeout2} alt="timeout2" />
                          </Row>
                          Com a alteração feita pelo operador, a variável
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; i &quot;</i>
                          {' '}
                          do programa mutante diminuirá a cada iteração do
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>while</i>
                          , e nunca chegará ao valor
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>10</i>
                          , que determina a parada do laço. Assim, o programa mutante ficará em
                          execução até o tempo limite de execução do caso de teste.
                        </div>
                      </Row>
                    </div>
                  ),
                })}
              >
                Timeout
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: '18px' }}>
            <Col span={24} justify="center" align="middle" className="title">
              <Card
                style={{ width: '400px' }}
                onClick={() => showModal({
                  headerTitle: 'Mutante Equivalente',
                  content: () => (
                    <div>
                      <Row>
                        <div>
                          O mutante equivalente é um mutante que possui o mesmo comportamento
                          do programa original, e que não é possível encontrar um caso
                          de teste que consiga matá-lo. Esse tipo de mutante é um dos
                          obstáculos do teste de mutação devido a dificuldade das ferramentas
                          de apoio em identificá-los dentro do código.
                          <br />
                          No exemplo abaixo, escolhido devido a simplicidade e a facilidade de
                          encontrar o mutante equivalente,
                          o programa original sofreu uma mutação, e teve seu operador aritmético
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; + &quot;</i>
                          {' '}
                          alterado pelo operador aritmético
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; * &quot;</i>
                          .
                          <Row justify="center">
                            <img src={equi} alt="equi" />
                          </Row>
                          Utilizando o caso de teste, que não possui parâmetros de entrada,
                          e espera um retorno igual a
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>4</i>
                          .
                          <Row justify="center">
                            <img src={equi2} alt="equi2" />
                          </Row>
                          Analisando o código, tanto
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>(2 + 2)</i>
                          , quanto
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>(2 * 2)</i>
                          {' '}
                          retornarão o valor
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>4</i>
                          , esperado pelo caso de teste. Como a operação matemática depende
                          de duas variáveis fixas,
                          esse mutante sempre retornará o mesmo resultado, e por causa disso,
                          a ferramenta considera o mesmo como mutante vivo, por não conseguir
                          identificar que ele é na verdade um mutante equivalente.
                        </div>
                      </Row>
                    </div>
                  ),
                })}
              >
                Mutante Equivalente
              </Card>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Escore de Mutação
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              O Escore de Mutação um método utilizado para avaliar a eficiência
              e o nível de confianca dos Casos de Teste desenvolvidos pelo usuário.
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              Ele possui um intervalo entre 0% e 100%, sendo que quanto maior o resultado,
              maior é a efetividade do Caso de Teste em detectar erros do código.
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              O Escore de Mutação é obtido utilizando a equação abaixo:
            </Col>
          </Row>
          <Row justify="center">
            <img src={escore} alt="escore" style={{ marginTop: '20px', marginBottom: '20px' }} />
          </Row>
          <Row>
            <Col span={24} className="text">
              Sendo que:
              <ul>
                <li>
                  <b>Mutante mortos(P,T):</b>
                  {' '}
                  total de mutantes do programa
                  {' '}
                  <i style={{ color: 'red', fontWeight: 'bold' }}>P</i>
                  , que foram mortos pelos Casos de Teste
                  {' '}
                  <i style={{ color: 'red', fontWeight: 'bold' }}>T</i>
                  ;
                </li>
                <li>
                  <b>Mutantes gerados(P):</b>
                  {' '}
                  total de mutantes gerados a partir do programa
                  {' '}
                  <i style={{ color: 'red', fontWeight: 'bold' }}>P</i>
                  ;
                </li>
                <li>
                  <b>Mutantes equivalentes(P):</b>
                  {' '}
                  total de mutantes equivalentes ao programa
                  {' '}
                  <i style={{ color: 'red', fontWeight: 'bold' }}>P</i>
                  .
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              Nesse caso, os mutantes que sofrem timeout também podem ser considerados
              como mortos.
            </Col>
          </Row>
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
              às ferramentas de apoio ao Teste de Mutação, ou
              aprofundar o conhecimento adquirido até aqui
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
                Ferramentas
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
                Analizando o Programa Original e Programa Mutante, indique qual o tipo
                do mutante gerado.
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
                        O programa mutante é um mutante incompetente
                      </Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color1[1], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={2}>
                        O programa mutante é um mutante morto
                      </Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color1[2], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={3}>
                        O programa mutante é um mutante equivalente
                      </Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color1[3], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={4}>
                        O programa mutante é um mutante vivo
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
              <img src={tipos1} alt="tipos1" style={{ marginBottom: '14px' }} />
              {disabled1
                ? (
                  <div>
                    O mutante gerado é um Mutante Equivalente pois, mesmo com a mudança,
                    o resultado do Programa Mutante será o mesmo do Programa Original,
                    independente do valor de
                    {' '}
                    <i style={{ color: 'red', fontWeight: 'bold' }}>a</i>
                    .
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
          <Row>
            <Col>
              <div className="quizz-question">
                Para um programa mutante ser considerado vivo, seu resultado deve ser o mesmo
                que o mutante original para um determinado valor.
                Analizando ambos e assumindo a notação
                {' '}
                <i style={{ color: 'red', fontWeight: 'bold' }}>( entrada, saída )</i>
                {' '}
                para o caso de teste
                , indique qual o valor de
                {' '}
                <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; n &quot;</i>
                {' '}
                para que o programa mutante seja um mutante vivo.
              </div>
            </Col>
          </Row>
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
                      <Radio value={1}>
                        (2, 2)
                      </Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color2[1], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={2}>
                        (3, 6)
                      </Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color2[2], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={3}>
                        (4, 24)
                      </Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color2[3], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={4}>
                        (5, 120)
                      </Radio>
                    </Card>
                  </Space>
                </Radio.Group>
              </div>
              <Button onClick={() => checarResposta2(value2)}>
                Conferir
              </Button>
            </Col>
            <Col offset={1} span={13} className="text" style={{ textAlign: '-webkit-center' }}>
              <img src={tipos2} alt="tipos2" style={{ marginBottom: '14px' }} />
              {disabled2
                ? (
                  <div>
                    Dos valores ao lado, o único que fará com que ambos mutantes retornem
                    o mesmo resultado é o número
                    {' '}
                    <i style={{ color: 'red', fontWeight: 'bold' }}>3</i>
                    .
                  </div>
                ) : null}
            </Col>
          </Row>
        </div>
      </Carousel>
    </div>
  );
}

export default mutantes;
