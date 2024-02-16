import React from 'react'
import { Button, Space } from 'antd'
import { DownOutlined, GithubOutlined } from '@ant-design/icons'

const BgElement = Element.BgElement
class Banner extends React.PureComponent {
  render() {
    return (
      <div className="banner10-wrap">
        <div className="banner10 home-page-wrapper">
          <div className="content home-page">
            <div className="title">关于我们</div>
            <div className="desc">
              如果您有二次开发能力，欢迎加入我们，共同打造令人惊叹的产品。
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner
