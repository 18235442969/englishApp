<template>
  <view class="book">
    <view class="book-type">
      <view class="book-type-item" v-for="type in typeList" :key="type.id" :class="type.choose ? 'book-type-item-choose' : ''" @click="filterBook(type.id)">
        <view class="book-type-img">
          <img :src="type.img" class="book-type-logo"/>
        </view>
        <view class="book-type-text">
          {{type.name}}
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
      <view class="book-item" v-for="book in bookFilterList" :key="book.id" :class="book.choose ? 'book-item-choose' : ''" @click="chooseBook(book.id)">
        <view class="book-content">
          <img src="../../asstes/images/ciku.png" class="book-item-img"/>
          {{book.name}}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import TopLine from '../../compoments/TopLine/index.vue';
  import wordApi from '../../api/word.js';
  import { mapGetters, mapActions } from 'vuex';
  const space = 'user';
  export default {
    components: {
      TopLine
    },
    computed: {
      ...mapGetters({
        userInfo: 'userInfo'
      }),
      bookFilterList() {
        return this.typeId === '0' ? [...this.bookList] : this.bookList.filter(e => e.parentId === this.typeId);
      }
    },
    data() {
      return {
        typeList: [{
          id: '0',
          name: '全部',
          choose: true
        }],
        bookList: [],
        typeId: '0',
      }
    },
    methods: {
      ...mapActions(space, {
        changeUserInfo: 'changeUserInfo'
      }),
      async getBooks() {
        try {
          let res = await wordApi.thesaurus();
          let data = res.body;
          let obj = {};
          this.typeList[0].img = data.imgUrl[0].img;
          console.log(data.imgUrl[0].img)
          let typeList = data.list.map(e => {
            return {
              id: e.parentId,
              name: e.parentName,
              choose: false,
              img: e.parentImg
            }
          }).reduce((cur, next) => {
              obj[next.id] ? true : obj[next.id] = true && cur.push(next);
              return cur;
          },[]);
          let bookList = data.list.map(e => {
            e.choose = e.id === this.userInfo.typeId ? true : false;
            return e;
          });
          this.typeList = [...this.typeList, ...typeList];
          this.bookList = bookList;
        } catch (error) {
        }
      },
      filterBook(id) {
        this.typeList = this.typeList.map(e => {
          e.choose = e.id == id ? true : false;
          return e;
        });
        this.typeId = id;
      },
      chooseBook(id) {
        if (this.bookFilterList.find(e => e.id === id).choose) {
          return;
        }
        uni.showModal({
          title: '英语链',
          content: '您确定选择此词库吗？',
          showCancel: true,
          success: (res) => {
            if (res.confirm) {
              this.submitBook(id)
            }
          }
        })
      },
      async submitBook(id) {
        try {
          uni.showLoading({
            mask: true
          });
          let res = await wordApi.setThesaurus({
            id: id
          });
          if (res.success) {
            let userInfo = uni.getStorageSync('user-info') || '';
            if (userInfo) {
              userInfo.typeId = id;
              this.changeUserInfo(userInfo);
              uni.setStorageSync('user-info', userInfo);
              this.changeChooseBook(id);
              uni.showToast({
                title: '设置成功'
              });
            } else {
              uni.showToast({
                icon: 'none',
                title: '设置失败'
              });
            }
          }
        } catch (error) {
        }
      },
      changeChooseBook(id) {
        this.bookList = this.bookList.map(e => {
          e.choose = e.id === id ? true : false;
          return e;
        });
      }
    },
    created() {
      this.getBooks();
    }
  }
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
