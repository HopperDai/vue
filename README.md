# vue(前台渲染)

- 前台渲染：用户体验、数据量小

- 后台渲染：SEO、简单、安全性高、稳定性

- angular 最早

- vue 中国用得最多

- react 大型项目、相对少

## MVC -> MVVM

- MVC

  - M Model 数据（后台）

  - V View 表现（用户操作）

  - C Controller 逻辑（js）

  - 交互：V -> C -> M -> V

* MVC 问题

  - 各个部分耦合度比较高

  - 所有逻辑代码都放在 C , C 特别庞大

* MVP : V -> C -> M -> C -> V

  - 解决了 MVC 的第一个问题

  - P 还是特别庞大

- MVVM

  - M

  - V

  - VM：表现层程序

- 最新的 MV

  - M 数据

  - C 核心逻辑

  - VM 表现、表现层代码（转时间戳..）

## 使用

1.  创建 Vue 对象

```javascript
// js 部分 -> controller
new Vue({
  el: "范围",
  data: "数据"
});
```

2.  vue 表达式 `{{}}` , 用于在标签里输出东西，只能在标签内容里用

3.  元素的属性

    `v-bind:属性='a'`
    或：`:属性='a'`

4.  事件

    `v-on:click=xxx`
    或：`@click=xxx`

5.  Vue 内部的东西

    `data:{数据}`<br/>
    `methods:{方法}`

- 总结：

  - vue 表达式：`{{}}`

  - vue 指令

    - `v-bind:xxx` 渲染属性

    - `v-on:xxx` 事件

    - `v-model` 双向绑定

    - `v-html` 渲染 html

    - `v-for` 循环。array,json,str,num

        - `:key` 提高性能

    - `v-if` 判断。删除、插入DOM节点

    - `v-show` 显示、隐藏——display

    - `v-cloak`

    - 优化/提高性能

      - `v-once` 仅渲染一次（如：用户协议） 

      - `v-pre` 禁用标签内的表达式。确信标签内没有{{}},使用该指令告诉 vue ，免得去检查

### 双向绑定：数据&视图

- 单向绑定：数据 -> 视图，数据变了，视图要跟着变；视图变了，数据不会变

- 数据和视图之间双向同步，任何一方变了，另一方都得跟着变

## vue 基础

- 渲染

  - `{{}}`：转义输出（html 标签显示出来）

  - `v-html`：原样输出

  - `:title`：属性

  - `@click`：事件

- 事件的修饰符：指定具体属性/事件的操作。如`@submit.prevent`   `.prevent` 指定阻止默认事件，即充当修饰符

- data 普通属性

- methods 普通方法

- computed 计算数据。简单、可缓存（调用频繁可提高性能），只适合同步操作

  - 受控制的访问——set/get -> 过滤不需要的数据

- 监听：当数据变化的时候，有通知。适合异步操作

## vue-router

1. 用法：

- 渲染容器：`<router-view></router-view>` -> router 的 component 会被渲染到里面

- 路由跳转：`<router-link to="xxx"></router-link>`

2. js 操作路由

- `this.$router.go()`

- `this.$router.push()`

3. 路由参数

- 声明 path: `path: '/user/:id'`

- 在 component 中使用: `$route.param.id`

4. 路由监听

- watch 方法 -> 不推荐

- 官方：
  - 放在 `component` 中

  - `beforeRouteEnter` 方法

    ```javascript
    // to 下一级路径
    // from 上一级
    // next 检查完成进行下一步 -> 权限的检测
    beforeRouteUpate(to,from,next){

    }
    ```

5. 路由对象

- path: 匹配路由路径，可以带参数

- component 路由主体

- children 子路由 -> 路径的坑 

6. 命名路由 `router-link`

- 基本

  `to='/路径'`

- 扩展

  :to="{name,path,params,query}"

7. 命名视图（多视图）`router-view`

8. 总结：路由就是一个锚点（#xxx）, 根据锚点信息，确定显示哪个组件

- 工作原理：匹配#后面

- 带参数

- 多路由

- 单一路由下，多视图

## component -> 组件=html+css+html 

1. 封装、使用组件

- 全局组件

  - 注册（声明）

  `Vue.component('名字',{template:'xxx'})`

  - 使用

  `<名字></名字>`

- 局部组件

2. 父子组件

3. 组件间通信

## 通信、状态管理（vuex）

## vue-cli

- 作用：

  1. 开发环境

  2. 检测代码质量。eslint

  3. 打包、编译

  4. 测试。单元测试、E2E（端到端->end to end）

- 安装 vue-cli : `npm i -g vue-cli`

- 列出模板列表：`vue list` -> webpack

- 创建工程 `vue init <template> <path>`

### vue-cli package.json

- 包含组件

  1. 编译

     - postcss、autoprefixer 编译css

     - babel 编译ES6

     - webpack

  2. 测试

     - *-loader 热编译

     - eslint 代码质量

     - jest 单元测试

     - nightwatch e2e测试

  3. 其他

     - 命令行高亮

### vue-cli 工程目录

- .babelrc babel配置

- .editorconfig 编辑器配置

- .eslintignore eslint忽略列表

- .eslintrc.js eslint配置

- .gitignore git忽略列表

- .postcssrc.js postcss配置

- package.json node配置

- READMD.md 说明文件

- index.html 入口文件，唯一的 html

- config/ 配置文件

- src/ 源文件（打包）

- static/ 静态资源

- test/ 测试配置、用例

- build 生成用的配置

### 可用脚本

- dev/start 运行项目（开发模式）

- test 测试

  - unit 单元测试

  - e2e 端到端测试

- lint 代码质量测试

- build 生成项目

### vscode

`
"Print to console": {
		"prefix": "vue",
		"body": [
			"<template>",
			"  <div></div>",
			"</template>",
			"",
			"<script>",
			"export default {",
			"}",
			"",
			"</script>",
			"<style scoped>",
			"</style>",
      ""
		],
		"description": "A vue file template"
	}
`

### 保存状态
1. SPA没有真正意义的跳转
2. 组件状态管理
    - 父子间
    - 全局变量（简单、乱）
    - *Vuex-状态管理：优点：标准、别人封装好；缺点：复杂

### 单页 & 多页

- 单页面

    - 写：多个文件

    - 执行：动态载入，不需要跳转

- 多页面

    - 写：多个文件

    - 执行：浏览器跳转