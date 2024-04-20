import React from 'react'
import { enquireScreen } from 'enquire-js'
import Banner2 from './Banner2'
import Content4 from './Content4'
import Content5 from './Content5'
import Feature4 from './Feature4'
import Feature8 from './Feature8'

import {
  Banner20DataSource,
  Content40DataSource,
  Content50DataSource,
  Feature40DataSource,
  Feature80DataSource
} from './data.source'
import './less/antMotionStyle.less'

let isMobile
enquireScreen(b => {
  isMobile = b
})

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile
    }
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen(b => {
      this.setState({ isMobile: !!b })
    })
  }

  render() {
    const children = [
      <Banner2
        id="Banner2_0"
        key="Banner2_0"
        dataSource={Banner20DataSource}
        isMobile={this.state.isMobile}
      />,

      <Feature4
        id="Feature4_0"
        key="Feature4_0"
        dataSource={Feature40DataSource}
        isMobile={this.state.isMobile}
      />,

      <Feature8
        id="Feature8_0"
        key="Feature8_0"
        dataSource={Feature80DataSource}
        isMobile={this.state.isMobile}
      />,

      <Content5
        id="Content5_0"
        key="Content5_0"
        dataSource={Content50DataSource}
        isMobile={this.state.isMobile}
      />,

      <Content4
        id="Content4_0"
        key="Content4_0"
        dataSource={Content40DataSource}
        isMobile={this.state.isMobile}
      />
    ]
    return (
      <div
        className="templates-wrapper"
        ref={d => {
          this.dom = d
        }}
      >
        {children}
      </div>
    )
  }
}
