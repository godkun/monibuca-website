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
          children: [{ children: 'Home', name: 'text' }]
        }
      },
      {
        name: '/doc',
        className: 'header3-item',
        children: {
          href: '/doc',
          children: [{ children: 'Documentation', name: 'text' }]
        }
      },
      {
        name: '/product',
        className: 'header3-item',
        children: {
          href: '/product',
          children: [{ children: 'Monibuca', name: 'text' }]
        }
      },
      {
        name: '/download',
        className: 'header3-item',
        children: {
          href: '/download',
          children: [{ children: 'Product Download', name: 'text' }]
        }
      },
      {
        name: '/plugin',
        className: 'header3-item',
        children: {
          href: '/plugin',
          children: [{ children: 'Plugin Ecology', name: 'text' }]
        }
      },
      {
        name: '/video',
        className: 'header3-item',
        children: {
          href: '/video',
          children: [{ children: 'Video Tutorials', name: 'text' }]
        }
      },
      {
        name: '/about',
        className: 'header3-item',
        children: {
          href: '/about',
          children: [{ children: 'About Us', name: 'text' }]
        }
      }
    ]
  },
  mobileMenu: { className: 'header3-mobile-menu' }
}
