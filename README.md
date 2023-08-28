
# 使用教程

## 1、安装npm依赖

```
// 推荐
pnpm i
```

```
npm i
```

```
yarn
```

安装npm依赖后回触发 `"prepare": "git init && chmod ug+x .husky/* && husky install",` 脚本，初始化git并且进行husky的install


### 2 创建新页面

npm run create [path] [title]

- path 页面路径，必须为三级目录，必填
- title 页面标题，非必填

```
// 前缀mb_需要在app.config.js中配置`modulePrefix
npm run create mb_demo/demo/index 标题
```

页面创建成功后会在一级目录下生成conf.json，里面自动配置了模块的页面路径和标题等信息。

## 3 同时支持单页面/多页面构建

脚手架同时支持单页面和多页面的页面构建，以满足不同场景的需求。
脚手架文档可参考 https://github.com/dreamjser/h5-webpack-cli

### 3.1 本地运行单页面工程

```
// 运行所有模块
npm run dev:single all
```

```
// 运行指定模块
npm run dev:single mb_login,mb_transfer
```

浏览器访问地址: `http://localhost:xxxx/#/mb_login/index/index`

### 3.2 本地运行多页面工程

```
// 运行所有模块
npm run dev:multiple all
```

```
// 运行指定模块
npm run dev:multiple mb_login,mb_transfer
```

浏览器访问地址: `http://localhost:xxxx/mb_login/index/index.html`

### 3.3 构建单页面工程

可以根据项目需要添加不同环境的构建命令

```
npm run build:s-test
```

### 3.4 构建多页面工程

可以根据项目需要添加不同环境的构建命令

```
npm run build:m-test
```

## 4 analyzer报告

```
npm run report
```

### 5 目录结构

```
├─.husky                      ----------- husky配置
├─.tmp                        ----------- 脚手架自动生成的路由文件
├─config(可根据环境添加相应的环境配置)
|  ├─dev.env.js               ----------- 本地环境配置
|  ├─sit.env.js               ----------- 测试环境配置
|  ├─prod.env.js              ----------- 生产环境配置
|  ├─develop.env.js           ----------- 开发环境配置
|
├─dist
|
├─node_modules
|
├─src
|  ├─common                   ----------- 公共处理
|  |     |-app                ----------- 全局app对象挂载文件
|  |     ├─components         ----------- 公共组件
|  |     ├─request            ----------- 公共请求封装
|  |     ├─store              ----------- 状态管理
|  |     ├─styles             ----------- 公共样式
|  |     ├─utils              ----------- 工具库
|  |
|  ├─modules                  ----------- 业务模块
|  |
|  ├─portal                   ----------- 入口文件夹
|  |
|  ├─template                 ----------- 模板
|  ├
|  ├─typings                  ----------- ts类型文件
|
├─.editorconfig               ----------- 定义代码格式
├─babel.config.js             ----------- babel配置文件
├─.eslintrc.js                ----------- 定义eslint的plugins,extends,rules
├─.gitignore                  ----------- git上传需要忽略的文件格式
├─.lintstagedrc               ----------- lint-stage配置文件
|-commitlint.config.js        ----------- commitlint配置文件
├─package.json                ----------- 项目信息、项目依赖管理
├─tsconfig.json               ----------- ts配置文件
├─README.md                   ----------- 项目文档（简介、运行步骤、注意事项）
├─...

```

