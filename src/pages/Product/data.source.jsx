import { Button, Space } from 'antd'

export const Feature110DataSource = {
  wrapper: { className: 'home-page-wrapper Feature11-wrapper' },
  page: { className: 'home-page Feature11' },
  Carousel: {
    className: 'Feature11-content',
    dots: false,
    wrapper: { className: 'Feature11-content-wrapper' },
    titleWrapper: {
      className: 'Feature11-title-wrapper',
      children: [],
      barWrapper: {
        className: 'Feature11-title-bar-wrapper',
        children: {
          className: 'Feature11-title-bar'
        }
      }
    },

    children: [
      {
        title: {
          className: 'Feature11-title-text',
          children: ''
        },
        className: 'Feature11-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature11-text',
              children: (
                <Space className="item" direction="vertical">
                  <div className="imgbox">
                    <div className="imgbox-t1">Monibuca</div>
                    <div className="imgbox-t2">
                      Open-source Go language streaming media server development framework
                    </div>
                    <img alt="" className="imgbox-img" src="/img/m-icon.png" />
                  </div>
                  <Space direction="vertical" align="start">
                    <div className="desc">
                      {' '}
                      <span style={{ color: '#000', fontWeight: 500 }}>Monibuca</span>
                      aims to provide a highly developer-friendly and high-performance streaming
                      media server development framework, offering a low-barrier solution for those
                      who want to quickly get started in streaming media development.
                    </div>
                    <Button
                      type="primary"
                      onClick={() => {
                        window.open(`https://monibuca.com`)
                      }}
                    >
                      View Details
                    </Button>
                  </Space>
                </Space>
              )
            }
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature11-text',
              children: (
                <Space className="item" direction="vertical">
                  <div className="imgbox">
                    <div className="imgbox-t1">Jessibuca</div>
                    <div className="imgbox-t2">Pure H5 live stream player</div>
                    <img alt="" className="imgbox-img" src="/img/m-icon.png" />
                  </div>
                  <Space direction="vertical" align="start">
                    <div className="desc">
                      <span style={{ color: '#000', fontWeight: 500 }}>Jessibuca</span>
                      is a pure Web (H5) live stream player. It is compatible with almost all Web
                      transmission protocol formats and the mainstream audio and video coding
                      formats. It has low latency, high performance, and strong compatibility.
                    </div>
                    <Button
                      type="primary"
                      onClick={() => {
                        window.open(`https://jessibuca.com`)
                      }}
                    >
                      View Details
                    </Button>
                  </Space>
                </Space>
              )
            }
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature11-text',
              children: (
                <Space className="item" direction="vertical">
                  <div className="imgbox">
                    <div className="imgbox-t1">Rebebuca</div>
                    <div className="imgbox-t2">Rust desktop FFMPEG manager</div>
                    <img alt="" className="imgbox-img" src="/img/m-icon.png" />
                  </div>
                  <Space direction="vertical" align="start">
                    <div className="desc">
                      <span style={{ color: '#000', fontWeight: 500 }}>Rebebuca</span>
                      is a Rust-developed desktop ffmpeg manager. It can help us better manage a
                      large number of complex ffmpeg parameters and ffmpeg command running status.
                    </div>
                    <Button
                      type="primary"
                      onClick={() => {
                        window.open(`https://rebebuca.com`)
                      }}
                    >
                      View Details
                    </Button>
                  </Space>
                </Space>
              )
            }
          }
        ]
      }
    ]
  }
}
