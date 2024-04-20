import React, { useState } from 'react'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
import { Carousel as AntCarousel, Row, Col, Space, Tabs, Select } from 'antd'
import TweenOne from 'rc-tween-one'
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin'
import { getChildrenToRender as kunRender } from '@/utils'

TweenOne.plugins.push(Children)

class Feature4 extends React.PureComponent {
  constructor(props) {
    super(props)
    this.carouselRef = React.createRef()
    this.state = {
      current: 0,
      child: props.dataSource.tabs.children[0].children
    }
  }
  render() {
    const { dataSource, isMobile, ...props } = this.props
    const { tabs } = dataSource
    const { titleWrapper, children: childWrapper } = tabs
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div key="title">
            <div key="title" {...titleWrapper}>
              {titleWrapper.children.map(kunRender)}
            </div>
          </div>
          <div className="tab">
            {isMobile ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Select
                  style={{ width: 200 }}
                  value={this.state.current}
                  onChange={i => this.setState({ child: childWrapper[i].children, current: i })}
                  options={childWrapper.map((item, i) => ({ label: item.title, value: i }))}
                />
                <this.state.child isMobile={isMobile} />
              </div>
            ) : (
              <Tabs
                size="small"
                tabPosition={isMobile ? 'top' : 'left'}
                type={isMobile ? 'line' : 'card'}
                tabBarGutter={9}
                items={childWrapper.map((item, i) => {
                  return {
                    label: item.title,
                    key: i,
                    children: <item.children isMobile={isMobile} />
                  }
                })}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default Feature4
