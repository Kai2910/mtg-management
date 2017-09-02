import React from 'react';
import SideBar from '../menu/sidebar/sidebar.component';
import CardsList from '../cards-list/cards-list.component';
import { Layout } from 'antd';
import '../App.css';
import 'antd/dist/antd.css';

const { Content } = Layout;

export default function App() {
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <SideBar />
        <Layout style={{ marginLeft: 200 }}>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <CardsList />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}