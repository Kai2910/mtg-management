import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

const Sidebar = () => {
  return (
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>

  <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <Icon type="pie-chart" />
          <span>Alle Karten</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;