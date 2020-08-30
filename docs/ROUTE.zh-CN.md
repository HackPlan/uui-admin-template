# 路由

`uui-admin-template` 使用 [react-router 和 react-router-dom](https://github.com/ReactTraining/react-router) 作为管理页面路由的主要工具。

和路由有关的文件主要有三个：

* `src/routers/AppRouter.tsx`
* `src/routers/Routes.tsx`
* `src/route.config.ts`

#### `Routes.tsx`

主要是一些不同功能的路由组件，比如目前有 `PublicRoute` 和 `AuthenticatedRoute` 两个路由组件，前一个表示这个路由是可以公开访问的，后一个是需要登录有鉴权信息才能访问的路由。

#### `AppRouter.tsx`

这个文件主要负责定义路由的基本结构和路由更改刷新的功能。

不同路由下的页面可能会使用不同布局模式，比如登录页面通常使用 `FullPageLayout`，而普通的展示页面则使用 `MainLayout`。为了让页面在路由切换的时候不重新渲染 Layout 组件，我们将路由配置根据不同布局使用做了一个分组，做成了双层路由结构（体现在 react-router-dom 的使用上）。

#### `routes.config.ts`

这个文件主要定义这个项目页面的路由信息，比如页面在哪个路由路径上能被访问到，是使用哪种布局模式，是否是需要鉴权才能访问等等。