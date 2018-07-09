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

    `v-bind:xxx` `v-on:xxx` `v-model`

### 双向绑定：数据&视图

- 单向绑定：数据 -> 视图，数据变了，视图要跟着变；视图变了，数据不会变

- 数据和视图之间双向同步，任何一方变了，另一方都得跟着变

## vue 基础

- 渲染

  - `{{}}`：转义输出（html 标签显示出来）

  - `v-html`：原样输出

- computed 计算数据

  - 受控制的访问——set/get -> 过滤不需要的数据

## vue-router

## component、通信、状态管理（vuex）

## vue-cli
