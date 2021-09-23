import React from 'react';
import { Layout as AntdLayout } from 'antd';
import PropTypes from 'prop-types';
import SideBar from './Sidebar';
import './style.css';

const { Content } = AntdLayout;

export default function Layout({ children }) {
  return (
    <AntdLayout>
      <SideBar />
      <AntdLayout>
        <Content className="content-container">
          {children}
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
