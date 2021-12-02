import React, { useRef, useState } from 'react';
import {
  Carousel, Row, Col, Button, Radio, Card, Space,
} from 'antd';

import { CaretRightOutlined, CaretDownOutlined } from '@ant-design/icons';

import errorSeeding from '../../generics/codes/errorSeeding.png';
import a1 from '../../generics/exercicios/a1.png';
import a2 from '../../generics/exercicios/a2.png';

import './critMutacao.scss';

function critMutacao(props) {
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
      setColor2(['#F96462', '#F96462', '#A1C181', '#F96462']);
      setDisabled2(true);
    }
  }

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
              Nos testes baseados em defeitos, são utilizados dos defeitos mais
              comuns e frequentes que podem ser cometidos
              durante o desenvolvimento de software para encontrar problemas.
              O testador utilizará esses defeitos para tentar criar casos de testes
              que sejam mais eficientes, e que garantam que o código esteja de acordo com a
              sua especificação. De maneira simples, um defeito é usado para descobrir outros
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
              A semeadura de defeitos é um dos critérios de teste baseado em defeitos.
              É um critério no qual o testador introduz aleatoriamente
              diversos defeitos no seu código para checar se os casos de testes desenvolvidos
              são efetivos na captura dos defeitos que foram inseridos.
              <br />
              <br />
              Esse critério tenta obter uma proporção entre os defeitos
              inseridos pelo testador, e os defeitos que ainda são desconhecidos e
              que serão revelados com os casos de teste.
              No caso abaixo, alguns defeitos foram inseridos no código original, marcados
              com um traço branco no programa com os defeitos inseridos.
              <div style={{ textAlign: '-webkit-center' }}>
                <img src={errorSeeding} alt="muter" style={{ width: '50%' }} />
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
              A seguir será discutido com detalhes o critério de teste de mutação.
              Você pode fazer alguns exercícios de fixação, ou seguir para o próximo tópico.
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
              Exercício 1
            </Col>
          </Row>
          <div>
            <div className="quizz-question">
              Dentre as alternativas a seguir, qual o critério que o testador
              insere diversos defeitos no seu próprio código para checar a efetividade
              dos seus casos de teste?
            </div>
            <Row>
              <Col span={10}>
                <div>
                  <Radio.Group
                    onChange={(e) => setValue1(e.target.value)}
                    value={value1}
                    disabled={disabled1}
                  >
                    <Space direction="vertical">
                      <Card className="cards1" style={{ backgroundColor: color1[0], textAlignLast: 'left' }}>
                        <Radio value={1}>Todos Nós</Radio>
                      </Card>
                      <Card className="cards1" style={{ backgroundColor: color1[1], textAlignLast: 'left' }}>
                        <Radio value={2}>Potenciais Usos</Radio>
                      </Card>
                      <Card className="cards1" style={{ backgroundColor: color1[2], textAlignLast: 'left' }}>
                        <Radio value={3}>Semeadura de defeitos</Radio>
                      </Card>
                      <Card className="cards1" style={{ backgroundColor: color1[3], textAlignLast: 'left' }}>
                        <Radio value={4}>Todos Usos</Radio>
                      </Card>
                    </Space>
                  </Radio.Group>
                </div>
                <Button onClick={() => checarResposta1(value1)}>
                  Conferir
                </Button>
              </Col>
            </Row>
          </div>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Exercício 2
            </Col>
          </Row>
          <div className="quizz-question">
            Analizando os códigos ao lado, quantos defeitos foram inseridos no Programa com Defeitos?
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
                      <Radio value={1}>1</Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color2[1], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={2}>2</Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color2[2], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={3}>3</Radio>
                    </Card>
                    <Card className="cards1" style={{ backgroundColor: color2[3], textAlignLast: 'left', cursor: 'default' }}>
                      <Radio value={4}>4</Radio>
                    </Card>
                  </Space>
                </Radio.Group>
                <Button onClick={() => checarResposta2(value2)}>
                  Conferir
                </Button>
              </div>
            </Col>
            <Col offset={1} span={13} className="text" style={{ textAlign: '-webkit-center' }}>
              {disabled2
                ? (
                  <div style={{ width: '80%', textAlign: 'center' }}>
                    <img src={a2} alt="a2" style={{ marginBottom: '14px', width: '360px' }} />
                  </div>
                )
                : (
                  <div style={{ width: '80%', textAlign: 'center' }}>
                    <img src={a1} alt="a1" style={{ marginBottom: '14px', width: '360px' }} />
                  </div>
                )}
            </Col>
          </Row>
        </div>
      </Carousel>
    </div>
  );
}

export default critMutacao;
