import React from 'react'

import { Space, Image, Typography, Popover, Button } from 'antd'
import { enquireScreen } from 'enquire-js'

import Live from './ReactFlowNodes/Live'
import Relay from './ReactFlowNodes/Relay'
import CDN from './ReactFlowNodes/CDN'
import Crypto from './ReactFlowNodes/Crypto'
import Transcode from './ReactFlowNodes/Transcode'
import TimeShift from './ReactFlowNodes/TimeShift'
import Cascade from './ReactFlowNodes/Cascade'
import Voice from './ReactFlowNodes/Voice'
import Meet from './ReactFlowNodes/Meet'
import Other from './ReactFlowNodes/Other'
const { Text } = Typography

let isMobile
enquireScreen(b => {
  isMobile = b
})

export const Banner10DataSource = {
  wrapper: { className: 'banner1' },
  defaultPreset: 'live',
  presets: {
    live: {
      acceptPush: {
        enabled: true,
        port: 'tcp:1935'
      }
    },
    custom: {}
  }
}
export const Banner20DataSource = {
  wrapper: { className: 'banner2' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        page: { className: 'home-page banner2-page' },
        textWrapper: {
          className: 'banner2-text-wrapper',
          style: isMobile ? {} : { backdropFilter: 'blur(10px)', width: 500 }
        },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner2-title',
          children: 'Open-source Go language streaming media server development framework'
        },
        content: {
          className: 'banner2-version',
          children: (
            <Text copyable code style={{ color: '#fff', textWrap: 'wrap', fontSize: '20px' }}>
              docker run -id -p 1935:1935 -p 8080:8080 -p 8443:8443 -p 554:554 -p 58200:58200 -p
              5060:5060/udp -p 8000:8000/udp -p 9000:9000 monibuca/monibuca:latest
            </Text>
          ),
          style: isMobile
            ? { marginTop: 300 }
            : { background: 'black', color: 'white', borderRadius: 5, padding: 10 },
          onClick: () => {
            // window.open('https://mp.weixin.qq.com/s/wXNSoMl6H6Wp9Sz2xzaxuw')
          }
        },
        kun: {
          className: 'banner2-content',
          children:
            'Easy to fork, code is simple, plugin is rich, low latency, strong performance, easy to deploy, ecological construction, win-win cooperation'
        },
        button: {
          className: 'banner2-button',
          children: 'Community Edition',
          style: isMobile ? { width: '40vw', background: '#263036' } : { background: '#263036' },
          onClick: () => {
            window.open('https://github.com/monibuca/monibuca')
          }
        },
        button2: {
          className: 'banner2-button',
          children: 'Professional Edition',
          style: isMobile ? { width: '40vw', background: '#5A00FF' } : { background: '#5A00FF' },
          onClick: () => {
            window.open('https://github.com/Monibuca/pro')
          }
        }
      }
    ]
  }
}

export const Content40DataSource = {
  wrapper: { className: 'home-page-wrapper content4-wrapper' },
  page: { className: 'home-page content4' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    children: [
      {
        name: 'title',
        children: 'Our Partners',
        className: 'title-h1'
      }
    ]
  },
  video: {
    className: 'content4-video',
    children: {}
  }
}

export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: 'home-page' },
  titleWrapper: {
    className: 'content5-title-wrapper',
    children: [
      { name: 'title', children: 'Satisfying various industry needs', className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <div>
            As of now, Monibuca has provided video surveillance, real-time monitoring, emergency
            command, meetings, factory safety production, smart agriculture, driving license
            monitoring, substation video monitoring, security video network scene, CDN, reverse
            proxy, AI for more than 100 enterprises.
          </div>
        )
      }
    ]
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: {
            className: 'content5-block-content',
            href: 'https://mp.weixin.qq.com/s/65_VOhDgjlty2MXZ-ZOZ3g',
            target: '_blank'
          },
          img: {
            children: '/kehu/hang-tian.png'
          },
          content: {
            children: (
              <div className="box">
                <div className="title">
                  Monibuca Client Case - Hangtian Technology Holding Group
                </div>
                <div className="desc">
                  The business focuses on aerospace applications, IoT, automotive electronics, and
                  pursues a business layout of one horizontal and three verticals to promote
                  industrial development.
                </div>
              </div>
            )
          }
        }
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: {
            className: 'content5-block-content',
            href: 'https://mp.weixin.qq.com/s/g7Ye6dRo1EZA8trNphaSmg',
            target: '_blank'
          },
          img: {
            children: '/kehu/yu-ji.png'
          },
          content: {
            children: (
              <div className="box">
                <div className="title">Monibuca Client Case - Xiamen Yuji Digital Technology</div>
                <div className="desc">
                  The team is committed to providing comprehensive services for the power, building,
                  civil engineering, education, and transportation industries in all stages of life.
                </div>
              </div>
            )
          }
        }
      },

      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: {
            className: 'content5-block-content',
            href: 'https://mp.weixin.qq.com/s/WCS6y9nc3CRYWhp56efB8A',
            target: '_blank'
          },
          img: {
            children: '/kehu/dian.png'
          },
          content: {
            children: (
              <div className="box">
                <div className="title">Monibuca Client Case - Power Service</div>
                <div className="desc">
                  Electrical digitalization, building an IOT platform, relying on the excellent
                  architecture design and fast community response efficiency of M7S, and supporting
                  all mainstream protocols.
                </div>
              </div>
            )
          }
        }
      },

      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: {
            className: 'content5-block-content',
            href: 'https://mp.weixin.qq.com/s/_o2U23FszOJ_Xn5PhN0pjA',
            target: '_blank'
          },
          img: {
            children: '/kehu/guang-xi.png'
          },
          content: {
            children: (
              <div className="box">
                <div className="title">Monibuca Client Case - Guangxi Computing Center</div>
                <div className="desc">
                  It is mainly aimed at solving the problem of dispersed high-speed road monitoring
                  devices being unified and managed, and building a video monitoring management
                  platform.
                </div>
              </div>
            )
          }
        }
      },
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: {
            className: 'content5-block-content',
            href: 'https://mp.weixin.qq.com/s/4U-myuuhJ-ZXxPxLP_6aNw',
            target: '_blank'
          },
          img: {
            children: '/kehu/tan-tan.png'
          },
          content: {
            children: (
              <div className="box">
                <div className="title">Monibuca Client Case - Tantan Technology</div>
                <div className="desc">
                  A team focused on doing video AI algorithm projects, from video aggregation and
                  access to video AIOT platform development, all business fields are involved.
                </div>
              </div>
            )
          }
        }
      }
    ]
  }
}

export const Feature40DataSource = {
  wrapper: { className: 'home-page-wrapper feature4-wrapper feature4' },
  page: { className: 'home-page feature4' },
  // OverPack: { className: 'home-page feature4', playScale: 0.3 },
  tabs: {
    className: 'feature4-content',
    wrapper: { className: 'feature4-content-wrapper' },

    titleWrapper: {
      className: 'feature4-title-wrapper',
      children: [{ name: 'title', children: 'Use Cases', className: 'title-h1' }],
      barWrapper: {
        className: 'feature4-title-bar-wrapper',
        children: {
          className: 'feature4-title-bar'
        }
      }
    },

    children: [
      {
        title: 'Live Streaming',
        children: Live
      },
      {
        title: 'Relay Streaming',
        children: Relay
      },
      {
        title: 'CDN',
        children: CDN
      },
      {
        title: 'Crypto',
        children: Crypto
      },
      {
        title: 'Transcoding',
        children: Transcode
      },
      {
        title: 'Time Shifting',
        children: TimeShift
      },
      {
        title: 'Cascading',
        children: Cascade
      },
      {
        title: 'Voice Intercom',
        children: Voice
      },
      {
        title: 'Video Conferencing',
        children: Meet
      },
      {
        title: 'Other Features',
        children: Other
      }
    ]
  }
}

export const Feature80DataSource = {
  zhan: { className: 'feature8-zhan' },
  wrapper: { className: 'home-page-wrapper feature8-wrapper' },
  OverPack: { className: 'feature8', playScale: 0.3 },
  Carousel: {
    className: 'feature8-content',
    dots: false,
    wrapper: { className: 'feature8-content-wrapper' },

    titleWrapper: {
      className: 'feature8-title-wrapper',
      children: [{ name: 'title', children: 'Powerful Management Tools', className: 'title-h1' }],
      barWrapper: {
        className: 'feature8-title-bar-wrapper',
        children: {
          className: 'feature8-title-bar'
        }
      }
    },

    children: [
      {
        title: { className: 'feature8-title-text', children: 'Admin' },
        className: 'feature8-item',
        name: 'block2',
        children: [
          {
            md: 24,
            xs: 24,
            children: {
              className: 'feature8-text',
              children: (
                <Space direction="vertical">
                  <Image
                    className="img-box"
                    preview={false}
                    width={!isMobile ? 900 : 300}
                    height={!isMobile ? 599 : 200}
                    src="/img/admin.png"
                  />
                  <div className="desc">
                    Note: Admin provides a visual UI interface for m7s pro version (including paid
                    plugins)
                  </div>
                  <Space size="large">
                    <div
                      className="btn1"
                      onClick={() => {
                        window.open('https://test.monibuca.com/ui')
                      }}
                    >
                      Try Online
                    </div>
                    <div
                      className="btn2"
                      onClick={() => {
                        window.open('https://github.com/Monibuca/pro')
                      }}
                    >
                      Github
                    </div>
                  </Space>
                </Space>
              )
            }
          }
        ]
      },
      {
        title: { className: 'feature8-title-text', children: 'Console' },
        className: 'feature8-item',
        name: 'block1',
        children: [
          {
            md: 24,
            xs: 24,
            children: {
              className: 'feature8-text',
              children: (
                <Space direction="vertical">
                  <Image
                    className="img-box"
                    preview={false}
                    width={!isMobile ? 900 : 300}
                    height={!isMobile ? 599 : 200}
                    src="/img/console.png"
                  />
                  <div className="desc">
                    Note: Console provides a visual management dashboard for m7s instances,
                    supporting multi-instance management. Please view the online version and Docker
                    deployment, we also provide downloads for Windows and Mac (arm64) systems.
                  </div>
                  <Space size="large">
                    <div
                      className="btn1"
                      onClick={() => {
                        window.open('https://console.monibuca.com')
                      }}
                    >
                      Use Online Version
                    </div>
                    <div
                      className="btn2"
                      onClick={() => {
                        window.open(
                          'https://mp.weixin.qq.com/s?__biz=MzkyMDQ5Nzg5MQ==&mid=2247483848&idx=1&sn=b0908a8387ad10beef92323f0722dad7&chksm=c190ba44f6e7335227003e949412b0406e0f0696ffad79234c186e87c3f28bd4975aad0dfb19&scene=178&cur_album_id=2996567829959376897#rd'
                        )
                      }}
                    >
                      Docker Deployment
                    </div>
                  </Space>
                  <Space
                    style={{ marginTop: '36px' }}
                    direction={isMobile ? 'vertical' : 'horizontal'}
                  >
                    <Space direction="vertical" className="item">
                      <Space className="item-wrap">
                        <Space direction="vertical">
                          <div className="title">Mac(arm64) System Download</div>
                          <div className="sub-title">
                            System Requirements: Please refer to the installation guide
                          </div>
                        </Space>
                        <img className="img" src="/img/ic_mac.png" alt="" />
                      </Space>
                      <Space direction="vertical" align="start">
                        <Button
                          type="primary"
                          onClick={() => {
                            window.open('https://download.m7s.live/bin/console_mac.zip?v=0.1.20')
                          }}
                        >
                          Download Now
                        </Button>
                      </Space>
                    </Space>
                    <Space direction="vertical" className="item">
                      <Space className="item-wrap">
                        <Space direction="vertical">
                          <div className="title">Windows Version Download</div>
                          <div className="sub-title">Windows 10 and above systems available</div>
                        </Space>
                        <img className="img" src="/img/ic_windows.png" alt="" />
                      </Space>
                      <Space direction="vertical" align="start">
                        <Button
                          type="primary"
                          onClick={() => {
                            window.open(
                              'https://download.m7s.live/bin/console_windows_amd64.zip?v=0.1.20'
                            )
                          }}
                        >
                          Download Now
                        </Button>
                      </Space>
                    </Space>
                  </Space>
                </Space>
              )
            }
          }
        ]
      },
      {
        title: { className: 'feature8-title-text', children: 'API Debugging Tool' },
        className: 'feature8-item',
        name: 'block0',
        children: [
          {
            md: 24,
            xs: 24,
            children: {
              className: 'feature8-text',
              children: (
                <Space direction="vertical">
                  <Image
                    className="img-box"
                    preview={false}
                    width={!isMobile ? 900 : 300}
                    height={!isMobile ? 599 : 200}
                    src="/img/api.png"
                  />
                  <div className="desc">
                    Note: The trial version includes all the global interfaces, but not the plugin
                    interfaces. To get the complete version, move the mouse over the donation
                    button, sponsor 99 yuan, and send the screenshot to the private message of the
                    WeChat official account "Monibuca Technology". We will send the complete version
                    to you.
                  </div>
                  <Space size="large">
                    <Popover
                      content={
                        <Space>
                          <div style={{ marginRight: '20px' }}>
                            <img src="/img/wx-pay.jpg" alt="" height={250} />
                          </div>
                          <div>
                            <img src="/img/zf-pay.jpg" alt="" height={250} />
                          </div>
                        </Space>
                      }
                    >
                      <div className="btn1">
                        <img
                          src="/svg/ic_QR code.svg"
                          alt=""
                          width={24}
                          style={{ marginRight: '9px' }}
                        />
                        Donate 99 Yuan
                      </div>
                    </Popover>
                    <div
                      className="btn2"
                      onClick={() => {
                        window.open(
                          'https://apifox.com/apidoc/shared-53418b09-8f45-49e5-94e3-1b93870b304f'
                        )
                      }}
                    >
                      Try Now
                    </div>
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
