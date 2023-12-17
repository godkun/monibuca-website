import React from 'react'

import { GithubOutlined } from '@ant-design/icons'
import { Button, Space, Image } from 'antd'
import { enquireScreen } from 'enquire-js'

let isMobile
enquireScreen((b) => {
  isMobile = b
})


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


export const Feature100DataSource = {
  wrapper: { className: 'home-page-wrapper feature10-wrapper' },
  page: { className: 'home-page feature10' },
  // OverPack: { className: 'home-page feature10', playScale: 0.3 },
  Carousel: {
    className: 'feature10-content',
    dots: false,
    wrapper: { className: 'feature10-content-wrapper' },
    titleWrapper: {
      className: 'feature10-title-wrapper',
      children: [
        { name: 'title', children: '插件生态', className: 'title-h1' },
      ],
      barWrapper: {
        className: 'feature10-title-bar-wrapper',
        children: {
          className: 'feature10-title-bar'
        },
      },
    },

    children: [
      {
        title: { className: 'feature10-title-text', children: <Space>
          <div className='sub-title' style={{ color: '#5A00FF'}}>17</div>
          <div className='sub-title'>个视频</div>
          <div className='sub-title' style={{ margin: '0 16px'}}>|</div>
          <div className='sub-title' style={{ color: '#5A00FF'}}>2023-3-17</div>
          <div className='sub-title'>更新</div>
        </Space> },
        className: 'feature10-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            children: {
              className: 'feature10-text',
              children:
                <Space className='item' direction='vertical'>
                  <Image
                    className='img'
                    preview={false}
                    // width={384}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Space direction='vertical' align='start'>
                    <div className='title'>从零启动 m7s V4</div>
                    <div className='desc'>本视频讲解了从零创建一个go工程的方式引入m7s，启动不含任何插件的引擎的过程。</div>
                    <div className='desc'>创建时间 2022-3-4 &nbsp;|&nbsp; 播放量 6369</div>
                  </Space>
                </Space>
            },
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'feature10-text',
              children:
                <Space className='item' direction='vertical'>
                  <Image
                    className='img'
                    preview={false}
                    // width={384}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Space direction='vertical' align='start'>
                    <div className='title'>从零启动 m7s V4</div>
                    <div className='desc'>本视频讲解了从零创建一个go工程的方式引入m7s，启动不含任何插件的引擎的过程。</div>
                    <div className='desc'>创建时间 2022-3-4 &nbsp;|&nbsp; 播放量 6369</div>
                  </Space>
                </Space>
            },
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'feature10-text',
              children:
                <Space className='item' direction='vertical'>
                  <Image
                    className='img'
                    preview={false}
                    // width={384}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Space direction='vertical' align='start'>
                    <div className='title'>从零启动 m7s V4</div>
                    <div className='desc'>本视频讲解了从零创建一个go工程的方式引入m7s，启动不含任何插件的引擎的过程。</div>
                    <div className='desc'>创建时间 2022-3-4 &nbsp;|&nbsp; 播放量 6369</div>
                  </Space>
                </Space>
            },
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'feature10-text',
              children:
                <Space className='item' direction='vertical'>
                  <Image
                    className='img'
                    preview={false}
                    // width={384}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Space direction='vertical' align='start'>
                    <div className='title'>从零启动 m7s V4</div>
                    <div className='desc'>本视频讲解了从零创建一个go工程的方式引入m7s，启动不含任何插件的引擎的过程。</div>
                    <div className='desc'>创建时间 2022-3-4 &nbsp;|&nbsp; 播放量 6369</div>
                  </Space>
                </Space>
            },
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'feature10-text',
              children:
                <Space className='item' direction='vertical'>
                  <Image
                    className='img'
                    preview={false}
                    // width={384}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Space direction='vertical' align='start'>
                    <div className='title'>从零启动 m7s V4</div>
                    <div className='desc'>本视频讲解了从零创建一个go工程的方式引入m7s，启动不含任何插件的引擎的过程。</div>
                    <div className='desc'>创建时间 2022-3-4 &nbsp;|&nbsp; 播放量 6369</div>
                  </Space>
                </Space>
            },
          },
        ],
      }
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