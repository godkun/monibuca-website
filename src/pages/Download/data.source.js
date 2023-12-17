import React from 'react'

import { GithubOutlined } from '@ant-design/icons'
import { Button, Space, Image } from 'antd'

export const Nav30DataSource = {
  wrapper: { className: 'header3' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children:
      'https://gw.alipayobjects.com/zos/basement_prod/b30cdc2a-d91c-4c78-be9c-7c63b308d4b3.svg',
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


export const Feature120DataSource = {
  wrapper: { className: 'home-page-wrapper Feature12-wrapper' },
  page: { className: 'home-page Feature12' },
  // OverPack: { className: 'home-page Feature12', playScale: 0.3 },
  Carousel: {
    className: 'Feature12-content',
    dots: false,
    wrapper: { className: 'Feature12-content-wrapper' },
    titleWrapper: {
      className: 'Feature12-title-wrapper',
      children: [
        // { name: 'title', children: '插件生态', className: 'title-h1' },
      ],
      barWrapper: {
        className: 'Feature12-title-bar-wrapper',
        children: {
          className: 'Feature12-title-bar'
        },
      },
    },

    children: [
      {
        title: {
          className: 'Feature12-title-text', children: ''
        },
        className: 'Feature12-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children:
                <Space direction='vertical' className='item'>
                  <Space>
                    {/* <div className='desc'> <span style={{ color: '#000', fontWeight: 500 }}>Monibuca</span>旨在提供一个对开发者极度友好，兼具高性能的流媒体服务器开发框架，对于想快速入门流媒体开发的公司和个人提供一个低门槛的方案。</div> */}
                    <Space direction='vertical'>
                      <div className='title'>Mac 系统下载</div>
                      <div className='sub-title'>系统版本: 请查看安装教程</div>
                    </Space>
                    <Image
                      className='img'
                      preview={false}
                      width={40}
                      height={40}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                  </Space>
                  <Space direction='vertical' align='start'>
                    <Button type="primary">立即下载</Button>
                  </Space>
                </Space>
            },
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children:
                <Space direction='vertical' className='item'>
                  <Space>
                    {/* <div className='desc'> <span style={{ color: '#000', fontWeight: 500 }}>Monibuca</span>旨在提供一个对开发者极度友好，兼具高性能的流媒体服务器开发框架，对于想快速入门流媒体开发的公司和个人提供一个低门槛的方案。</div> */}
                    <Space direction='vertical'>
                      <div className='title'>Linux 系统下载</div>
                      <div className='sub-title'>系统版本: 请查看安装教程</div>
                    </Space>
                    <Image
                      className='img'
                      preview={false}
                      width={40}
                      height={40}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                  </Space>
                  <Space direction='vertical' align='start'>
                    <Button type="primary">立即下载</Button>
                  </Space>
                </Space>
            },
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children:
                <Space direction='vertical' className='item'>
                  <Space>
                    {/* <div className='desc'> <span style={{ color: '#000', fontWeight: 500 }}>Monibuca</span>旨在提供一个对开发者极度友好，兼具高性能的流媒体服务器开发框架，对于想快速入门流媒体开发的公司和个人提供一个低门槛的方案。</div> */}
                    <Space direction='vertical'>
                      <div className='title'>Windows 系统下载</div>
                      <div className='sub-title'>系统版本: 请查看安装教程</div>
                    </Space>
                    <Image
                      className='img'
                      preview={false}
                      width={40}
                      height={40}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                  </Space>
                  <Space direction='vertical' align='start'>
                    <Button type="primary">立即下载</Button>
                  </Space>
                </Space>
            },
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children:
                <Space direction='vertical' className='item'>
                  <Space>
                    {/* <div className='desc'> <span style={{ color: '#000', fontWeight: 500 }}>Monibuca</span>旨在提供一个对开发者极度友好，兼具高性能的流媒体服务器开发框架，对于想快速入门流媒体开发的公司和个人提供一个低门槛的方案。</div> */}
                    <Space direction='vertical'>
                      <div className='title'>Mac(arm64) 系统下载</div>
                      <div className='sub-title'>系统版本: 请查看安装教程</div>
                    </Space>
                    <Image
                      className='img'
                      preview={false}
                      width={40}
                      height={40}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                  </Space>
                  <Space direction='vertical' align='start'>
                    <Button type="primary">立即下载</Button>
                  </Space>
                </Space>
            },
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children:
                <Space direction='vertical' className='item'>
                  <Space>
                    {/* <div className='desc'> <span style={{ color: '#000', fontWeight: 500 }}>Monibuca</span>旨在提供一个对开发者极度友好，兼具高性能的流媒体服务器开发框架，对于想快速入门流媒体开发的公司和个人提供一个低门槛的方案。</div> */}
                    <Space direction='vertical'>
                      <div className='title'>Linux(arm64) 系统下载</div>
                      <div className='sub-title'>系统版本: 请查看安装教程</div>
                    </Space>
                    <Image
                      className='img'
                      preview={false}
                      width={40}
                      height={40}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                  </Space>
                  <Space direction='vertical' align='start'>
                    <Button type="primary">立即下载</Button>
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