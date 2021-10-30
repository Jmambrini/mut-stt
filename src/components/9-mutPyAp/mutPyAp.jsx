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
import results2 from '../../generics/app/results2.png';
import results3 from '../../generics/app/results3.png';
import results4 from '../../generics/app/results4.png';

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
              <i style={{ color: 'red', fontWeight: 'bold' }}>PowerShell</i>
              {' '}
              e o
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>Git Bash</i>
              {' '}
              em alguns testes, e ambos apresentaram erros.
              Depois disso, segui só com o
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>Prompt de Comando</i>
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
            <Col span={24} justify="center" className="text">
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
              Resultados (tanto Windows, quanto Linux) - Pt 1
            </Col>
          </Row>
          <Row>
            <Col>
              Devido a tag
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>--report-html</i>
              , teremos uma página html para mostrar os resultados
              do processo executado pela Mut.py. Essa página estará
              dentro da pasta
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>resultados</i>
              , nome inserido depois da tag
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>--report-html</i>
              . Abaixo, temos a parte inicial da página de resultados:
            </Col>
          </Row>
          <Row style={{ maxHeight: '80%' }}>
            <Col span={8}>
              <img src={results1} alt="results1" style={{ marginTop: '14px', maxWidth: '100%' }} />
            </Col>
            <Col span={16} style={{ marginTop: '60px' }}>
              Na parte inicial, temos os seguintes dados:
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
              Resultados - Pt 2
            </Col>
          </Row>
          <Row>
            <Col>
              Depois do resumos inicial, temos os mutantes que a ferramenta
              criou, organizados em uma tabela.
            </Col>
          </Row>
          <Row style={{ justifyContent: 'center' }}>
            <Col span={22}>
              <img src={results2} alt="results2" style={{ marginTop: '14px', maxWidth: '700px' }} />
            </Col>
          </Row>
          <Row>
            <Col span={15}>
              Nessa tabela temos:
              <ul>
                <li>
                  #: número identificador do mutante.;
                </li>
                <li>
                  Module: nome do módulo a ser testado;
                </li>
                <li>
                  Operator: operador de mutação que foi utilizado para gerar o mutante;
                </li>
                <li>
                  Tests run: quantidade de testes utilizados para analisar o mutante;
                </li>
                <li>
                  Duration: tempo de execução da ferramenta no mutante;
                </li>
                <li>
                  Result: resultado do mutante (se foi morto, se sobreviveu, etc);
                </li>
              </ul>
            </Col>
            <Col span={9} style={{ marginTop: '60px', fontWeight: 'bold' }}>
              Ao clicar na setinha do final da linha da tabela,
              poderemos visualizar os dados de determinado mutante.
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Resultados - Pt 3
            </Col>
          </Row>
          <Row>
            <Col>
              Nessa tela, poderemos analisar o que ocorreu com o código, e com o
              mutante gerado.
            </Col>
          </Row>
          <Row>
            <Col offset={1} span={11}>
              <img src={results3} alt="results3" style={{ marginTop: '14px', maxHeight: '400px' }} />
            </Col>
            <Col span={12} style={{ marginTop: '24px' }}>
              Na primeira parte do resultado, temos o tópico
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>Details</i>
              , que possui os mesmos campos explicados na tela anterior.
              Seguindo, temos o tópico
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>Exception traceback</i>
              .
              <br />
              <br />
              No
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>Exception traceback</i>
              , temos o retorno da ferramenta sobre qual dos nossos casos de teste
              matou o mutante (esse tópico aparece somente quando o mutante é morto). No exemplo,
              temos que nosso mutante foi morto por um caso da função
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>test_func</i>
              , sendo este o caso de teste
              <br />
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>self.assertEqual(codigo.func(1,2,3), True)</i>
              .
              <br />
              <br />
              O teste esperava as entradas
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>(1,2,3)</i>
              , e um retorno
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>True</i>
              . Porém, devido a mutação, o retorno do caso de teste foi
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>False</i>
              .
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24} justify="center" align="middle" className="title">
              Resultados - Pt 4
            </Col>
          </Row>
          <Row>
            <Col>
              Por fim, estudaremos agora a segunda parte da análise individual dos mutantes,
              e também última parte dos nossos resultados.
            </Col>
          </Row>
          <Row>
            <Col offset={1} span={11}>
              <img src={results4} alt="results4" style={{ marginTop: '14px', maxHeight: '400px' }} />
            </Col>
            <Col span={12} style={{ marginTop: '80px' }}>
              Na primeira parte, temos o tópico
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>Mutations</i>
              . Nele, podemos analisar o operador de mutação que foi utilizado
              na geração do mutante, e a linha do código que foi modificada.
              No mutante escolhido, a ferramenta utilizou o operador
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>AOR</i>
              , e a mutação ocorreu na
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>linha 4</i>
              .
              <br />
              <br />
              O próximo tópico dessa parte é o
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>Mutant</i>
              . Nesse tópico a ferramenta nos mostra o mutante que foi
              gerado à partir do código original.
              <br />
              Como falado no tópico anterior, a mutação ocorreu na linha 4, com o
              operador AOR. Observando a linha 4, podemos ver que o
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>+</i>
              {' '}
              foi alterado por um
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>-</i>
              {' '}
              no trecho
              {' '}
              <i style={{ color: 'red', fontWeight: 'bold' }}>(a - b &gt;= c)</i>
              .
            </Col>
          </Row>
        </div>
      </Carousel>
    </div>
  );
}

export default mutPyAp;
