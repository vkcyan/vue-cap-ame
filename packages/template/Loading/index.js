/* eslint-disable */
import Vue from 'vue';
import Main from './Loading.vue';

// 构建实例构造器
let LoadingComponents = Vue.extend(Main);
// 节点实例
let instance;
const showLoading = function(data = {}) {
  // 将生成的组件进行挂载 并提取目标的html
  // 最后将其添加到文档流的最下方
  instance = new LoadingComponents({ data });
  let Loading = document.getElementsByClassName('vue_easy_loading');
  if (Loading.length !== 0) {
    console.error('不可重复添加loading遮罩层!');
  } else {
    document.body.appendChild(instance.$mount().$el);
  }
};

const hideLoading = function() {
  let Loading = document.getElementsByClassName('vue_easy_loading');
  if (Loading.length !== 0) {
    let classVal = Loading[0].getAttribute('class');
    let newClass = [classVal, 'vue_easy_loading_close'].join(' ');
    Loading[0].setAttribute('class', newClass);
    setTimeout(() => {
      document.body.removeChild(Loading[0]);
    }, 200);
  }
  // else {
  //   console.error('请在调用hideLoading之前调用showLoading!');
  // }
};
export { showLoading, hideLoading };
