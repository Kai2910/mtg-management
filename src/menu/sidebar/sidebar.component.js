import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { logout } from '../../redux/login/actions';

const { Sider } = Layout;

const mapDispatchToProps = dispatch => ({
  onLogout: () => logout(dispatch),
});

const mapStateToProps = state => ({
  users: state.loginReducer.users,
  isLoggedIn: _.size(state.loginReducer.isLoggedIn) > 0 ? state.loginReducer.isLoggedIn : JSON.parse(localStorage.getItem('isLoggedIn')),
});

const Sidebar = ({ isLoggedIn, onLogout }) => (
  <div>
    { isLoggedIn &&
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          onClick={item => (
            item.key === '2' ? onLogout() : false
          )}
        >
          <Menu.Item key="2">
            <Icon type="logout" />
            <span>Logout</span>
          </Menu.Item>
          <Menu.Item key="1">
            <Link to="/all-cards">
              <Icon type="pie-chart" />
              <span>Alle Karten</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/decks">
              <Icon type="edit" />
              <span>Decks</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    }
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
