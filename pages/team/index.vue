<template>
  <view class="team">
    <view class="team-list">
      <team-item></team-item>
      <team-item></team-item>
      <team-item></team-item>
      <team-item></team-item>
      <team-item></team-item>
      <team-item></team-item>
      <team-item></team-item>
      <team-item></team-item>
      <team-item></team-item>
    </view>
  </view>
</template>

<script>
  import TeamItem from './components/TeamItem.vue'
  export default {
    components: {
      TeamItem
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
