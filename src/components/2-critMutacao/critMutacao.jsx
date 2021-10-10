import React, { useRef } from 'react';
import {
  Carousel, Row, Col, Button,
} from 'antd';

import { CaretRightOutlined, CaretDownOutlined } from '@ant-design/icons';

import errorSeeding from '../../generics/codes/errorSeeding.png';

import './critMutacao.scss';

function critMutacao(props) {
  const slider = useRef();
  return (
    <div className="critMutacao">
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
              Semeadura de defeitos
            </Col>
          </Row>
          <Row>
            <Col span={24} className="text">
              A Semeadura de Defeitos é um dos critérios de teste baseado em defeitos.
              É uma técnica no qual o desenvolvedor introduz
              diversos erros no seu código para checar se os casos de testes desenvolvidos
              são efetivos na captura dos erros que foram inseridos.
              <br />
              Esse técnica tenta obter uma proporção entre os erros
              inseridos pelo desenvolvedor, e os erros que ainda são desconhecidos e
              que serão revelados com os casos de teste.
              No caso abaixo, alguns erros foram inseridos no código original, marcados
              com um traço branco no programa com os erros inseridos.
              <div style={{ textAlign: '-webkit-center' }}>
                <img src={errorSeeding} alt="muter" style={{ width: '600px' }} />
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Teste de Mutação
            </Col>
          </Row>
          <Row style={{ height: '400px' }}>
            <Col span={12} className="text" style={{ alignSelf: 'center' }}>
              O Teste de Mutação é o critério mais utilizado nos testes
              baseados em defeitos. E por isso, também é o foco desse REA.
              <br />
              <br />
              Por esse motivos, a técnica será abordada em tópicos separados
              para explicar o conteúdo de maneira mais aprofundada.
              <br />
              <br />
              À partir desse ponto, será possível seguir para o tópico voltado
              ao Teste de Mutação, ou aprofundar o conhecimento adquirido até aqui
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
                onClick={() => props.history.push('/teste-mutacao')}
              >
                Teste de Mutação
                <CaretDownOutlined style={{ fontSize: '20px' }} />
              </Button>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Exercícios propostos
            </Col>
          </Row>
        </div>
      </Carousel>
    </div>
  );
}

export default critMutacao;
