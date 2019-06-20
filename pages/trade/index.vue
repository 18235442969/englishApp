<template>
  <view class="trade page-bg-img" v-if="tradeInfo.falg === 1">
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
    <view class="trade-chart">
      <view class="trade-chart-btn-list">
        <view class="trade-chart-btn" :class="lineType === 'weekData' ? 'trade-chart-btn-choose' : ''" @click="changeLineType('weekData')">
           周线
        </view>
        <view class="trade-chart-btn" :class="lineType === 'monthData' ? 'trade-chart-btn-choose' : ''"  @click="changeLineType('monthData')">
          月线
        </view>
      </view>
    </view>
    <canvas canvas-id="canvasLine" id="canvasLine" class="charts" :style="canvasStyle" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"></canvas>
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
  <view class="trade page-bg-img" v-else>
		<view class="status_bar"></view>
    <view class="trade-open-not" v-if="tradeInfo.falg === 0">
      <view>
        交易开放时间为
      </view>
      <view class="trade-open-not-time">9:00 ~ 23:59</view>
    </view>
    <view v-if="tradeInfo.falg === 2"></view>
  </view>
</template>

<script>
  import uCharts from '../../compoments/Line/components/u-charts/u-charts.js';
  import marketApi from '../../api/market';
  let _self = null;
	let canvaLine = null;
  export default {
    data() {
      return {
        isOpen: true,
        hasLoading: false,
        pixelRatio: 1,
        tradeInfo: {
          price: 0,
          num: '0%',
          amount: 0,
          sumprice: 0,
          falg: 2
        },
        canvasStyle: {},
        cWidth: 0,
        cHeight: 0,
        lineType: 'weekData',
        monthData: {},
        weekData: {}
      }
    },
    methods: {
      gotoPage(id) {
        uni.navigateTo({
          url: `/pages/putUpOrder/index?id=${id}`
        });
      },
      getData(canvasId, chartData) {
        canvaLine = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					legend: true,
					fontSize: 13,
					background:'#fa9036',
					pixelRatio: _self.pixelRatio,
					animation: false,
					categories: chartData.categories,
					series: chartData.series,
          enableScroll: true,
          legend: false,
          extra: {
            line: {
              width: 2
            }
          },
					xAxis: {
						disableGrid: true,
            fontColor: '#faa838',
            itemCount: 8,
            scrollAlign: 'right'
					},
					yAxis: {
            fontColor: '#fbf14a'
					},
					dataLabel: true,
					width: _self.cWidth,
					height: _self.cHeight,
				});
        this.lineType = 'weekData';
      },
      initChartData(data) {
        _self = this;
        this.cHeight = uni.upx2px(500);
        let chartData = {};
        chartData.categories = data.categories;
        chartData.series = [{
          "name": "周线",
          "data": data.series,
          'color': '#fcfb4d'
        }];
        uni.getSystemInfo({
          success: res => {
            let width = res.windowWidth;
            this.cWidth = width;
            this.getData('canvasLine', chartData);
          }
        })
      },
      changeLineType(type) {
        this.lineType = type;
        this.upDateLineData(type);
      },
      upDateLineData(type) {
        const series = [{
          "name": type === "weekData" ? '周线' : '月线',
          "data": this[type].series,
          'color': '#fcfb4d'
        }]
        const data = {
          categories: this[type].categories,
          series: series
        }
        canvaLine.updateData(data);
      },
      touchStart(e){
				canvaLine.scrollStart(e);
			},
			touchMove(e) {
				canvaLine.scroll(e);
			},
			touchEnd(e) {
				canvaLine.scrollEnd(e);
			},
      async getLineData(week, month) {
        try {
          this.weekData = {
            categories: week.map((e, index) => {
              const day = ['日', '一', '二', '三', '四', '五', '六'];
              let time = new Date(e.createTime).getDay();
              return day[time];
            }),
            series: week.map(e => e.price)
          }
          this.monthData = {
            categories: month.map(e => {
              let time = new Date(e.createTime).getDate();
              return time;
            }),
            series: month.map(e => e.price)
          }
          this.initChartData(this.weekData);
        } catch (error) {
        }
      },
      async getTransferConfig() {
        try {
          let res = await marketApi.getTransferConfig();
          if (res.success) {
            if (this.hasLoading) {
              this.tradeInfo.falg = res.body.falg;
            } else {
              this.hasLoading = true;
              this.tradeInfo = res.body;
              this.getLineData(res.body.weekDiagram, res.body.monthDiagram);
            }
          }
        } catch (error) {
        }
      }
    },
    onShow() {
			this.getTransferConfig();
		}
  }
</script>

<style lang='scss' scoped>
  @import './index.scss';
</style>
