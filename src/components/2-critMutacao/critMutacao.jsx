import React, { useState } from 'react';
import {
  Carousel, Row, Col, Modal, Card,
} from 'antd';

import './critMutacao.scss';

function critMutacao() {
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
    <div className="critMutacao">
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
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Critérios de teste baseados em defeitos
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              Nos testes baseados em defeitos, os requisitos são criados a partir
              da análise do erros mais comuns e frequentes que podem ser cometidos
              durante o desenvolvimento de software. O desenvolvedor utilizará esses
              erros mais comuns para tentar criar casos de testes que sejam mais eficientes,
              e que garantam que o código esteja o mais correto possível, de acordo com as
              suas especificações. De maneira simples, um erro é usado para descobrir outros
              do mesmo tipo.
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={24} className="text">
              Para explicar melhor, existem algumas analogias. Nesse tópico,
              será utilizada a situação abaixo:
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text" justify="center" align="middle">
              <div className="simple-card">
                Uma equipe de segurança foi encarregada de
                testar a efetividade da proteção implementada nos
                servidores de uma grande empresa de tecnologia.
                Para isso, a equipe realiza diversos testes, se baseando em problemas mais comuns
                na área de segurança de sistemas (uma porta aberta, por exemplo).
                Nesses testes, a equipe de segurança consegue encontrar algumas falhas no sistema,
                e consequentemente, melhorar os recursos de proteção dele.
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              A analogia acima pode ser comparada com a lógica dos testes baseados em defeitos,
              pois utilizamos erros já conhecidos para mostrar o quão nossos casos de teste são
              efetivos.
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Critérios de teste baseados em defeitos
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              Critérios de teste baseados em defeitos
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={12} justify="center" align="middle" className="title">
              <Card
                onClick={() => showModal({
                  headerTitle: 'Teste de mutação',
                  content: () => (
                    <div>
                      asdasdasd
                    </div>
                  ),
                })}
              >
                Teste de Mutação
              </Card>
              <Card
                onClick={() => showModal({
                  headerTitle: 'Teste de mutação',
                  content: () => (
                    <div>
                      asdasdasd
                    </div>
                  ),
                })}
              >
                Teste de Mutação
              </Card>
            </Col>
          </Row>
        </div>
        <div>
          TESTE BASEADO EM DEFEITO
          EXEMPLIFICAR E FOCAR NO DE MUTAÇÃO
          CARD - teste de mutação (expandir um quadro)
          CARD - semeadura de defeitos (hyperlink com alguma documentação)
        </div>
        <div>
          Explicação com exemplos
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

export default critMutacao;
