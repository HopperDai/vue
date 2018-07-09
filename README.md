# vue

## MVC -> MVVM

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

## 虚拟 DOM
