import React from 'react'
import { enquireScreen } from 'enquire-js'

import Banner1 from './Banner10'
import Feature14 from './Feature14'

import { Feature140DataSource } from './data.source'
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

      <Feature14
        id="Feature14_0"
        key="Feature14_0"
        dataSource={Feature140DataSource}
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
