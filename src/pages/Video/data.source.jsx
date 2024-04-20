import { Space, Image } from 'antd'

const videoData = [
  {
    bannerTitle: 'Start from Zero',
    title: 'Start from Zero m7s V4',
    desc: 'This video explains how to create a go project from scratch and introduce the m7s engine without any plugins.',
    createdDate: '2022-3-4',
    url: 'https://www.bilibili.com/video/BV1iq4y147N4/?spm_id_from=333.999.0.0',
    pv: 8092
  },
  {
    bannerTitle: 'Plugin Import',
    title: 'm7s V4 - Plugin Import',
    desc: 'Demonstration of how to import the rtmp and hdl plugins in m7s v4 version, and the points to be noted.',
    createdDate: '2022-3-5',
    url: 'https://www.bilibili.com/video/BV1sP4y1g7BF/?spm_id_from=333.999.0.0',
    pv: 3978
  },
  {
    bannerTitle: 'Pull Streaming',
    title: 'm7s v4 - Pull Streaming',
    desc: 'Demonstration of how to pull streaming from a remote source in m7s v4 version.',
    createdDate: '2022-3-9',
    url: 'https://www.bilibili.com/video/BV1Nq4y1i7Zn/?spm_id_from=333.999.0.0',
    pv: 2558
  },
  {
    bannerTitle: 'Push Streaming',
    title: 'm7s v4 Tutorial - Push Streaming',
    desc: 'Introduction to the function of pushing streams to a remote source in m7s v4 version.',
    createdDate: '2022-3-13',
    url: 'https://www.bilibili.com/video/BV1mq4y1i7rp/?spm_id_from=333.999.0.0',
    pv: 1733
  },
  {
    bannerTitle: 'On-Demand Streaming',
    title: 'm7s v4 Tutorial - On-Demand Streaming',
    desc: 'Introduction to the function of pulling streams on demand in m7s v4 version.',
    createdDate: '2022-3-14',
    url: 'https://www.bilibili.com/video/BV1YF411s7nu/?spm_id_from=333.999.0.0',
    pv: 1773
  },
  {
    bannerTitle: 'Continuous Publishing',
    title: 'm7s v4 Tutorial - Continuous Publishing',
    desc: 'Introduction to the function of continuous publishing in m7s v4 version, and the state machine diagram of the stream.',
    createdDate: '2022-3-16',
    url: 'https://www.bilibili.com/video/BV1ar4y1i79S/?spm_id_from=333.999.0.0',
    pv: 1619
  },
  {
    bannerTitle: 'Rtsp Plugin Source Code Analysis',
    title: 'm7s v4 Tutorial - Rtsp Plugin Source Code Analysis',
    desc: 'Rtsp plugin walkthrough, can be used as a reference for customizing the plugin for secondary development.',
    createdDate: '2022-3-20',
    url: 'https://www.bilibili.com/video/BV1BS4y1U71m/?spm_id_from=333.999.0.0',
    pv: 1598
  },
  {
    bannerTitle: 'WebTransport Demonstration',
    title: 'm7s v4 Tutorial - WebTransport Demonstration',
    desc: 'Introduction to the function of the preview plugin and screenshot plugin in m7s v4 version, and the process of testing WebTransport locally. The effect of the protocols for pulling streams and playing is also compared with delay.',
    createdDate: '2022-6-27',
    url: 'https://www.bilibili.com/video/BV1EL4y1P7pf/?spm_id_from=333.999.0.0',
    pv: 1270
  },
  {
    bannerTitle: 'gb28181 dump',
    title: 'm7s v4 Tutorial - gb28181 dump',
    desc: 'Introduction to the function of the gb28181 plugin in m7s v4 version for dumping ps streams, which is used for analyzing video stream data.',
    createdDate: '2022-9-12',
    url: 'https://www.bilibili.com/video/BV1TV4y1g7g6/?spm_id_from=333.999.0.0',
    pv: 1249
  },
  {
    bannerTitle: 'Configuration Override Mechanism',
    title: 'm7s v4 Tutorial - Configuration Override Mechanism',
    desc: 'Introduction to the configuration override mechanism in m7s v4 version, m7s is a pure go stream media development framework.',
    createdDate: '2022-10-16',
    url: 'https://www.bilibili.com/video/BV1vD4y1r7j9/?spm_id_from=333.999.0.0',
    pv: 675
  },
  {
    bannerTitle: 'Room Demonstration',
    title: 'm7s v4 Tutorial - Room Demonstration',
    desc: 'Introduction to the room demonstration function in m7s v4 version, the Room plugin provides the basic functions of the room, including the broadcast of the signal, room entry and exit, text chat, multi-person video, etc.',
    createdDate: '2023-3-17',
    url: 'https://www.bilibili.com/video/BV1BT411k77t/?spm_id_from=333.999.0.0',
    pv: 805
  },
  {
    bannerTitle: 'Engine Startup Process',
    title: 'm7s v4 Source Code Reading - Engine Startup Process',
    desc: 'Analysis of the startup process of m7s v4 engine',
    createdDate: '2022-3-26',
    url: 'https://www.bilibili.com/video/BV1L94y1f7s4/?spm_id_from=333.999.0.0',
    pv: 1244
  },
  {
    bannerTitle: 'Stream Structure',
    title: 'm7s v4 Source Code Reading - Stream Structure',
    desc: 'Introduction to the Stream structure in the engine of m7s v4 version',
    createdDate: '2022-3-27',
    url: 'https://www.bilibili.com/video/BV1aZ4y1m7Fo/?spm_id_from=333.999.0.0',
    pv: 907
  },
  {
    bannerTitle: 'Publisher Logic',
    title: 'm7s v4 Source Code Reading - Publisher Logic',
    desc: 'Introduction to the publisher definition and structure in m7s v4 version',
    createdDate: '2022-4-2',
    url: 'https://www.bilibili.com/video/BV1NT4y1v7NK/?spm_id_from=333.999.0.0',
    pv: 932
  },
  {
    bannerTitle: 'Subscriber Logic',
    title: 'm7s v4 Source Code Reading - Subscriber Logic',
    desc: 'Introduction to the subscriber definition and related logic in m7s v4',
    createdDate: '2022-4-3',
    url: 'https://www.bilibili.com/video/BV1M5411D7UL/?spm_id_from=333.999.0.0',
    pv: 614
  },
  {
    bannerTitle: 'Processing Video Frames',
    title: 'm7s v4 Source Code Reading - Processing Video Frames',
    desc: 'Introduction to the processing logic of different video frame formats in m7s v4 engine, and memory reuse',
    createdDate: '2022-4-5',
    url: 'https://www.bilibili.com/video/BV14T4y1v7E5/?spm_id_from=333.999.0.0',
    pv: 900
  },
  {
    bannerTitle: 'RingBuffer',
    title: 'm7s v4 Source Code Reading - RingBuffer',
    desc: 'Introduction to the most critical part of the stream transmission in m7s v4 version - RingBuffer',
    createdDate: '2022-4-10',
    url: 'https://www.bilibili.com/video/BV1uq4y1Y7gV/?spm_id_from=333.999.0.0',
    pv: 1198
  }
]

export const Feature100DataSource = {
  wrapper: { className: 'home-page-wrapper feature10-wrapper' },
  page: { className: 'home-page feature10' },
  Carousel: {
    className: 'feature10-content',
    dots: false,
    wrapper: { className: 'feature10-content-wrapper' },
    titleWrapper: {
      className: 'feature10-title-wrapper',
      children: [
        {
          name: 'title',
          children: 'Collection of m7s v4 Video Tutorials',
          className: 'title-h1'
        }
      ],
      barWrapper: {
        className: 'feature10-title-bar-wrapper',
        children: {
          className: 'feature10-title-bar'
        }
      }
    },

    children: [
      {
        title: {
          className: 'feature10-title-text',
          children: (
            <Space>
              <div className="sub-title" style={{ color: '#5A00FF' }}>
                17
              </div>
              <div className="sub-title">videos</div>
              <div className="sub-title" style={{ margin: '0 16px' }}>
                |
              </div>
              <div className="sub-title" style={{ color: '#5A00FF' }}>
                2023-3-17
              </div>
              <div className="sub-title">updated</div>
            </Space>
          )
        },
        className: 'feature10-item',
        name: 'block0',
        children: videoData.map(item => {
          const obj = {
            md: 8,
            xs: 24,
            children: {
              className: 'feature10-text',
              children: (
                <Space className="item" direction="vertical">
                  <div
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      window.open(item.url)
                    }}
                  >
                    <Image className="img" preview={false} src="/img/video-bg.png" />
                    <div className="banner-title">—— {item.bannerTitle}</div>
                  </div>
                  <Space direction="vertical" align="start">
                    <div className="title">{item.title}</div>
                    <div className="desc">{item.desc}</div>
                    <div className="desc">
                      Created on {item.createdDate} &nbsp;<span>|</span>&nbsp; Views {item.pv}
                    </div>
                  </Space>
                </Space>
              )
            }
          }
          return obj
        })
      }
    ]
  }
}
