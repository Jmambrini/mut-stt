import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './App.scss';
import Routes from './components/Routes/Routes';
import menuItems from './components/Layout/MenuItems';

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Sider>
          <div className="logo">ASIOUDHASIUHD</div>
          <Menu theme="dark" mode="inline">
            {menuItems.map((e) => (
              <Menu.Item key={e.key}>
                <Link to={e.path}>
                  {e.name}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            OASUIDHJIASUHDIUASHD
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              heigth: '100%',
            }}
          >
            <Routes />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
