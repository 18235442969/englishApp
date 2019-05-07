<template>
  <view class="word-explain">
    <view class="word-explain-word">
      {{word.name}}
      <view class="word-born" @click="playVoice(wordValue.symbols[0].ph_am_mp3)">
        <img src="../../asstes/images/horn.png" class="born" />
      </view>
    </view>
    <view class="word-explain-soundmark">
      [{{wordValue.symbols[0].ph_am}}]
    </view>
    <view class="word-explain-translate-list">
      <view class="word-explain-translate-item" v-for="(mean, index) in wordValue.symbols[0].parts" :key="index">
        <text class="word-explain-translate-item-soundmark">
          {{mean.part}}
        </text>
        <text>
          {{mean.means | meansFilter}}
        </text>
      </view>
    </view>
    <view class="word-explain-eg-line">
      例句
    </view>
    <view class="word-explain-eg-list">
      <view class="word-explain-eg-item" v-for="(translate, index) in wordValue.items" :key="index">
        <view class="word-explain-eg-item-num">
          <text>
            {{index+1}}
          </text>
        </view>
        <view class="word-explain-eg-item-translate">
          <view>
            <text>
              {{translate.orig}}
            </text>
          </view>
          <view class="word-explain-eg-item-translate-ch">
            <text>
              {{translate.trans}}
            </text>
          </view>
        </view>
      </view>
    </view>
    <view class="word-explain-eg-btn">
      <button class="word-explain-eg-unknow-btn" hover-class="word-explain-eg-unknow-btn-active" @click="wordKnow">
        继续
      </button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        word: {
        },
        wordValue: {
          "symbols": [{
            "ph_am": "",
            "parts": []
          }],
          "items":[]
        }
      }
    },
    filters: {
      meansFilter(value) {
        return value.join('；');
      }
    },
    methods: {
      playVoice(src) {
        const innerAudioContext = uni.createInnerAudioContext();
        innerAudioContext.autoplay = true;
        innerAudioContext.src = src;
        innerAudioContext.onStop(() => {
          innerAudioContext.destroy();
        });
        innerAudioContext.onError((res) => {
        });
      },
      wordKnow() {
        uni.navigateBack()
      }
    },
    onLoad(option) {
      let id = option.id;
      let wordList = uni.getStorageSync('word-list') || [];
      this.word = wordList.find(e => e.id === id);
      let wordValue = JSON.parse(this.word.value.replace(/\\r\\n/g, ''));
      this.wordValue = wordValue;
    }
  }
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
