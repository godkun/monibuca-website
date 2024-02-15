import React from 'react'
class Banner extends React.PureComponent {
  render() {
    return (
      <div className="banner10-wrap">
        <div className="banner10 home-page-wrapper">
          <div className="content home-page">
            <div className="title">产品下载</div>
            <div className="desc">
              根据所需要的系统版本进行下载，如需使用 docker 部署，请到首页查看命令
              <span className="version">下载的压缩包里面为编译好的二进制文件，可以直接运行</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner
