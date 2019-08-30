import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { NavLink } from 'react-router-dom'

import menuConfig from './constants'

const { Sider } = Layout
const { SubMenu } = Menu

class SiderBar extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      collapsed: false,
      menuList: [],
      defaultSelectedKeys: [],
      defaultOpenKeys: [],
    }
  }
  static getDerivedStateFromProps(props, state) {
    const defaultSelectedKeys = [window.location.pathname]
    const defaultOpenKeys = [`/${window.location.pathname.split('/')[1]}`]
    if( defaultSelectedKeys !== state.defaultSelectedKeys ) {
      return {
        defaultSelectedKeys: defaultSelectedKeys,
        defaultOpenKeys: defaultOpenKeys,
      }
    }
  }
  componentDidMount () {
    const menuList = this.setMenu(menuConfig)
    this.setState({
      menuList,
    })
  }
  
  setMenu = (menu) => {
    return menu.map(item => {
      if(item.children) {
        return (
          <SubMenu 
            key={item.key}
            title={<span><Icon type={ item.icon }/><span>{ item.title }</span></span>}
            >
            {this.setMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item
          key={item.key}
          title={item.title}
          >
          <NavLink to={item.key}>
            {item.icon && <Icon type={item.icon} />}
            <span>{item.title}</span>
          </NavLink>
        </Menu.Item>
      )
    }) 
  }
  onCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render () {
    return (
      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <div className="layout-logo">
          <div style={{margin: 10, background: '#e5e5e5', height: 40}}>
            
          </div>
        </div>
        <Menu 
          theme="dark"  
          mode="inline"
          defaultOpenKeys={ this.state.defaultOpenKeys }
          defaultSelectedKeys={ this.state.defaultSelectedKeys }
          >
          {this.state.menuList}
        </Menu>
      </Sider>
    )
  }
}

export default SiderBar 
