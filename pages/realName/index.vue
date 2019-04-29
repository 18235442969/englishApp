<template>
  <view class="realname">
    <top-line></top-line>
    <view class="realname-info">
      <view class="realname-line">
        <input type="text" class="realname-input" placeholder-class="realname-placeholder" v-model="name" placeholder="请输入姓名" :maxlength="20"/>
			</view>
      <view class="realname-line realname-info-idcard">
        <input type="text" class="realname-input" placeholder-class="realname-placeholder" v-model="idcard" placeholder="请输入身份证号" :maxlength="18"/>
			</view>
    </view>
    <top-line></top-line>
    <view class="realname-idcard">
      <view class="realname-idcard-tips">
        上传您的二代身份证照
      </view>
      <view class="realname-idcard-image">
        <view class="realname-idcard-image-front">
          <img :src="imageUrl.front" class="idcard-image" @click="chooseImage('front')" />
          <view class="realname-idcard-image-tips">
            点击拍照上传正面
          </view>
        </view>
        <view class="realname-idcard-image-middle"></view>
        <view class="realname-idcard-image-reverse">
          <img :src="imageUrl.reverse" class="idcard-image" @click="chooseImage('reverse')" />
          <view class="realname-idcard-image-tips">
            点击拍照上传反面
          </view>
        </view>
      </view>
    </view>
		<e-button text="保存" :clickBtn="clickBtn" className="realname-btn"></e-button>
  </view>
</template>

<script>
  import TopLine from '../../compoments/TopLine/index.vue';
  import EButton from '../../compoments/EButton/index.vue';
  export default {
    components: {
      TopLine,
      EButton
    },
    data() {
      return {
        name: '',
        idcard: '',
        imageUrl: {
          front: '../../static/images/front.png',
          reverse: '../../static/images/reverse.png'
        }
      }
    },
    methods: {
      clickBtn() {
        console.log(1)
      },
      chooseImage(type) {
        uni.chooseImage({
          count: 1,
          sizeType: ['compressed'],
          sourceType: ['camera'],
          success: (res) => {
            this.imageUrl[type] = res.tempFilePaths
          }
        });
      }
    }
  }
</script>

<style>
  .realname-btn{
    margin-top: 1.5rem;
  }
</style>

<style lang="scss" scoped>
  @import './index.scss';
</style>
