import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Carousel as AntCarousel, Row, Col, Space, Image } from 'antd';
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';

import { getChildrenToRender as kunRender } from './utils';


TweenOne.plugins.push(Children);

class Feature11 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
    this.state = {
      current: 0,
    };
  }

  onTitleClick = (_, i) => {
    const carouselRef = this.carouselRef.current.childRefs.carousel;
    carouselRef.goTo(i);
  };

  onBeforeChange = (_, newIndex) => {
    this.setState({
      current: newIndex,
    });
  };

  getChildrenToRender = (dataSource) => {
    const { current } = this.state;
    const { Carousel } = dataSource;
    const {
      titleWrapper,
      children: childWrapper,
      wrapper,
      ...carouselProps
    } = Carousel;

    const {
      barWrapper,
      title: titleChild,
      ...titleWrapperProps
    } = titleWrapper;
    const titleToRender = [];

    const childrenToRender = childWrapper.map((item, ii) => {
      const { title, children, ...itemProps } = item;
      titleToRender.push(
        <div
          {...title}
          key={ii.toString()}
          onClick={(e) => {
            this.onTitleClick(e, ii);
          }}
          className={
            ii === current ? `${title.className || ''} active` : title.className
          }
        >
          {title.children}
        </div>
      );
      const childrenItem = children.map(($item, i) => {
        const { number, children: child, ...childProps } = $item;
        return (
          <Col {...childProps} key={i.toString()}>
            <p {...child}>{child.children}</p>
          </Col>
        );
      });
      return (
        <div key={ii.toString()}>
          <QueueAnim type="bottom" component={Row} {...itemProps}>
            {childrenItem}
          </QueueAnim>
        </div>
      );
    });

    const width = 100 / childrenToRender.length;
    return (
      <QueueAnim
        key="queue"
        leaveReverse
        type="bottom"
        delay={[0, 100]}
        {...wrapper}
        ref={this.carouselRef}
      >
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
                left: `${width * current}%`,
              }}
            >
              <em {...barWrapper.children} />
            </div>
          </div>
        </div>
        <AntCarousel
          {...carouselProps}
          key="carousel"
          infinite={false}
          beforeChange={this.onBeforeChange}
        >
          {childrenToRender}
        </AntCarousel>
      </QueueAnim>
    );
  };

  render() {
    const { dataSource, isMobile, ...props } = this.props;
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          {/* <div className='Feature11-video-title'>
            {!isMobile && <Row>
              <Col span={8} className='left'>
                <Space direction='vertical'>
                  <div className='left-title'>Monibuca的架构演进</div>
                  <div className='left-title-sub bj'>背景描述</div>
                  <div className='left-desc'>Monibuca为了在扩展性上面做足功夫，在较短时间内进行了多次大版本迭代，每一次都重构了核心，很多用户还不能理解这中间发生了哪些变化，以及是否应该升级到最新版本。</div>
                  <div className='left-title-sub dg'>内容大纲</div>
                  <div className='left-desc'>1、简单介绍Monibuca的特点以及如何解决行业痛点。</div>
                  <div className='left-desc'>2、重点揭示了Monibuca从1.0到4.0中间经过怎样的架构的演变，使得Monibuca的老用户理解升级到4.0的必要性。</div>
                  <div className='left-desc'>3、聊一下关于升级开源项目架构遇到的挑战</div>
                </Space>
              </Col>
              <Col span={16}>
                <Image
                preview={false}
                src="/video-1.png"
                >
                </Image>
              </Col>
            </Row>}
            {isMobile && <Row>
              <Col span={24} className='left'>
                <Space direction='vertical'>
                  <div className='left-title'>Monibuca的架构演进</div>
                  <div className='left-title-sub bj'>背景描述</div>
                  <div className='left-desc'>Monibuca为了在扩展性上面做足功夫，在较短时间内进行了多次大版本迭代，每一次都重构了核心，很多用户还不能理解这中间发生了哪些变化，以及是否应该升级到最新版本。</div>
                  <div className='left-title-sub dg'>内容大纲</div>
                  <div className='left-desc'>1、简单介绍Monibuca的特点以及如何解决行业痛点。</div>
                  <div className='left-desc'>2、重点揭示了Monibuca从1.0到4.0中间经过怎样的架构的演变，使得Monibuca的老用户理解升级到4.0的必要性。</div>
                  <div className='left-desc'>3、聊一下关于升级开源项目架构遇到的挑战</div>
                </Space>
              </Col>
              <Col span={24}>
                <Image
                preview={false}
                src="/video-1.png"
                >
                </Image>
              </Col>
            </Row>}
          </div> */}
          {/* <OverPack {...dataSource.OverPack}>
            {this.getChildrenToRender(dataSource)}
          </OverPack> */}
          {this.getChildrenToRender(dataSource)}
        </div>
      </div>
    );
  }
}
export default Feature11;
