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

## component、通信、状态管理（vuex）

## vue-cli
