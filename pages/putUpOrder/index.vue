<template>
  <view class="order page-bg-img">
    <view class="order-top">
      <view class="status_bar"></view>
      <view class="order-nav">
        <view class="order-nav-icon" @click="goBack">
          <icon-font className="iconback" fontClass="iconBack" />
          {{title}}
        </view>
      </view>
      <view class="order-money">
        <view class="order-money-item">
          <view class="order-money-item-text">
            链上资产
          </view>
          <view class="order-money-item-num">
            100000
          </view>
        </view>
        <view class="order-money-item right-line">
          <view class="order-money-item-text">
            当前价格
          </view>
          <view class="order-money-item-num">
            ￥1.28
          </view>
        </view>
        <view class="order-money-item right-line">
          <view class="order-money-item-text">
            冻结点券
          </view>
          <view class="order-money-item-num">
            20
          </view>
        </view>
      </view>
      <view class="order-tab">
        <view class="order-tab-item" :class="tabIndex=== 0 ? 'order-tab-item-choose' : ''" @click="changeTab(0)">
          挂单
        </view>
        <view class="order-tab-item order-tab-left" :class="tabIndex=== 1 ? 'order-tab-item-choose' : ''" @click="changeTab(1)">
          列表
        </view>
        <view class="order-tab-item order-tab-left" :class="tabIndex=== 2 ? 'order-tab-item-choose' : ''" @click="changeTab(2)">
          信箱
        </view>
      </view>
    </view>
    <swiper :current="tabIndex" class="order-content" @change="swiperChange">
      <swiper-item class="order-content-item">
        <scroll-view class="order-content-item-scroll" :scroll-y="true">
          <view class="order-choose-number">
            <picker @change="changeNumber" :value="numberIndex" :range="numberList" class="order-choose-number-picker">
              <view>
                {{numberList[numberIndex]}}
              </view>
            </picker>
            <!-- <input type="text" placeholder="请选择买单数量" :disabled="true" class="order-choose-number-input" :value="number" /> -->
            <view class="order-choose-down"></view>
          </view>
          <checkbox-group class="uni-list" @change="checkboxChange">
            <label class="label-3">
              <view class="uni-list-cell uni-list-cell-pd">
                <checkbox class="checkbox" :value="checkbok.name" :checked="checkbok.isOK">
                  同意出价跟随系统价格波动
                </checkbox>
              </view>
            </label>
          </checkbox-group>
          <e-button text="提交" className="order-btn" hoverClass="order-btn-hover" :disabled="!isOK" @clickBtn="submitOrder"></e-button>
        </scroll-view>
      </swiper-item>
      <swiper-item class="order-content-item">
        <scroll-view class="order-content-item-scroll" :scroll-y="true" @scrolltolower="getMore">
          <view class="order-list-item" v-for="i in tradeList" :key="i.id">
            <view class="order-list-item-num">
              {{i.amount}}点券
            </view>
            <view class="order-list-item-money">
              ￥{{i.total}}
            </view>
            <view class="order-list-item-right">
              <button class="order-list-item-btn" @click="sale(i.id)">出售</button>
            </view>
          </view>
        </scroll-view>
      </swiper-item>
      <swiper-item class="order-content-item">
        <scroll-view class="order-content-item-scroll" :scroll-y="true">
          <view class="order-mail-item">
            <view class="order-mail-item-top">
              <view class="order-mail-item-top-id">
                单号:1904161043
              </view>
              <view class="order-mail-item-top-time">
                2019-4-16 10:44
              </view>
            </view>
            <view class="order-mail-item-content">
              <view class="order-mail-item-content-left">
                200点券
              </view>
              <view class="order-mail-item-content-content">
                ￥10000.23
              </view>
              <view class="order-mail-item-content-right">
                <!-- <text>待匹配</text> -->
                <!-- <text class="perform">待打款</text> -->
                <!-- <text class="perform">买家待确认</text> -->
                <text class="perform">卖家待确认</text>
                <!-- <text class="complaint">异常中</text> -->
              </view>
            </view>
            <view class="order-mail-item-bottom">
              <view class="order-mail-item-bottom-info">
                <button :plain="true" class="order-mail-item-bottom-btn" size="mini" @click="showInfo(true)">联系信息</button>
              </view>
              <view class="order-mail-item-bottom-option">
                <!-- <button :plain="true" class="order-mail-item-bottom-btn" size="mini">取消</button> -->
                <button :plain="true" class="order-mail-item-bottom-btn btn-mr" size="mini" @click="showInfo(false)">卖家信息</button>
                <button :plain="true" class="order-mail-item-bottom-btn btn-mr" size="mini" @click="uploadImg">上传凭证</button>
                <!-- <button :plain="true" class="order-mail-item-bottom-btn" size="mini">举报</button> -->
                <button :plain="true" class="order-mail-item-bottom-btn btn-red" size="mini">确认打款</button>
                <!-- <button :plain="true" class="order-mail-item-bottom-btn" size="mini">确认交易</button> -->
                <!-- <button :plain="true" class="order-mail-item-bottom-btn" size="mini">申诉</button> -->
              </view>
            </view>
          </view>
        </scroll-view>
      </swiper-item>
    </swiper>
    <view class="e-prompt" :class="isPromptShow ? 'e-prompt-in' : ''">
      <view class="e-prompt-layer" @click="closePrompt"></view>
        <view class="e-prompt-container">
        <view class="e-prompt-title">
          请输入交易密码
        </view>
        <view class="e-prompt-center">
          <input type="password" placeholder="请输入交易密码" class="e-prompt-input" placeholder-class="e-prompt-input-placeholder" :maxlength="6" v-model="tradePassword"/>
        </view>
        <view class="e-prompt-operation">
          <button type="warn" class="e-prompt-button" @click="submitSale">确认</button>
        </view>
      </view>
    </view>
    <view class="e-prompt" :class="isInfoPromptShow ? 'e-prompt-in' : ''">
      <view class="e-prompt-layer" @click="closeInfoPrompt"></view>
        <view class="e-prompt-container">
        <view class="e-prompt-title">
          查看个人信息
        </view>
        <view class="e-prompt-center">
          <view class="prompt-user-info">
            <view class="prompt-user-info-item" v-if="infoAllType">
              <view class="prompt-user-info-item-left">
                姓名：宋为民
              </view>
              <view class="prompt-user-info-item-right">
                <button :plain="true" class="prompt-user-info-item-btn btn-red" size="mini" @click="copyInfo">复制</button>
              </view>
            </view>
            <view class="prompt-user-info-item" v-if="infoAllType">
              <view class="prompt-user-info-item-left">
                ID：123456
              </view>
              <view class="prompt-user-info-item-right">
                <button :plain="true" class="prompt-user-info-item-btn btn-red" size="mini" @click="copyInfo">复制</button>
              </view>
            </view>
            <view class="prompt-user-info-item" v-if="infoAllType">
              <view class="prompt-user-info-item-left">
                手机号：18322336565
              </view>
              <view class="prompt-user-info-item-right">
                <button :plain="true" class="prompt-user-info-item-btn btn-red" size="mini" @click="copyInfo">复制</button>
              </view>
            </view>
            <view class="prompt-user-info-item" v-if="!infoAllType">
              <view class="prompt-user-info-item-left">
                开户行：中国光大银行中国光大银行中国光大银行中国光大银行
              </view>
              <view class="prompt-user-info-item-right">
                <button :plain="true" class="prompt-user-info-item-btn btn-red" size="mini" @click="copyInfo">复制</button>
              </view>
            </view>
            <view class="prompt-user-info-item" v-if="!infoAllType">
              <view class="prompt-user-info-item-left">
                银行卡：6227336555621256326
              </view>
              <view class="prompt-user-info-item-right">
                <button :plain="true" class="prompt-user-info-item-btn btn-red" size="mini" @click="copyInfo">复制</button>
              </view>
            </view>
            <view class="prompt-user-info-item" v-if="!infoAllType">
              <view class="prompt-user-info-item-left">
                支付宝：12364554454
              </view>
              <view class="prompt-user-info-item-right">
                <button :plain="true" class="prompt-user-info-item-btn btn-red" size="mini" @click="copyInfo">复制</button>
              </view>
            </view>
            <view class="prompt-user-info-item" v-if="!infoAllType">
              <view class="prompt-user-info-item-left">
                微信：asdasasd
              </view>
              <view class="prompt-user-info-item-right">
                <button :plain="true" class="prompt-user-info-item-btn btn-red" size="mini" @click="copyInfo">复制</button>
              </view>
            </view>
          </view>
        </view>
        <view class="e-prompt-operation">
          <!-- <button type="warn" class="e-prompt-button">确认</button> -->
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import EButton from '../../compoments/EButton/index.vue';
  import marketApi from '../../api/market';
  // import OSS from '../../asstes/js/aliyun-oss-sdk.min.js';
  import uploadFile from '../../asstes/js/uploadFile';
  export default {
    components: {
      EButton
    },
    data() {
      return {
        title: '小蜜蜂',
        typeId: 0,
        isPromptShow: false,
        isInfoPromptShow: false,
        infoAllType: true,
        tradePassword: '',
        checkbok: {
          isOK: false,
          name: 'check'
        },
        tabIndex: 2,
        numberList: [],
        numberIndex: 0,
        number: '',
        pageIndex: 1,
        pageCount: 0,
        tradeList: [],
        loadMore: true,
        orderId: ''
      }
    },
    computed: {
      isOK() {
        return this.checkbok.isOK && this.number !== '';
      }
    },
    methods: {
      goBack() {
        uni.navigateBack();
      },
      changeTab(index) {
        this.tabIndex = index;
      },
      swiperChange(event) {
        this.tabIndex = event.detail.current;
      },
      checkboxChange(e) {
        if (e.target.value.length > 0) {
          this.checkbok.isOK = true;
        } else {
          this.checkbok.isOK = false;
        }
      },
      changeNumber(e) {
        this.numberIndex = e.target.value;
        this.number = this.numberList[e.target.value];
        // uni.showActionSheet({
        //   itemList: this.numberList,
        //   success: function (res) {
        //       console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
        //   },
        //   fail: function (res) {
        //       console.log(res.errMsg);
        //   }
        // });
      },
      closePrompt() {
        this.tradePassword = '';
        this.isPromptShow = false;
      },
      closeInfoPrompt() {
        this.isInfoPromptShow = false;
      },
      sale(id) {
        this.orderId = id;
        this.isPromptShow = true;
      },
      async submitSale() {
        const res = /^[0-9]+$/;
        if (this.tradePassword.length !== 6 || !res.test(this.tradePassword)) {
          return uni.showToast({
            mask: true,
            icon: 'none',
            title: '请输入6位数字交易密码'
          });
        }
        try {
          let res = await marketApi.hangTransferByCode({
            id: this.orderId,
            tradePassword: this.tradePassword
          });
          if (res.success) {
            this.orderId = '';
            this.tradePassword = '';
            uni.showToast({
              title: '出售成功'
            });
          }
        } catch (error) {
        }
      },
      showInfo(type) {
        this.infoAllType = type;
        this.isInfoPromptShow = true;
      },
      copyInfo() {
        uni.setClipboardData({
          data: 'asd',
          success() {
            uni.showToast({
              title: '复制成功'
            });
          }
        });
      },
      async submitOrder() {
        try {
          let res = await marketApi.newHandTransfer({
            amount: this.number,
            type: this.typeId
          });
          if (res.success) {
            this.numberIndex = 0;
            this.number = this.numberList[0];
            this.checkbok.isOK = false;
            uni.showToast({
              title: '提交成功'
            });
          }
        } catch (error) {
        }
      },
      async getTradeList() {
        try {
          let res = await marketApi.getNewHandTran({
            pageIndex: this.pageIndex,
            type: this.typeId
          });
          this.loadMore = true;
          if (res.success) {
            this.pageCount = res.body.pageCount;
            this.tradeList = [...this.tradeList, ...res.body.paging];
          }
        } catch (error) {
          this.loadMore = true;
        }
      },
      getMore() {
        if (this.pageIndex < this.pageCount && this.loadMore) {
          this.pageIndex++;
          this.loadMore = false;
          this.getTradeList();
        }
      },
      async uploadImg() {
        uni.chooseImage({
          count: 1, //默认9
          sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album'], //从相册选择
          success: async (res) => {
            const tempFilePaths = res.tempFilePaths[0];
            uploadFile(tempFilePaths, '', (data) => {
              console.log(data)
            }, (error) => {
              uni.showToast({
                icon: 'none',
                title: '上传失败'
              });
            });
          }
        });
      }
    },
    onLoad(option) {
      const id = option.id;
      if (id === 'young') {
        this.title = '小蜜蜂';
        this.numberList = ['3', '5', '10', '20'];
        this.typeId = 0;
      } else {
        this.title = '大蜜蜂';
        this.numberList = ['50', '100', '150', '200'];
        this.typeId = 1;
      }
      this.number = this.numberList[0];
      this.getTradeList();
    }
  }
</script>

<style>
  .iconBack{
    font-size: 1rem !important;
		color: #fff;
    margin: 0 0.3rem 0 0;
  }
  .checkbox{
    padding: 0.5rem 5px;
    font-size: 0.85rem;
    color: #fbe4be;
  }
  .wx-checkbox-input{
    margin-top: -1px;
		width: 0.85rem !important;
		height: 0.85rem !important;
    color: rgb(237, 122, 45) !important;
	}
  .wx-checkbox-input-checked::before{
    font-size: 0.85rem !important;
  }
  .order-btn{
    margin-top: 2rem;
    background-color: #f4bd4f !important;
  }
  .order-btn-hover{
    background-color: #f4b63a !important;
  }
</style>

<style lang="scss" scoped>
  @import './index.scss';
</style>
