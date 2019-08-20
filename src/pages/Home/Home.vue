<template>
  <div>
     <!--头部导航-->
  <header id="nav">
    <div class="as">
      <div id="nav-header">
        <div class="logo">
          <a href="javascript:;" class="logopicture">
            <img src="./imgs/logo.png" alt="">
          </a>
        </div>
        <div class="search" @click="go('/find')" >
          <i class="iconfont icon-xiaoxi-"></i>
          <input type="text" class="sousuo" placeholder="搜索商品，共21615款好物"/>
        </div>
        <div class="login">
          <a href="javascript:;">登录</a>
        </div>
      </div>

      <!--头部的遮罩-->
      <div class="header-mask-one">
        <div id="header-mask">
        <ul class="mask">
          <li>
            <a href="javascript:;">推荐</a>
          </li>
          <li>
            <a href="javascript:;">居家生活</a>
          </li>
          <li>
            <a href="javascript:;">服饰鞋包</a>
          </li>
          <li>
            <a href="javascript:;">美食酒水</a>
          </li>
          <li>
            <a href="javascript:;">个户清洁</a>
          </li>
          <li>
            <a href="javascript:;">母婴亲子</a>
          </li>
          <li>
            <a href="javascript:;">运动旅行</a>
          </li>
          <li>
            <a href="javascript:;">数码家电</a>
          </li>
          <li>
            <a href="javascript:;">全球特色</a>
          </li>
        </ul>
        <span class="arrow">
            <i class="iconfont icon-jiantou"></i>
        </span>
        <div class="line"></div>
      </div>
      </div>
    </div>

  </header>
  <!--头部轮滑-->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/e65e652f0ca19e6cc66f6ecc57631a7a.jpg?imageView&quality=75&thumbnail=750x0">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/09272c0588454c163017bfd19eb932ca.jpg?imageView&quality=75&thumbnail=750x0">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/eda2f4fc108b2c1be7dd4eafe26b2daa.png?imageView&quality=75&thumbnail=750x0">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&quality=75&thumbnail=750x0">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/b69d768f3cef93c13360a99c094cb5d0.jpg?imageView&quality=75&thumbnail=750x0">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/4bc2018b2cf0e449520a14ae0f2d15e6.jpg?imageView&quality=75&thumbnail=750x0">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/cd3c09eb6f66ddf64647907ff17cfe45.jpg?imageView&quality=75&thumbnail=750x0">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/b09d17acd91ea3d8e32853685ab69b71.jpg?imageView&quality=75&thumbnail=750x0">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
 
 <!--介绍-->
  <ul class="grow">
    <li class="growList">
      <a>
        <i class="iconfont icon-iconwuyouzhibao"></i>
        <span>网易自营品牌</span>
      </a>

    </li>
    <li class="growList">
      <a>
        <i class="iconfont icon-wuyouding"></i>
        <span>30天无忧退货</span>
      </a>

    </li>
    <li class="growList">
      <a>
        <i class="iconfont icon-wuyouding"></i>
        <span>48小时快速退款</span>
      </a>

    </li>
  </ul>


  <section class="shop">
    <!--货物-->
    <div class="goods">
      <ul class="goodsList">
        <li class="goods-item">
          <a class="goodss">
            <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif">
            <span>新品首发</span>
          </a>
        </li>
        <li class="goods-item">
          <a class="goodss">
            <img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png">
            <span>新品首发</span>
          </a>
        </li>
        <li class="goods-item">
          <a class="goodss">
            <img src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png">
            <span>新品首发</span>
          </a>
        </li>
        <li class="goods-item">
          <a class="goodss">
            <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png">
            <span>新品首发</span>
          </a>
        </li>
        <li class="goods-item">
          <a class="goodss">
            <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png">
            <span>新品首发</span>
          </a>
        </li>


        <li class="goods-item">
          <a class="goodss">
            <img src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png">
            <span>新品首发</span>
          </a>
        </li>
        <li class="goods-item">
          <a class="goodss">
            <img src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png">
            <span>新品首发</span>
          </a>
        </li>
        <li class="goods-item">
          <a class="goodss">
            <img src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png">
            <span>新品首发</span>
          </a>
        </li>
        <li class="goods-item">
          <a class="goodss">
            <img src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png">
            <span>新品首发</span>
          </a>
        </li>
        <li class="goods-item">
          <a class="goodss">
            <img src="https://yanxuan.nosdn.127.net/3954c3cbeb4359dd7007be7a076e0dda.gif">
            <span>新品首发</span>
          </a>
        </li>
      </ul>
    </div>
    <!--新人专享礼-->
    <div class="nrepeople">
      <div class="new-top">
        <span>-新人专享礼-</span>
      </div>
      <div class="new-bottom">
        <div class="new-bottom-left">
          <a>
            <div class="new-bottom-left-top">
              新人专享礼包
            </div>
            <div class="new-bottom-left-bottom">
              <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png"/>
            </div>
          </a>

        </div>
        <div class="new-bottom-right">
          <div class="new-bottom-right-top">
            <div class="new-bottom-right-top-left">
              <span class="fuli">福利社</span>
              <span class="tejia">今日特价</span>
            </div>
            <div class="new-bottom-right-top-right">
              <div class="circle">
                <span class="xianprice">￥24.6</span>
                <span class="yuanprice">￥34.9</span>
              </div>
              <img src="https://yanxuan-item.nosdn.127.net/81e3c70911ba7b4b3a5a6e40be3f2b27.png?imageView&thumbnail=200x200&quality=75" class="socks">
            </div>
          </div>
          <div class="new-bottom-right-bottom">
            <div class="new-bottom-right-top-left">
              <span class="newpeople">新人拼团</span>
              <span class="baoyou">1元起包邮</span>
            </div>
            <div class="new-bottom-right-top-right">
              <div class="circle">
                <span class="xianprice">￥1</span>
                <span class="yuanprice">￥19.9</span>
              </div>
              <img src="https://yanxuan-item.nosdn.127.net/58b7b4a5277dddbfd9b99b07f38b6c20.png?imageView&thumbnail=200x200&quality=75" class="tuoxie">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--品牌制造商-->
    <div class="pinpai">
      <div class="pinpai-top">
        <div class="pinpai-top-left">
          <span>品牌制造商提供</span>
        </div>
        <div class="pinpai-top-right">
          <a href="javascript:;" class="more-a">
            <span class="more">更多</span>
            <i class="iconfont icon-jiantou1"></i>
          </a>
        </div>
      </div>
      <ul class="pinpai-bottom">
        <li class="pinpai-bottom-list">
          <a href="javascript;;">
            <div class="zhizaoshang">
              <h4>海外制造商</h4>
              <div class="pinpai-price">
                            <span class="price-total">
                                <span class="money">9.9</span>
                                <span class="yuanqi">元起</span>
                            </span>
                <span class="shang-new">上新</span>

              </div>
            </div>
          </a>
        </li>
        <li class="pinpai-bottom-list two">
          <a href="javascript;;">
            <div class="zhizaoshang">
              <h4>海外制造商</h4>
              <div class="pinpai-price">
                            <span class="price-total">
                                <span class="money">9.9</span>
                                <span class="yuanqi">元起</span>
                            </span>
                <span class="shang-new">上新</span>

              </div>
            </div>
          </a>
        </li>
        <li class="pinpai-bottom-list three">
          <a href="javascript;;">
            <div class="zhizaoshang">
              <h4>海外制造商</h4>
              <div class="pinpai-price">
                            <span class="price-total">
                                <span class="money">9.9</span>
                                <span class="yuanqi">元起</span>
                            </span>
                <span class="shang-new">上新</span>

              </div>
            </div>
          </a>
        </li>
        <li class="pinpai-bottom-list four">
          <a href="javascript;;">
            <div class="zhizaoshang">
              <h4>海外制造商</h4>
              <div class="pinpai-price">
                            <span class="price-total">
                                <span class="money">9.9</span>
                                <span class="yuanqi">元起</span>
                            </span>
                <span class="shang-new">上新</span>

              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <!--类日热销榜-->
    <div class="hot-bought">
      <div class="hot-top">
        <div class="hot-top-left">
          <span>类目热销榜</span>
        </div>
      </div>
      <a href="javascript" class="firat-a">
        <div class="hot-bottom">
          <div class="bottom-top">
            <div class="bottom-top-left">
              <div class="text">
                <span>热销榜</span>
                <div class="xiline"></div>
              </div>
              <img src="https://yanxuan-item.nosdn.127.net/4f43f69ece3312fcd0b032c949c7c71b.png?imageView&quality=65&thumbnail=200x200">
            </div>
            <div class="bottom-top-right">
              <div class="text-two">
                <span>热销榜</span>
                <div class="xiline-two"></div>
              </div>
              <img src="https://yanxuan.nosdn.127.net/6fd807743e8e25472aca8b6b0b8f3039.png?imageView&quality=65&thumbnail=200x200">
            </div>
          </div>
          <div class="shop-Items">
            <ul class="shoplist-items">
              <li class="listitems">
                <div class="jianjie">居家生活棒</div>
                <!--<div class="pictures">-->
                <img src="https://yanxuan-item.nosdn.127.net/15aaef3c3dd497fccb91358885a5ba0f.png?imageView&quality=65&thumbnail=200x200">
                <!--</div>-->
              </li>
              <li class="listitems">
                <div class="jianjie">居家生活棒</div>
                <!--<div class="pictures">-->
                <img src="https://yanxuan-item.nosdn.127.net/15aaef3c3dd497fccb91358885a5ba0f.png?imageView&quality=65&thumbnail=200x200">
                <!--</div>-->
              </li>
              <li class="listitems">
                <div class="jianjie">居家生活棒</div>
                <!--<div class="pictures">-->
                <img src="https://yanxuan-item.nosdn.127.net/15aaef3c3dd497fccb91358885a5ba0f.png?imageView&quality=65&thumbnail=200x200">
                <!--</div>-->
              </li>
              <li class="listitems">
                <div class="jianjie">居家生活棒</div>
                <!--<div class="pictures">-->
                <img src="https://yanxuan-item.nosdn.127.net/15aaef3c3dd497fccb91358885a5ba0f.png?imageView&quality=65&thumbnail=200x200">
                <!--</div>-->
              </li>
              <li class="listitems">
                <div class="jianjie">居家生活棒</div>
                <!--<div class="pictures">-->
                <img src="https://yanxuan-item.nosdn.127.net/15aaef3c3dd497fccb91358885a5ba0f.png?imageView&quality=65&thumbnail=200x200">
                <!--</div>-->
              </li>
              <li class="listitems">
                <div class="jianjie">居家生活棒</div>
                <!--<div class="pictures">-->
                <img src="https://yanxuan-item.nosdn.127.net/15aaef3c3dd497fccb91358885a5ba0f.png?imageView&quality=65&thumbnail=200x200">
                <!--</div>-->
              </li>
              <li class="listitems">
                <div class="jianjie">居家生活棒</div>
                <!--<div class="pictures">-->
                <img src="https://yanxuan-item.nosdn.127.net/15aaef3c3dd497fccb91358885a5ba0f.png?imageView&quality=65&thumbnail=200x200">
                <!--</div>-->
              </li>
              <li class="listitems">
                <div class="jianjie">居家生活棒</div>
                <!--<div class="pictures">-->
                <img src="https://yanxuan-item.nosdn.127.net/15aaef3c3dd497fccb91358885a5ba0f.png?imageView&quality=65&thumbnail=200x200">
                <!--</div>-->
              </li>
            </ul>
          </div>

        </div>
      </a>

    </div>
    <!--人气推荐-->
    <div class="people">
      <div class="pinpai-top">
        <div class="pinpai-top-left">
          <span>人气推荐</span>
        </div>
        <div class="pinpai-top-right">
          <a href="javascript:;" class="more-a">
            <span class="more">更多</span>
            <i class="iconfont icon-jiantou1"></i>
          </a>
        </div>
      </div>
      <a class="people-center" href="#">
        <div class="bed">
          <img src="https://yanxuan-item.nosdn.127.net/89d86a4e463115e366daf841b9bcff46.png?imageView&quality=65&thumbnail=280x280">
        </div>
        <div class="little">
          <div class="chaodi">抄底特惠</div>
          <div class="chaodi">
            <span>泰国制造是会计泰国制造是会计泰国制造是会计</span>
          </div>
        </div>
      </a>
      <div class="feng-content">
        <ul class="fengshan">
          <li class="fengshan-list">
            <a href="#">
              <div class="xichen">
                <img src="https://yanxuan-item.nosdn.127.net/227848eddc10ee787cbccb6f315fb963.png?imageView&quality=65&thumbnail=330x330">
              </div>
              <div class="jieshao">
                <span>吸尘制造吸尘制造</span>
              </div>
            </a>
          </li>
          <li class="fengshan-list">
            <a href="#">
              <div class="xichen">
                <img src="https://yanxuan-item.nosdn.127.net/227848eddc10ee787cbccb6f315fb963.png?imageView&quality=65&thumbnail=330x330">
              </div>
              <div class="jieshao">
                <span>吸尘制造吸尘制造</span>
              </div>
            </a>
          </li>
          <li class="fengshan-list">
            <a href="#">
              <div class="xichen">
                <img src="https://yanxuan-item.nosdn.127.net/227848eddc10ee787cbccb6f315fb963.png?imageView&quality=65&thumbnail=330x330">
              </div>
              <div class="jieshao">
                <span>吸尘制造吸尘制造</span>
              </div>
            </a>
          </li>
        </ul>
      </div>

    </div>


   <!--享受，横向滑屏-->
    <div class="enjoy">
      <div class="category">
        <a href="#" class="binner">
          <img src="https://yanxuan.nosdn.127.net/f377290320aac364e5984ce70f6baaea.jpg?imageView&thumbnail=750x0&quality=75">
        </a>

        <div class="categorys">
          <div class="categorys-two">
            <div class="inner-swiper" >
              <ul class="swiper-list">
                <li class="swiper-items">
                  <a href="#" class="swiper-ai">
                    <div class="img-content">
                      <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=330x330">
                      <div class="name-to">
                        <span class="swipre-name">全价猫粮，1.8千克 *1带</span>
                      </div>
                      <div class="swipre-name-two">
                        <span>￥88</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="swiper-items">
                  <a href="#" class="swiper-ai">
                    <div class="img-content">
                      <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=330x330">
                      <div class="name-to">
                        <span class="swipre-name">全价猫粮，1.8千克 *1带</span>
                      </div>
                      <div class="swipre-name-two">
                        <span>￥88</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="swiper-items">
                  <a href="#" class="swiper-ai">
                    <div class="img-content">
                      <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=330x330">
                      <div class="name-to">
                        <span class="swipre-name">全价猫粮，1.8千克 *1带</span>
                      </div>
                      <div class="swipre-name-two">
                        <span>￥88</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="swiper-items">
                  <a href="#" class="swiper-ai">
                    <div class="img-content">
                      <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=330x330">
                      <div class="name-to">
                        <span class="swipre-name">全价猫粮，1.8千克 *1带</span>
                      </div>
                      <div class="swipre-name-two">
                        <span>￥88</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="swiper-items">
                  <a href="#" class="swiper-ai">
                    <div class="img-content">
                      <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=330x330">
                      <div class="name-to">
                        <span class="swipre-name">全价猫粮，1.8千克 *1带</span>
                      </div>
                      <div class="swipre-name-two">
                        <span>￥88</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="swiper-items">
                  <a href="#" class="swiper-ai">
                    <div class="img-content">
                      <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=330x330">
                      <div class="name-to">
                        <span class="swipre-name">全价猫粮，1.8千克 *1带</span>
                      </div>
                      <div class="swipre-name-two">
                        <span>￥88</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>


 
  </div>
</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll' 
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import {mapState} from 'vuex'
  export default {
    methods:{
      go(path){
        this.$router.push(path)
      }
    },
     mounted() { 

            this.$nextTick(() => { 
                this.scroll = new Bscroll('.inner-swiper',{
                  scrollX:true
                }),
                 this.scroll = new Bscroll('#header-mask',{
                  scrollX:true
                })

            }) ,
             new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true
      })
    },

    computed:{
      ...mapState(['data'])
    }


        } 

 
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
#nav
  height px2rem(148px)
  .as
    position fixed
    z-index 99
    #nav-header
      height px2rem(88px)
      background #fff
      display flex
      align-items center
      padding px2rem(10px)
      box-sizing border-box
      vertical-align center
      margin-bottom px2rem(-2px)
      .logo
        width px2rem(138px)
        padding-top px2rem(10px)
        box-sizing border-box
        margin-right px2rem(20px)
        .logopicture
          width px2rem(160px)
          img
            width px2rem(140px)
      .search
        width px2rem(442px)
        height px2rem(56px)
        padding px2rem(0) px2rem(4px)
        position relative
        left px2rem(-5px)
        .iconfont
          position absolute
          left px2rem(8px)
          top px2rem(2px)
          font-size px2rem(60px)
        .sousuo
          width px2rem(442px)
          height px2rem(56px)
          border-radius px2rem(12px)
          font-size px2rem(27px)
          box-sizing border-box
          padding-left px2rem(62px)
          background #ccc
      .login
        width  px2rem(100px)
        height px2rem(40px)
        line-height px2rem(50px)
        border px2rem(1px) solid red
        border-radius px2rem(10px)
        display flex
        align-items center
        margin-left px2rem(5px)
        margin-top px2rem(15px)
        a
          padding 0 px2rem(20px)
          display inline-block
          font-size px2rem(28px)
          height px2rem(40px)
          color red
          box-sizing border-box
    .header-mask-one
       width 100%
       background white
       
       #header-mask
        width 100%
        height px2rem(60px)
        background white
        overflow hidden
        position relative
        .mask
          display flex
          position absolute
          width px2rem(1700px)
          left 0
          top 0
          li
            flex-shrink 0
            padding 0 px2rem(35px)
            box-sizing border-box
            a
              font-size px2rem(30px)
              line-height px2rem(60px)
        .arrow
          position absolute
          right px2rem(0px)
          top px2rem(0px)
          width px2rem(70px)
          height px2rem(60px)
          display block
          background white
          .iconfont
            font-size px2rem(42px)
        .line
          height px2rem(6px)
          width px2rem(80px)
          background red
          position absolute
          left px2rem(26px)
          top px2rem(52px)
.swiper-container
  width 100%
  height px2rem(370px)
  .swiper-pagination-bullet
    width px2rem(40px)
    height px2rem(4px)
    background white
.grow
  width 100%
  height px2rem(72px)
  display flex
  background white
  padding 0 px2rem(30px)
  box-sizing border-box
  align-items center
  .growList
    width px2rem(247px)
    height px2rem(36px)
    a
      width px2rem(230px)
      height px2rem(32px)
      display inline-block
      display flex
      color black
      .iconfont
        font-size px2rem(32px)
        color red
      span
        width px2rem(175px)
        height px2rem(32px)
        font-size px2rem(24px)
        display inline-block
        margin-left px2rem(8px)
.shop
  width 100%
  //height 100%
  background #ccc
  .goods
    width 100%
    height px2rem(370px)
    background white
    .goodsList
      width 100%
      height px2rem(370px)
      display flex
      flex-wrap wrap
      .goods-item
        width px2rem(110px)
        height px2rem(156px)
        margin px2rem(10px) px2rem(20px) px2rem(9px)
        .goodss
          width px2rem(110px)
          height px2rem(156px)
          display inline-block
          img
            width px2rem(110px)
            height px2rem(110px)
          span
            font-size px2rem(24px)
            margin px2rem(10px) 0 0
            width px2rem(110px)
            height px2rem(36px)
            display inline-block
            color #333

  .nrepeople
    width 100%
    height px2rem(558px)
    background white
    padding 0 0 0 px2rem(30px)
    box-sizing border-box
    margin px2rem(20px) 0
    .new-top
      width 100%
      height px2rem(90px)
      padding 0 px2rem(30px)
      background white
      color #333
      font-size px2rem(32px)
      text-align center
      line-height px2rem(90px)
      box-sizing border-box
    .new-bottom
      width 100%
      height px2rem(438px)
      display flex
      .new-bottom-left
        width px2rem(343px)
        height px2rem(434px)
        margin 0 px2rem(4px) 0 0
        background #F9E9CF
        a
          width px2rem(343px)
          height px2rem(434px)
          margin 0 px2rem(4px) 0 0
          display inline-block
          .new-bottom-left-top
            width px2rem(342px)
            height px2rem(78px)
            padding px2rem(30px) 0 0 px2rem(30px)
            font-size px2rem(32px)
            box-sizing border-box
          //background red
          .new-bottom-left-bottom
            width px2rem(258px)
            height px2rem(257px)
            margin px2rem(35px) auto
      .new-bottom-right
        width px2rem(343px)
        height px2rem(438px)
        //background #7e8c8d
        .new-bottom-right-top
          width px2rem(343px)
          height px2rem(215px)
          background  #FBE2D3
          display flex
          margin-bottom px2rem(5px)
          .new-bottom-right-top-left
            width px2rem(140px)
            height px2rem(215px)
            .fuli
              width px2rem(180px)
              height px2rem(48px)
              font-size px2rem(32px)
              padding-left px2rem(20px)
              box-sizing border-box
            .tejia
              width px2rem(180px)
              height px2rem(48px)
              font-size px2rem(24px)
              padding-left px2rem(20px)
              box-sizing border-box
          .new-bottom-right-top-right
            width px2rem(200px)
            height px2rem(200px)
            position: relative
            .circle
              width px2rem(80px)
              height px2rem(80px)
              background orange
              border-radius 50%
              position relative
              margin  px2rem(25px) px2rem(90px) 0
              .xianprice
                font-size px2rem(22px)
                width px2rem(80px)
                height px2rem(15px)
                color white
              .yuanprice
                font-size px2rem(20px)
                width px2rem(80px)
                position absolute
                left px2rem(4px)
                bottom px2rem(15px)
                color white
            .socks
              width px2rem(200px)
              height px2rem(200px)
              position absolute
              left px2rem(10px)
              top px2rem(15px)
        .new-bottom-right-bottom
          width px2rem(343px)
          height px2rem(215px)
          background #FFECC2
          display flex
          .new-bottom-right-top-left
            width px2rem(140px)
            height px2rem(215px)
            .newpeople
              width px2rem(310px)
              height px2rem(48px)
              font-size px2rem(35px)
              padding-left px2rem(12px)
              box-sizing border-box
              display inline-block
            .baoyou
              width px2rem(310px)
              height px2rem(48px)
              font-size px2rem(24px)
              padding-left px2rem(20px)
              box-sizing border-box
              color white
              display inline-block
            //background-color #cccccc
          .new-bottom-right-top-right
            width px2rem(190px)
            height px2rem(215px)
            position relative
            .circle
              width px2rem(80px)
              height px2rem(80px)
              background orange
              border-radius 50%
              position absolute
              left px2rem(60px)
              top px2rem(20px)
              z-index 12
              .xianprice
                font-size px2rem(22px)
                width px2rem(80px)
                height px2rem(15px)
                color white
              .yuanprice
                font-size px2rem(20px)
                width px2rem(80px)
                position absolute
                left px2rem(4px)
                bottom px2rem(15px)
                color white
            .tuoxie
              width px2rem(200px)
              height px2rem(200px)
              position absolute
              left px2rem(10px)
              top px2rem(25px)
  .pinpai
    width 100%
    height px2rem(654px)
    background white
    .pinpai-top
      width 100%
      height px2rem(100px)
      padding 0 px2rem(30px)
      box-sizing border-box
      background white
      .pinpai-top-left
        width px2rem(224px)
        height px2rem(99px)
        background white
        line-height px2rem(99px)
        float left
        span
          width px2rem(224px)
          height px2rem(42px)
          display inline-block
          color #333
          font-size px2rem(32px)
      .pinpai-top-right
          width px2rem(77px)
          height px2rem(99px)
          //background #ffa500
          float right
          line-height px2rem(99px)
          .more-a
            width px2rem(77px)
            height px2rem(99px)
            position relative
            .more
              width px2rem(56px)
              height px2rem(31px)
              font-size px2rem(27px)
              color #333
            .iconfont
              font-size px2rem(65px)
              position absolute
              right px2rem(-100px)
              top px2rem(-95px)
    .pinpai-bottom
      width 100%
      height px2rem(554px)
      margin 0 0 px2rem(20px)
      padding 0 px2rem(26px) px2rem(26px) px2rem(30px)
      box-sizing border-box
      background white
      display flex
      flex-wrap wrap
      .pinpai-bottom-list
        width px2rem(343px)
        height px2rem(260px)
        background url(https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1)
        margin 0 px2rem(4px) px2rem(4px) 0
        &.two
          background url(https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1)
        &.three
          background url(https://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1)
        &.four
          background url(https://yanxuan.nosdn.127.net/c9e14b08576b6a5e2bc3ef46e0e05d08.png?imageView&thumbnail=343y260&enlarge=1)
        a
          width px2rem(343px)
          height px2rem(260px)
          text-align center
          .zhizaoshang
            width px2rem(343px)
            height px2rem(95px)
            padding px2rem(23px) 0 0
            box-sizing border-box
            h4
              width px2rem(343px)
              height px2rem(33px)
              font-size px2rem(27px)
              margin 0 0 px2rem(3px)
              color #333
              line-height px2rem(33px)
            .pinpai-price
              width px2rem(343px)
              height px2rem(36px)
              display flex
              position relative
              .price-total
                width px2rem(120px)
                height px2rem(27px)
                padding-left px2rem(45px)
                display flex
                .money
                  width px2rem(33px)
                  height px2rem(27px)
                  font-size px2rem(24px)
                .yuanqi
                  width px2rem(60px)
                  height px2rem(27px)
                  font-size px2rem(24px)
                  //display flex
                  display inline-block
              .shang-new
                width px2rem(60px)
                height px2rem(27px)
                font-size px2rem(24px)
                display inline-block
                background #f9e9cf
  .hot-bought
    width 100%
    height px2rem(710px)
    background white
    margin-top px2rem(10px)
    .hot-top
      width 100%
      height px2rem(100px)
      //background #f9e9cf
      padding  0 px2rem(30px)
      box-sizing border-box
      .hot-top-left
        width px2rem(160px)
        height px2rem(99px)
        //background #007aff
        line-height px2rem(99px)
      span
        width px2rem(160px)
        height px2rem(42px)
        text-align center
        font-size px2rem(32px)
        display inline-block
    .firat-a

      .hot-bottom
        width 100%
        height px2rem(610px)
        //background #cccccc
        padding 0 px2rem(20px) px2rem(20px) px2rem(30px)
        box-sizing border-box
        .bottom-top
          width 100%
          height px2rem(200px)
          //background green
          display flex
          .bottom-top-left
            width px2rem(340px)
            height px2rem(200px)
            margin 0 px2rem(10px) px2rem(10px) 0
            background #f9e9cf
            display flex
            .text
              width px2rem(340px)
              height px2rem(41px)
              margin px2rem(66px) 0 0
              padding 0 0 0 px2rem(24px)
              //background yellow
              span
                width px2rem(84px)
                height px2rem(41px)
                font-size px2rem(27px)
                display inline-block
              .xiline
                width px2rem(60px)
                height px2rem(10px)
                background black

          .bottom-top-right
            width px2rem(340px)
            height px2rem(200px)
            margin 0 px2rem(10px) px2rem(10px) 0
            background #EBEFF6
            display flex
            .text-two
              width px2rem(340px)
              height px2rem(41px)
              margin px2rem(66px) 0 0
              padding 0 0 0 px2rem(24px)
              //background yellow
              span
                width px2rem(84px)
                height px2rem(41px)
                font-size px2rem(27px)
                display inline-block
              .xiline-two
                width px2rem(60px)
                height px2rem(10px)
                background black
        .shop-Items
          width 100%
          height px2rem(360px)
          background white
          //background yellowgreen
          .shoplist-items
            width 100%
            height px2rem(360px)
            display flex
            flex-wrap wrap
            background white
            margin-top px2rem(10px)
            .listitems
              width px2rem(165px)
              height px2rem(180px)
              background #F5F5F5
              margin 0 px2rem(10px) px2rem(10px) 0
              flex-direction column
              display flex
              align-items center
              .jianjie
                width px2rem(165px)
                height px2rem(36px)
                //background green
                font-size px2rem(24px)
                margin px2rem(10px) 0 0
                color #333
                line-height px2rem(36px)
                text-align center

              img
                width px2rem(120px)
                height px2rem(120px)
  .people
    width 100%
    height px2rem(784px)
    background white
    margin 0 0 px2rem(20px)
    padding 0 0 px2rem(30px)
    box-sizing border-box
    .pinpai-top
      width 100%
      height px2rem(100px)

      box-sizing border-box
      padding 0 px2rem(30px)
      background white
      .pinpai-top-left
        width px2rem(224px)
        height px2rem(99px)
        background white
        line-height px2rem(99px)
        float left
        span
          width px2rem(224px)
          height px2rem(42px)
          display inline-block
          color #333
          font-size px2rem(32px)
      .pinpai-top-right
        width px2rem(77px)
        height px2rem(99px)
        //background #ffa500
        float right
        line-height px2rem(99px)
        .more-a
          width px2rem(77px)
          height px2rem(99px)
          position relative
        .more
          width px2rem(56px)
          height px2rem(31px)
          font-size px2rem(27px)
          color #333
        .iconfont
          font-size px2rem(65px)
          position absolute
          right px2rem(-100px)
          top px2rem(-95px)
    .people-center
      width px2rem(690px)
      height px2rem(280px)
      background pink
      margin 0  px2rem(30px)  px2rem(20px)
      display inline-block
      display flex
      align-items center
      .bed
        width px2rem(280px)
        height px2rem(280px)
      .little
        width px2rem(350px)
        height px2rem(160px)
        background #ffa500
        .chaodi
          width px2rem(350px)
          height px2rem(33px)
          margin 0 0  px2rem(9px)
          box-sizing border-box
          font-size px2rem(24px)
          white-space nowrap
          overflow hidden
          text-overflow ellipsis

    .feng-content
      width px2rem(750px)
      height px2rem(354px)
      padding 0  px2rem(10px)
      box-sizing border-box
      .fengshan
        width px2rem(740px)
        height px2rem(354px)
        display flex
        .fengshan-list
          width px2rem(216px)
          height px2rem(337px)
          margin-left px2rem(23px)
          box-sizing border-box
          a
            width px2rem(216px)
            height px2rem(337px)
            .xichen
              width px2rem(216px)
              height px2rem(216px)
              //background #ccc
              img
                width px2rem(216px)
                height px2rem(216px)
            .jieshao
              width px2rem(216px)
              height px2rem(72px)
              //background #007aff
              color #333
              span
                width px2rem(200px)
                height px2rem(67px)
                display inline-block
                font-size px2rem(24px)
                color red

  .enjoy
    width 100%
    height px2rem(780px)
    background white
    overflow hidden
    .category
      width 100%
      height px2rem(780px)
      //background pink
      .binner
        width 100%
        height px2rem(370px)
        display inline-block
        //background #f9e9cf
      .categorys
        width 100%
        height px2rem(391px)
        .categorys-two
          width 100%
          height px2rem(391px)
          
          //background green
          .inner-swiper
            position relative
            
            height px2rem(391px)

            .swiper-list
              position absolute
              left 0
              top 0
              display flex
              padding 0 px2rem(30px)
              box-sizing border-box
              .swiper-items
                width px2rem(200px)
                height px2rem(361px)
                margin-left px2rem(5px)
                .swiper-ai
                  width px2rem(200px)
                  height px2rem(320px)
                  //background #ffa500
                  display inline-block
                  .img-content
                    width px2rem(200px)
                    height px2rem(200px)
                    background #F4F4F4

                    img
                      width px2rem(200px)
                      height px2rem(200px)
                    .name-to
                      width px2rem(200px)
                      height px2rem(72px)
                      background white
                      .swipre-name
                        width px2rem(185px)
                        height px2rem(67px)
                        display inline-block
                        font-size px2rem(24px)
                        color #333
                        text-align center
                    .swipre-name-two
                      width px2rem(200px)
                      height px2rem(36px)
                      position relative
                      span
                        width  px2rem(42px)
                        height  px2rem(31px)
                        display inline-block
                        font-size px2rem(24px)
                        color red
                        position absolute
                        left px2rem(30px)
                        bottom px2rem(6px)























</style>
