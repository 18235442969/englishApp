<template>
  <view class="word-list" v-if="!startTest">
    <view class="word-list-word">
      {{showWord.name}}
    </view>
    <view class="word-list-know-btn">
      <button type="default" class="know-btn" hover-class="know-btn-active" @click="wordKnow">认识</button>
    </view>
    <view class="word-list-unknow-btn">
      <button type="default" class="unknow-btn" hover-class="unknow-btn-active" @click="wordUnknow">不认识</button>
    </view>
  </view>
  <view class="word-list" v-else>
    <view class='word-list-startBtn'>
      <button class='word-list-btn' hover-class='word-list-btnActive' @click="gotoTest">
        开始测试
      </button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        wordList: [],
        showWord: {},
        startTest: false,
      }
    },
    mounted() {
      let wordList = uni.getStorageSync('word-list') || [];
      let learnWordList = wordList.filter(e => !e.know)
      if (learnWordList.length === 0) {
        return uni.navigateBack();
      };
      this.wordList = learnWordList;
      this.showWord = learnWordList[0];
    },
    methods: {
      wordKnow() {
        this.getNextWord(this.showWord.id);
      },
      wordUnknow() {
        setTimeout(() => {
          this.getNextWord(this.showWord.id);
        }, 1000);
        uni.navigateTo({
          url: `/pages/wordExplain/index?id=${this.showWord.id}`,
          animationType: 'zoom-out'
        })
      },
      getNextWord(id, type) {
        let wordIndex = this.wordList.findIndex(e => e.id === id);
        if (wordIndex < this.wordList.length-1) {
          this.showWord = {...this.wordList[wordIndex+1]};
        }
        if (wordIndex === this.wordList.length-1) {
          this.startTest = true;
        }
      },
      gotoTest() {
        uni.redirectTo({
          url: '/pages/wordTest/index'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
