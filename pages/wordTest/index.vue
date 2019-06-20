<template>
  <view class="word-test" v-if="word.id">
    <view class="word-test-word">
      {{word.name}}
    </view>
    <view class="word-test-soundmark">
      [{{wordValue.symbols[0].ph_am}}]
    </view>
    <view class="word-text-list">
      <view class="word-text-item" :class="word.chooseAnswerClass.a ? word.chooseAnswerClass.a === 1 ? 'word-text-item-true' : 'word-text-item-false' : ''" @click="submitWord('a')">
        <view class="word-text-item-option">
          A
        </view>
        <view class="word-text-item-translate">
          {{word.a}}
        </view>
      </view>
      <view class="word-text-item" :class="word.chooseAnswerClass.b ? word.chooseAnswerClass.b === 1 ? 'word-text-item-true' : 'word-text-item-false' : ''" @click="submitWord('b')">
        <view class="word-text-item-option">
          B
        </view>
        <view class="word-text-item-translate">
          {{word.b}}
        </view>
      </view>
      <view class="word-text-item" :class="word.chooseAnswerClass.c ? word.chooseAnswerClass.c === 1 ? 'word-text-item-true' : 'word-text-item-false' : ''"  @click="submitWord('c')">
        <view class="word-text-item-option">
          C
        </view>
        <view class="word-text-item-translate">
          {{word.c}}
        </view>
      </view>
      <view class="word-text-item" :class="word.chooseAnswerClass.d ? word.chooseAnswerClass.d === 1 ? 'word-text-item-true' : 'word-text-item-false' : ''"  @click="submitWord('d')">
        <view class="word-text-item-option">
          D
        </view>
        <view class="word-text-item-translate">
          {{word.d}}
        </view>
      </view>
    </view>
  </view>
  <view v-else>
  </view>
</template>

<script>
  import wordApi from '../../api/word.js';
  export default {
    data() {
      return {
        index: 0,
        wordTestList: [],
        word: {
          id: '',
          answerList: {},
          chooseAnswerClass: {}
        },
        wordValue: {
          "symbols": [{
            "ph_am": "",
            "parts": []
          }],
          "items":[]
        },
        isNext: true,
      }
    },
    mounted() {
      let wordList = uni.getStorageSync('word-list') || [];
      let wordTestList = wordList.filter(e => !e.know);
      // let list;
      // if (wordTestList[0].learn) {
      //   if (wordTestList.length > 3) {
      //     list = this.copyList(wordTestList, 3);
      //   } else if (wordTestList.length === 1) {
      //     list = wordTestList;
      //   } else {
      //     list = this.copyList(wordTestList, 2);
      //   }
      // } else {
      //   if (wordTestList.length > 1) {
      //     list = this.copyList(wordTestList, 2);
      //   } else {
      //     list = this.copyList(wordTestList, 1);
      //   }
      // }
      this.wordTestList = wordTestList;
      wordTestList[this.index].chooseAnswerClass = {};
      this.word = wordTestList[this.index];
      this.wordValue = JSON.parse(this.word.value.replace(/\\r\\n/g, ''));
    },
    methods: {
      copyList(list, num) {
        let arr = [];
        for (let index = 0; index < num; index++) {
          let copyArr = list.map(e => {
            return {...e};
          })
          arr = [...arr, ...copyArr];
        }
        return arr;
      },
      chooseOption(answerIsTrue, answer) {
        // const answerIsTrue = this.word.answer.toUpperCase() === answer.toUpperCase()
        let changeWord = {...this.wordTestList[this.index]};
        if (!changeWord.chooseAnswerClass) {
          changeWord.chooseAnswerClass = {};
        }
        changeWord.chooseAnswerClass[answer] = answerIsTrue ? 1 : 2;
        this.word = changeWord;
        if (answerIsTrue) {
          this.wordTestList = this.wordTestList.map((e, index) => {
                                if (index === this.index) {
                                  this.wordTestList[this.index].know = true;
                                }
                                return e;
                              });

        };
        let wordList = [...new Set(this.wordTestList.filter(e => e.id === this.word.id).map(e => e.know))];
        if (answerIsTrue && wordList.length === 1) {
          let list = uni.getStorageSync('word-list') || [];
          list.forEach(e => {
            if (e.id === this.word.id) {
              e.know = true;
            }
          })
          uni.setStorageSync('word-list', list);
          // this.submitWord(this.word);
        }
        this.getNextWord();
      },
      getNextWord() {
        setTimeout(() => {
          let index = this.index + 1;
          this.index = index;
          if (index < this.wordTestList.length) {
            let word = this.wordTestList[index];
            word.chooseAnswerClass = {};
            this.word = word;
          }
          if (this.index === this.wordTestList.length) {
            let wordList = uni.getStorageSync('word-list') || [];
            uni.setStorageSync('word-list', wordList.map(e => {
              e.learn = true;
              return e;
            }));
            uni.redirectTo({
              url: '/pages/wordList/index'
            })
          }
          this.isNext = true;
        }, 200);
      },
      async submitWord(answer) {
        try {
          if (!this.isNext) {
            return;
          }
          this.isNext = false;
          let res = await wordApi.submitWord({
            id: this.word.id,
            answer: answer
          });
          uni.hideToast();
          this.chooseOption(res.success, answer);
          // if (res.success) {
            // let wordList = uni.getStorageSync('word-list') || [];
            // let index = wordList.findIndex(e => e.id === word.id);
            // wordList[index].know = true;
            // uni.setStorageSync('word-list', wordList);
            // this.getNextWord();
          // } else {
          //   // this.isNext = true;
          // }
        } catch (error) {
          console.log(error)
          this.isNext = true;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
