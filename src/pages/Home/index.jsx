/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Content4 from "./Content4";
import Content5 from "./Content5";
import Feature6 from "./Feature6";
import Feature7 from "./Feature7";
import Feature4 from "./Feature4";
import Feature8 from "./Feature8";

import {
  Banner10DataSource,
	Banner20DataSource,
	Content40DataSource,
	Content50DataSource,
	Feature60DataSource,
	Feature70DataSource,
	Feature40DataSource,
	Feature80DataSource,
} from "./data.source";
import "./less/antMotionStyle.less";

let isMobile;
enquireScreen((b) => {
	isMobile = b;
});

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isMobile,
		};
	}

	componentDidMount() {
		// 适配手机屏幕;
		enquireScreen((b) => {
			this.setState({ isMobile: !!b });
		});
	}

	render() {
		const children = [
      // <Banner1 
      //   id="Banner1_0"
      //  key="Banner1_0"
      //  dataSource={Banner10DataSource}
      //  isMobile={this.state.isMobile}/>,
			<Banner2
				id="Banner2_0"
				key="Banner2_0"
				dataSource={Banner20DataSource}
				isMobile={this.state.isMobile}
			/>,

			// <Feature6
			// 	id="Feature6_0"
			// 	key="Feature6_0"
			// 	dataSource={Feature60DataSource}
			// 	isMobile={this.state.isMobile}
			// />,

			<Feature4
				id="Feature4_0"
				key="Feature4_0"
				dataSource={Feature40DataSource}
				isMobile={this.state.isMobile}
			/>,

			// <Feature7
			// 	id="Feature7_0"
			// 	key="Feature7_0"
			// 	dataSource={Feature70DataSource}
			// 	isMobile={this.state.isMobile}
			// />,

			<Feature8
				id="Feature8_0"
				key="Feature8_0"
				dataSource={Feature80DataSource}
				isMobile={this.state.isMobile}
			/>,

			<Content5
				id="Content5_0"
				key="Content5_0"
				dataSource={Content50DataSource}
				isMobile={this.state.isMobile}
			/>,

			<Content4
				id="Content4_0"
				key="Content4_0"
				dataSource={Content40DataSource}
				isMobile={this.state.isMobile}
			/>,
		];
		return (
			<div
				className="templates-wrapper"
				ref={(d) => {
					this.dom = d;
				}}
			>
				{children}
			</div>
		);
	}
}
