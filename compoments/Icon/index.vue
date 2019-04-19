<template>
  <i :class="iconClass" />
</template>

<script>
  export default {
    name: "Icon",
    props: {
      className: {
        type: String,
        default: ""
      },
      fontClass: {
        type: String,
        default: ""
      }
    },
    computed: {
      iconClass() {
        let iconfontClass = 'icon iconfont';
        iconfontClass = this.className ? `${iconfontClass} ${this.className}` : iconfontClass;
        iconfontClass = this.fontClass ? `${iconfontClass} ${this.fontClass}` : iconfontClass;
        return iconfontClass;
      }
    }
  };
</script>

<style scoped>
  .iconfont {
    font-size: 0.9rem;
  }
</style>
