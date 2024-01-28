import React from 'react'
import { Outlet } from 'react-router-dom'
import { enquireScreen } from 'enquire-js'
import Header3 from '../components/nav3/index'
import Footer1 from '../components/footer1/index'
import { Nav30DataSource, Footer10DataSource } from '../data/index'

let isMobile

enquireScreen(b => {
  isMobile = b
})

export default class MainLayout extends React.Component {
  constructor() {
    super()
    this.state = {
      isMobile
    }
  }

  render() {
    return (
      <div>
        <Header3
          id="Nav3_0"
          key="Nav3_0"
          dataSource={Nav30DataSource}
          isMobile={this.state.isMobile}
        ></Header3>
        <Outlet></Outlet>
        <Footer1
          id="Footer1_0"
          key="Footer1_0"
          dataSource={Footer10DataSource}
          isMobile={this.state.isMobile}
        />
      </div>
    )
  }
}
