/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react'
import { enquireScreen } from 'enquire-js'

import Banner10 from './Banner10'
import Feature13 from './Feature13'

import {
  Feature130DataSource,
} from './data.source'
import './less/antMotionStyle.less'

let isMobile
enquireScreen((b) => {
  isMobile = b
})

export default class Download extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile,
    }
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b })
    })
  }

  render() {
    const children = [
      <Banner10
        id="Banner10_0"
        key="Banner10_0"
        isMobile={this.state.isMobile}
      />,

      <Feature13
        id="Feature13_0"
        key="Feature13_0"
        dataSource={Feature130DataSource}
        isMobile={this.state.isMobile}
      />,
    ]
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d
        }}
      >
        {children}
      </div>
    )
  }
}
