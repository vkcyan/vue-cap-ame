<template>
  <div class="vue_easy_loading">
    <div class="vue_easy_loading_icon">
      <img :src="img" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: 'data:image/png;base64,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'
    }
  }
}
</script>

<style scoped >
.vue_easy_loading {
  z-index: 9998;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  animation: show 0.3s ease 0s 1 normal forwards;
}
.vue_easy_loading_icon {
  z-index: 9999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.vue_easy_loading_icon img {
  width: 50px;
  height: 50px;
  animation: rotate 1s ease 0s infinite normal forwards;
}
.vue_easy_loading_close {
  z-index: 9998;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  animation: unshow 0.3s ease 0s 1 normal forwards;
}
@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes unshow {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

