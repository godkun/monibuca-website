// 导入所需的模块
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/iconfont/iconfont.css'
import { RouterProvider } from 'react-router-dom'
import routerConfig from './router/index'
import 'antd/dist/antd.variable.min.css'
import 'highlight.js/styles/darcula.css'
import { ConfigProvider } from 'antd'

/**
 * 设置主题颜色
 * @param {Object} theme 包含主题颜色的对象
 */
ConfigProvider.config({
  theme: {
    primaryColor: '#5A00FF'
  }
})

// 创建根节点并渲染
const root = createRoot(document.getElementById('root'))
root.render(<RouterProvider router={routerConfig}></RouterProvider>)
