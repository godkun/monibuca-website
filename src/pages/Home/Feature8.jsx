import React from 'react'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import QueueAnim from 'rc-queue-anim'
import { Carousel as AntCarousel, Row, Col } from 'antd'
import TweenOne from 'rc-tween-one'
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin'
import CarouselKun from 'nuka-carousel'

import { getChildrenToRender as kunRender } from '../utils'

TweenOne.plugins.push(Children)

class Feature6 extends React.PureComponent {
  constructor(props) {
    super(props)
    this.carouselRef = React.createRef()
    this.state = {
      current: 0
    }
  }

  onTitleClick = (_, i) => {
    this.setState({
      current: i
    })
  }

  // onTitleClick = (_, i) => {
  //   const carouselRef = this.carouselRef.current.childRefs.carousel
  //   carouselRef.goTo(i)
  // }

  handleBeforeSlide = (currentSlide, nextSlide) => {
    // 在轮播之前执行的逻辑
    this.setState({
      current: nextSlide
    })
  }

  onBeforeChange = (_, newIndex) => {
    this.setState({
      current: newIndex
    })
  }

  getChildrenToRender = dataSource => {
    const { current } = this.state
    const { Carousel } = dataSource
    const { titleWrapper, children: childWrapper, wrapper, ...carouselProps } = Carousel

    const { barWrapper, title: titleChild, ...titleWrapperProps } = titleWrapper
    const titleToRender = []

    const childrenToRender = childWrapper.map((item, ii) => {
      const { title, children, ...itemProps } = item
      titleToRender.push(
        <div
          {...title}
          key={ii.toString()}
          onClick={e => {
            this.onTitleClick(e, ii)
          }}
          className={ii === current ? `${title.className || ''} active` : title.className}
        >
          {title.children}
        </div>
      )
      const childrenItem = children.map(($item, i) => {
        const { number, children: child, ...childProps } = $item
        return (
          <Col {...childProps} key={i.toString()}>
            <p {...child}>{child.children}</p>
          </Col>
        )
      })
      return (
        <div key={ii.toString()}>
          <QueueAnim type="bottom" component={Row} {...itemProps}>
            {childrenItem}
          </QueueAnim>
        </div>
      )
    })

    const width = 100 / childrenToRender.length
    return (
      <div>
        <div className="feature8-zhan"></div>
        <div {...titleWrapperProps} key="title">
          <div key="title" {...titleWrapper}>
            {titleWrapper.children.map(kunRender)}
          </div>
          <div {...titleChild}>
            {titleToRender}
            <div
              {...barWrapper}
              style={{
                width: `${width}%`,
                left: `${width * current}%`
              }}
            >
              <em {...barWrapper.children} />
            </div>
          </div>
        </div>

        <CarouselKun
          renderCenterLeftControls={false} // 隐藏左侧箭头
          renderCenterRightControls={false} // 自定义右侧按钮
          renderBottomCenterControls={false}
          beforeSlide={this.handleBeforeSlide}
          adaptiveHeight={true}
          slideIndex={current}
          innerRef={this.carouselRef}
        >
          {childrenToRender}
        </CarouselKun>
      </div>
    )
  }

  render() {
    const { dataSource, isMobile, ...props } = this.props
    return (
      <div {...props} {...dataSource.wrapper}>
        <div>
          {/* <OverPack {...dataSource.OverPack}> */}
          {this.getChildrenToRender(dataSource)}
          {/* </OverPack> */}
        </div>
      </div>
    )
  }
}
export default Feature6
