import React from 'react'

import { GithubOutlined } from '@ant-design/icons'
import { Button, Space, Image } from 'antd'

export const Nav30DataSource = {
  wrapper: { className: 'header3' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children: '/logo.png',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '/',
          children: [{ children: '产品文档', name: 'text' }],
        },
      },
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '/video',
          children: [{ children: '视频教程', name: 'text' }],
        },
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '/product',
          children: [{ children: '不卡系列', name: 'text' }],
        },
      },
      {
        name: 'item3',
        className: 'header3-item',
        children: {
          href: '/download',
          children: [{ children: '产品下载', name: 'text' }],
        },
      },
      {
        name: 'item4',
        className: 'header3-item',
        children: {
          href: '/plugin',
          children: [{ children: '插件生态', name: 'text' }],
        },
      },
      {
        name: 'item5',
        className: 'header3-item',
        children: {
          href: '/about',
          children: [{ children: '关于我们', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
}


export const Feature130DataSource = {
  wrapper: { className: 'home-page-wrapper feature13-wrapper' },
  page: { className: 'home-page feature13' },
  // OverPack: { className: 'home-page feature13', playScale: 0.3 },
  Carousel: {
    className: 'feature13-content',
    dots: false,
    wrapper: { className: 'feature13-content-wrapper' },
    titleWrapper: {
      className: 'feature13-title-wrapper',
      children: [
        { name: 'title', children: '', className: 'title-h1' },
      ],
      barWrapper: {
        className: 'feature13-title-bar-wrapper',
        children: {
          className: 'feature13-title-bar'
        },
      },
    },

    children: [
      {
        title: { className: 'feature13-title-text', children: '官方插件' },
        className: 'feature13-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            children: {
              className: 'feature13-text',
              children:
                <Space className='item'>
                  <Image
                    className='img'
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Space direction='vertical' align='start'>
                    <div className='title'>Plugin-rtmp</div>
                    <div className='desc'>rtmp协议接受推拉、对外推拉</div>
                  </Space>
                </Space>
            },
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'feature13-text',
              children:
                <Space className='item'>
                  <Image
                    className='img'
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Space direction='vertical' align='start'>
                    <div className='title'>Plugin-rtmp</div>
                    <div className='desc'>rtmp协议接受推拉、对外推拉</div>
                  </Space>
                </Space>
            },
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'feature13-text',
              children:
                <Space className='item'>
                  <Image
                    className='img'
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Space direction='vertical' align='start'>
                    <div className='title'>Plugin-rtmp</div>
                    <div className='desc'>rtmp协议接受推拉、对外推拉</div>
                  </Space>
                </Space>
            },
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'feature13-text',
              children:
                <Space className='item'>
                  <Image
                    className='img'
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Space direction='vertical' align='start'>
                    <div className='title'>Plugin-rtmp</div>
                    <div className='desc'>rtmp协议接受推拉、对外推拉</div>
                  </Space>
                </Space>
            },
          }
        ],
      },
      {
        title: { className: 'feature13-title-text', children: '第三方开源' },
        className: 'feature13-item',
        name: 'block1',
        children: [
          {
            md: 8,
            xs: 24,
            children: {
              className: 'feature13-text',
              children:
                <Space className='item'>
                  <Image
                    className='img'
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Space direction='vertical' align='start'>
                    <div className='title'>Plugin-rtmp</div>
                    <div className='desc'>rtmp协议接受推拉、对外推拉</div>
                  </Space>
                </Space>
            },
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'feature13-text',
              children:
                <Space className='item'>
                  <Image
                    className='img'
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Space direction='vertical' align='start'>
                    <div className='title'>Plugin-rtmp</div>
                    <div className='desc'>rtmp协议接受推拉、对外推拉</div>
                  </Space>
                </Space>
            },
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'feature13-text',
              children:
                <Space className='item'>
                  <Image
                    className='img'
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Space direction='vertical' align='start'>
                    <div className='title'>Plugin-rtmp</div>
                    <div className='desc'>rtmp协议接受推拉、对外推拉</div>
                  </Space>
                </Space>
            },
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'feature13-text',
              children:
                <Space className='item'>
                  <Image
                    className='img'
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Space direction='vertical' align='start'>
                    <div className='title'>Plugin-rtmp</div>
                    <div className='desc'>rtmp协议接受推拉、对外推拉</div>
                  </Space>
                </Space>
            },
          }
        ],
      },
      {
        title: { className: 'feature13-title-text', children: '付费插件' },
        className: 'feature13-item',
        name: 'block1',
        children: [
          {
            md: 8,
            xs: 24,
            children: {
              className: 'feature13-text',
              children:
                <Space className='item'>
                  <Image
                    className='img'
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Space direction='vertical' align='start'>
                    <div className='title'>Plugin-rtmp</div>
                    <div className='desc'>rtmp协议接受推拉、对外推拉</div>
                  </Space>
                </Space>
            },
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'feature13-text',
              children:
                <Space className='item'>
                  <Image
                    className='img'
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Space direction='vertical' align='start'>
                    <div className='title'>Plugin-rtmp</div>
                    <div className='desc'>rtmp协议接受推拉、对外推拉</div>
                  </Space>
                </Space>
            },
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'feature13-text',
              children:
                <Space className='item'>
                  <Image
                    className='img'
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Space direction='vertical' align='start'>
                    <div className='title'>Plugin-rtmp</div>
                    <div className='desc'>rtmp协议接受推拉、对外推拉</div>
                  </Space>
                </Space>
            },
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'feature13-text',
              children:
                <Space className='item'>
                  <Image
                    className='img'
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Space direction='vertical' align='start'>
                    <div className='title'>Plugin-rtmp</div>
                    <div className='desc'>rtmp协议接受推拉、对外推拉</div>
                  </Space>
                </Space>
            },
          }
        ],
      },
    ],
  },
}


export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  // OverPack: { className: 'footer1', playScale: 0.2 },
  page: { className: 'footer1 home-page', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: '视频教程' },
        childWrapper: {
          children: [
            { name: 'link0', href: '#', children: 'B 站分享' },
            { name: 'link1', href: '#', children: 'RTS 分享' },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: '产品文档' },
        childWrapper: {
          children: [
            { name: 'link0', href: '#', children: '快速上手' },
            { name: 'link1', href: '#', children: '使用手册' },
            { name: 'link2', href: '#', children: '常见问题' },
            { name: 'link3', href: '#', children: '二次开发' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: '下载链接' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'Windows' },
            { href: '#', name: 'link1', children: 'Mac' },
            { href: '#', name: 'link2', children: 'Mac(arm64)' },
            { href: '#', name: 'link3', children: 'Linux' },
            { href: '#', name: 'link4', children: 'Linux(arm64)' },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: '不卡系列' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'Monibuca' },
            { href: '#', name: 'link1', children: 'Jessibuca' },
            { href: '#', name: 'link2', children: 'Rebebuca' },
          ],
        },
      },
      {
        name: 'block4',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: '关于我们' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'FAQ' },
            { href: '#', name: 'link1', children: '开发团队' },
            { href: '#', name: 'link2', children: '诞生故事' },
          ],
        },
      },
      {
        name: 'block5',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: '联系我们' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'Monibuca 微信交流群' },
            { href: '#', name: 'link1', children: '[ 不卡学院 ] 交流群' },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        Copyright © Monibuca 开发团队
      </span>
    ),
  },
}