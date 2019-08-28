## vue-cap-ame

### 前言

​	cap-ame 是Captain America的缩写,我希望这个工具库就像美队一样,可靠且高效的解决项目里面的需求

![美国队长盾牌](http://www.vkcyan.top/FowAZIqcYj3kRiZ4AmF7c-mCkJS8.jpg)



这个是基于Vue的工具库,一般都是工作中最常见的以一类,包含**自定义指令**与**函数式API**



#### 全屏加载组件(2019-8-6 )

使用

> npm i vue-cap-ame

**main.js**(注册)

```js
import Vue from 'vue';
import App from './App.vue';
import router from './router';

// --------------------------------------------------------
import { showLoading, hideLoading } from 'vue-cap-ame';
import 'vue-cap-ame/lib/Vue-cap-ame.css';
Vue.prototype.$showLoading = showLoading;
Vue.prototype.$hideLoading = hideLoading;
// --------------------------------------------------------

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

```

在任意组件内使用

```js
this.$showLoading() // 打开遮掩层
this.$hideLoading() // 关闭遮掩层
```
