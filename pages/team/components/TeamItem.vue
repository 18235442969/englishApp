<template>
  <view class="team-item">
    <view class="team-user-info">
      <view class="team-user-info-name">
        {{user.phone}}
      </view>
      <view class="team-user-info-id">
        ID:{{user.userid}}
      </view>
    </view>
    <view class="team-user-leave">
      <view class="team-user-leave-info">
        <img src="../../../asstes/images/team-leave.png" class="team-img"/>
        {{leaveName}}
      </view>
      <view class="team-user-leave-number">
        <img src="../../../asstes/images/team.png" class="team-img" />
        团队人数:{{user.count}}
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'TeamItem',
    props: ['user'],
    computed: {
      leaveName() {
        const object = ['普通会员', '一级班长', '二级班长', '三级班长', '四级班长'];
        return this.user.integral === -1 ? '注册会员' : object[this.user.integral];
      }
    },
    data() {
      return {
        
      }
    },
    mounted () {
    }
  }
</script>

<style>
  .team-user-info-font{
    color: #f68a5d;
    font-size: 1.1rem !important;
  }
  .team-user-number-font{
    color: #f68a5d;
    font-size: 1.1rem !important;
  }
</style>


<style lang="scss" scoped>
  .team-item{
    display: flex;
    margin-top: 0.8rem;
    padding: 1rem 1rem;
    background-color: #f4f5f5;
    border-left: 5px solid #f08a20;
    border-radius: 5px;
    flex-direction: row;
    .team-user-info{
      width: 60%;
      border-right: 1px solid #dedede;
      font-size: 0.85rem;
      .team-user-info-id{
        margin-top: 0.5rem;
        font-size: 0.8rem;
        color: #b4b4b6;
      }
    }
    .team-user-leave{
      flex-grow: 1;
      padding-left: 1rem;
      font-size: 0.75rem;
      .team-user-leave-info, .team-user-leave-number{
        display: flex;
        flex-direction: row;
        align-items: center;
        .team-img{
          margin-right: 5px;
          width: 0.85rem;
          height: 0.85rem;
        }
      }
      .team-user-leave-info{
        color: #48a6ef;
      }
      .team-user-leave-number{
        margin-top: 0.5rem;
        color: #58595a;
        .team-img{
          margin-top: 2px;
          width: 0.9rem;
          height: 0.9rem;
        }
      }
    }
  }
</style>
