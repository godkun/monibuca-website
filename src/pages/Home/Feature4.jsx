import React from 'react'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
import { Carousel as AntCarousel, Row, Col, Space, Tabs } from 'antd'
import TweenOne from 'rc-tween-one'
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin'
import { getChildrenToRender as kunRender } from './utils'

TweenOne.plugins.push(Children)

class Feature4 extends React.PureComponent {
  constructor(props) {
    super(props)
    this.carouselRef = React.createRef()
    this.state = {
      current: 0
    }
  }

  getChildrenToRender = (dataSource, isMobile) => {
    const { tabs } = dataSource
    const { titleWrapper, children: childWrapper } = tabs

    return (
      <>
        <div key="title">
          <div key="title" {...titleWrapper}>
            {titleWrapper.children.map(kunRender)}
          </div>
        </div>
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
      </>
    )
  }

  render() {
    const { dataSource, isMobile, ...props } = this.props
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          {/* <OverPack {...dataSource.OverPack}>
            {this.getChildrenToRender(dataSource)}
          </OverPack> */}
          {this.getChildrenToRender(dataSource, isMobile)}
        </div>
      </div>
    )
  }
}
export default Feature4
