<template>
  <div class='header'>
    <div class="content-wrapper">
      <div class="avatar">
        <img alt="" width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="content-title">
          <span class="brand"></span>
          <span class="name" style="vertical-align:top;">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text" style="vertical-align:top;">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports">
        <span class="count" @click="showDetail">{{seller.supports.length}}></span>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text" style="font-size: 10px;vertical-align:top;">{{seller.bulletin}}</span>
      <span class="_bulletin">></span>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="" width="100%" height="100%">
    </div>
    <div v-show="detailShow" class="detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <star :size="24" :score="seller.score"></star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li class="supports-item" v-for="(item,index) in seller.supports">
              <span class="icon" :class="classMap[seller.supports[index].type]"></span>
              <span class="text">{{seller.supports[index].description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class="detail-close">
        <span @click="detailClose">X</span>
      </div>
    </div>
  </div>
</template>

<script>
  import star from '../star/star'
  export default{
    props: {
      seller: {
        required: true,
        type: Object
      }
    },
    data() {
      return {
        detailShow: false
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    },
    methods: {
      showDetail() {
        this.detailShow = true
      },
      detailClose() {
        this.detailShow = false
      }
    },
    components: {
      star
    }
  }
</script>

<style>
  .header {
    color: #ffffff;
    position: relative;
    background: rgba(7, 17, 27, 0.5);
  }

  .header .content-wrapper {
    padding: 24px 12px 18px 24px;
    position: relative;
  }

  .avatar {
    display: inline-block;
    vertical-align: top;
  }

  .content {
    display: inline-block;
    margin-left: 16px;
  }

  .count {
    display: inline-block;
  }

  .support-count {
    background: rgba(7, 17, 27, 0.2);
    height: 22px;
    width: 40px;
    position: absolute;
    line-height: 22px;
    bottom: 22px;
    right: 16px;
    text-align: center;
    border-radius: 8px;
  }

  .content-title {
    font-size: 16px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    line-height: 18px;
    padding: 4px 0;
  }

  .description {
    color: rgb(255, 255, 255);
    line-height: 12px;
    font-size: 12px;
    font-weight: 200;
  }

  .content-title .brand {
    width: 30px;
    height: 18px;
    display: inline-block;
    background: url('brand@2x.png') no-repeat;
    background-size: cover;
  }

  .support {
    line-height: 12px;
    font-size: 10px;
    color: rgb(255, 255, 255);
    font-weight: 200;
    padding-top: 7px;
  }

  .support .icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-size: 12px;
    background-repeat: no-repeat;
  }

  .supports-item {
    padding: 6px 0;
  }

  .supports-item .text {
    display: inline-block;
    margin-left: 6px;
    color: rgb(255, 255, 255);
    font-weight: 200;
    font-size: 12px;
    line-height: 16px;
    vertical-align:top;
  }

  .supports-item .icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    background-size: 16px;
    background-repeat: no-repeat;
  }

  .decrease {
    background-image: url('decrease_1@2x.png');
  }

  .discount {
    background-image: url('discount_1@2x.png');
  }

  .guarantee {
    background-image: url('guarantee_1@2x.png');
  }

  .invoice {
    background-image: url('invoice_1@2x.png');
  }

  .special {
    background-image: url('special_1@2x.png');
  }

  .bulletin {
    width: 80%;
    margin: 0 auto;
  }

  .bulletin .content {
    font-size: 12px;
    font-weight: 200;
    line-height: 24px;
    color: rgb(255, 255, 255);
    padding: 4px 0;
  }

  .bulletin-wrapper {
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(7, 17, 27, 0.2);
  }

  .bulletin-title {
    display: inline-block;
    width: 22px;
    height: 12px;
    background-image: url('bulletin@2x.png');
    background-repeat: no-repeat;
    background-size: 100%;
  }

  ._bulletin {
    display: inline-block;
    width: 11px;
    height: 28px;
    position: absolute;
    right: 5px;
    font-size: 20px;

  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(2px);
  }

  .detail {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(7, 17, 27, 0.8);
    top: 0;
    left: 0;
  }

  .detail-wrapper {
    min-height: 100%;
    width: 100%;
  }

  .detail-wrapper .detail-main {
    margin-top: 64px;
    padding-bottom: 64px;
  }

  .detail-close {
    position: relative;
    width: 32px;
    height: 32px;
    margin: -64px auto;
    clear: both;
    text-align: center;
  }

  .star-wrapper {
    margin-top: 18px;
    padding: 2px 0;
    text-align: center;
  }

  .title {
    display: flex;
    width: 80%;
    margin: 30px auto 24px auto;
  }

  .supports {
    width: 80%;
    margin: 0 auto;
    padding-left: 12px;

  }

  .title .line {
    flex: 1;
    position: relative;
    top: -6px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .title .text {
    padding: 0 12px;
    font-size: 14px;
  }

  .detail-main .name {
    line-height: 16px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }
</style>
