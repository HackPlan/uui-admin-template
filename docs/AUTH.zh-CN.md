# 鉴权

`uui-admin-template` 默认使用 Bearer Token 作为鉴权凭证。在项目中，我们设计了两个用于用户信息和鉴权的最简单类型：

```tsx
export interface UserAuthUser {
  hashid: string;
  name: string;
  avatar: string;
  mobile: string;
}

export interface UserAuth {
  token: string;
  user: UserAuthUser;
}

export interface User {
  name: string;
  email: string;
  avatar: string;
  mobile: string;
}

```

通过登录拿到的 Token 和用户基本信息都会使用 MobX 工具全局管理，并且这些信息也会同步地持久化到浏览器 LocalStorage 里。

我们实现了一个 `HttpService` 作为整个项目通用的 HTTP 请求工具，这个 Service 主要设置了 baseURL 等一些通用设置，并且根据 user.token 的更改自动更新 `headers['Authorization']`。


