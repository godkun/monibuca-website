import { Space } from 'antd'

const data = [
  {
    title: 'Quick Start',
    children: [
      {
        title: '📖 Introduction',
        content: 'What is Monibuca',
        href: '/docs/guide/introduction.html'
      },
      {
        title: '⏬ Download',
        content: 'Installation and Running',
        href: '/docs/guide/startup.html'
      },
      {
        title: '💿 Version',
        content: 'Latest version and update history',
        href: '/docs/guide/v4.html'
      }
    ]
  },
  {
    title: 'User Manual',
    children: [
      {
        title: '🛠️ Configuration',
        content: 'How to modify the configuration file',
        href: '/docs/guide/config.html'
      },
      {
        title: '🔑 API',
        content: 'Control Monibuca via HTTP requests',
        href: '/docs/guide/api.html'
      },
      {
        title: '🔐 Authentication',
        content: 'Control the security of push and pull streams',
        href: '/docs/guide/authentication.html'
      }
    ]
  },
  {
    title: 'Frequently Questions',
    children: [
      {
        title: '💢 Crash',
        content: 'How to find the cause of the crash after the program crashes',
        href: '/docs/guide/qa/error.html'
      },
      {
        title: '🎥 Push',
        content: 'What should be noted when pushing the stream',
        href: '/docs/guide/qa/push.html'
      },
      {
        title: '🖥️ Play',
        content: 'What is the playback address?',
        href: '/docs/guide/qa/play.html'
      }
    ]
  },
  {
    title: 'Secondary Development',
    children: [
      {
        title: '🦾 Development Preparation',
        content: 'IDE, language, environment',
        href: '/docs/devel/startup.html'
      },
      {
        title: '🧩 Define Plugin',
        content: 'How to define a plugin',
        href: '/docs/devel/plugin.html'
      },
      {
        title: '🔌 Plugin Interface',
        content: 'How to provide an HTTP interface externally',
        href: '/docs/devel/api.html'
      }
    ]
  }
]
export const Feature140DataSource = {
  wrapper: { className: 'home-page-wrapper Feature14-wrapper' },
  page: { className: 'home-page Feature14' },
  Carousel: {
    className: 'Feature14-content',
    dots: false,
    wrapper: { className: 'Feature14-content-wrapper' },
    titleWrapper: {
      className: 'Feature14-title-wrapper',
      children: [],
      barWrapper: {
        className: 'Feature14-title-bar-wrapper',
        children: {
          className: 'Feature14-title-bar'
        }
      }
    },
    children: data.map((item, i) => ({
      title: { className: 'Feature14-title-text', children: item.title },
      className: 'Feature14-item',
      name: `block${i}`,
      children: item.children.map((child, j) => ({
        md: 8,
        xs: 24,
        children: {
          className: 'Feature14-text',
          children: (
            <Space
              className="item"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                window.open(child.href)
              }}
            >
              <Space direction="vertical" align="start">
                <div className="title">{child.title}</div>
                <div className="desc">{child.content}</div>
              </Space>
            </Space>
          )
        }
      }))
    }))
  }
}
