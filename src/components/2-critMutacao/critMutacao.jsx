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
          CARD - semeadura de erros (hyperlink com alguma documentação)
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
