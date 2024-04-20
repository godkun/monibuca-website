import React from 'react'
import { Space } from 'antd'

import  { TweenOneGroup } from 'rc-tween-one'
import BannerAnim, { Element } from 'rc-banner-anim'
import { isImg } from '@/utils'
import 'rc-banner-anim/assets/index.css'

const BgElement = Element.BgElement
class Banner extends React.PureComponent {
  render() {
    const { ...props } = this.props
    const { dataSource, isMobile } = props
    delete props.dataSource
    delete props.isMobile
    const childrenToRender = dataSource.BannerAnim.children.map((item, i) => {
      const elem = item.BannerElement
      const elemClassName = elem.className
      delete elem.className
      const bg = item.bg
      const textWrapper = item.textWrapper
      const title = item.title
      const content = item.content
      const kun = item.kun
      const button = item.button
      const button2 = item.button2
      const page = item.page
      const follow = null
      return (
        <Element key={i.toString()} followParallax={follow} {...elem} prefixCls={elemClassName}>
          <BgElement key="bg" {...bg} id={`bg${i}`} />
          <div {...page}>
            <div
              key="text"
              {...textWrapper}
              id={`wrapperBlock${i}`}
            >
              <div key="logo" {...title}>
                {typeof title.children === 'string' && title.children.match(isImg) ? (
                  <img src={title.children} width="100%" alt="img" />
                ) : (
                  title.children
                )}
              </div>
              <div key="content" {...content}>
                {content.children}
              </div>
              <div key="kun" {...kun}>
                {kun.children}
              </div>
              <Space
                size={isMobile ? 'large' : ''}
                direction={isMobile ? 'horizontal' : 'horizontal'}
              >
                <div key="button" {...button}>
                  <img src="/svg/github.svg" alt="" width={36} style={{ marginRight: '9px' }} />
                  {button.children}
                </div>
                <div key="button2" {...button2}>
                  <img src="/svg/github.svg" alt="" width={36} style={{ marginRight: '9px' }} />
                  {button2.children}
                </div>
              </Space>
            </div>
          </div>
        </Element>
      )
    })
    return (
      <div {...props} {...dataSource.wrapper}>
        <TweenOneGroup
          key="bannerGroup"
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=""
        >
          <BannerAnim key="BannerAnim" {...dataSource.BannerAnim}>
            {childrenToRender}
          </BannerAnim>
        </TweenOneGroup>
      </div>
    )
  }
}

export default Banner
