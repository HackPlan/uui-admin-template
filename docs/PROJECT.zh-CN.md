# Project

这片文档主要介绍 `uui-admin-template` 项目的一些基本情况。

## 项目文件目录结构

```bash
uui-admin-template
├── docs/* # 文档
├── public/* # 静态资源
├── src
│   ├── services # 实现业务的一些 Services
│   ├── store # 全剧状态
│   ├── styles # 样式文件
│   ├── types # TypeScript 类型文件
│   ├── routers # 页面路由
│   ├── layouts # 页面的一些布局组件
│   ├── mock # Mock
│   ├── api # 接口
│   ├── pages # 后台页面组件
│   ├── partials # 一些不常复用的组件
│   ├── components # 多处复用的组件
│   ├── hooks # React Hooks 工具
│   ├── icons # 存放图标文件
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── serviceWorker.ts
│   ├── setupTests.ts
│   ├── init.ts
│   ├── inversify.config.ts # 全局依赖注入 inversify 配置
│   ├── navigation.config.tsx # 导航栏配置
│   └── route.config.tsx # 页面路由配置
├── tailwind.config.js # Tailwind 配置
├── craco.config.js # Craco 配置
├── tsconfig.json # TypeScript 配置
├── .nvmrc # NVM 版本信息
├── .eslintignore
├── .eslintrc.js # ESLint 配置文件
├── .gitignore
├── LICENSE
├── README.md
├── package.json
└── yarn.lock
```

## 项目初始化

`uui-admin-template` 是通过 [CRA(Create React App)](https://github.com/facebook/create-react-app) 工具初始化项目文件，并且使用 craco 替换原来的 react-scripts，所以这个项目的 webpack、babel 或者 sass postcss 工具等都是在 craco.config.js 文件里配置的。

## NVM

`uui-admin-template` 使用 NVM 锁 Node.js 开发版本，在进行开发工作前，请先在终端运行 `nvm use`，再运行 `yarn install` 安装依赖文件。

目前项目使用 `v10.13.0`，如果你希望升级 Node.js 版本，请同时修改 `.nvmrc` 文件。

## Tailwind CSS

`uui-admin-template` 使用并且推荐保留使用 Tailwind CSS 作为主要的开发页面样式的工具。如果你不希望使用 Tailwind CSS，请删除 `tailwind.config.js` 配置文件，并且删除 `craco.config.js` 中的以下几行：

```javascript
  // ...
  style: {
    postcss: {
      mode: 'extends',
      plugins: [require('postcss-import'), require('tailwindcss')],
    },
  },
  // ...
```

并且移除依赖 `tailwindcss` 和 `postcss-import`。

## TypeScript

`uui-admin-template` 使用 TypeScript 作为开发语言。

## 项目依赖的第三方库

#### A

* **@craco/craco** 用来构建项目
* **@testing-library/jest-dom** 测试工具
* **@testing-library/react** 测试工具
* **@testing-library/user-event** 测试工具
* **typescript TypeScript**
* **react React** 相关工具
* **react-dom React** 相关工具
* **react-router-dom** 相关工具
* **react-scripts** React 相关工具

#### B

* **@hackplan/uui** UUI 组件库
* **classnames** 处理 class 字符串的工具
* **axios** 网络请求库
* **inversify** 依赖注入管理工具
* **lodash** 数据处理工具
* **mockjs** **axios-mock-adapter**  Mock 网络请求的工具
* **recoil** 轻量全局状态库
* **reflect-metadata** 基础库
* **use-react-router-breadcrumbs** 处理路由历史以及生成面包屑数据的工具

## 全局依赖注入

`uui-admin-template` 使用 [InversifyJS](https://github.com/inversify/InversifyJS) 作为依赖注入工具。使用这个工具可以构建出结构良好且易于测试的应用程序。

## 全局状态管理

`uui-admin-template` 使用 [MobX](https://github.com/mobxjs/mobx) 作为全局状态管理工具。

在 `src/mobx.config.ts` 文件中配置全局状态。

## 功能

* [鉴权]([AUTH.zh-CN.md](https://github.com/HackPlan/uui-admin-template/blob/master/docs/AUTH.zh-CN.md))
* [路由]([ROUTE.zh-CN.md](https://github.com/HackPlan/uui-admin-template/blob/master/docs/ROUTE.zh-CN.md))
* [导航栏]([NAVIGATION.zh-CN.md](https://github.com/HackPlan/uui-admin-template/blob/master/docs/NAVIGATION.zh-CN.md))
* [布局]([LAYOUT.zh-CN.md](https://github.com/HackPlan/uui-admin-template/blob/master/docs/LAYOUT.zh-CN.md))
* [接口 & Mock]([API_AND_MOCK.zh-CN.md](https://github.com/HackPlan/uui-admin-template/blob/master/docs/API_AND_MOCK.zh-CN.md))
* [图标]([ICON.zh-CN.md](https://github.com/HackPlan/uui-admin-template/blob/master/docs/ICON.zh-CN.md))

