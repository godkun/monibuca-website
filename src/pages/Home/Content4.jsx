import React from 'react'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import { getChildrenToRender } from './utils'

import { Image } from 'antd'

function Content4(props) {
  const { ...tagProps } = props
  const { dataSource, isMobile } = tagProps
  delete tagProps.dataSource
  delete tagProps.isMobile
  const animation = {
    y: '+=30',
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad'
  }
  const videoChildren = dataSource.video.children.video
  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <div {...dataSource.page}>
        <div key="title" {...dataSource.titleWrapper}>
          {dataSource.titleWrapper.children.map(getChildrenToRender)}
        </div>
        {/* <OverPack {...dataSource.OverPack}>
          <TweenOne
            key="video"
            animation={{ ...animation, delay: 300 }}
            {...dataSource.video}
          >
            {isMobile ? (
              <Image
                preview={false}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            ) : (
              <Image
                preview={false}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            )}
          </TweenOne>
        </OverPack> */}
        <TweenOne key="video" animation={{ ...animation, delay: 300 }} {...dataSource.video}>
          {isMobile ? (
            <Image preview={false} src="/img/company.png" />
          ) : (
            <Image preview={false} src="/img/company.png" />
          )}
        </TweenOne>
      </div>
    </div>
  )
}

export default Content4
