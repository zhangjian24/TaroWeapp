# Taro 小程序项目

基于 Taro 4.0 + React + Tailwind CSS 的多端小程序开发项目。

## 技术栈

### 核心框架
- **Taro 4.0.9** - 多端小程序开发框架
- **React 18.0.0** - 前端UI框架
- **TypeScript** - 类型支持（可选）

### 样式方案
- **Tailwind CSS 3.4.17** - 原子化CSS框架
- **Sass/SCSS** - CSS预处理器
- **weapp-tailwindcss** - 小程序Tailwind CSS插件

### UI组件库
- **taro-ui 3.3.0** - Taro UI组件库
- **@tarojs/components** - Taro内置组件

### 开发工具
- **Webpack 5.91.0** - 打包构建工具
- **Babel** - JavaScript编译器
- **PostCSS** - CSS后处理器
- **ESLint** - 代码检查工具

### 功能库
- **Axios** - HTTP请求库
- **React Markdown** - Markdown渲染
- **React Router** - 路由管理（H5端）

## 框架

### Taro 多端支持
支持以下平台的开发和构建：
- **微信小程序** (`weapp`)
- **百度智能小程序** (`swan`)
- **支付宝小程序** (`alipay`)
- **字节跳动小程序** (`tt`)
- **H5** (`h5`)
- **React Native** (`rn`)
- **QQ小程序** (`qq`)
- **京东小程序** (`jd`)
- **鸿蒙混合应用** (`harmony-hybrid`)

### 项目架构
- **框架**: React函数式组件
- **状态管理**: React Hooks
- **路由**: 基于Taro页面路由系统
- **构建工具**: Webpack 5

## 配置

### 主要配置文件

#### 项目配置 (`project.config.json`)
```json
{
  "miniprogramRoot": "./dist",
  "projectname": "TaroWeapp",
  "appid": "touristappid"
}
```

#### Taro配置 (`config/index.js`)
- **设计宽度**: 750px
- **源码目录**: `src`
- **输出目录**: `dist`
- **编译器**: Webpack 5
- **HTML插件**: 已启用
- **Tailwind插件**: 已配置，支持rem到rpx转换

#### 环境配置
- **开发环境**: `.env.development`
- **测试环境**: `.env.test`
- **生产环境**: `.env.production`

#### Tailwind CSS配置 (`tailwind.config.js`)
- **内容扫描**: `./src/**/*.{html,js,ts,jsx,tsx}`
- **核心插件**: 禁用preflight（小程序不需要）
- **主题**: 可扩展配置

#### Babel配置 (`babel.config.js`)
- **预设**: taro
- **框架**: react
- **编译器**: webpack5

## 目录结构

```
TaroWeapp/
├── config/                  # 配置文件目录
│   ├── index.js            # Taro主配置
│   ├── dev.js              # 开发环境配置
│   └── prod.js             # 生产环境配置
├── dist/                   # 编译输出目录
├── src/                    # 源代码目录
│   ├── app.js              # 应用入口文件
│   ├── app.config.js       # 应用配置
│   ├── app.scss            # 全局样式
│   ├── index.html          # H5入口模板
│   ├── api/                # API接口层
│   │   ├── index.js        # Axios实例配置
│   │   └── chat.js         # 聊天相关API
│   ├── components/         # 公共组件
│   │   └── BaseLayout.jsx  # 基础布局组件
│   └── pages/              # 页面目录
│       ├── index/          # 首页
│       │   ├── index.jsx
│       │   ├── index.config.js
│       │   └── index.scss
│       ├── shopping/       # 购物页面
│       ├── chat/           # 聊天页面
│       └── settings/       # 设置页面
├── package.json            # 项目依赖配置
├── project.config.json     # 微信小程序配置
├── babel.config.js         # Babel配置
├── tailwind.config.js      # Tailwind CSS配置
├── postcss.config.js       # PostCSS配置
└── .gitignore             # Git忽略配置
```

### 页面结构
项目包含4个主要页面：
1. **首页** (`pages/index`) - 包含轮播图和课程列表
2. **购物页面** (`pages/shopping`) - 购物功能
3. **聊天页面** (`pages/chat`) - 聊天功能
4. **设置页面** (`pages/settings`) - 应用设置

### API层结构
- **Axios实例**: 统一的HTTP请求配置
- **拦截器**: 请求/响应拦截处理
- **Token管理**: 自动添加认证头
- **错误处理**: 401状态自动跳转登录

## 开发命令

### 开发环境
```bash
# 微信小程序
npm run dev:weapp

# H5
npm run dev:h5

# 其他平台
npm run dev:alipay  # 支付宝小程序
npm run dev:tt      # 字节跳动小程序
npm run dev:swan    # 百度智能小程序
```

### 生产构建
```bash
# 微信小程序构建
npm run build:weapp

# H5构建
npm run build:h5
```

### 安装依赖
```bash
pnpm install
```

## 特性亮点

- **多端适配**: 一套代码，多端运行
- **Tailwind CSS**: 原子化CSS，快速开发
- **TypeScript支持**: 可选的类型安全
- **组件化开发**: React组件化架构
- **API封装**: 统一的请求处理
- **响应式设计**: 适配不同屏幕尺寸