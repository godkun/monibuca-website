import React from "react";

import { Space, Image } from "antd";
import { Nav30DataSource } from "../../data/index";

export { Nav30DataSource };

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
				{ name: "title", children: "合集·m7s v4 视频教程", className: "title-h1" },
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
				children: [
					{
						md: 8,
						xs: 24,
						children: {
							className: "feature10-text",
							children: (
								<Space className="item" direction="vertical">
									<Image
										className="img"
										preview={false}
										// width={384}
										src="/img/video-bg.png"
									/>
									<Space direction="vertical" align="start">
										<div className="title">从零启动 m7s V4</div>
										<div className="desc">
											本视频讲解了从零创建一个go工程的方式引入m7s，启动不含任何插件的引擎的过程。
										</div>
										<div className="desc">
											创建时间 2022-3-4 &nbsp;|&nbsp; 播放量 6369
										</div>
									</Space>
								</Space>
							),
						},
					},
					{
						md: 8,
						xs: 24,
						children: {
							className: "feature10-text",
							children: (
								<Space className="item" direction="vertical">
									<Image
										className="img"
										preview={false}
										// width={384}
										src="/img/video-bg.png"
									/>
									<Space direction="vertical" align="start">
										<div className="title">从零启动 m7s V4</div>
										<div className="desc">
											本视频讲解了从零创建一个go工程的方式引入m7s，启动不含任何插件的引擎的过程。
										</div>
										<div className="desc">
											创建时间 2022-3-4 &nbsp;|&nbsp; 播放量 6369
										</div>
									</Space>
								</Space>
							),
						},
					},
					{
						md: 8,
						xs: 24,
						children: {
							className: "feature10-text",
							children: (
								<Space className="item" direction="vertical">
									<Image
										className="img"
										preview={false}
										// width={384}
										src="/img/video-bg.png"
									/>
									<Space direction="vertical" align="start">
										<div className="title">从零启动 m7s V4</div>
										<div className="desc">
											本视频讲解了从零创建一个go工程的方式引入m7s，启动不含任何插件的引擎的过程。
										</div>
										<div className="desc">
											创建时间 2022-3-4 &nbsp;|&nbsp; 播放量 6369
										</div>
									</Space>
								</Space>
							),
						},
					},
					{
						md: 8,
						xs: 24,
						children: {
							className: "feature10-text",
							children: (
								<Space className="item" direction="vertical">
									<Image
										className="img"
										preview={false}
										// width={384}
										src="/img/video-bg.png"
									/>
									<Space direction="vertical" align="start">
										<div className="title">从零启动 m7s V4</div>
										<div className="desc">
											本视频讲解了从零创建一个go工程的方式引入m7s，启动不含任何插件的引擎的过程。
										</div>
										<div className="desc">
											创建时间 2022-3-4 &nbsp;|&nbsp; 播放量 6369
										</div>
									</Space>
								</Space>
							),
						},
					},
					{
						md: 8,
						xs: 24,
						children: {
							className: "feature10-text",
							children: (
								<Space className="item" direction="vertical">
									<Image
										className="img"
										preview={false}
										// width={384}
										src="/img/video-bg.png"
									/>
									<Space direction="vertical" align="start">
										<div className="title">从零启动 m7s V4</div>
										<div className="desc">
											本视频讲解了从零创建一个go工程的方式引入m7s，启动不含任何插件的引擎的过程。
										</div>
										<div className="desc">
											创建时间 2022-3-4 &nbsp;|&nbsp; 播放量 6369
										</div>
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
