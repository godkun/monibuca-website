import { Popover } from 'antd'
import { enquireScreen } from 'enquire-js'

let isMobile
enquireScreen(b => {
  isMobile = b
})
export const Footer10DataSource = {
    wrapper: { className: 'home-page-wrapper footer1-wrapper' },
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
              {
                name: 'link0',
                target: '_blank',
                href: 'https://space.bilibili.com/328443019/channel/collectiondetail?sid=514619',
                children: 'B 站分享'
              },
              {
                name: 'link1',
                target: '_blank',
                href: 'https://www.bilibili.com/video/BV1jg411H7qE/',
                children: 'RTS 分享'
              }
            ]
          }
        },
        {
          name: 'block1',
          xs: 24,
          md: 4,
          className: 'block',
          title: { children: '产品文档' },
          childWrapper: {
            children: [
              {
                name: 'link0',
                target: '_blank',
                href: 'https://monibuca.com/guide/introduction.html',
                children: '快速上手'
              },
              {
                name: 'link2',
                target: '_blank',
                href: 'https://monibuca.com/guide/qa/error.html',
                children: '常见问题'
              }
            ]
          }
        },
        {
          name: 'block2',
          xs: 24,
          md: 4,
          className: 'block',
          title: { children: '下载链接' },
          childWrapper: {
            children: [
              {
                href: 'https://download.m7s.live/bin/m7s_windows_amd64.tar.gz',
                name: 'link0',
                children: 'Windows'
              },
              {
                href: 'https://download.m7s.live/bin/m7s_darwin_amd64.tar.gz',
                name: 'link1',
                children: 'Mac'
              },
              {
                href: 'https://download.m7s.live/bin/m7s_darwin_arm64.tar.gz',
                name: 'link2',
                children: 'Mac(arm64)'
              },
              {
                href: 'https://download.m7s.live/bin/m7s_linux_amd64.tar.gz',
                name: 'link3',
                children: 'Linux'
              },
              {
                href: 'https://download.m7s.live/bin/m7s_linux_arm64.tar.gz',
                name: 'link4',
                children: 'Linux(arm64)'
              }
            ]
          }
        },
        {
          name: 'block3',
          xs: 24,
          md: 4,
          className: 'block',
          title: { children: '不卡系列' },
          childWrapper: {
            children: [
              {
                href: 'https://monibuca.com',
                name: 'link0',
                target: '_blank',
                children: 'Monibuca'
              },
              {
                href: 'https://jessibuca.com',
                name: 'link1',
                target: '_blank',
                children: 'Jessibuca'
              },
              {
                href: 'https://rebebuca.com',
                name: 'link2',
                target: '_blank',
                children: 'Rebebuca'
              }
            ]
          }
        },
        {
          name: 'block4',
          xs: 24,
          md: 4,
          className: 'block',
          title: { children: '关于我们' },
          childWrapper: {
            children: [
              {
                href: 'https://monibuca.com/about/faq.html',
                name: 'link0',
                target: '_blank',
                children: 'FAQ'
              },
              {
                href: 'https://monibuca.com/about/team.html',
                name: 'link1',
                target: '_blank',
                children: '开发团队'
              },
              {
                href: 'https://monibuca.com/about/born.html',
                name: 'link2',
                target: '_blank',
                children: '诞生故事'
              }
            ]
          }
        },
        {
          name: 'block5',
          xs: 24,
          md: 4,
          className: 'block',
          title: { children: '联系我们' },
          childWrapper: {
            children: [
              {
                href: '#',
                name: 'link0',
  
                children: (
                  <Popover
                    content={
                      <div>
                        <img src="/img/wx-mp.jpg" alt="" height={250} />
                      </div>
                    }
                  >
                    微信公众号：不卡科技
                    <img src="/svg/ic_QR code.svg" alt="" width={24} style={{ marginRight: '9px' }} />
                  </Popover>
                )
              },
              {
                href: '#',
                name: 'link1',
                children: (
                  <Popover
                    content={
                      <div>
                        <img src="/img/qq-qun.jpeg" alt="" height={250} />
                      </div>
                    }
                  >
                    QQ群：751639168
                    <img src="/svg/ic_QR code.svg" alt="" width={24} style={{ marginRight: '9px' }} />
                  </Popover>
                )
              },
              {
                href: '#',
                name: 'link2',
                children: (
                  <Popover
                    content={
                      <div>
                        <img src="/img/qqgroup.jpg" alt="" height={250} />
                      </div>
                    }
                  >
                    QQ频道：p0qq0crz08
                    <img src="/svg/ic_QR code.svg" alt="" width={24} style={{ marginRight: '9px' }} />
                  </Popover>
                )
              }
            ]
          }
        }
      ]
    },
    copyrightWrapper: { className: 'copyright-wrapper' },
    copyrightPage: { className: 'home-page' },
    copyright: {
      className: 'copyright',
      children: (
        <div>
          <div>@2024 Monibuca All Rights Reserved 南京莫妮不卡科技有限公司</div>
          <div className="bei-an">
            <a href="https://beian.miit.gov.cn/" target="_blank">
              苏ICP备2023025807号-1
            </a>
            <img src="/img/beian.png"></img>
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011302321580"
              target="_blank"
            >
              苏公网安备 32011302321580号
            </a>
          </div>
        </div>
      )
    }
  }
  