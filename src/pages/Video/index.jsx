/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react'
import { enquireScreen } from 'enquire-js'

import Banner1 from './Banner1'
import Feature10 from './Feature10'

import { Feature100DataSource } from './data.source'
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
      <Banner1 id="Banner1_0" key="Banner1_0" isMobile={this.state.isMobile} />,

      <Feature10
        id="Feature10_0"
        key="Feature10_0"
        dataSource={Feature100DataSource}
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
