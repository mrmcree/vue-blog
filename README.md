# blog-dev

> A Vue.js project
> 一个 vue element ui 的博客系统 后台使用php+mysql
# 项目布局

```
.
├── api                                         // php接口文件
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── src                                         // 源码目录
│   ├── asset                                   // 图片资源
│   ├── common                                  // 公共组件
│   ├── fonts                                   // 字体文件
│   ├── stylus                                  // 图标组件
│   ├── components                              // 组件
│   │   ├── about
│   │   │   └── about.vue                       // 关于组件
│   │   └── admin                               // 后台管理组件
│   │       └── add.vue                         // 添加文章组件
│   │       └── admin.vue                       // 后台主页组件
│   │       └── category.vue                    // 分类管理组件
│   │       └── dataview.vue                    // 可视化组件
│   │       └── edit.vue                        // 富文本公共组件
│   │       └── manage.vue                      // 文章管理组件
│   │   └── archvie
│           └── archvie.vue                     // 文章展示组件
│   │   └── detail
│           └── detail.vue                      // 文章详情组件
│   │   └── footerbar
│           └── footerbar.vue                   // 底部组件
│   │   └── headerbar
│           └── headerbar.vue                   // 头部组件
│   │   └── home
│           └── home.vue                        // 首页组件
│   │   └── login
│           └── login.vue                       // 文章详情组件
│   │   └── post
│           └── post.vue                        // 文章详情组件
│   │   └── silderbar
│           └── silderbar.vue                   // 文章详情组件
│   │   └── timeline
│           └── timeline.vue                    // 时间线组件
│   ├── router
│   │   └── router.js                           // 路由配置
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── favicon.ico                                 // 图标
├── index.html                                  // 入口html文件
```
## 部分截图
### 首页 ![](https://github.com/mrmcree/blog-v/blob/new/preview/localhost_8080_home_archive.png?raw=true)
### 分类 ![](https://github.com//mrmcree/blog-v/blob/new/preview/localhost_8080_home_archive%20(1).png?raw=true)
### 关于 ![](https://github.com/mrmcree/blog-v/blob/new/preview/localhost_8080_home_archive%20(2).png?raw=true)

## 后台管理截图
### ![](https://github.com/mrmcree/blog-v/blob/new/preview/localhost_8080_admin.png?raw=true)
### 添加文章![](https://github.com/mrmcree/blog-v/blob/new/preview/localhost_8080_admin%20(1).png?raw=true)
### 添加分类![](https://github.com/mrmcree/blog-v/blob/new/preview/localhost_8080_admin%20(2).png?raw=true)
### 文章管理![](https://github.com/mrmcree/blog-v/blob/new/preview/localhost_8080_admin_manage.png?raw=true)
### 分类管理![](https://github.com/mrmcree/blog-v/blob/new/preview/localhost_8080_admin_manage.png&20(1)?raw=true)
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

