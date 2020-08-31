# UUI Admin Template

![](https://img.shields.io/github/package-json/dependency-version/HackPlan/uui-admin-template/@hackplan/uui)
![](https://img.shields.io/github/contributors/HackPlan/uui-admin-template)
![](https://img.shields.io/github/issues-pr-raw/HackPlan/uui-admin-template)
![](https://img.shields.io/github/issues-raw/HackPlan/uui-admin-template)
![](https://img.shields.io/github/license/HackPlan/uui-admin-template)

[English](https://github.com/HackPlan/uui-admin-template) | 简体中文

## 介绍

`uui-admin-template` 是一个用于后台网页应用的开发模板，它是基于 React 和 [UUI](https://github.com/HackPlan/UUI) 实现的。开发并开源这个模板项目的目的：一方面，你可以翻看这个模板项目的代码，了解如果正确地使用 UUI；另一方面，也可以手动 Fork 一份这个项目或者直接使用 Github 提供的 `Use this Template` 按钮，快速创建一个启动项目。

> 这是一个开发模板项目，并不会作为一个通用库发布到 NPM，所以当你决定使用它并作为 code base commit 到自己的业务项目里之后，理论上后续 uui-admin-template 的更新都需要你手动迁移到自己的项目里。这个项目不是一个傻瓜式使用的项目，它需要有一定的前端开发知识和能力，我们强烈建议你熟悉这个项目内的每一行代码并阅读所有的文档。

## 功能

* [项目基础说明](https://github.com/HackPlan/uui-admin-template/blob/master/docs/PROJECT.zh-CN.md)
* [鉴权](https://github.com/HackPlan/uui-admin-template/blob/master/docs/AUTH.zh-CN.md)
* [路由](https://github.com/HackPlan/uui-admin-template/blob/master/docs/ROUTE.zh-CN.md)
* [导航栏](https://github.com/HackPlan/uui-admin-template/blob/master/docs/NAVIGATION.zh-CN.md)
* [布局](https://github.com/HackPlan/uui-admin-template/blob/master/docs/LAYOUT.zh-CN.md)
* [接口 & Mock](https://github.com/HackPlan/uui-admin-template/blob/master/docs/API_AND_MOCK.zh-CN.md)
* [图标](https://github.com/HackPlan/uui-admin-template/blob/master/docs/ICON.zh-CN.md)


## 快速上手

```bash
git clone https://github.com/HackPlan/uui-admin-template.git
cd uui-admin-template
yarn
yarn start

```

运行之后会自动打开 http://localhost:3000

## 发布

```bash
yarn build
```

## 开源许可

UUI 在 GitHub 仓库上的所有文件均受 MIT 许可。请阅读项目根目录下的许可证文件。