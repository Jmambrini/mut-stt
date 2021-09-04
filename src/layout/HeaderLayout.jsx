import React from 'react';
import {
  Layout,
} from 'antd';
import './HeaderLayout.scss';

export function Header() {
  return (
    <div className="HeaderLayout">
      <Layout.Header />
    </div>
  );
}

export default Header;
