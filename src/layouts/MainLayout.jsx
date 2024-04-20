/**
 * MainLayout is the main layout component that renders the header, footer and content
 * based on the current screen.
 */

import React from 'react'
import { Outlet } from 'react-router-dom'
import { enquireScreen } from 'enquire-js'
import Header3 from '@/components/nav/index'
import Footer1 from '@/components/footer/index'
import { Footer10DataSource } from '@/components/footer/data.source'
import { Nav30DataSource } from '@/components/nav/data.source'

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

  /**
   * Renders the layout with the header, footer and content.
   * @return {JSX} The layout component.
   */
  render() {
    return (
      <div>
        {/* 头部区域 */}
        <Header3
          id="Nav3_0"
          key="Nav3_0"
          dataSource={Nav30DataSource}
          isMobile={this.state.isMobile}
        ></Header3>

        <Outlet></Outlet>
        {/* 底部区域 */}
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
