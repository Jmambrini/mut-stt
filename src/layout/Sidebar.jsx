import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu, Layout,
} from 'antd';
import PropTypes from 'prop-types';
import menuItems from './MenuItems';
import './Sidebar.scss';

const { SubMenu } = Menu;

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { pathname } = window.location;
    return (
      <div className="Sidebar">
        <Layout.Sider
          breakpoint="xs"
        >
          <div className="Logo">
            <Link to="/">
              MUT-STT
            </Link>
          </div>

          <Menu
            mode="inline"
            theme="dark"
            selectedKeys={pathname}
            defaultOpenKeys={['sub1']}
          >
            {menuItems.map((menu) => (
              menu.type === 'normal'
                ? (
                  <Menu.Item key={menu.path}>
                    <Link to={menu.path}>
                      <span>{menu.name}</span>
                    </Link>
                  </Menu.Item>
                ) : (
                  <SubMenu title={menu.name} key={menu.key}>
                    {menu.sub.map((e) => (
                      <Menu.Item key={e.path} className="subMenu">
                        <Link to={e.path}>
                          <span>{e.name}</span>
                        </Link>
                      </Menu.Item>
                    ))}
                  </SubMenu>
                )
            ))}
          </Menu>
        </Layout.Sider>
      </div>
    );
  }
}

SideBar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default SideBar;
