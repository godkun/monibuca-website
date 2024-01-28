import React from 'react'
import TweenOne from 'rc-tween-one'
import { Menu } from 'antd'
import { getChildrenToRender } from '../../utils'
import './less/antMotionStyle.less'

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
    // this.getDefaultNav()
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
      <TweenOne
        component="header"
        // animation={{ opacity: 0, type: 'from' }}
        {...dataSource.wrapper}
        {...props}
      >
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
        >
          <TweenOne
            // animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
            {...dataSource.logo}
          >
            <img width="100%" src={dataSource.logo.children} alt="img" />
          </TweenOne>
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
          <TweenOne
            {...dataSource.Menu}
            animation={
              isMobile
                ? {
                    x: 0,
                    height: 0,
                    duration: 300,
                    onComplete: e => {
                      if (this.state.phoneOpen) {
                        e.target.style.height = 'auto'
                      }
                    },
                    ease: 'easeInOutQuad'
                  }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
          >
            <Menu
              mode={isMobile ? 'inline' : 'horizontal'}
              defaultSelectedKeys={() => this.getDefaultNav()}
              theme="light"
            >
              {navChildren}
            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    )
  }
}

export default Header3
