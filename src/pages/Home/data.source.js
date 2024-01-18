import React from "react";

import { Space, Image, Button } from "antd";
import { enquireScreen } from "enquire-js";

import { Nav30DataSource } from "../../data/index";

let isMobile;
enquireScreen((b) => {
	isMobile = b;
});

export { Nav30DataSource };
export const Banner10DataSource = {
  wrapper: { className: "banner1" },
}
export const Banner20DataSource = {
	wrapper: { className: "banner2" },
	BannerAnim: {
		children: [
			{
				name: "elem0",
				BannerElement: { className: "banner-user-elem" },
				page: { className: "home-page banner2-page" },
				textWrapper: { className: "banner2-text-wrapper" },
				bg: { className: "bg bg0" },
				title: {
					className: "banner2-title",
					children: "开源Go语言流媒体服务器开发框架",
				},
				content: {
					className: "banner2-version",
					children: "最新版:v4.5.8",
				},
				kun: {
					className: "banner2-content",
					children:
						"旨在提供一个对开发者友好，兼具高性能的流媒体服务器开发框架，对于想快速入门流媒体开发的公司和个人提供一个低门槛的方案。Monibuca 的理念是共建共赢，平等互利，打造一个行业业务复用生态环境，降低企业在音视频领域重复开发付出的高昂成本。",
				},
				button: {
					className: "banner2-button",
					children: "开源版本",
				},
				button2: {
					className: "banner2-button",
					children: "企业版",
				},
			},
		],
	},
};

export const Content40DataSource = {
	wrapper: { className: "home-page-wrapper content4-wrapper" },
	page: { className: "home-page content4" },
	OverPack: { playScale: 0.3, className: "" },
	titleWrapper: {
		// className: 'title-wrapp',
		children: [
			{
				name: "title",
				children: "我们的合作伙伴",
				className: "title-h1",
			},
		],
	},
	video: {
		className: "content4-video",
		children: {
			video: "https://os.alipayobjects.com/rmsportal/EejaUGsyExkXyXr.mp4",
			image: "https://zos.alipayobjects.com/rmsportal/HZgzhugQZkqUwBVeNyfz.jpg",
		},
	},
};

export const Content50DataSource = {
	wrapper: { className: "home-page-wrapper content5-wrapper" },
	page: { className: "home-page content5" },
	OverPack: { playScale: 0.3, className: "home-page" },
	titleWrapper: {
		className: "content5-title-wrapper",
		children: [
			{ name: "title", children: "满足多种行业需求", className: "title-h1" },
			{
				name: "content",
				className: "title-content",
				children: (
					<div>
						截止目前已经为24企业, <br />
						提供路测 、实时监控 、应急指挥、 会议 、工厂安全生产 、智慧农业 、
						<br />
						驾考监控 、 变电站视频监测、安防视频联网场景 、 CDN 、 反向代理 、
						AI
					</div>
				),
			},
		],
	},
	block: {
		className: "content5-img-wrapper",
		gutter: 16,
		children: [
			{
				name: "block3",
				className: "block",
				md: 8,
				xs: 24,
				children: {
					wrapper: {
						className: "content5-block-content",
						href: "https://mp.weixin.qq.com/s/65_VOhDgjlty2MXZ-ZOZ3g",
						target: "_blank",
					},
					img: {
						children: "/kehu/hang-tian.png",
					},
					content: {
						children: (
							<div className="box">
								<div className="title">Monibuca 客户案例—航天科技控股集团</div>
								<div className="desc">
									业务聚焦航天应用、物联网、汽车电子围绕一横三纵的业务布局推动产业发展
								</div>
							</div>
						),
					},
				},
			},
			{
				name: "block2",
				className: "block",
				md: 8,
				xs: 24,
				children: {
					wrapper: {
						className: "content5-block-content",
						href: "https://mp.weixin.qq.com/s/g7Ye6dRo1EZA8trNphaSmg",
						target: "_blank",
					},
					img: {
						children: "/kehu/yu-ji.png",
					},
					content: {
						children: (
							<div className="box">
								<div className="title">Monibuca 客户案例—厦门宇基数字科技</div>
								<div className="desc">
									团队致力于为电力、建筑、市政、教育、交通等行业提供全方位、全生命周期的一体化综合服务
								</div>
							</div>
						),
					},
				},
			},
			{
				name: "block1",
				className: "block",
				md: 8,
				xs: 24,
				children: {
					wrapper: {
						className: "content5-block-content",
						href: "https://mp.weixin.qq.com/s/WCS6y9nc3CRYWhp56efB8A",
						target: "_blank",
					},
					img: {
						children: "/kehu/dian-li.png",
					},
					content: {
						children: (
							<div className="box">
								<div className="title">Monibuca 客户案例—电力服务</div>
								<div className="desc">解决电气数字化为目的，构建 IOT 平台</div>
								{/* <Button type="link">解决电气数字化为目的，构建 IOT 平台</Button> */}
							</div>
						),
					},
				},
			},
			{
				name: "block4",
				className: "block",
				md: 8,
				xs: 24,
				children: {
					wrapper: {
						className: "content5-block-content",
						href: "https://mp.weixin.qq.com/s/_o2U23FszOJ_Xn5PhN0pjA",
						target: "_blank",
					},
					img: {
						children: "/kehu/guang-xi.png",
					},
					content: {
						children: (
							<div className="box">
								<div className="title">Monibuca 客户案例—广西计算中心</div>
								<div className="desc">
									主要以解决分散的高速公路监控设备进行统一接入，实现集中管理为目的，构建视频监控管理平台
								</div>
							</div>
						),
					},
				},
			},
			{
				name: "block0",
				className: "block",
				md: 8,
				xs: 24,
				children: {
					wrapper: {
						className: "content5-block-content",
						href: "https://mp.weixin.qq.com/s/4U-myuuhJ-ZXxPxLP_6aNw",
						target: "_blank",
					},
					img: {
						children: "/kehu/tan-tan.png",
					},
					content: {
						children: (
							<div className="box">
								<div className="title">Monibuca 客户案例—坦坦科技</div>
								<div className="desc">一个专注于做视频 AI 算法项目的团队</div>
							</div>
						),
					},
				},
			},
		],
	},
};

export const Feature40DataSource = {
	wrapper: { className: "home-page-wrapper feature4-wrapper feature4" },
	page: { className: "home-page feature4" },
	// OverPack: { className: 'home-page feature4', playScale: 0.3 },
	tabs: {
		className: "feature4-content",
		wrapper: { className: "feature4-content-wrapper" },

		titleWrapper: {
			className: "feature4-title-wrapper",
			children: [
				{ name: "title", children: "插件生态", className: "title-h1" },
			],
			barWrapper: {
				className: "feature4-title-bar-wrapper",
				children: {
					className: "feature4-title-bar",
				},
			},
		},

		children: [
			{
				title: { className: "feature4-title-text", children: "录像转直播" },
				className: "feature4-item",
				name: "block0",
				children: [
					{
						md: 24,
						xs: 24,
						children: {
							className: "feature4-text",
							children: (
								<Space
									className="feature4-text-list"
									direction={isMobile ? "vertical" : "horizontal"}
								>
									<Image
										preview={false}
										width={400}
										src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
									/>
									<Image
										preview={false}
										width={400}
										src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
									/>
								</Space>
							),
						},
					},
				],
			},
			{
				title: { className: "feature4-title-text", children: "多人视频" },
				className: "feature4-item",
				name: "block1",
				children: [
					{
						md: 24,
						xs: 24,
						children: {
							className: "feature4-text",
							children: (
								<Space className="feature4-text-list">
									<Image
										preview={false}
										width={400}
										src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
									/>
									<Image
										preview={false}
										width={400}
										src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
									/>
								</Space>
							),
						},
					},
				],
			},
			{
				title: { className: "feature4-title-text", children: "HLS 直播转发" },
				className: "feature4-item",
				name: "block2",
				children: [
					{
						md: 24,
						xs: 24,
						children: {
							className: "feature4-text",
							children: (
								<Space className="feature4-text-list">
									<Image
										preview={false}
										width={400}
										src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
									/>
									<Image
										preview={false}
										width={400}
										src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
									/>
								</Space>
							),
						},
					},
				],
			},
			{
				title: { className: "feature4-title-text", children: "监控录制" },
				className: "feature4-item",
				name: "block3",
				children: [
					{
						md: 24,
						xs: 24,
						children: {
							className: "feature4-text",
							children: (
								<Space className="feature4-text-list">
									<Image
										preview={false}
										width={400}
										src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
									/>
									<Image
										preview={false}
										width={400}
										src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
									/>
								</Space>
							),
						},
					},
				],
			},
			{
				title: {
					className: "feature4-title-text",
					children: "Web 页面观看监控",
				},
				className: "feature4-item",
				name: "block4",
				children: [
					{
						md: 24,
						xs: 24,
						children: {
							className: "feature4-text",
							children: (
								<Space className="feature4-text-list">
									<Image
										preview={false}
										width={400}
										src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
									/>
									<Image
										preview={false}
										width={400}
										src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
									/>
								</Space>
							),
						},
					},
				],
			},
		],
	},
};

export const Feature60DataSource = {
	wrapper: { className: "home-page-wrapper feature6-wrapper" },
	page: { className: "home-page feature6" },
	// OverPack: { className: 'home-page feature6', playScale: 0.3 },
	Carousel: {
		className: "feature6-content",
		dots: false,
		wrapper: { className: "feature6-content-wrapper" },

		titleWrapper: {
			className: "feature6-title-wrapper",
			children: [
				{ name: "title", children: "产品优势", className: "title-h1" },
			],
			barWrapper: {
				className: "feature6-title-bar-wrapper",
				children: {
					className: "feature6-title-bar",
				},
			},
		},

		children: [
			{
				title: { className: "feature6-title-text", children: "极致简洁" },
				className: "feature6-item",
				name: "block0",
				children: [
					{
						md: 12,
						xs: 24,
						children: {
							children: (
								<Space direction="vertical" align="start">
									<div className="feature6-t1">GO语言+简洁的代码逻辑</div>
									<div className="feature6-t2">
										Go语言本身的简洁+代码设计追求极致精简、优雅，阅读源码变成一件愉快的事{" "}
										<br /> 启动工程提供了标准化的接入示例，插件引入十分简单
									</div>
									<div
										className="feature6-button"
										type="primary"
										style={{ marginTop: "40px" }}
									>
										<img
											src="/svg/github.svg"
											alt=""
											width={30}
											style={{ marginRight: "9px" }}
										/>
										Github
									</div>
								</Space>
							),
						},
					},
					{
						md: 12,
						xs: 24,
						children: {
							className: "feature6-text",
							children: (
								<Space align="end">
									<Image
										preview={false}
										width={400}
										src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
									/>
								</Space>
							),
						},
					},
				],
			},
			{
				title: { className: "feature6-title-text", children: "高可扩展" },
				className: "feature6-item",
				name: "block1",
				children: [
					{
						md: 12,
						xs: 24,
						children: {
							children: (
								<Space direction="vertical" align="start">
									<div className="feature6-t1">GO语言+简洁的代码逻辑</div>
									<div className="feature6-t2">
										Go语言本身的简洁+代码设计追求极致精简、优雅，阅读源码变成一件愉快的事{" "}
										<br /> 启动工程提供了标准化的接入示例，插件引入十分简单
									</div>
									<div
										className="feature6-button"
										type="primary"
										style={{ marginTop: "40px" }}
									>
										<img
											src="/svg/github.svg"
											alt=""
											width={30}
											style={{ marginRight: "9px" }}
										/>
										Github
									</div>
								</Space>
							),
						},
					},
					{
						md: 12,
						xs: 24,
						children: {
							className: "feature6-text",
							children: (
								<Space align="end">
									<Image
										preview={false}
										width={400}
										src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
									/>
								</Space>
							),
						},
					},
				],
			},
			{
				title: { className: "feature6-title-text", children: "简单易用" },
				className: "feature6-item",
				name: "block2",
				children: [
					{
						md: 12,
						xs: 24,
						children: {
							children: (
								<Space direction="vertical" align="start">
									<div className="feature6-t1">GO语言+简洁的代码逻辑</div>
									<div className="feature6-t2">
										Go语言本身的简洁+代码设计追求极致精简、优雅，阅读源码变成一件愉快的事{" "}
										<br /> 启动工程提供了标准化的接入示例，插件引入十分简单
									</div>
									<div
										className="feature6-button"
										type="primary"
										style={{ marginTop: "40px" }}
									>
										<img
											src="/svg/github.svg"
											alt=""
											width={30}
											style={{ marginRight: "9px" }}
										/>
										Github
									</div>
								</Space>
							),
						},
					},
					{
						md: 12,
						xs: 24,
						children: {
							className: "feature6-text",
							children: (
								<Space align="end">
									<Image
										preview={false}
										width={400}
										src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
									/>
								</Space>
							),
						},
					},
				],
			},
		],
	},
};

export const Feature70DataSource = {
	wrapper: { className: "home-page-wrapper feature7-wrapper" },
	page: { className: "home-page feature7" },
	// OverPack: { className: 'home-page feature7', playScale: 0.3 },
	Carousel: {
		className: "feature7-content",
		dots: false,
		wrapper: { className: "feature7-content-wrapper" },
		titleWrapper: {
			className: "feature7-title-wrapper",
			children: [
				{ name: "title", children: "插件生态", className: "title-h1" },
			],
			barWrapper: {
				className: "feature7-title-bar-wrapper",
				children: {
					className: "feature7-title-bar",
				},
			},
		},

		children: [
			{
				title: { className: "feature7-title-text", children: "官方插件" },
				className: "feature7-item",
				name: "block0",
				children: [
					{
						md: 8,
						xs: 24,
						children: {
							className: "feature7-text",
							children: (
								<Space className="item">
									<Image
										className="img"
										preview={false}
										src="/img/plugin.png"
									/>
									<Space direction="vertical" align="start">
										<div className="title">Plugin-rtmp</div>
										<div className="desc">rtmp协议接受推拉、对外推拉</div>
									</Space>
								</Space>
							),
						},
					},
					{
						md: 8,
						xs: 24,
						children: {
							className: "feature7-text",
							children: (
								<Space className="item">
									<Image
										className="img"
										preview={false}
										src="/img/plugin.png"
									/>
									<Space direction="vertical" align="start">
										<div className="title">Plugin-rtmp</div>
										<div className="desc">rtmp协议接受推拉、对外推拉</div>
									</Space>
								</Space>
							),
						},
					},
					{
						md: 8,
						xs: 24,
						children: {
							className: "feature7-text",
							children: (
								<Space className="item">
									<Image
										className="img"
										preview={false}
										src="/img/plugin.png"
									/>
									<Space direction="vertical" align="start">
										<div className="title">Plugin-rtmp</div>
										<div className="desc">rtmp协议接受推拉、对外推拉</div>
									</Space>
								</Space>
							),
						},
					},
					{
						md: 8,
						xs: 24,
						children: {
							className: "feature7-text",
							children: (
								<Space className="item">
									<Image
										className="img"
										preview={false}
										src="/img/plugin.png"
									/>
									<Space direction="vertical" align="start">
										<div className="title">Plugin-rtmp</div>
										<div className="desc">rtmp协议接受推拉、对外推拉</div>
									</Space>
								</Space>
							),
						},
					},
				],
			},
			{
				title: { className: "feature7-title-text", children: "第三方开源" },
				className: "feature7-item",
				name: "block1",
				children: [
					{
						md: 8,
						xs: 24,
						children: {
							className: "feature7-text",
							children: (
								<Space className="item">
									<Image
										className="img"
										preview={false}
										src="/img/plugin.png"
									/>
									<Space direction="vertical" align="start">
										<div className="title">Plugin-rtmp</div>
										<div className="desc">rtmp协议接受推拉、对外推拉</div>
									</Space>
								</Space>
							),
						},
					},
					{
						md: 8,
						xs: 24,
						children: {
							className: "feature7-text",
							children: (
								<Space className="item">
									<Image
										className="img"
										preview={false}
										src="/img/plugin.png"
									/>
									<Space direction="vertical" align="start">
										<div className="title">Plugin-rtmp</div>
										<div className="desc">rtmp协议接受推拉、对外推拉</div>
									</Space>
								</Space>
							),
						},
					},
					{
						md: 8,
						xs: 24,
						children: {
							className: "feature7-text",
							children: (
								<Space className="item">
									<Image
										className="img"
										preview={false}
										src="/img/plugin.png"
									/>
									<Space direction="vertical" align="start">
										<div className="title">Plugin-rtmp</div>
										<div className="desc">rtmp协议接受推拉、对外推拉</div>
									</Space>
								</Space>
							),
						},
					},
					{
						md: 8,
						xs: 24,
						children: {
							className: "feature7-text",
							children: (
								<Space className="item">
									<Image
										className="img"
										preview={false}
										src="/img/plugin.png"
									/>
									<Space direction="vertical" align="start">
										<div className="title">Plugin-rtmp</div>
										<div className="desc">rtmp协议接受推拉、对外推拉</div>
									</Space>
								</Space>
							),
						},
					},
				],
			},
			{
				title: { className: "feature7-title-text", children: "付费插件" },
				className: "feature7-item",
				name: "block1",
				children: [
					{
						md: 8,
						xs: 24,
						children: {
							className: "feature7-text",
							children: (
								<Space className="item">
									<Image
										className="img"
										preview={false}
										src="/img/plugin.png"
									/>
									<Space direction="vertical" align="start">
										<div className="title">Plugin-rtmp</div>
										<div className="desc">rtmp协议接受推拉、对外推拉</div>
									</Space>
								</Space>
							),
						},
					},
					{
						md: 8,
						xs: 24,
						children: {
							className: "feature7-text",
							children: (
								<Space className="item">
									<Image
										className="img"
										preview={false}
										src="/img/plugin.png"
									/>
									<Space direction="vertical" align="start">
										<div className="title">Plugin-rtmp</div>
										<div className="desc">rtmp协议接受推拉、对外推拉</div>
									</Space>
								</Space>
							),
						},
					},
					{
						md: 8,
						xs: 24,
						children: {
							className: "feature7-text",
							children: (
								<Space className="item">
									<Image
										className="img"
										preview={false}
										src="/img/plugin.png"
									/>
									<Space direction="vertical" align="start">
										<div className="title">Plugin-rtmp</div>
										<div className="desc">rtmp协议接受推拉、对外推拉</div>
									</Space>
								</Space>
							),
						},
					},
					{
						md: 8,
						xs: 24,
						children: {
							className: "feature7-text",
							children: (
								<Space className="item">
									<Image
										className="img"
										preview={false}
										src="/img/plugin.png"
									/>
									<Space direction="vertical" align="start">
										<div className="title">Plugin-rtmp</div>
										<div className="desc">rtmp协议接受推拉、对外推拉</div>
									</Space>
								</Space>
							),
						},
					},
				],
			},
		],
	},
};

export const Feature80DataSource = {
	zhan: { className: "feature8-zhan" },
	wrapper: { className: "home-page-wrapper feature8-wrapper" },
	OverPack: { className: "feature8", playScale: 0.3 },
	Carousel: {
		className: "feature8-content",
		dots: false,
		wrapper: { className: "feature8-content-wrapper" },

		titleWrapper: {
			className: "feature8-title-wrapper",
			children: [
				{ name: "title", children: "高效的管理工具", className: "title-h1" },
			],
			barWrapper: {
				className: "feature8-title-bar-wrapper",
				children: {
					className: "feature8-title-bar",
				},
			},
		},

		children: [
			{
				title: { className: "feature8-title-text", children: "API调试工具" },
				className: "feature8-item",
				name: "block0",
				children: [
					{
						md: 24,
						xs: 24,
						children: {
							className: "feature8-text",
							children: (
								<Space direction="vertical">
									<Image
										preview={false}
										width={!isMobile ? 900 : 300}
										height={!isMobile ? 599 : 200}
										src="/img/api.png"
									/>
									<div className="desc">
										说明：体验版包括 global 下的所有接口，但不包括插件接口，
										获取完整版步骤：扫描本页面最下面左侧支持我们， 赞助 99
										元，将 【 截图 】 发送到【
										公众号私信】，我们将发送完整版给您。
									</div>
									<Space size="large">
										<div className="btn1">
											<img
												src="/svg/ic_QR code.svg"
												alt=""
												width={24}
												style={{ marginRight: "9px" }}
											/>
											赞赏 99 元
										</div>
										<div className="btn2">立即体验</div>
									</Space>
								</Space>
							),
						},
					},
				],
			},
			{
				title: { className: "feature8-title-text", children: "Console" },
				className: "feature8-item",
				name: "block1",
				children: [
					{
						md: 24,
						xs: 24,
						children: {
							className: "feature8-text",
							children: (
								<Space direction="vertical">
									<Image
										preview={false}
										width={!isMobile ? 900 : 300}
										height={!isMobile ? 599 : 200}
										src="/img/console.png"
									/>
									<div className="desc">
										说明：体验版包括 global 下的所有接口，但不包括插件接口，
										获取完整版步骤：扫描本页面最下面左侧支持我们， 赞助 99
										元，将 【 截图 】 发送到【
										公众号私信】，我们将发送完整版给您。
									</div>
									<Space size="large">
										<div className="btn1">
											<img
												src="/svg/ic_QR code.svg"
												alt=""
												width={24}
												style={{ marginRight: "9px" }}
											/>
											赞赏 99 元
										</div>
										<div className="btn2">立即体验</div>
									</Space>
								</Space>
							),
						},
					},
				],
			},
			{
				title: { className: "feature8-title-text", children: "Admin" },
				className: "feature8-item",
				name: "block2",
				children: [
					{
						md: 24,
						xs: 24,
						children: {
							className: "feature8-text",
							children: (
								<Space direction="vertical">
									<Image
										preview={false}
										width={!isMobile ? 900 : 300}
										height={!isMobile ? 599 : 200}
										src="/img/admin.png"
									/>
									<div className="desc">
										说明：体验版包括 global 下的所有接口，但不包括插件接口，
										获取完整版步骤：扫描本页面最下面左侧支持我们， 赞助 99
										元，将 【 截图 】 发送到【
										公众号私信】，我们将发送完整版给您。
									</div>
									<Space size="large">
										<div className="btn1">
											<img
												src="/svg/ic_QR code.svg"
												alt=""
												width={24}
												style={{ marginRight: "9px" }}
											/>
											赞赏 99 元
										</div>
										<div className="btn2">立即体验</div>
									</Space>
								</Space>
							),
						},
					},
				],
			},
		],
	},
};

export const Footer10DataSource = {
	wrapper: { className: "home-page-wrapper footer1-wrapper" },
	// OverPack: { className: 'footer1', playScale: 0.2 },
	page: { className: "footer1 home-page", playScale: 0.2 },
	block: {
		className: "home-page",
		gutter: 0,
		children: [
			{
				name: "block0",
				xs: 24,
				md: 4,
				className: "block",
				title: { children: "视频教程" },
				childWrapper: {
					children: [
						{ name: "link0", href: "#", children: "B 站分享" },
						{ name: "link1", href: "#", children: "RTS 分享" },
					],
				},
			},
			{
				name: "block1",
				xs: 24,
				md: 4,
				className: "block",
				title: { children: "产品文档" },
				childWrapper: {
					children: [
						{ name: "link0", href: "#", children: "快速上手" },
						{ name: "link1", href: "#", children: "使用手册" },
						{ name: "link2", href: "#", children: "常见问题" },
						{ name: "link3", href: "#", children: "二次开发" },
					],
				},
			},
			{
				name: "block2",
				xs: 24,
				md: 4,
				className: "block",
				title: { children: "下载链接" },
				childWrapper: {
					children: [
						{ href: "#", name: "link0", children: "Windows" },
						{ href: "#", name: "link1", children: "Mac" },
						{ href: "#", name: "link2", children: "Mac(arm64)" },
						{ href: "#", name: "link3", children: "Linux" },
						{ href: "#", name: "link4", children: "Linux(arm64)" },
					],
				},
			},
			{
				name: "block3",
				xs: 24,
				md: 4,
				className: "block",
				title: { children: "不卡系列" },
				childWrapper: {
					children: [
						{ href: "#", name: "link0", children: "Monibuca" },
						{ href: "#", name: "link1", children: "Jessibuca" },
						{ href: "#", name: "link2", children: "Rebebuca" },
					],
				},
			},
			{
				name: "block4",
				xs: 24,
				md: 4,
				className: "block",
				title: { children: "关于我们" },
				childWrapper: {
					children: [
						{ href: "#", name: "link0", children: "FAQ" },
						{ href: "#", name: "link1", children: "开发团队" },
						{ href: "#", name: "link2", children: "诞生故事" },
					],
				},
			},
			{
				name: "block5",
				xs: 24,
				md: 4,
				className: "block",
				title: { children: "联系我们" },
				childWrapper: {
					children: [
						{ href: "#", name: "link0", children: "Monibuca 微信交流群" },
						{ href: "#", name: "link1", children: "[ 不卡学院 ] 交流群" },
					],
				},
			},
		],
	},
	copyrightWrapper: { className: "copyright-wrapper" },
	copyrightPage: { className: "home-page" },
	copyright: {
		className: "copyright",
		children: <span>Copyright © Monibuca 开发团队</span>,
	},
};
