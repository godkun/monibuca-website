import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/iconfont/iconfont.css'
import { RouterProvider } from 'react-router-dom'
import routerConfig from './router'
import 'antd/dist/antd.variable.min.css';
import 'highlight.js/styles/darcula.css';
import { ConfigProvider } from 'antd'

ConfigProvider.config({
  theme: {
    primaryColor: '#5A00FF',
  },
});

ReactDOM.render(<RouterProvider router={routerConfig}></RouterProvider>, document.getElementById('root'));
