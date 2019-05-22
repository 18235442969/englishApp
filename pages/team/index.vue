<template>
  <scroll-view class="team" :scroll-y="true" @scrolltolower="getMore" :lower-threshold="100">
    <view class="team-list" v-if="teamList.length > 0">
      <team-item v-for="i in teamList" :key="i.userid" :user="i"></team-item>
    </view>
    <view class="no-data" v-else>
      <text class="no-data-text">
        暂无数据
      </text>
    </view>
  </scroll-view>
</template>

<script>
  import TeamItem from './components/TeamItem.vue';
  import userApi from '../../api/user.js';
  export default {
    components: {
      TeamItem
    },
    data() {
      return {
        pageSize: 20,
        pageIndex: 1,
        pageCount: 0,
        teamList: [],
        loadMore: true
      }
    },
    methods: {
      async getTeam() {
        try {
          let res = await userApi.getUserMyfamilyDB({
            pageSize: this.pageSize,
            pageIndex: this.pageIndex
          });
          this.loadMore = true;
          if (res.success) {
            this.pageCount = res.body.pageCount;
            this.teamList = [...this.teamList, ...res.body.paging];
          }
        } catch (error) {
          this.loadMore = true;
        }
      },
      getMore() {
        if (this.pageIndex < this.pageCount && this.loadMore) {
          this.pageIndex++;
          this.loadMore = false;
          this.getTeam();
        }
      }
    },
    onLoad() {
      this.getTeam();
    }
  }
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
