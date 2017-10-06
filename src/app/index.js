import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import SideBar from '../menu/sidebar/sidebar.component';
import '../App.css';

const { Content } = Layout;

export default function App({ children }) {
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <SideBar />
        <Layout style={{ marginLeft: 200 }}>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
