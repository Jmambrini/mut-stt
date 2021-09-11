import React, { useState } from 'react';
import {
  Carousel, Radio, Space, Card, Button,
} from 'antd';
// import { RightCircleFilled } from '@ant-design/icons';

import './testeMutacao.scss';

function testeMutacao() {
  const [value1, setValue1] = useState(-1);
  const [color1, setColor1] = useState(['#fdd872', '#fdd872', '#fdd872']);

  // const Arrow = ({
  //   // eslint-disable-next-line react/prop-types
  //   onClick,
  // }) => (
  //   <RightCircleFilled onClick={onClick} />
  // );

  function checarResposta1() {
    setColor1(['#F96462', '#F96462', '#A1C181']);
  }

  return (
    <div className="testeMutacao">
      <Carousel
        dotPosition="bottom"
        arrows
        infinite={false}
        // nextArrow={<Arrow />}
      >
        <div>
          Nessa página, daremos um breve resumo sobre o que é um
          teste de mutação.
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
          <div className="quizz-question">
            O que é um teste de mutação?
          </div>
          <div>
            <Radio.Group onChange={(e) => setValue1(e.target.value)} value={value1}>
              <Space direction="vertical">
                <Card className="cards1" style={{ backgroundColor: color1[0] }}>
                  <Radio value={1}>Um teste</Radio>
                </Card>
                <Card className="cards1" style={{ backgroundColor: color1[1] }}>
                  <Radio value={2}>Uma mutação</Radio>
                </Card>
                <Card className="cards1" style={{ backgroundColor: color1[2] }}>
                  <Radio value={3}>Um teste de mutação</Radio>
                </Card>
              </Space>
            </Radio.Group>
          </div>
          <Button onClick={() => checarResposta1(value1)}>
            Conferir
          </Button>
        </div>
      </Carousel>
    </div>
  );
}

export default testeMutacao;
