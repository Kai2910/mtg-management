import React from 'react';
import SideBar from '../menu/sidebar/sidebar.component';
import CardsList from '../cards-list/cards-list.component';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import '../App.css';
import 'antd/dist/antd.css';

const { Header, Footer, Content} = Layout;

export default function App() {
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <SideBar />
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <CardsList />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}