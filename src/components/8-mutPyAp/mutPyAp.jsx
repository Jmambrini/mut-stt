import React, { useRef } from 'react';
import {
  Carousel, Button, Row, Col,
} from 'antd';

import { DownloadOutlined, WindowsOutlined, QqOutlined } from '@ant-design/icons';

import './mutPyAp.scss';

import codigo from '../../generics/mutpytest/codigo.py';
import testes from '../../generics/mutpytest/testes.py';

import linux1 from '../../generics/app/linux1.png';
import linux2 from '../../generics/app/linux2.png';
import linux3 from '../../generics/app/linux3.png';
import win1 from '../../generics/app/win1.png';
import win2 from '../../generics/app/win2.png';
import win3 from '../../generics/app/win3.png';
import results1 from '../../generics/app/results1.png';

function mutPyAp() {
  const slider = useRef();

  return (
    <div className="mutPyAp">
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
              Utilizando a Mut.py
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              Nesse tópico, vamos colocar a mão na massa e fazer a Mut.py rodar com o
              nosso código.
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              Primeiro, crie uma pasta, e salve os dois arquivos abaixo dentro dela:
            </Col>
          </Row>
          <Row>
            <Col offset={5} span={6} justify="center" className="text">
              <Button href={codigo} download="codigo.py" className="download-button">
                <DownloadOutlined />
                Baixar código inicial
              </Button>
            </Col>
            <Col offset={2} span={6} justify="center" className="text">
              <Button href={testes} download="testes.py" className="download-button">
                <DownloadOutlined />
                Baixar casos de teste
              </Button>
            </Col>
          </Row>
          <Row style={{ marginTop: '32px' }}>
            <Col span={24} justify="center" className="text">
              Agora, escolha o sistema operacional que você está usando para que possamos
              prosseguir:
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="mini-text">
              Ninguém vai te julgar por usar Windows. Eu acho...
            </Col>
          </Row>
          <Row>
            <Col offset={5} span={6} justify="center" className="text">
              <Button
                onClick={() => {
                  slider.current.goTo(1);
                }}
              >
                <WindowsOutlined />
                Windows
              </Button>
            </Col>
            <Col offset={2} span={6} justify="center" className="text">
              <Button
                onClick={() => {
                  slider.current.goTo(4);
                }}
              >
                <QqOutlined />
                Linux
              </Button>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Configurando no Windows - Pt 1
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              O primeiro passo será checar se o Python está instalado na sua máquina, e se ele
              também está em uma versão que a Mut.py aceite.
              Para a Mut.py, precisamos que a versão seja acima da 3.3, e abaixo da 3.9,
              como expliquei anteriormente.
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              Por isso, utilizei a 3.7.9 no Windows ( baixada daqui:
              {' '}
              <a href="https://www.python.org/ftp/python/3.7.9/python-3.7.9.exe" target="_blank" rel="noreferrer">link</a>
              {' '}
              )
            </Col>
          </Row>
          <Row style={{ justifyContent: 'center' }}>
            <Col>
              <img src={win1} alt="win1" style={{ marginTop: '14px', maxWidth: '100%' }} />
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              *Uma observação: utilizei o
              {' '}
              <i style={{ color: 'red' }}>PowerShell</i>
              {' '}
              e o
              {' '}
              <i style={{ color: 'red' }}>Git Bash</i>
              {' '}
              em alguns testes, e ambos apresentaram erros.
              Depois disso, segui só com o
              {' '}
              <i style={{ color: 'red' }}>Prompt de Comando</i>
              {' '}
              e não tive mais problemas.
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Configurando no Windows - Pt 2
            </Col>
          </Row>
          <Row style={{ justifyContent: 'center' }}>
            <Col>
              O próximo passo é instalar a ferramenta. Para isso, basta rodar o
              comando abaixo. Se não tiver o pip instalado, é só da um Google que você
              acha rapidinho como instalar.
            </Col>
          </Row>
          <Row style={{ justifyContent: 'center' }}>
            <Col>
              <img src={win2} alt="win2" style={{ marginTop: '14px', maxWidth: '100%' }} />
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Configurando no Windows - Pt 3
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              Com a Mut.py instalada, precisamos abrir a pasta que salvamos nossos
              códigos no terminal, e executar o seguinte código:
            </Col>
          </Row>
          <Row style={{ justifyContent: 'center' }}>
            <Col span={20}>
              <img src={win3} alt="win3" style={{ marginTop: '14px', width: '100%' }} />
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              No comando, temos os seguintes parâmetros:
              <ul>
                <li>
                  --target mostra ao Mut.py o código que queremos testar
                </li>
                <li>
                  --unit-test mostra ao Mut.py os casos de teste escritos em unittest
                </li>
                <li>
                  -m é uma flag que fala para o Mut.py nos mostrar os mutantes gerados
                </li>
                <li>
                  --report-html fala ao Mut.py que queremos que nossos resultados sejam
                  mostrados em uma página HTML, que será salva na pasta &quot;resultados&quot;,
                  dentro da pasta que criamos
                </li>
              </ul>
            </Col>
          </Row>
          <Row style={{ justifyContent: 'right', marginTop: '-24px' }}>
            <Col span={6}>
              <Button onClick={() => {
                slider.current.goTo(7);
              }}
              >
                Ir para os resultados
              </Button>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Configurando no Linux - Pt 1
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              O primeiro passo será checar se o Python está instalado na sua máquina, e se ele
              também está em uma versão que a Mut.py aceite.
              Para a Mut.py, precisamos que a versão seja acima da 3.3, e abaixo da 3.9,
              como expliquei anteriormente.
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              Por isso, utilizei a 3.8.10 no Linux, como mostra abaixo:
            </Col>
          </Row>
          <Row style={{ justifyContent: 'center' }}>
            <Col>
              <img src={linux1} alt="linux1" style={{ marginTop: '14px', maxWidth: '100%' }} />
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Configurando no Linux - Pt 2
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              O próximo passo é instalar a ferramenta. Para isso, basta rodar o
              comando abaixo. Se não tiver o pip instalado, é só da um Google que você
              acha rapidinho como instalar.
            </Col>
          </Row>
          <Row style={{ justifyContent: 'center' }}>
            <Col>
              <img src={linux2} alt="linux2" style={{ marginTop: '14px', maxWidth: '100%' }} />
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Configurando no Linux - Pt 3
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              Com a Mut.py instalada, precisamos abrir a pasta que salvamos nossos
              códigos no terminal, e executar o seguinte código:
            </Col>
          </Row>
          <Row style={{ justifyContent: 'center' }}>
            <Col span={20}>
              <img src={linux3} alt="linux3" style={{ marginTop: '14px', width: '100%' }} />
            </Col>
          </Row>
          <Row>
            <Col span={24} justify="center" className="text">
              No comando, temos os seguintes parâmetros:
              <ul>
                <li>
                  --target mostra ao Mut.py o código que queremos testar
                </li>
                <li>
                  --unit-test mostra ao Mut.py os casos de teste escritos em unittest
                </li>
                <li>
                  -m é uma flag que fala para o Mut.py nos mostrar os mutantes gerados
                </li>
                <li>
                  --report-html fala ao Mut.py que queremos que nossos resultados sejam
                  mostrados em uma página HTML, que será salva na pasta &quot;resultados&quot;,
                  dentro da pasta que criamos
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Resultados (tanto Windows, quanto Linux) - Pt1
            </Col>
          </Row>
          <Row>
            <Col>
              Devido a tag
              {' '}
              <i style={{ color: 'red' }}>--report-html</i>
              , teremos uma página html para mostrar os resultados
              do processo executado pela Mut.py. Essa página estará
              dentro da pasta
              {' '}
              <i style={{ color: 'red' }}>resultados</i>
              , nome inserido depois da tag
              {' '}
              <i style={{ color: 'red' }}>--report-html</i>
              .
            </Col>
          </Row>
          <Row style={{ maxHeight: '80%' }}>
            <Col span={8}>
              <img src={results1} alt="results1" style={{ marginTop: '14px', maxWidth: '100%' }} />
            </Col>
            <Col span={16} style={{ marginTop: '60px' }}>
              Ao lado, temos os seguintes dados:
              <ul>
                <li>
                  Target: mostra o nome do arquivo com o código que utilizamos;
                </li>
                <li>
                  Tests [X]: mostra o nome do arquivo com os casos de teste que criamos, onde
                  X é o número de arquivos de casos de testes utilizados;
                </li>
                <li>
                  Result summary
                  <ul>
                    <li>
                      Score: mostra o score de mutação que nosso código e casos de testes obtiveram;
                    </li>
                    <li>
                      Time: mostra o tempo de execução da ferramenta;
                    </li>
                  </ul>
                </li>
                <li>
                  Mutants[X]: resumos dos mutantes gerados, onde X é o número total de mutantes;
                  <ul>
                    <li>
                      killed: mostra o número de mutantes que foram mortos;
                    </li>
                    <li>
                      survived: mostra o número de mutantes que sobreviveram;
                    </li>
                    <li>
                      incompetent: mostra o número de mutantes incompetentes que foram gerados;
                    </li>
                    <li>
                      timeout: mostra o número de mutantes que passaram do tempo máximo de execução;
                    </li>
                  </ul>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Resultados - Pt2
            </Col>
          </Row>
        </div>
      </Carousel>
    </div>
  );
}

export default mutPyAp;
