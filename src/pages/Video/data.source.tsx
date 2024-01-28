import { Space, Image } from "antd";
import { Nav30DataSource } from "../../data/index";
import { LinkOutlined } from "@ant-design/icons";

export { Nav30DataSource };

const videoData = [
  {
    bannerTitle: "从零启动",
    title: "从零启动 m7s V4",
    desc: "本视频讲解了从零创建一个go工程的方式引入m7s，启动不含任何插件的引擎的过程。",
    createdDate: "2022-3-4",
    url: "https://www.bilibili.com/video/BV1iq4y147N4/?spm_id_from=333.999.0.0",
    pv: 8092,
  },
  {
    bannerTitle: "插件引入",
    title: "m7s V4 -插件引入",
    desc: "实操演示,介绍m7s v4 版本的rtmp和hdl插件的引入过程,及注意点",
    createdDate: "2022-3-5",
    url: "https://www.bilibili.com/video/BV1sP4y1g7BF/?spm_id_from=333.999.0.0",
    pv: 3978,
  },
  {
    bannerTitle: "从远端拉流",
    title: "m7s v4 —从远端拉流",
    desc: "通过图谱动态演示,介绍m7s v4 版本的rtmp和hdl从远端拉流的功能",
    createdDate: "2022-3-9",
    url: "https://www.bilibili.com/video/BV1Nq4y1i7Zn/?spm_id_from=333.999.0.0",
    pv: 2558,
  },
  {
    bannerTitle: "向远端推流",
    title: "m7s v4 视频教程——向远端推流",
    desc: "介绍m7s v4 版本的rtmp插件向远端推流的功能",
    createdDate: "2022-3-13",
    url: "https://www.bilibili.com/video/BV1mq4y1i7rp/?spm_id_from=333.999.0.0",
    pv: 1733,
  },
  {
    bannerTitle: "按需拉流",
    title: "m7s v4 视频教程——按需拉流",
    desc: "介绍m7s v4 版本的rtmp插件按需拉流功能",
    createdDate: "2022-3-14",
    url: "https://www.bilibili.com/video/BV1YF411s7nu/?spm_id_from=333.999.0.0",
    pv: 1773,
  },
  {
    bannerTitle: "持续发布",
    title: "m7s v4 视频教程——持续发布",
    desc: "介绍m7s v4 版本接续发布功能，以及流的状态机图",
    createdDate: "2022-3-16",
    url: "https://www.bilibili.com/video/BV1ar4y1i79S/?spm_id_from=333.999.0.0",
    pv: 1619,
  },
  {
    bannerTitle: "Rtsp插件源码解析",
    title: "m7s v4 视频教程——rtsp插件源码解析",
    desc: "rtsp插件走读，可供自定义二次开发插件作为参考",
    createdDate: "2022-3-20",
    url: "https://www.bilibili.com/video/BV1BS4y1U71m/?spm_id_from=333.999.0.0",
    pv: 1598,
  },
  {
    bannerTitle: "WebTransport演示",
    title: "m7s v4 视频教程——WebTransport演示",
    desc: "介绍m7s v4 版本的预览插件和截图插件以及WebTransport如何在本地进行测试的过程。并且对各个协议拉流播放的效果进行了延迟对比。",
    createdDate: "2022-6-27",
    url: "https://www.bilibili.com/video/BV1EL4y1P7pf/?spm_id_from=333.999.0.0",
    pv: 1270,
  },
  {
    bannerTitle: "gb28181 dump",
    title: "m7s v4 视频教程——gb28181 dump",
    desc: "介绍m7s v4 版本的gb28181插件的ps流dump功能，用于对视频流数据进行分析",
    createdDate: "2022-9-12",
    url: "https://www.bilibili.com/video/BV1TV4y1g7g6/?spm_id_from=333.999.0.0",
    pv: 1249,
  },
  {
    bannerTitle: "配置覆盖机制",
    title: "m7s v4 视频教程——配置覆盖机制",
    desc: "介绍m7s v4 版本的配置覆盖机制，m7s是一款开源的纯go的插件化流媒体开发框架。",
    createdDate: "2022-10-16",
    url: "https://www.bilibili.com/video/BV1vD4y1r7j9/?spm_id_from=333.999.0.0",
    pv: 675,
  },
  {
    bannerTitle: "Room演示",
    title: "m7s v4 视频教程——Room演示",
    desc: "介绍m7s v4 版本的Room演示功能，Room插件提供了房间的基本功能，包括信令的广播，进退房，文字聊天，多人视频等。",
    createdDate: "2023-3-17",
    url: "https://www.bilibili.com/video/BV1BT411k77t/?spm_id_from=333.999.0.0",
    pv: 805,
  },
  {
    bannerTitle: "引擎启动过程",
    title: "m7s v4 源码解读——引擎启动过程",
    desc: "解读m7s v4 engine源码之引擎启动过程",
    createdDate: "2022-3-26",
    url: "https://www.bilibili.com/video/BV1L94y1f7s4/?spm_id_from=333.999.0.0",
    pv: 1244,
  },
  {
    bannerTitle: "Stream结构体",
    title: "m7s v4 源码解读——Stream结构体",
    desc: "介绍m7s v4 版本引擎中的Stream结构体的细节",
    createdDate: "2022-3-27",
    url: "https://www.bilibili.com/video/BV1aZ4y1m7Fo/?spm_id_from=333.999.0.0",
    pv: 907,
  },
  {
    bannerTitle: "发布者逻辑",
    title: "m7s v4 源码解读——发布者逻辑",
    desc: "介绍m7s v4 版本的发布者相关定义以及结构",
    createdDate: "2022-4-2",
    url: "https://www.bilibili.com/video/BV1NT4y1v7NK/?spm_id_from=333.999.0.0",
    pv: 932,
  },
  {
    bannerTitle: "订阅者逻辑",
    title: "m7s v4 源码解读——订阅者逻辑",
    desc: "介绍m7s v4 的订阅者的定义和相关逻辑",
    createdDate: "2022-4-3",
    url: "https://www.bilibili.com/video/BV1M5411D7UL/?spm_id_from=333.999.0.0",
    pv: 614,
  },
  {
    bannerTitle: "处理视频帧",
    title: "m7s v4源码解读——处理视频帧",
    desc: "介绍m7s v4 engine对于输入不同格式的视频帧的处理逻辑，以及内存复用",
    createdDate: "2022-4-5",
    url: "https://www.bilibili.com/video/BV14T4y1v7E5/?spm_id_from=333.999.0.0",
    pv: 900,
  },
  {
    bannerTitle: "RingBuffer",
    title: "m7s v4 源码解读——RingBuffer",
    desc: "介绍m7s v4 版中流转发中最核心的部件——RingBuffer",
    createdDate: "2022-4-10",
    url: "https://www.bilibili.com/video/BV1uq4y1Y7gV/?spm_id_from=333.999.0.0",
    pv: 1198,
  },
];

export const Feature100DataSource = {
  wrapper: { className: "home-page-wrapper feature10-wrapper" },
  page: { className: "home-page feature10" },
  Carousel: {
    className: "feature10-content",
    dots: false,
    wrapper: { className: "feature10-content-wrapper" },
    titleWrapper: {
      className: "feature10-title-wrapper",
      children: [
        {
          name: "title",
          children: "合集·m7s v4 视频教程",
          className: "title-h1",
        },
      ],
      barWrapper: {
        className: "feature10-title-bar-wrapper",
        children: {
          className: "feature10-title-bar",
        },
      },
    },

    children: [
      {
        title: {
          className: "feature10-title-text",
          children: (
            <Space>
              <div className="sub-title" style={{ color: "#5A00FF" }}>
                17
              </div>
              <div className="sub-title">个视频</div>
              <div className="sub-title" style={{ margin: "0 16px" }}>
                |
              </div>
              <div className="sub-title" style={{ color: "#5A00FF" }}>
                2023-3-17
              </div>
              <div className="sub-title">更新</div>
            </Space>
          ),
        },
        className: "feature10-item",
        name: "block0",
        children: videoData.map((item) => {
          const obj = {
            md: 8,
            xs: 24,
            children: {
              className: "feature10-text",
              children: (
                <Space className="item" direction="vertical">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.open(item.url);
                    }}
                  >
                    <Image
                      className="img"
                      preview={false}
                      src="/img/video-bg.png"
                    />
                    <div className="banner-title">—— {item.bannerTitle}</div>
                  </div>
                  <Space direction="vertical" align="start">
                    <div className="title">{item.title}</div>
                    {/* <div className="title">{item.title} <LinkOutlined /></div> */}
                    <div className="desc">{item.desc}</div>
                    <div className="desc">
                      创建时间 {item.createdDate} &nbsp;<span>|</span>&nbsp;
                      播放量 {item.pv}
                    </div>
                  </Space>
                </Space>
              ),
            },
          };
          return obj;
        }),
      },
    ],
  },
};
