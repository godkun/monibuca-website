import React from 'react'
import { Menu } from 'antd'
import { getChildrenToRender } from '@/utils'
import './less/index.less'

import router from '../../router'

const { Item } = Menu

class Header3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phoneOpen: undefined
    }
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen
    this.setState({
      phoneOpen
    })
  }

  jump = path => {
    if (path.includes('http')) {
      window.open(path)
    } else router.navigate(path)
  }

  getDefaultNav = () => {
    const path = window.location.pathname
    return [path]
  }

  render() {
    const { dataSource, isMobile, ...props } = this.props
    const { phoneOpen } = this.state
    const navData = dataSource.Menu.children

    const navChildren = navData.map(item => {
      const { children: a, subItem, ...itemProps } = item
      return (
        <Item key={item.name} {...itemProps}>
          <div
            onClick={() => this.jump(item.children.href)}
            {...a}
            className={`header3-item-block ${a.className}`.trim()}
          >
            {a.children.map(getChildrenToRender)}
          </div>
        </Item>
      )
    })
    const moment = phoneOpen === undefined ? 300 : null
    return (
      <div {...dataSource.wrapper} {...props}>
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
        >
          <span {...dataSource.logo}>
            <img height={40} src={dataSource.logo.children} alt="img" />
          </span>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
              onClick={() => {
                this.phoneClick()
              }}
            >
              <em />
              <em />
              <em />
            </div>
          )}

          {phoneOpen && (
            <Menu
              mode={isMobile ? 'inline' : 'horizontal'}
              defaultSelectedKeys={() => this.getDefaultNav()}
              theme="light"
            >
              {navChildren}
            </Menu>
          )}

          <div className="header3-menu">
            {!isMobile && (
              <Menu
                mode="horizontal"
                defaultSelectedKeys={() => this.getDefaultNav()}
                theme="light"
              >
                {navChildren}
              </Menu>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Header3
