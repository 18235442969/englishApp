<template>
  <view class="trade page-bg-img">
		<view class="status_bar"></view>
    <view class="trade-info">
      <view class="trade-info-top">
        <view class="trade-info-top-left">
          {{tradeInfo.price}}
        </view>
        <view class="trade-info-top-right">
          <!-- 成交量：<text class="trade-info-top-right-num">{{tradeInfo.amount}}</text> -->
        </view>
      </view>
      <view class="trade-info-bottom">
        <view class="trade-info-bottom-left">
          {{tradeInfo.num}}
        </view>
        <view class="trade-info-bottom-right">
          <!-- 成交总额：<text class="trade-info-bottom-right-num">{{tradeInfo.sumprice}}</text> -->
        </view>
      </view>
    </view>
    <!-- <view class="trade-chart">
      <view class="trade-chart-btn-list">
        <view class="trade-chart-btn trade-chart-btn-choose">
          日线
        </view>
        <view class="trade-chart-btn">
          月线
        </view>
      </view>
    </view> -->
    <!-- <canvas canvas-id="canvasLine" id="canvasLine" class="charts"></canvas> -->
    <view class="trade-cancelled">
      <view class="trade-cancelled-new" @click="gotoPage('young')">
        <view class="trade-cancelled-new-logo">
          <img src="../../asstes/images/young.png" class="trade-cancelled-new-img"/>
        </view>
        小蜜蜂
      </view>
      <view class="trade-cancelled-standard" @click="gotoPage('standard')">
        <view class="trade-cancelled-standard-logo">
          <img src="../../asstes/images/standard.png" class="trade-cancelled-new-img"/>
        </view>
        大蜜蜂
      </view>
    </view>
	</view>
</template>

<script>
  // import uCharts from '../../compoments/Line/components/u-charts/u-charts.js';
  import marketApi from '../../api/market';
  let _self = null;
	let canvaLine = null;
  export default {
    data() {
      return {
        pixelRatio: 1,
        tradeInfo: {
          price: 0,
          num: '0%',
          amount: 0,
          sumprice: 0
        }
      }
    },
    methods: {
      gotoPage(id) {
        uni.navigateTo({
          url: `/pages/putUpOrder/index?id=${id}`
        });
      },
      // getData(canvasId, chartData) {
      //   canvaLine = new uCharts({
			// 		$this: _self,
			// 		canvasId: canvasId,
			// 		type: 'line',
			// 		legend: true,
			// 		fontSize: 13,
			// 		background:'#f0942d',
			// 		pixelRatio: _self.pixelRatio,
			// 		animation: true,
			// 		categories: chartData.categories,
			// 		series: chartData.series,
			// 		xAxis: {
			// 			disableGrid: true,
			// 		},
			// 		yAxis: {
			// 		},
			// 		dataLabel: true,
			// 		width: _self.cWidth * _self.pixelRatio,
			// 		height: _self.cHeight * _self.pixelRatio,
			// 	});
      // },
      // initChartData() {
      //   _self = this;
      //   uni.getSystemInfo({
      //     success: res => {
      //       this.cWidth = uni.upx2px(res.windowWidth * res.pixelRatio);
      //     }
      //   })
      //   this.cHeight = uni.upx2px(500);
      //   let chartData = {};
      //   chartData.categories = ["2012",
      //     "2013",
      //     "2014",
      //     "2015",
      //     "2016",
      //     "2017"];
      //   chartData.series = [{
      //     "name": "周线",
      //     "data": [35, 20, 25, 37, 4, 20]
      //     }];
      //   this.getData('canvasLine', chartData);
      // },
      async getTransferConfig() {
        try {
          let res = await marketApi.getTransferConfig();
          if (res.success) {
            this.tradeInfo = res.body;
          }
        } catch (error) {
        }
      }
    },
    onLoad() {
      // this.initChartData();
			this.getTransferConfig();
		}
  }
</script>

<style lang='scss' scoped>
  @import './index.scss';
</style>
