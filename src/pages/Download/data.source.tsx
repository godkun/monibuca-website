import React from 'react'

import { Button, Space } from 'antd'

import { Nav30DataSource } from '../../data/index'

export { Nav30DataSource }

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
        }
      }
    },

    children: [
      {
        title: {
          className: 'Feature12-title-text',
          children: ''
        },
        className: 'Feature12-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    <Space direction="vertical">
                      <div className="title">Mac 系统下载</div>
                      <div className="sub-title">系统版本: 请查看安装教程</div>
                    </Space>
                    <div className="img iconfont icon-apple"></div>
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button type="primary">立即下载</Button>
                  </Space>
                </Space>
              )
            }
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    {/* <div className='desc'> <span style={{ color: '#000', fontWeight: 500 }}>Monibuca</span>旨在提供一个对开发者极度友好，兼具高性能的流媒体服务器开发框架，对于想快速入门流媒体开发的公司和个人提供一个低门槛的方案。</div> */}
                    <Space direction="vertical">
                      <div className="title">Linux 系统下载</div>
                      <div className="sub-title">系统版本: 请查看安装教程</div>
                    </Space>
                    <div className="img iconfont icon-linux"></div>
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button type="primary">立即下载</Button>
                  </Space>
                </Space>
              )
            }
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    {/* <div className='desc'> <span style={{ color: '#000', fontWeight: 500 }}>Monibuca</span>旨在提供一个对开发者极度友好，兼具高性能的流媒体服务器开发框架，对于想快速入门流媒体开发的公司和个人提供一个低门槛的方案。</div> */}
                    <Space direction="vertical">
                      <div className="title">Windows 系统下载</div>
                      <div className="sub-title">系统版本: 请查看安装教程</div>
                    </Space>
                    <div className="img iconfont icon-windows"></div>
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button type="primary">立即下载</Button>
                  </Space>
                </Space>
              )
            }
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    <Space direction="vertical">
                      <div className="title">Mac(arm64) 系统下载</div>
                      <div className="sub-title">系统版本: 请查看安装教程</div>
                    </Space>
                    <div className="img iconfont icon-apple"></div>
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button type="primary">立即下载</Button>
                  </Space>
                </Space>
              )
            }
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    {/* <div className='desc'> <span style={{ color: '#000', fontWeight: 500 }}>Monibuca</span>旨在提供一个对开发者极度友好，兼具高性能的流媒体服务器开发框架，对于想快速入门流媒体开发的公司和个人提供一个低门槛的方案。</div> */}
                    <Space direction="vertical">
                      <div className="title">Linux(arm64) 系统下载</div>
                      <div className="sub-title">系统版本: 请查看安装教程</div>
                    </Space>
                    <div className="img iconfont icon-linux"></div>
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button type="primary">立即下载</Button>
                  </Space>
                </Space>
              )
            }
          }
        ]
      }
    ]
  }
}
