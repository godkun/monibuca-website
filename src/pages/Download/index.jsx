/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react'
import { enquireScreen } from 'enquire-js'

import Nav3 from './Nav3'
import Banner10 from './Banner10'
import Feature12 from './Feature12'
import Footer1 from './Footer1'

import {
  Nav30DataSource,
  Feature120DataSource,
  Footer10DataSource
} from './data.source'
import './less/antMotionStyle.less'

let isMobile
enquireScreen((b) => {
  isMobile = b
})

const { location = {} } = typeof window !== 'undefined' ? window : {}

export default class Download extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    }
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b })
    })
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      // setTimeout(() => {
      //   this.setState({
      //     show: true,
      //   })
      // }, 500)
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Nav3
        id="Nav3_0"
        key="Nav3_0"
        dataSource={Nav30DataSource}
        isMobile={this.state.isMobile}
      />,

      <Banner10
        id="Banner10_0"
        key="Banner10_0"
        isMobile={this.state.isMobile}
      />,


      // <Feature6
      //   id="Feature6_0"
      //   key="Feature6_0"
      //   dataSource={Feature60DataSource}
      //   isMobile={this.state.isMobile}
      // />,


      // <Feature4
      //   id="Feature4_0"
      //   key="Feature4_0"
      //   dataSource={Feature40DataSource}
      //   isMobile={this.state.isMobile}
      // />,

      <Feature12
        id="Feature12_0"
        key="Feature12_0"
        dataSource={Feature120DataSource}
        isMobile={this.state.isMobile}
      />,

      // <Feature8
      //   id="Feature8_0"
      //   key="Feature8_0"
      //   dataSource={Feature80DataSource}
      //   isMobile={this.state.isMobile}
      // />,


      // <Content5
      //   id="Content5_0"
      //   key="Content5_0"
      //   dataSource={Content50DataSource}
      //   isMobile={this.state.isMobile}
      // />,

      // <Content4
      //   id="Content4_0"
      //   key="Content4_0"
      //   dataSource={Content40DataSource}
      //   isMobile={this.state.isMobile}
      // />,

      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />
    ]
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    )
  }
}
