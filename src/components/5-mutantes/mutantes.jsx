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
              Para finalizar a introdu????o te??rica sobre teste de muta????o, ser?? abordado nesse
              t??pico os diferentes tipos de programas mutantes.
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              Como explicado anteriormente, os programas mutantes s??o criados para que o testador
              consiga avaliar os seus casos de teste, e expor defeitos do programa. Ap??s o
              programa mutante ser avaliado pelos casos criados, ele poder?? se enquadrar
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
                          O mutante vivo ?? um mutante que sobreviveu ?? execu????o dos casos de testes.
                          <br />
                          No exemplo abaixo, o programa original sofreu uma muta????o, e teve seu
                          operador aritm??tico
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; + &quot;</i>
                          {' '}
                          alterado pelo operador aritm??tico
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; * &quot;</i>
                          .
                          <Row justify="center">
                            <img src={vivo1} alt="vivo1" />
                          </Row>
                          Utilizando o caso de teste, os par??metros
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
                          Por??m, com a substitui????o dos valores mostrados nos dois c??digos
                          abaixo, ?? poss??vel verificar que independente da mudan??a
                          feita pelo operador de muta????o, o retorno do teste ser??
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>True</i>
                          , e portanto, o mutante n??o foi morto pelo caso de teste.
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
                          O mutante morto ?? um mutante que n??o sobreviveu ?? execu????o
                          dos casos de testes.
                          <br />
                          No exemplo abaixo, o programa original sofreu uma muta????o, e teve seu
                          operador aritm??tico
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; * &quot;</i>
                          {' '}
                          alterado pelo operador aritm??tico
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; + &quot;</i>
                          .
                          <Row justify="center">
                            <img src={morto1} alt="morto1" />
                          </Row>
                          Utilizando o caso de teste, os par??metros
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
                          Por??m, com a substitui????o dos valores mostrados nos dois c??digos
                          aaixo, ?? poss??vel verificar que, com a mudan??a
                          feita pelo operador de muta????o, o retorno do teste realizado
                          no programa mutante n??o ser??
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
                          O mutante incompetente ?? um mutante que gera um erro antes mesmo
                          de ser verificado pelo caso de teste, e por isso, ele pode ser
                          considerado como morto.
                          <br />
                          No exemplo abaixo, o programa original sofreu uma muta????o, e teve seu
                          operador aritm??tico
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; + &quot;</i>
                          {' '}
                          alterado pelo operador aritm??tico
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; - &quot;</i>
                          .
                          <Row justify="center">
                            <img src={incompetente1} alt="incompetente1" />
                          </Row>
                          <br />
                          Utilizando o caso de teste, o par??metro
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
                          Com a altera????o feita pelo operador, o compilador retornar?? um
                          erro antes mesmo do c??digo ser verificado pelo caso de teste. Isso
                          ocorre pois, no programa original ?? desejado &quot;somar&quot; duas
                          strings, o que ?? interpretado como uma concatena????o. Quando o operador
                          aritm??tico ?? alterado, o programa mutante tenta &quot;subtrair&quot;
                          duas strings, o que n??o faz sentido.
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
                          O mutante que sofreu timeout ?? um mutante que a verifica????o realizada
                          pelo caso de teste levou um tempo maior do que o determinado pela
                          ferramenta de apoio.
                          No exemplo abaixo, o programa original sofreu uma muta????o, e teve seu
                          operador de atribui????o
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; += &quot;</i>
                          {' '}
                          alterado pelo operador de atribui????o
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; -= &quot;</i>
                          .
                          <Row justify="center">
                            <img src={timeout} alt="timeout" />
                          </Row>
                          Utilizando o caso de teste, que n??o possui par??metros de entrada,
                          e espera um retorno igual a
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>10</i>
                          .
                          <Row justify="center">
                            <img src={timeout2} alt="timeout2" />
                          </Row>
                          Com a altera????o feita pelo operador, a vari??vel
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; i &quot;</i>
                          {' '}
                          do programa mutante diminuir?? a cada itera????o do
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>while</i>
                          , e nunca chegar?? ao valor
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>10</i>
                          , que determina a parada do la??o. Assim, o programa mutante ficar?? em
                          execu????o at?? o tempo limite de execu????o do caso de teste.
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
                          O mutante equivalente ?? um mutante que possui o mesmo comportamento
                          do programa original, e que n??o ?? poss??vel encontrar um caso
                          de teste que consiga mat??-lo. Esse tipo de mutante ?? um dos
                          obst??culos do teste de muta????o devido a dificuldade das ferramentas
                          de apoio em identific??-los dentro do c??digo.
                          <br />
                          No exemplo abaixo, escolhido devido a simplicidade e a facilidade de
                          encontrar o mutante equivalente,
                          o programa original sofreu uma muta????o, e teve seu operador aritm??tico
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; + &quot;</i>
                          {' '}
                          alterado pelo operador aritm??tico
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>&quot; * &quot;</i>
                          .
                          <Row justify="center">
                            <img src={equi} alt="equi" />
                          </Row>
                          Utilizando o caso de teste, que n??o possui par??metros de entrada,
                          e espera um retorno igual a
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>4</i>
                          .
                          <Row justify="center">
                            <img src={equi2} alt="equi2" />
                          </Row>
                          Analisando o c??digo, tanto
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>(2 + 2)</i>
                          , quanto
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>(2 * 2)</i>
                          {' '}
                          retornar??o o valor
                          {' '}
                          <i style={{ color: 'red', fontWeight: 'bold' }}>4</i>
                          , esperado pelo caso de teste. Como a opera????o matem??tica depende
                          de duas vari??veis fixas,
                          esse mutante sempre retornar?? o mesmo resultado, e por causa disso,
                          a ferramenta considera o mesmo como mutante vivo, por n??o conseguir
                          identificar que ele ?? na verdade um mutante equivalente.
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
              Escore de Muta????o
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              O escore de muta????o um m??todo utilizado para avaliar a efici??ncia
              e o n??vel de confianca dos casos de teste desenvolvidos pelo usu??rio.
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              Ele possui um intervalo entre 0% e 100%, sendo que quanto maior o resultado,
              maior ?? a efetividade do caso de teste em detectar erros do c??digo.
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              O escore de muta????o ?? obtido utilizando a equa????o abaixo:
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
                  , que foram mortos pelos casos de teste
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
              Nesse caso, os mutantes que sofrem timeout tamb??m podem ser considerados
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
              Agora, ser?? poss??vel seguir para o t??pico voltado
              ??s ferramentas de apoio ao teste de muta????o, ou
              aprofundar o conhecimento adquirido at?? aqui
              com os Exerc??cios Propostos.
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
                onClick={() => props.history.push('/ferramentas')}
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
              Exerc??cio 1
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
                        O programa mutante ?? um mutante incompetente
                      </Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color1[1], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={2}>
                        O programa mutante ?? um mutante morto
                      </Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color1[2], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={3}>
                        O programa mutante ?? um mutante equivalente
                      </Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color1[3], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={4}>
                        O programa mutante ?? um mutante vivo
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
                    O mutante gerado ?? um mutante equivalente pois, mesmo com a mudan??a,
                    o resultado do Programa Mutante ser?? o mesmo do Programa Original,
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
              Exerc??cio 2
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="quizz-question">
                Para um programa mutante ser considerado vivo, seu resultado deve ser o mesmo
                que o mutante original para um determinado valor.
                Analizando ambos e assumindo a nota????o
                {' '}
                <i style={{ color: 'red', fontWeight: 'bold' }}>( entrada, sa??da )</i>
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
                    Dos valores ao lado, o ??nico que far?? com que ambos mutantes retornem
                    o mesmo resultado ?? o n??mero
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
