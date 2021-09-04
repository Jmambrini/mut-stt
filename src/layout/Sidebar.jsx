import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu, Layout,
} from 'antd';
import PropTypes from 'prop-types';
import menuItems from './MenuItems';
import './Sidebar.scss';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="Sidebar">
        <Layout.Sider
          breakpoint="xs"
        >
          <div className="Logo">
            <Link to="/">
              MUT SITE
            </Link>
          </div>

          <Menu
            mode="inline"
            theme="dark"
          >
            {menuItems.map((menu) => (
              <Menu.Item key={menu.path}>
                <Link to={menu.path}>
                  <span>{menu.name}</span>
                </Link>
              </Menu.Item>
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
