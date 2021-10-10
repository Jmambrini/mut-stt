import React, { useState } from 'react';
import {
  Carousel, Row, Col, Modal, Card,
} from 'antd';

import errorSeeding from '../../generics/codes/errorSeeding.png';

import './critMutacao.scss';

function critMutacao(props) {
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
        style={{ maxWidth: '800px', top: '35px' }}
        bodyStyle={{ fontSize: '16px' }}
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
              Os dois critérios de teste baseados em defeitos mais estudados são a
              &quot;Semeadura de Defeitos&quot; e o &quot;Teste de Mutação&quot;, sendo
              o segundo o mais utilizado.
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              <Card
                style={{ width: '70%' }}
                onClick={() => showModal({
                  headerTitle: 'Semeadura de Defeitos',
                  content: () => (
                    <div>
                      A Semeadura de Defeitos é um processo que o desenvolvedor introduz
                      diversos erros no seu código para checar se os casos de testes desenvolvidos
                      são efetivos na captura dos erros que foram inseridos.
                      <br />
                      Esse técnica tenta obter uma proporção entre os erros
                      inseridos pelo desenvolvedor, e os erros que ainda são desconhecidos e
                      que serão revelados com os casos de teste.
                      <br />
                      No caso abaixo, alguns erros foram inseridos no código original, marcados
                      com um traço branco no programa com os erros inseridos.
                      <div style={{ textAlignLast: 'center' }}>
                        <img src={errorSeeding} alt="muter" style={{ width: '600px', textAlign: '-webkit-right' }} />
                      </div>
                    </div>
                  ),
                })}
              >
                Semeadura de Defeitos
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              <Card
                style={{ width: '70%' }}
                onClick={() => {
                  props.history.push('/teste-mutacao');
                }}
              >
                Teste de Mutação
              </Card>
            </Col>
          </Row>
        </div>
      </Carousel>
    </div>
  );
}

export default critMutacao;
