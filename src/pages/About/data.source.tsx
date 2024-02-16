import { List } from 'antd'
import { Nav30DataSource } from '../../data/index'

export { Nav30DataSource }

const faqData = [
  {
    title: 'Monibuca对执行的环境有什么要求？',
    description: `Monibuca是Go语言编写，可以在任何Go语言能运行的平台上运行，包括x86和
    arm架构，对机器的配置没有特殊需求`
  },
  {
    title: 'Monibuca的并发能力如何？',
    description: `Monibuca得益于Go语言的超强并发能力，可以充分利用多核计算。`
  },
  {
    title: 'Monibuca要收费吗？',
    description: `Monibuca是完全开源免费的，但是基于Monibuca二次开发的软件可以收费。此外为了维持项目的可持续发展，团队提供定制化插件服务，和专业版功能，会收取费用。`
  },
  {
    title: 'Monibuca的愿景是什么？',
    description: `Monibuca致力于打造一个对开发者友好的生态体系，能极大降低企业以及个人开发流媒体相关系统的成本。`
  }
]

const lifeData = [
  {
    title: '编写Flash视频会议系统',
    description: `本人最早的工作是开发 Flash 视频会议系统，当时使用的是 FCS (全称 Flash Communication Server )作为流媒体服务器，后来改名为 FMS (全称 Flash Media Server )。当时很多业务逻辑是可以直接编写成脚本来运行的。FMS 是性能十分优越的服务器，具有集群功能，唯一的不足是比较昂贵。所以当时诞生了开源的 java 编写的 Red5 。 Red5 最大的缺点就是性能较差。在阅读 Red5 源码的过程中，便一窥 RTMP 协议的全部。`
  },
  {
    title: '移植crtmpserver',
    description:
      '当时公司不允许使用 FMS 作为服务器（无经费），然后就发现了这款开源的 rtmp 服务器，当时使用的时候发现性能很不错。就尝试在上面进行扩展，实现了一些 FMS 的功能，比如 sharedobject 等。'
  },
  {
    title: 'H5播放器诞生',
    description: (
      <div>
        其实一切的起因都来自这款播放器，虽然我至今尚为开源，但一直是我研究和开发流媒体服务器的原动力。最早是发现了一个开源项目
        https://github.com/mbebenita/Broadway，这个项目是将 H264 的解码程序通过 emscripten 编译成了
        js ，在浏览器端解码播放 H264 视频。然后我就在这个基础上实现了 rtmp 协议的 js 编译，然后通过
        websocket 传输。后来想到，没有必要去实现 rtmp ，可以在 websocket
        中传输裸数据即可，这样可以节省带宽，也可以减轻浏览器端的解码压力。随后开始陆续将音频解码程序集成进播放器中，最后将
        h265 的解码程序也集成进去了。有两款 h265 的解码程序，分别是 lib265 和 libhevc 。现已开源
        <a href="https://github.com/langhuihui/jessibuca">
          https://github.com/langhuihui/jessibuca
        </a>
      </div>
    )
  },
  {
    title: '照猫画虎的csharprtmp',
    description:
      '当时为了更好的进行扩展，也是基于对 C# 的狂热，我移植了 crtmpserver 的大部分功能到了 C# https://github.com/langhuihui/csharprtmp。在这个过程中，对多线程、 RTMP 协议、 AMF 协议有了深刻的认识。当然由于功力尚浅，该 server 不是很稳定。'
  },
  {
    title: '扩展MonaServer',
    description:
      '当时为了能节省带宽，就开始研究 RTMFP 协议。于是发现了 OpenRTMFP ，又名 Cumulus Server 。很快这个项目变成了 MonaServer ，用了更为现代的 C++ 编程，比 crtmpserver 更容易二次开发。于是我选择这款服务器进行了二次开发，又再次实现了一些 FMS 的功能，然后通过 WebSocket 传输音视频裸数据到 H5 播放器上面。但是一直有内存泄漏困扰着我，一直没有解决，所以也无法商用。'
  },
  {
    title: '遇见srs',
    description:
      '偶然机会发现了这款功能很强的服务器，可以通过一个 go 程序将 srs 的 http-flv 转换成 websocket 中传输 flv 的方式对接我的 h5 播放器，于是这个组合运用到了商用场景中。但是经过一次转发总觉得不是很满意，想改造 srs ，但是 srs 代码读起来很费劲，这不是黑 srs ，应该是本人 C++ 功力还太浅吧。'
  },
  {
    title: 'Node-Media-Server vs Gortmp',
    description:
      '随着 flash 的陨落，本人转型 Node.js ,就发现了用 Node 写成的流媒体服务器 Node-Media-Server ，当时这个还在早期开发阶段，我和作者聊了不少，也 fork 了项目，想要在上面进行二次开发，不过当时 go 语言兴起，有许多 go 写的流媒体服务器诞生，我作了对比后发现还是 golang 的运行性能高，于是放弃了使用 Node.js 开发的念头。在对比了多款 golang 的项目后，最终选定 gortmp 作为二次开发的基础。'
  },
  {
    title: '受到vue渐进式思想的影响',
    description:
      'gortmp 基础上快速的二次开发成为良好的体验，给了我一个启示，在经历了那么多次的二次开发，流媒体服务器的二次开发是一件非常艰难的事情，而 golang 打开了一扇新的大门，但不能满足修修补补，需要一款任何人都能快速进行定制化的开发框架。vue 渐进式开发思想非常棒，受此启发，将流媒体服务器的核心和外围功能分离，实现了插件化的框架设计。'
  }
]

const teamData = [
  {
    title: '核心团队',
    description:
      '核心团队由若干对Monibuca的代码、测试、资源提供相当大贡献的人员组成，秉承相同的价值观和愿景和Monibuca项目共同成长。'
  },
  {
    title: '贡献者',
    description: '贡献者由对项目提供PR的广大开发者组成，核心团队会给贡献者体提供技术上的无偿帮助。'
  },
  {
    title: '赞助者',
    description:
      '赞助者由对Monibuca提供资金、项目支持的个人或组织组成，核心团队会给赞助者体提供技术支持以及项目开发等服务。'
  }
]

export const Feature140DataSource = {
  wrapper: { className: 'home-page-wrapper feature14-wrapper feature14' },
  page: { className: 'home-page feature14' },
  // OverPack: { className: 'home-page feature14', playScale: 0.3 },
  tabs: {
    className: 'feature14-content',
    wrapper: { className: 'feature14-content-wrapper' },

    titleWrapper: {
      className: 'feature14-title-wrapper',
      children: [{ name: 'title', children: '', className: 'title-h1' }],
      barWrapper: {
        className: 'feature14-title-bar-wrapper',
        children: {
          className: 'feature14-title-bar'
        }
      }
    },

    children: [
      {
        title: { className: 'feature14-title-text', children: 'FAQ' },
        className: 'feature14-item',
        name: 'block0',
        children: [
          {
            md: 24,
            xs: 24,
            children: {
              className: 'feature14-text',
              children: (
                <List
                  itemLayout="horizontal"
                  dataSource={faqData}
                  header={<div className="faq-header">FAQ</div>}
                  renderItem={item => (
                    <List.Item className="list-item">
                      <List.Item.Meta
                        title={<div className="faq-title">{item.title}</div>}
                        description={<div className="faq-answer">{item.description}</div>}
                      />
                    </List.Item>
                  )}
                />
              )
            }
          }
        ]
      },
      {
        title: { className: 'feature14-title-text', children: '开发团队' },
        className: 'feature14-item',
        name: 'block1',
        children: [
          {
            md: 24,
            xs: 24,
            children: {
              className: 'feature14-text',
              children: (
                <List
                  itemLayout="horizontal"
                  dataSource={teamData}
                  header={<div className="faq-header">开发团队</div>}
                  renderItem={item => (
                    <List.Item className="list-item">
                      <List.Item.Meta
                        title={<div className="faq-title">{item.title}</div>}
                        description={<div className="faq-answer">{item.description}</div>}
                      />
                    </List.Item>
                  )}
                />
              )
            }
          }
        ]
      },
      {
        title: { className: 'feature14-title-text', children: '诞生过程' },
        className: 'feature14-item',
        name: 'block2',
        children: [
          {
            md: 24,
            xs: 24,
            children: {
              className: 'feature14-text',
              children: (
                <List
                  itemLayout="horizontal"
                  dataSource={lifeData}
                  header={<div className="faq-header">诞生过程</div>}
                  renderItem={item => (
                    <List.Item className="list-item">
                      <List.Item.Meta
                        title={<div className="faq-title">{item.title}</div>}
                        description={<div className="faq-answer">{item.description}</div>}
                      />
                    </List.Item>
                  )}
                />
              )
            }
          }
        ]
      }
    ]
  }
}
