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
          children: '开源Go语言流媒体服务器开发框架'
        },
        content: {
          className: 'banner2-version',
          children: (
            <Text copyable code style={{ color: '#fff', textWrap: 'wrap', fontSize: '20px' }}>
              docker run -id -p 1935:1935 -p 8080:8080 -p 8443:8443 -p 554:554 -p 58200:58200 -p
              5060:5060/udp -p 8000:8000/udp -p 9000:9000 langhuihui/monibuca:latest
            </Text>
          ),
          style: isMobile
            ? { marginTop: 300 }
            : { background: 'black', color: 'white', borderRadius: 5, padding: 10 },
          onClick: () => {}
        },
        kun: {
          className: 'banner2-content',
          children: '二开友好、代码简洁、插件丰富、延迟极低、性能强悍、部署方便、生态共建、合作共赢'
        },
        button: {
          className: 'banner2-button',
          children: '社区版',
          style: isMobile ? { width: '40vw', background: '#263036' } : { background: '#263036' },
          onClick: () => {
            window.open('https://github.com/langhuihui/monibuca')
          }
        },
        button2: {
          className: 'banner2-button',
          children: '专业版',
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
        children: '我们的合作伙伴',
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
      { name: 'title', children: '满足多种行业需求', className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <div>
            截止目前已经为上百家企业, <br />
            提供路测 、实时监控 、应急指挥、 会议 、工厂安全生产 、智慧农业 、
            <br />
            驾考监控 、 变电站视频监测、安防视频联网场景 、 CDN 、 反向代理 、 AI
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
                <div className="title">Monibuca 客户案例—航天科技控股集团</div>
                <div className="desc">
                  业务聚焦航天应用、物联网、汽车电子围绕一横三纵的业务布局推动产业发展
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
                <div className="title">Monibuca 客户案例—厦门宇基数字科技</div>
                <div className="desc">
                  团队致力于为电力、建筑、市政、教育、交通等行业提供全方位、全生命周期的一体化综合服务
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
            children: '/kehu/dian-li.png'
          },
          content: {
            children: (
              <div className="box">
                <div className="title">Monibuca 客户案例—电力服务</div>
                <div className="desc">
                  电气数字化，构建 IOT 平台，依托于 M7S
                  优秀的架构设计，和快速的社区解答效率，并且支持所有主流协议
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
                <div className="title">Monibuca 客户案例—广西计算中心</div>
                <div className="desc">
                  主要以解决分散的高速公路监控设备进行统一接入，实现集中管理为目的，构建视频监控管理平台
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
                <div className="title">Monibuca 客户案例—坦坦科技</div>
                <div className="desc">
                  一个专注于做视频 AI 算法项目的团队，从视频汇聚接入、到视频 AIOT
                  平台开发等业务领域都有涉及
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
  tabs: {
    className: 'feature4-content',
    wrapper: { className: 'feature4-content-wrapper' },

    titleWrapper: {
      className: 'feature4-title-wrapper',
      children: [{ name: 'title', children: '使用场景', className: 'title-h1' }],
      barWrapper: {
        className: 'feature4-title-bar-wrapper',
        children: {
          className: 'feature4-title-bar'
        }
      }
    },

    children: [
      {
        title: '推流直播',
        children: Live
      },
      {
        title: '拉流转播',
        children: Relay
      },
      {
        title: '转推',
        children: CDN
      },
      {
        title: '加密',
        children: Crypto
      },
      {
        title: '转码',
        children: Transcode
      },
      {
        title: '时移',
        children: TimeShift
      },
      {
        title: '级联',
        children: Cascade
      },
      {
        title: '语音对讲',
        children: Voice
      },
      {
        title: '视频会议',
        children: Meet
      },
      {
        title: '其他功能',
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
      children: [{ name: 'title', children: '高效的管理工具', className: 'title-h1' }],
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
                    说明：Admin 为 m7s pro版（包含付费插件） 提供可视化 UI 界面
                  </div>
                  <Space size="large">
                    <div
                      className="btn1"
                      onClick={() => {
                        window.open('https://test.monibuca.com/ui')
                      }}
                    >
                      在线体验
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
                    说明：Console 提供了对m7s实例的可视化管理后台的能力，支持多实例管理。
                    请查看在线版本和 Docker 部署,我们还提供了 windows 版本下载 和 Mac (arm64) 下载
                  </div>
                  <Space size="large">
                    <div
                      className="btn1"
                      onClick={() => {
                        window.open('https://console.monibuca.com')
                      }}
                    >
                      使用在线版本
                    </div>
                    <div
                      className="btn2"
                      onClick={() => {
                        window.open(
                          'https://mp.weixin.qq.com/s?__biz=MzkyMDQ5Nzg5MQ==&mid=2247483848&idx=1&sn=b0908a8387ad10beef92323f0722dad7&chksm=c190ba44f6e7335227003e949412b0406e0f0696ffad79234c186e87c3f28bd4975aad0dfb19&scene=178&cur_album_id=2996567829959376897#rd'
                        )
                      }}
                    >
                      Docker部署
                    </div>
                  </Space>
                  <Space
                    style={{ marginTop: '36px' }}
                    direction={isMobile ? 'vertical' : 'horizontal'}
                  >
                    <Space direction="vertical" className="item">
                      <Space className="item-wrap">
                        <Space direction="vertical">
                          <div className="title">Mac(arm64) 系统下载</div>
                          <div className="sub-title">系统版本: 请查看安装教程</div>
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
                          立即下载
                        </Button>
                      </Space>
                    </Space>
                    <Space direction="vertical" className="item">
                      <Space className="item-wrap">
                        <Space direction="vertical">
                          <div className="title">Windows版下载</div>
                          <div className="sub-title">Windows 10 及以上系统可用</div>
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
                          立即下载
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
        title: { className: 'feature8-title-text', children: 'API调试工具' },
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
                    说明：体验版包括 global 下的所有接口，但不包括插件接口，
                    获取完整版步骤：鼠标移到赞赏按钮上，赞助 99 元，将 【 截图 】
                    发送到【不卡科技公众号 私信】，我们将发送完整版给您。
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
                        赞赏 99 元
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
                      立即体验
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
