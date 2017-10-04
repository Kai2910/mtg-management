import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import { logout } from '../../login/actions';

const { Sider } = Layout;



const mapDispatchToProps = (dispatch) => {
  return ({
    onLogout: () => logout(dispatch)
  })
};

const mapStateToProps = (state) => {
  return ({
    users: state.loginReducer.users,
    isLoggedIn: _.size(state.loginReducer.isLoggedIn) > 0 ? state.loginReducer.isLoggedIn : JSON.parse(localStorage.getItem('isLoggedIn'))
  })
};

const Sidebar = ({ isLoggedIn, onLogout }) => {
  return (
    <div>
      { isLoggedIn &&
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
          <Menu
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
            onClick={(item) => {
              item.key === '2' ? onLogout() : false
            }}
          >
            {
              isLoggedIn &&
              <Menu.Item key="2">
                <Icon type="logout" />
                <span>Logout</span>
              </Menu.Item>
            }
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Alle Karten</span>
            </Menu.Item>
          </Menu>
        </Sider>
      }
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);