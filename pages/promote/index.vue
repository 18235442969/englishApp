<template>
  <view class="promote">
    <img :src="qrCode" class="qrcode" />
    <view class="promote-info">
      <view class="promote-info-text">
        {{url}}
      </view>
      <view class="promote-info-btn" @click="copyUrl">
        复制地址
      </view>
    </view>
  </view>
</template>

<script>
  import Qr from '../../asstes/js/wxqrcode.js';
  import { mapGetters } from 'vuex';
  export default {
    data() {
      return {
        url: ''
      }
    },
    computed: {
      ...mapGetters({
        userInfo: 'userInfo'
      }),
      qrCode() {
        return Qr.createQrCodeImg(this.url);
      }
    },
    methods: {
      setQrcode() {
        let userInfo = this.userInfo || uni.getStorageSync('user-info') || {};
        this.url = this.userInfo.url;
      },
      copyUrl() {
        uni.setClipboardData({
          data: this.url,
          success() {
            uni.showToast({
              title: '复制成功'
            });
          }
        });
      }
    },
    mounted() {
      this.setQrcode();
    }
  }
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
