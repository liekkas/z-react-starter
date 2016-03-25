/**
 * Created by liekkas on 16/2/22.
 */
import React, { PropTypes } from 'react'
import { ActionTypes, createAction } from '../../actions'
import { connect } from 'react-redux'
import style from './style.scss'
import { Menu, Icon } from 'antd';
import {browserHistory} from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const App = React.createClass({
  getInitialState() {
    return {
      current: 'home'
    };
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
    browserHistory.push('/' + e.key);
  },

  onModuleChange(payload) {
    this.props.dispatch(createAction(ActionTypes.MODULE_CHANGE, payload));
  },

  render() {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <div className={style.header}>
          <Menu onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                theme="dark"
                mode="horizontal">
            <Menu.Item key="home">
              <Icon type="home" />首页
            </Menu.Item>
            <Menu.Item key="moduleA">
              <Icon type="appstore" />模块A
            </Menu.Item>
          </Menu>
        </div>

        <div className={style.content}>
          {this.props.children}
        </div>

        <div className={style.footer}>
          © 2016 All Rights Reserved 北京神州泰岳软件股份有限公司 版权所有
        </div>
      </div>
    )
  }
})

function select(state) {
  return {
    module: state.global.module,
  };
}

export default connect(select)(App)
