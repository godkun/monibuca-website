import { Space, Image } from 'antd'

const plugins = {
  rtmp: 'RTMP protocol for receiving and pushing streams',
  rtsp: 'RTSP protocol for receiving and pushing streams',
  hls: 'Provides HLS protocol for streaming and pulls HLS to m7s',
  gb28181: 'GB28181 protocol for streaming and viewing recordings',
  ps: 'Accepts Mpeg2-PS format streams',
  onvif: 'ONVIF protocol for streaming',
  webrtc: 'WebRTC protocol for pushing and pulling streams',
  webtransport: 'Pushing and pulling streams using WebTransport',
  record: 'HLS, FLV, MP4, raw stream recording and playback capabilities',
  hdl: 'Provides HTTP-FLV format for streaming and pulls HTTP-FLV to m7s',
  jessica: 'Provides WS-FLV and WS-RAW protocols for streaming',
  fmp4: 'Provides FMP4 format for streaming',
  preview: 'Provides video real-time preview capabilities through Jessibuca',
  snap: 'Provides real-time screenshot capabilities',
  room: 'Provides room functionality to broadcast information to users in the room',
  hook: 'Provides API hook callback capabilities to notify remote servers',
  exporter:
    'Provides monitoring data export capabilities, supporting Prometheus, InfluxDB, and ElasticSearch',
  logrotate: 'Provides log rotation capabilities',
  edge: 'Can be an m7s instance as an edge node',
  debug: 'Provides debugging capabilities',
  monitor: 'Provides storage and access to monitoring data'
}

const plugins2 = [
  {
    name: 'mpegts',
    desc: 'Provides MPEG-TS format for streaming',
    url: 'https://github.com/kingecg/mpegts'
  },
  {
    name: 'plugin-snapplug',
    desc: 'Automatically generates a video cover image when recording starts or ends',
    url: 'https://github.com/3201301734/plugin-snapplug'
  },
  {
    name: 'm7s-reportor',
    desc: 'Reports m7s stream information and device information to redis',
    url: 'https://github.com/bigbeer1/m7s-reportor'
  },
  {
    name: 'plugin-jtt1078',
    desc: 'JTT1078 protocol access plugin',
    url: 'https://github.com/bytebit/plugin-jtt1078'
  },
  {
    name: 'plugin-transform',
    desc: 'A transcoding plugin based on ffmpeg process',
    url: 'https://github.com/erroot/plugin-transform'
  },
  {
    name: 'Coming Soon',
    desc: 'Contact us to add to this list',
    url: ''
  }
]

const plugins3 = [
  {
    name: 'plugin-cascade',
    desc: 'Cascade plugin, provides m7s infinite cascade capabilities'
  },
  {
    name: 'plugin-transcode',
    desc: 'Provides transcoding capabilities, can convert streams to other formats'
  },
  {
    name: 'plugin-snappro',
    desc: 'Fast screenshot, faster than the snap plugin by 10 times or more'
  },
  {
    name: 'plugin-cryptor',
    desc: 'Provides the ability to encrypt streams'
  },
  {
    name: 'plugin-gb28181pro',
    desc: 'Provides GB28181 protocol cascade and other functions'
  },
  {
    name: 'plugin-recordpro',
    desc: 'Advanced recording plugin, with additional features such as timed tasks'
  },
  {
    name: 'plugin-cdn',
    desc: 'Can push streams to CDN, compatible with multiple cloud vendors'
  },
  {
    name: 'plugin-sei',
    desc: 'Can insert custom sei information'
  },
  {
    name: 'plugin-voice',
    desc: 'Supports public network voice intercom, requires purchase of hardware'
  },
  {
    name: 'plugin-admin',
    desc: 'Beautiful UI interface'
  },
  {
    name: 'Coming Soon',
    desc: 'Contact us to add to this list'
  }
]

export const Feature130DataSource = {
  wrapper: { className: 'home-page-wrapper feature13-wrapper' },
  page: { className: 'home-page feature13' },
  Carousel: {
    className: 'feature13-content',
    dots: false,
    wrapper: { className: 'feature13-content-wrapper' },
    titleWrapper: {
      className: 'feature13-title-wrapper',
      children: [],
      barWrapper: {
        className: 'feature13-title-bar-wrapper',
        children: {
          className: 'feature13-title-bar'
        }
      }
    },

    children: [
      {
        title: { className: 'feature13-title-text', children: 'Official Plugins' },
        className: 'feature13-item',
        name: 'block0',
        children: Object.keys(plugins).map(item => {
          return {
            md: 8,
            xs: 24,
            children: {
              className: 'feature13-text',
              children: (
                <Space
                  className="item"
                  onClick={() => {
                    window.open(`https://github.com/Monibuca/plugin-${item}`)
                  }}
                >
                  <Image className="img" preview={false} src="/img/plugin.png" />
                  <Space direction="vertical" align="start">
                    <div className="title">Plugin-{item}</div>
                    <div className="desc">{plugins[item]}</div>
                  </Space>
                </Space>
              )
            }
          }
        })
      },
      {
        title: { className: 'feature13-title-text', children: 'Third-party Open Source' },
        className: 'feature13-item',
        name: 'block1',
        children: plugins2.map(item => {
          return {
            md: 8,
            xs: 24,
            children: {
              className: 'feature13-text',
              children: (
                <Space
                  className="item"
                  onClick={() => {
                    window.open(item.url)
                  }}
                >
                  <Image className="img" preview={false} src="/img/plugin.png" />
                  <Space direction="vertical" align="start">
                    <div className="title">{item.name}</div>
                    <div className="desc">{item.desc}</div>
                  </Space>
                </Space>
              )
            }
          }
        })
      },
      {
        title: { className: 'feature13-title-text', children: 'Paid Plugins' },
        className: 'feature13-item',
        name: 'block2',
        children: plugins3.map(item => {
          return {
            md: 8,
            xs: 24,
            children: {
              className: 'feature13-text',
              children: (
                <Space className="item">
                  <Image className="img" preview={false} src="/img/plugin.png" />
                  <Space direction="vertical" align="start">
                    <div className="title">{item.name}</div>
                    <div className="desc">{item.desc}</div>
                  </Space>
                </Space>
              )
            }
          }
        })
      }
    ]
  }
}
