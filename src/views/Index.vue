<template>
  <section>
    <div class="header">
      <form class="form">
        <input disabled placeholder="DRIESVAN极致修复精华乳液" type="text">
        <span class="icon_search"></span>
      </form>
      <p class="menu"><span class="icon_menu"></span></p>
    </div>
    <div class="main">
      <div class="banner">
        <!-- Swiper -->
        <div class="swiper-container" ref="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,i) in banner" :key="i" style="width:5.08rem">
              <a>{{item}}
                <img src="../assets/img/defultSraech@2x.png" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="module_wrapper">
        <div class="module module1">
          <div class="title_wrapper">
            <h5 class="title">今日推荐</h5>
            <div class="time">
              <p class="icon_border"></p>
              <div class="date">
                <p class="month">March</p>
                <p class="year">2018</p>
              </div>
              <div class="day">24</div>
            </div>
          </div>
          <div class="recommend">
            <List mold="basic" :search="{is_recommend: this.query.is_recommend}"/>
          </div>
        </div>
        <div class="module module2">
          <div class="title_wrapper">
            <h5 class="title">品牌直供</h5>
            <div class="icon_wrapper">
              <p class="icon_border"></p>
              <p class="depict">DIRECT SUPPLY</p>
            </div>
          </div>
          <div class="banner">
            <a>
              <img src="" alt="">
            </a>
          </div>
          <div class="choice">
            <ul class="choice_list">
              <li class="item">
                <a>
                  <div class="img_wrapper">
                    <img src="" alt="">
                  </div>
                  <div class="info">
                    <p class="name">黑凤梨专享极致系列美肤嫩肤护理</p>
                    <p class="effect">极致修复体验只为你的美</p>
                    <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
                  </div>
                </a>
              </li>
              <li class="item">
                <a>
                  <div class="img_wrapper">
                    <img src="" alt="">
                  </div>
                  <div class="info">
                    <p class="name">黑凤梨专享极致系列美肤嫩肤护理</p>
                    <p class="effect">极致修复体验只为你的美</p>
                    <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
                  </div>
                </a>
              </li>
              <li class="item">
                <a>
                  <div class="img_wrapper">
                    <img src="" alt="">
                  </div>
                  <div class="info">
                    <p class="name">黑凤梨专享极致系列美肤嫩肤护理</p>
                    <p class="effect">极致修复体验只为你的美</p>
                    <p class="price"><span class="newPrice"><em>￥</em>1368.00</span><s class="oldPrice">￥2999.00</s></p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="module module2">
          <div class="title_wrapper">
            <h5 class="title">专辑精选</h5>
            <div class="icon_wrapper">
              <p class="icon_border"></p>
              <p class="depict">BAST ALMUN</p>
            </div>
          </div>
          <div class="banner">
            <a>
              <img src="" alt="">
            </a>
          </div>
          <div class="choice">
            <ul class="choice_list">
              <li class="item">
                <a>
                  <div class="img_wrapper">
                    <img src="" alt="">
                  </div>
                  <div class="info">
                    <p class="name">黑凤梨专享极致系列美肤嫩肤护理</p>
                    <p class="effect">极致修复体验只为你的美</p>
                    <p class="price">
                      <span class="newPrice">
                        <em>￥</em>1368.00</span>
                      <s class="oldPrice">￥2999.00</s>
                    </p>
                  </div>
                </a>
              </li>
              <li class="item">
                <a>
                  <div class="img_wrapper">
                    <img src="" alt="">
                  </div>
                  <div class="info">
                    <p class="name">黑凤梨专享极致系列美肤嫩肤护理</p>
                    <p class="effect">极致修复体验只为你的美</p>
                    <p class="price">
                      <span class="newPrice">
                        <em>￥</em>1368.00</span>
                      <s class="oldPrice">￥2999.00</s>
                    </p>
                  </div>
                </a>
              </li>
              <li class="item">
                <a>
                  <div class="img_wrapper">
                    <img src="" alt="">
                  </div>
                  <div class="info">
                    <p class="name">黑凤梨专享极致系列美肤嫩肤护理</p>
                    <p class="effect">极致修复体验只为你的美</p>
                    <p class="price">
                      <span class="newPrice">
                        <em>￥</em>1368.00</span>
                      <s class="oldPrice">￥2999.00</s>
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="module module3">
          <div class="title_wrapper">
            <h5 class="title">为你挑选</h5>
            <div class="icon_wrapper">
              <p class="icon_border"></p>
              <p class="depict">JUST FOR YOU</p>
            </div>
          </div>
          <div class="select">
            <List mold="productsList"/>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <ul class="footer_list">
        <li class="item active">
          <a>
            <span class="icon index"></span>
            <span class="text">首页</span>
          </a>
        </li>
        <li class="item">
          <a>
            <span class="icon cart"></span>
            <span class="text">购物车</span>
          </a>
        </li>
        <li class="item">
          <a>
            <span class="icon mine"></span>
            <span class="text">个人中心</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Swiper from '../../static/js/swiper.min.js'
import '../../static/css/swiper.min.css'

import List from '../components/List'
export default {
  created () {
    this.$nextTick(function () {
      this._initSwiper()
    })
  },
  data () {
    return {
      mySwiper: null,
      banner: [1, 2, 3, 4],
      query: {
        is_recommend: 1
      }
    }
  },
  methods: {
    _initSwiper () {
      const container = this.$refs.swiper
      const config = {
        slidesPerView: 'auto',
        loop: true,
        loopedSlides: this.banner.lenght,
        spaceBetween: 30,
        centeredSlides: true,
        observer: true,
        observeParents: true,
        autoplay: {
          disableOnInteraction: false,
          delay: 1500
        }
      }
      this.mySwiper = new Swiper(container, config)
    }
    // fetchBanner: function () {
    //   this.$http.get('api/banners', {
    //     params: {
    //       cat_id: 1,
    //       take: 5
    //     }
    //   }).then(res => {
    //     let data = res.data.meta
    //     this.banners = data
    //     this.$nextTick(function () {
    //       this._initSwiper()
    //     })
    //   }).catch(error => {
    //     this.$utils.showError(error)
    //   })
    // }
  },
  components: {
    List
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  em {
    font-style: normal;
  }
  input::-moz-placeholder { color:rgb(193,193,193); }
  input::-webkit-input-placeholder { color:rgb(193,193,193); }
  input:-ms-input-placeholder { color:rgb(193,193,193); }
  .main{
    padding:0.88rem 0 0.98rem;
    box-sizing: border-box;
  }
  .header{
    width: 100%;
    height: auto;
    background: #fff;
    overflow: hidden;
    padding:0 0.3rem;
    box-sizing: border-box;
    position: fixed;
    top:0;
    left:0;
    z-index: 10;
  }
  .form {
    width:88%;
    height:0.88rem;
    padding:0.3rem 0;
    box-sizing: border-box;
    position: relative;
    border-bottom: 0.01rem solid #DEDDDE;
    float: left;
  }
  .form input{
    width: 100%;
    height:0.28rem ;
    background: #fff;
    line-height:0.28rem ;
    padding-right: 0.6rem;
    box-sizing: border-box;
  }
  .form .icon_search{
    display: block;
    position: absolute;
    right: 0;
    top:0.24rem;
    width:0.4rem ;
    height: 0.4rem;
    background-image: url('../assets/img/icon/icon_search@2x.png');
    background-size:0.4rem 0.4rem;
    background-repeat:no-repeat ;
    background-position: center;
  }
  .menu {
    float: right;
  }
  .icon_menu{
    display: block;
    width:0.4rem;
    height: 0.4rem;
    background-image: url('../assets/img/icon/icon_homepage_list@2x.png');
    background-size:0.4rem 0.4rem;
    background-repeat:no-repeat ;
    background-position: center;
    margin:0.24rem 0;

  }
  .banner{
    height: 7.72rem;
    padding:0.51rem 0 0.81rem;
    box-sizing: border-box;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background: #ddd;
    width: 5.08rem;
  }
  .banner a{
    display: inline-block;
    width:5.08rem ;
    height: 6.4rem;
  }
  .banner img{
    width:5.08rem ;
    height: 6.4rem;
  }
  .module_wrapper{
    height:auto;
    padding:0 0.3rem;
    box-sizing: border-box;
  }
  .module{
    border-top: 0.01rem solid rgb(222, 221, 222);
    height: auto;
  }
  .title_wrapper{
    overflow: hidden;
    background: #fff;
  }
  .title_wrapper .title{
    width:auto;
    height: 0.4rem;
    line-height: 0.4rem;
    margin:0.06rem 0;
    font-size:0.4rem;
    color:rgb(51, 51, 51) ;
    box-sizing: border-box;
    float: left;
  }
  .time{
    float: right;
    width:2.2rem;
    height: 0.52rem;
    overflow: hidden;
    padding-left: 0.23rem;
    box-sizing: border-box;
    position: relative;
    font-family: 'DINAlternate-Bold';
  }
  .time .icon_border{
    height:0.4rem;
    border-left:0.01rem solid rgb(222, 221, 222);
    margin:0.06rem 0;
    position: absolute;
    top:0;
    left: 0;
  }
  .date{
    height: 0.52rem;
    position: absolute;
    top:0;
    left:0.23rem;
    z-index: 1;
  }
  .date .month{
    line-height: 0.3rem;
    height: 0.3rem;
    font-size: 0.3rem;
    color:rgb(51, 51, 51);
  }
  .date .year{
    line-height: 0.2rem;
    height: 0.2rem;
    font-size: 0.2rem;
    color:rgb(51, 51, 51);
  }
  .day{
    line-height: 0.52rem;
    height: 0.52rem;
    font-size: 0.52rem;
    color:rgb(51, 51, 51);
    margin-left: 0.16rem;
    position: absolute;
    top:0;
    right:0.3rem;
  }
  .module1{
    padding-top:0.51rem;
    box-sizing: border-box;
    background: #fff;
  }
  .recommend{
    width: 100%;
    height: auto;
    padding:0.5rem 0 0.2rem;

  }
  .module2{
    padding-top: 0.52rem;
    box-sizing: border-box;
  }
  .module3{
    padding-top:0.52rem;
    box-sizing: border-box;
  }
  .icon_wrapper{
    height: auto;
    margin-left: 0.16rem;
    float: left;
    overflow: hidden;
  }
  .icon_wrapper .icon_border{
    height: 0.46rem;
    border-left: 0.01rem solid rgb(222, 221, 222);
    box-sizing: border-box;
    margin: 0.06rem 0;
    margin-right: 0.14rem;
    float: left;
  }
  .icon_wrapper .depict{
    float: right;
    width: 1.1rem;
    height:0.46rem;
    line-height: 0.23rem;
    font-size: 0.18rem;
    margin:0.05rem 0;
    font-family:'DINAlternate-Bold';
  }
  .module2 .banner{
    width:100%;
    height:2.98rem;
    background: #ddd;
    margin-top: 0.52rem;
    padding:0;
  }
  .module2 .banner a{
    width: auto;
    height: auto;
  }
  .module2 .banner img{
    width: 100%;
    height: 100%;
  }
  .choice{
    background: #fff;
    margin-bottom: 0.7rem;
  }
  .choice_list{
    height: auto;
  }
  .choice_list .item{
    width: 100%;
    padding-top:0.3rem;
    overflow: hidden;
  }
  .choice_list .img_wrapper{
    width:1.86rem;
    /* width:27%; */
    height:1.6rem;
    background: #ddd;
    margin-right: 0.24rem;
    float: left;
  }
  .choice_list .info{
    width: 69.5%;
    height: 1.6rem;
    padding:0.14rem 0;
    box-sizing: border-box;
    float: left;
    position: relative;
  }
  .choice_list .name{
    height: 0.26rem;
    line-height: 0.26rem;
    font-size: 0.26rem;
    color:rgb(51, 51, 51);
    margin-bottom:0.14rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .choice_list .effect{
    height: 0.22rem;
    line-height: 0.22rem;
    font-size: 0.22rem;
    color:rgb(153, 153, 153);
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .choice_list .price{
    height:0.32rem;
    line-height: 0.32rem;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .choice_list .newPrice{
    margin-right: 0.12rem;
    font-weight: 900;
    font-size:0.32rem;
    color:rgb( 255, 82, 62);
  }
  .choice_list .newPrice em{
    font-size:0.24rem;
    font-weight: 900;
    color:rgb( 255, 82, 62);
  }
  .choice_list .oldPrice{
    color: rgb(193 193 193);
    font-size: 0.24rem;
  }
  .select{
    height: auto;
    margin-top: 0.52rem;
  }
  .bottom_line{
    width:100%;
    height: auto;
    margin:0.31rem 0 0.69rem;
  }
  .bottom_line .icon_img{
    width: 100%;
    height: auto;
    text-align: center;
    margin-bottom: 0.12rem;
  }
  .bottom_line .icon_img img{
    width:0.96rem;
    height:0.36rem;
  }
  .bottom_line .text{
    height: 0.22rem;
    line-height: 0.22rem;
    text-align: center;
    color:rgb( 193, 193, 193);
    font-size: 0.22rem;
  }
  .footer{
    width:100%;
    height: 0.98rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
  }
  .footer_list{
    display: flex;
    height: 100%;
  }
  .footer_list .item{
    flex: 1;
  }
  .footer_list a{
    display: inline-block;
    width:100%;
    height: 100%;
    text-align: center;
    padding-top:0.62rem;
    box-sizing: border-box;
    position: relative;
  }
  .footer_list .icon{
    display: inline-block;
    width:0.48rem ;
    height: 0.48rem ;
    background-size:0.48rem 0.48rem ;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top:0.08rem;
    left:50%;
    margin-left: -0.24rem;
  }
  .footer_list .text{
    display: block;
    font-size:0.18rem;
    margin-top: 0.04rem;
    color:rgb(222, 221, 222);
  }
  .footer_list .active .text{
    color:rgb(51,51,51);
  }
  .footer_list .index.icon{
    background-image: url('../assets/img/icon/icon_homepage_n@2x.png');
  }
  .footer_list .active .index{
    background-image: url('../assets/img/icon/icon_homepage_s@2x.png');
  }
  .footer_list .cart.icon{
    background-image: url('../assets/img/icon/icon_cart_n@2x.png');
  }
  .footer_list .active .cart{
    background-image: url('../assets/img/icon/icon_cart_s@2x.png');
  }
  .footer_list .mine.icon{
    background-image: url('../assets/img/icon/icon_profile_n@2x.png');
  }
  .footer_list .active .mine{
    background-image: url('../assets/img/icon/icon_profile_s@2x.png');
  }
</style>
