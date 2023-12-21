import React from "react";
import { enquireScreen } from "enquire-js";
let isMobile;
enquireScreen((b) => {
	isMobile = b;
});

export const Nav30DataSource = {
	wrapper: { className: "header3" },
	page: { className: "home-page" },
	logo: {
		className: "header3-logo",
		children: "/svg/logo.svg",
	},
	Menu: {
		className: "header3-menu",
		children: [
			{
				name: "item0",
				className: "header3-item",
				children: {
					href: "/",
					children: [{ children: "产品文档", name: "text" }],
				},
			},
			{
				name: "item1",
				className: "header3-item",
				children: {
					href: "/video",
					children: [{ children: "视频教程", name: "text" }],
				},
			},
			{
				name: "item2",
				className: "header3-item",
				children: {
					href: "/product",
					children: [{ children: "不卡系列", name: "text" }],
				},
			},
			{
				name: "item3",
				className: "header3-item",
				children: {
					href: "/download",
					children: [{ children: "产品下载", name: "text" }],
				},
			},
			{
				name: "item4",
				className: "header3-item",
				children: {
					href: "/plugin",
					children: [{ children: "插件生态", name: "text" }],
				},
			},
			{
				name: "item5",
				className: "header3-item",
				children: {
					href: "/about",
					children: [{ children: "关于我们", name: "text" }],
				},
			},
			{
				name: "item6",
				className: "header3-button",
				children: {
					href: "https://console.monibuca.com",
					children: isMobile
						? [{ children: "控制台", name: "text" }]
						: [
								{
									children: (
										<div className="nav-button" key="button-console">
											<img
												src="/svg/console.svg"
												alt=""
												width={24}
												style={{ marginRight: "9px" }}
											/>
											控制台
										</div>
									),
									name: "text",
								},
						  ],
				},
			},
			{
				name: "item7",
				className: "header3-button",
				children: {
					href: "https://github.com/langhuihui/monibuca",
					children: isMobile
						? [{ children: "Monibuca 开源", name: "text" }]
						: [
								{
									children: (
										<div className="nav-button" key="button-github">
											<img
												src="/svg/github.svg"
												alt=""
												width={24}
												style={{ marginRight: "9px" }}
											/>
											Monibuca 开源
										</div>
									),
									name: "text",
								},
						  ],
				},
			},
		],
	},
	mobileMenu: { className: "header3-mobile-menu" },
};
