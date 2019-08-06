/* eslint-disable */
import Vue from 'vue';

/**
 *
 * 全部自定义指令
 */
export default function directive() {
  // 官方实例指令
  Vue.directive('focus', {
    inserted: function(el) {
      el.focus();
    }
  });
  // 权限指令
  Vue.directive('permission', {
    bind(el, binding) {
      if (binding.value === '1111') {
        console.log('权限通过');
      } else {
        el.parentNode.removeChild(el);
      }
    }
  });
}
