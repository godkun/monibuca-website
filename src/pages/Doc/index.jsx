/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react'
import { enquireScreen } from 'enquire-js'

import Banner1 from './Banner10'
import Feature11 from './Feature11'

import { Feature110DataSource } from './data.source'
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
    enquireScreen(b => {
      this.setState({ isMobile: !!b })
    })
  }

  render() {
    const children = [
      <Banner1 id="Banner1_0" key="Banner1_0" isMobile={this.state.isMobile} />,

      <Feature11
        id="Feature11_0"
        key="Feature11_0"
        dataSource={Feature110DataSource}
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
