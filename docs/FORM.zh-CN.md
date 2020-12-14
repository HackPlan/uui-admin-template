# 表单

UUI 只提供表单用到的UI组件，对于表单数据验证，UUI Admin Template 使用 Formik 和 Yup 开源项目来实现。

和表单相关的实现都放在 `src/components/form` 目录下。

`withFormikUUIField` 是用于对接 Formik 和 UUI 的 HOC 工具函数，使用这个 HOC 可以很方便的创建可供 Formik 使用的表单组件。
