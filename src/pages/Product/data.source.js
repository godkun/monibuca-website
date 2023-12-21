import React from 'react'

import { GithubOutlined } from '@ant-design/icons'
import { Button, Space, Image } from 'antd'
import { Nav30DataSource } from "../../data/index"

export {
	Nav30DataSource
}

export const Feature110DataSource = {
  wrapper: { className: 'home-page-wrapper Feature11-wrapper' },
  page: { className: 'home-page Feature11' },
  // OverPack: { className: 'home-page Feature11', playScale: 0.3 },
  Carousel: {
    className: 'Feature11-content',
    dots: false,
    wrapper: { className: 'Feature11-content-wrapper' },
    titleWrapper: {
      className: 'Feature11-title-wrapper',
      children: [
        // { name: 'title', children: '插件生态', className: 'title-h1' },
      ],
      barWrapper: {
        className: 'Feature11-title-bar-wrapper',
        children: {
          className: 'Feature11-title-bar'
        },
      },
    },

    children: [
      {
        title: {
          className: 'Feature11-title-text', children: ''
        },
        className: 'Feature11-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature11-text',
              children:
                <Space className='item' direction='vertical'>
                  <Image
                    className='img'
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Space direction='vertical' align='start'>
                    {/* <div className='title'>从零启动 m7s V4</div> */}
                    <div className='desc'> <span style={{ color: '#000', fontWeight: 500}}>Monibuca</span>旨在提供一个对开发者极度友好，兼具高性能的流媒体服务器开发框架，对于想快速入门流媒体开发的公司和个人提供一个低门槛的方案。</div>
                    <Button type="primary">查看詳情</Button>
                  </Space>
                </Space>
            },
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature11-text',
              children:
                <Space className='item' direction='vertical'>
                  <Image
                    className='img'
                    preview={false}
                    // width={384}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Space direction='vertical' align='start'>
                    {/* <div className='title'>从零启动 m7s V4</div> */}
                    <div className='desc'>
                      <span style={{ color: '#000', fontWeight: 500}}>Jessibuca</span>
                      是一款纯Web（H5）打造的直播流播放器。兼容几乎所有Web传输协议格式以及主流的音视频编码格式。具有低延时、高性能、兼容性强等特点。</div>
                    <Button type="primary">查看詳情</Button>
                  </Space>
                </Space>
            },
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature11-text',
              children:
                <Space className='item' direction='vertical'>
                  <Image
                    className='img'
                    preview={false}
                    // width={384}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <Space direction='vertical' align='start'>
                    {/* <div className='title'>从零启动 m7s V4</div> */}
                    <div className='desc'><span style={{ color: '#000', fontWeight: 500}}>Rebebuca</span>是一个使用 Rust 开发的 桌面端 ffmpeg 管理器。可以帮助我们更好的管理繁多复杂的 ffmpeg 参数和 ffmpeg 命令运行状态。</div>
                    <Button type="primary">查看詳情</Button>
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