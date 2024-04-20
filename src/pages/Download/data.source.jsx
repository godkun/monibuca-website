import React from 'react'

import { Button, Space } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

const version = 'v4.7.4'
const beta = 'v4.7.5-beta02111031'
export const Feature120DataSource = {
  wrapper: { className: 'home-page-wrapper Feature12-wrapper' },
  page: { className: 'home-page Feature12' },
  Carousel: {
    className: 'Feature12-content',
    dots: false,
    wrapper: { className: 'Feature12-content-wrapper' },
    titleWrapper: {
      className: 'Feature12-title-wrapper',
      children: [],
      barWrapper: {
        className: 'Feature12-title-bar-wrapper',
        children: {
          className: 'Feature12-title-bar'
        }
      }
    },

    children: [
      {
        title: {
          className: 'Feature12-title-text',
          children: 'Official Version'
        },
        className: 'Feature12-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    <Space direction="vertical">
                      <div className="title">Mac(Intel) System Download</div>
                      <div className="sub-title">Version: {version}</div>
                    </Space>
                    <img className="img" src="/img/ic_mac.png" alt="" />
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button
                      icon={<DownloadOutlined />}
                      type="primary"
                      onClick={() => {
                        window.open('https://download.m7s.live/bin/m7s_darwin_amd64.tar.gz')
                      }}
                    >
                      Download Now
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
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    <Space direction="vertical">
                      <div className="title">Linux(x86) System Download</div>
                      <div className="sub-title">Version: {version}</div>
                    </Space>
                    <img className="img" src="/img/ic_linux.png" alt="" />
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button
                      icon={<DownloadOutlined />}
                      type="primary"
                      onClick={() => {
                        window.open('https://download.m7s.live/bin/m7s_linux_amd64.tar.gz')
                      }}
                    >
                      Download Now
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
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    <Space direction="vertical">
                      <div className="title">Windows(x86) System Download</div>
                      <div className="sub-title">Version: {version}</div>
                    </Space>
                    <img className="img" src="/img/ic_windows.png" alt="" />
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button
                      type="primary"
                      icon={<DownloadOutlined />}
                      onClick={() => {
                        window.open('https://download.m7s.live/bin/m7s_windows_amd64.tar.gz')
                      }}
                    >
                      Download Now
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
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    <Space direction="vertical">
                      <div className="title">Mac(Apple Silicon) System Download</div>
                      <div className="sub-title">Version: {version}</div>
                    </Space>
                    <img className="img" src="/img/ic_mac.png" alt="" />
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button
                      type="primary"
                      icon={<DownloadOutlined />}
                      onClick={() => {
                        window.open('https://download.m7s.live/bin/m7s_darwin_arm64.tar.gz')
                      }}
                    >
                      Download Now
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
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    <Space direction="vertical">
                      <div className="title">Linux(arm) System Download</div>
                      <div className="sub-title">Version: {version}</div>
                    </Space>
                    <img className="img" src="/img/ic_linux.png" alt="" />
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button
                      type="primary"
                      icon={<DownloadOutlined />}
                      onClick={() => {
                        window.open('https://download.m7s.live/bin/m7s_linux_arm64.tar.gz')
                      }}
                    >
                      Download Now
                    </Button>
                  </Space>
                </Space>
              )
            }
          }
        ]
      },
      {
        title: {
          className: 'Feature12-title-text',
          children: 'Beta Version'
        },
        className: 'Feature12-item',
        name: 'block1',
        children: [
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    <Space direction="vertical">
                      <div className="title">Mac(Intel) System Download</div>
                      <div className="sub-title">Version: {beta}</div>
                    </Space>
                    <img className="img" src="/img/ic_mac.png" alt="" />
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button
                      icon={<DownloadOutlined />}
                      type="primary"
                      onClick={() => {
                        window.open('https://download.m7s.live/beta/m7s_darwin_amd64.tar.gz')
                      }}
                    >
                      Download Now
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
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    <Space direction="vertical">
                      <div className="title">Linux(x86) System Download</div>
                      <div className="sub-title">Version: {beta}</div>
                    </Space>
                    <img className="img" src="/img/ic_linux.png" alt="" />
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button
                      icon={<DownloadOutlined />}
                      type="primary"
                      onClick={() => {
                        window.open('https://download.m7s.live/beta/m7s_linux_amd64.tar.gz')
                      }}
                    >
                      Download Now
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
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    <Space direction="vertical">
                      <div className="title">Windows(x86) System Download</div>
                      <div className="sub-title">Version: {beta}</div>
                    </Space>
                    <img className="img" src="/img/ic_windows.png" alt="" />
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button
                      type="primary"
                      icon={<DownloadOutlined />}
                      onClick={() => {
                        window.open('https://download.m7s.live/beta/m7s_windows_amd64.tar.gz')
                      }}
                    >
                      Download Now
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
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    <Space direction="vertical">
                      <div className="title">Mac(Apple Silicon) System Download</div>
                      <div className="sub-title">Version: {beta}</div>
                    </Space>
                    <img className="img" src="/img/ic_mac.png" alt="" />
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button
                      type="primary"
                      icon={<DownloadOutlined />}
                      onClick={() => {
                        window.open('https://download.m7s.live/beta/m7s_darwin_arm64.tar.gz')
                      }}
                    >
                      Download Now
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
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    <Space direction="vertical">
                      <div className="title">Linux(arm) System Download</div>
                      <div className="sub-title">Version: {beta}</div>
                    </Space>
                    <img className="img" src="/img/ic_linux.png" alt="" />
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button
                      type="primary"
                      icon={<DownloadOutlined />}
                      onClick={() => {
                        window.open('https://download.m7s.live/beta/m7s_linux_arm64.tar.gz')
                      }}
                    >
                      Download Now
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
