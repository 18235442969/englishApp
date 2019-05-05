<template>
  <view class="book">
    <view class="book-type">
      <view class="book-type-item book-type-item-choose">
        <view class="book-type-img">
          <img src="../../asstes/images/logo.png" class="book-type-logo"/>
        </view>
        <view class="book-type-text">
          全部
        </view>
      </view>
      <view class="book-type-item">
        <view class="book-type-img">
          <img src="../../asstes/images/logo.png" class="book-type-logo"/>
        </view>
        <view class="book-type-text">
          全部
        </view>
      </view>
      <view class="book-type-item noheight"></view>
      <view class="book-type-item noheight"></view>
      <view class="book-type-item noheight"></view>
      <view class="book-type-item noheight"></view>
    </view>
    <top-line></top-line>
    <view class="book-list">
      <view class="book-list-title">
        英语词库
      </view>
      <view class="book-item book-item-choose">
        <view class="book-content">
          <img src="../../asstes/images/ciku.png" class="book-item-img"/>
          日常生活
        </view>
      </view>
      <view class="book-item">
        <view class="book-content">
          <img src="../../asstes/images/ciku.png" class="book-item-img"/>
          日常生活
        </view>
      </view>
      <view class="book-item">
        <view class="book-content">
          <img src="../../asstes/images/ciku.png" class="book-item-img"/>
          日常生活
        </view>
      </view>
      <view class="book-item">
        <view class="book-content">
          <img src="../../asstes/images/ciku.png" class="book-item-img"/>
          日常生活
        </view>
      </view>
      <view class="book-item">
        <view class="book-content">
          <img src="../../asstes/images/ciku.png" class="book-item-img"/>
          日常生活
        </view>
      </view>
      <view class="book-item">
        <view class="book-content">
          <img src="../../asstes/images/ciku.png" class="book-item-img"/>
          日常生活
        </view>
      </view>
      <view class="book-item">
        <view class="book-content">
          <img src="../../asstes/images/ciku.png" class="book-item-img"/>
          日常生活
        </view>
      </view>
      <view class="book-item">
        <view class="book-content">
          <img src="../../asstes/images/ciku.png" class="book-item-img"/>
          日常生活
        </view>
      </view>
      <view class="book-item">
        <view class="book-content">
          <img src="../../asstes/images/ciku.png" class="book-item-img"/>
          日常生活
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import TopLine from '../../compoments/TopLine/index.vue'
  export default {
    components: {
      TopLine
    },
    data() {
      return {
        book: 'sd'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
