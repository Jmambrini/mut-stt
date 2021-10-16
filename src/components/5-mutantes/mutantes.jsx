import React, { useState } from 'react';
import {
  Carousel, Row, Col, Modal, Card,
} from 'antd';

import './mutantes.scss';

import vivo from '../../generics/tiposMut/vivo.png';
import morto from '../../generics/tiposMut/morto.png';
import incompetente from '../../generics/tiposMut/incompetente.png';
import timeout from '../../generics/tiposMut/timeout.png';

function mutantes() {
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
    <div className="mutantes">
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
      >
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Tipos de Mutantes
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              Para finalizar a introdução teórica sobre Teste de Mutação, será abordado nesse
              tópico os diferentes tipos de Mutantes.
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              Como explicado anteriormente, os Mutantes são criados para que o desenvolvedor
              consiga testar os seus casos de teste. Após o Mutante ser avaliado pelos casos
              criados, ele poderá se enquadrar nos seguintes tipos:
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
                          O Mutante Vivo é um mutante que sobreviveu aos casos de testes criados.
                          <br />
                          No exemplo abaixo, o programa original sofreu uma mutação, e teve seu
                          {' '}
                          <i style={{ color: 'red' }}>operador aritmético +</i>
                          {' '}
                          alterado pelo
                          {' '}
                          <i style={{ color: 'red' }}>operador aritmético *</i>
                          . Utilizando o caso de teste escrito em
                          {' '}
                          <i style={{ color: 'red' }}>unittest</i>
                          , os parâmetros
                          {' '}
                          <i style={{ color: 'red' }}>a, b, c</i>
                          {' '}
                          recebem os valores
                          {' '}
                          <i style={{ color: 'red' }}>2, 2, 1</i>
                          , respectivamente, e o caso espera um retorno igual a
                          {' '}
                          <i style={{ color: 'red' }}>True</i>
                          .
                          <br />
                          Porém, com a substituição dos valores mostrados nos dois códigos
                          da parte inferior, é possível verificar que, independente da mudança
                          feita pelo Operador de Mutação, o retorno do teste será
                          {' '}
                          <i style={{ color: 'red' }}>True</i>
                          , e portanto, o mutante não foi morto pelo Caso de Teste.
                        </div>
                      </Row>
                      <Row justify="center">
                        <img src={vivo} alt="vivo" style={{ marginTop: '14px' }} />
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
                          O Mutante Morto é um mutante que não sobreviveu aos casos de testes
                          criados.
                          <br />
                          No exemplo abaixo, o programa original sofreu uma mutação, e teve seu
                          {' '}
                          <i style={{ color: 'red' }}>operador aritmético *</i>
                          {' '}
                          alterado pelo
                          {' '}
                          <i style={{ color: 'red' }}>operador aritmético +</i>
                          . Utilizando o caso de teste escrito em
                          {' '}
                          <i style={{ color: 'red' }}>unittest</i>
                          , os parâmetros
                          {' '}
                          <i style={{ color: 'red' }}>a, b, c</i>
                          {' '}
                          recebem os valores
                          {' '}
                          <i style={{ color: 'red' }}>9, 9, 50</i>
                          , respectivamente, e o caso espera um retorno igual a
                          {' '}
                          <i style={{ color: 'red' }}>True</i>
                          .
                          <br />
                          Porém, com a substituição dos valores mostrados nos dois códigos
                          da parte inferior, é possível verificar que, com a mudança
                          feita pelo Operador de Mutação, o retorno do teste realizado
                          no programa mutante não será
                          {' '}
                          <i style={{ color: 'red' }}>True</i>
                          , e portanto, o mutante foi morto pelo Caso de Teste.
                        </div>
                      </Row>
                      <Row justify="center">
                        <img src={morto} alt="morto" style={{ marginTop: '14px' }} />
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
                          O Mutante Incompetente é um mutante que gera um erro antes mesmo
                          de ser verificado pelo caso de teste, e por isso, ele pode ser
                          considerado como morto.
                          <br />
                          No exemplo abaixo, o Programa Original sofreu uma mutação, e teve seu
                          {' '}
                          <i style={{ color: 'red' }}>operador aritmético +</i>
                          {' '}
                          alterado pelo
                          {' '}
                          <i style={{ color: 'red' }}>operador aritmético -</i>
                          . Utilizando o caso de teste escrito em
                          {' '}
                          <i style={{ color: 'red' }}>unittest</i>
                          , o parâmetro
                          {' '}
                          <i style={{ color: 'red' }}>a</i>
                          {' '}
                          recebeu a string
                          {' '}
                          <i style={{ color: 'red' }}>&quot;-STT&quot;</i>
                          , e o caso espera um retorno igual a
                          {' '}
                          <i style={{ color: 'red' }}>&quot;MUT-STT&quot;</i>
                          .
                          <br />
                          Com a alteração feita pelo Operador, o compilador retornará um
                          erro antes mesmo do código ser verificado pelo Caso de Teste. Isso
                          ocorre pois, no Programa Original é desejado &quot;somar&quot; duas
                          strings, o que é interpretado como uma concatenação. Quando o operador
                          aritmético é alterado, o Programa Mutante tenta &quot;subtrair&quot;
                          duas strings, o que não faz sentido.
                        </div>
                      </Row>
                      <Row justify="center">
                        <img src={incompetente} alt="incompetente" style={{ marginTop: '14px' }} />
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
                          O Mutante que sofreu timeout é um mutante que a verificação realizada
                          pelo Caso de Teste levou um tempo maior do que o determinado pela
                          ferramenta de apoio.
                          <br />
                          No exemplo abaixo, o Programa Original sofreu uma mutação, e teve seu
                          {' '}
                          <i style={{ color: 'red' }}>operador de atribuição +=</i>
                          {' '}
                          alterado pelo
                          {' '}
                          <i style={{ color: 'red' }}>operador de atribuição -=</i>
                          . Utilizando o caso de teste escrito em
                          {' '}
                          <i style={{ color: 'red' }}>unittest</i>
                          , o caso não possui parâmetros de entrada, e espera um retorno igual a
                          {' '}
                          <i style={{ color: 'red' }}>10</i>
                          .
                          <br />
                          Com a alteração feita pelo Operador, a variável
                          {' '}
                          <i style={{ color: 'red' }}>i</i>
                          {' '}
                          do Programa Mutante diminuirá a cada iteração do
                          {' '}
                          <i style={{ color: 'red' }}>while</i>
                          , e nunca chegará ao valor
                          {' '}
                          <i style={{ color: 'red' }}>10</i>
                          , que determina a parada do laço. Assim, o Programa Mutante ficará em
                          execução até o tempo limite de execução do Caso de Teste.
                        </div>
                      </Row>
                      <Row justify="center">
                        <img src={timeout} alt="timeout" style={{ marginTop: '14px' }} />
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
                  headerTitle: 'Efeito de Acoplamento',
                  content: () => (
                    <div>
                      <Row>
                        <div>
                          O Efeito de Acoplamento diz que casos de testes
                          capazes de detectar erros simples, também possuem uma
                          alta porcentagem de detecção de erros complexos.
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
          mutantes extras caso queira aprofundar na matéria
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

export default mutantes;
