import React from 'react';
import SideBar from '../menu/sidebar/sidebar.component';
import { Layout } from 'antd';
import '../App.css';
import 'antd/dist/antd.css';

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


// class App extends React.Component {
//   componentWillMount() {
//     this.props.onLoad();
//   }
//
//   render() {
//     const {
//       currentUser,
//       permissions,
//       appName,
//       onLogout,
//       accessToken,
//       client,
//     } = this.props;
//
//     return (currentUser && permissions ? <TopAndSideNav
//       appName={appName}
//       currentUser={currentUser}
//       permissions={permissions}
//       logout={onLogout}
//       accessToken={accessToken}
//       client={client}
//     >
//       {this.props.children}
//     </TopAndSideNav> : <Login />);
//   }
// }
//
// App.contextTypes = {
//   router: PropTypes.object.isRequired,
// };