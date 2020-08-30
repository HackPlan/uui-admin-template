# 布局

对于一个后台网页来说，基本页面布局就是左侧导航栏、顶部工具栏和主要内容区域这几个部分组成。

目前项目实现了两种 Layout 组件，分别是 `MainLayout` 和 `FullPageLayout`。`MainLayout` 就是用于后台页面的经典布局方案，另外 `FullPageLayout` 常用于登录注册页面。

如果这两种布局不满足需求也可以自己实现一套布局组件，只要保证 `props.children` 有被正确渲染就行。