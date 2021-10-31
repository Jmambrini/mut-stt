import React from 'react';
import {
  Row, Col,
} from 'antd';

import './Sobre.scss';

function Sobre() {
  return (
    <div className="Sobre">
      <Row>
        <Col span={24} justify="center" align="middle" className="title">
          Sobre
        </Col>
      </Row>
      <Row>
        <Col span={24} justify="center" className="text">
          Esse REA foi feito pelo aluno João Pedro Silva Mambrini Ruiz, discente do curso de
          Engenharia de Computação da Universidade de São Paulo - USP, campus de São Carlos.
          O projeto foi desenvolvido no segundo semestre de 2021 no contexto do Trabalho
          de Conclusão de Curso intitulado &ldquo;Estudo e definição de um recurso
          educacional aberto para apoiar o ensino de teste de mutação&ldquo;.
          <br />
          <br />
          Após se interessar pelo tema na disciplina &ldquo;Teste e Inspeção de Software&ldquo;,
          o aluno buscou materiais de estudo na Internet, e pode observar a carência destes
          sobre Teste de Mutação, principalmente no idioma português. Assim, surgiu a ideia do REA,
          em conjunto com o TCC.
          <br />
          <br />
          O trabalho foi desenvolvido em conjunto com sua orientadora,
          Professora Dra. Simone do Rocio Senger de Souza, e seu coorientador, Me.
          Leo Natan Paschoal.
        </Col>
      </Row>
    </div>
  );
}

export default Sobre;
