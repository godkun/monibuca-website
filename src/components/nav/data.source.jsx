import { Popover } from 'antd'
import { enquireScreen } from 'enquire-js'

let isMobile
enquireScreen(b => {
  isMobile = b
})

export const Nav30DataSource = {
  wrapper: { className: 'header3' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children: '/svg/logo.svg?t=123'
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: '/',
        className: 'header3-item',
        children: {
          href: '/',
          children: [{ children: '首页', name: 'text' }]
        }
      },
      {
        name: '/doc',
        className: 'header3-item',
        children: {
          href: '/doc',
          children: [{ children: '文档', name: 'text' }]
        }
      },
      {
        name: '/product',
        className: 'header3-item',
        children: {
          href: '/product',
          children: [{ children: '不卡系列', name: 'text' }]
        }
      },
      {
        name: '/download',
        className: 'header3-item',
        children: {
          href: '/download',
          children: [{ children: '产品下载', name: 'text' }]
        }
      },
      {
        name: '/plugin',
        className: 'header3-item',
        children: {
          href: '/plugin',
          children: [{ children: '插件生态', name: 'text' }]
        }
      },
      {
        name: '/video',
        className: 'header3-item',
        children: {
          href: '/video',
          children: [{ children: '视频教程', name: 'text' }]
        }
      },
      {
        name: '/about',
        className: 'header3-item',
        children: {
          href: '/about',
          children: [{ children: '关于我们', name: 'text' }]
        }
      }
    ]
  },
  mobileMenu: { className: 'header3-mobile-menu' }
}
