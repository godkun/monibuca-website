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
          children: '正式版'
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
                      <div className="title">Mac(Intel) 系统下载</div>
                      <div className="sub-title">版本: {version}</div>
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
                      立即下载
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
                      <div className="title">Linux(x86) 系统下载</div>
                      <div className="sub-title">版本: {version}</div>
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
                      立即下载
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
                      <div className="title">Windows(x86) 系统下载</div>
                      <div className="sub-title">版本: {version}</div>
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
                      立即下载
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
                      <div className="title">Mac(Apple Silicon) 系统下载</div>
                      <div className="sub-title">版本: {version}</div>
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
                      立即下载
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
                      <div className="title">Linux(arm) 系统下载</div>
                      <div className="sub-title">版本: {version}</div>
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
                      立即下载
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
          children: ' Beta 版'
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
                      <div className="title">Mac(Intel) 系统下载</div>
                      <div className="sub-title">版本: {beta}</div>
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
                      立即下载
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
                    {/* <div className='desc'> <span style={{ color: '#000', fontWeight: 500 }}>Monibuca</span>旨在提供一个对开发者极度友好，兼具高性能的流媒体服务器开发框架，对于想快速入门流媒体开发的公司和个人提供一个低门槛的方案。</div> */}
                    <Space direction="vertical">
                      <div className="title">Linux(x86) 系统下载</div>
                      <div className="sub-title">版本: {beta}</div>
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
                      立即下载
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
                      <div className="title">Windows(x86) 系统下载</div>
                      <div className="sub-title">版本: {beta}</div>
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
                      立即下载
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
                      <div className="title">Mac(Apple Silicon) 系统下载</div>
                      <div className="sub-title">版本: {beta}</div>
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
                      立即下载
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
                      <div className="title">Linux(arm) 系统下载</div>
                      <div className="sub-title">版本: {beta}</div>
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
                      立即下载
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
