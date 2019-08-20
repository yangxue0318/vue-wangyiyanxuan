<template>
  <div>
		<header class="head">
      <div class="head-top">
        <div class="main-view">
          <span class="logo">购物车</span>
          <div class="youhui">
            <span>领券</span>
          </div>
        </div>
      </div>
      <div class="head-bottom">
        <ul class="head-list">
          <li class="head-item">
            <span>30天无忧退货</span>
          </li>
            <li class="head-item">
            <span>30天无忧退货</span>
          </li>
            <li class="head-item">
            <span>30天无忧退货</span>
          </li>
        </ul>
      </div>
    </header>
    <section class="section-content">
      <div class="content-shop">
        <div class="shop-cart">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png">
        </div>
        <div class="shop-login">
          <div class="text">去添加点什么吧</div>
          <div class="go-login">登录</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import '../../common/stylus/mixins.styl'
.head
  width 100%
  height px2rem(157px)
  padding-bottom px2rem(198px)
  box-sizing border-box
  background #ccc
  .head-top
    width 100%
    height px2rem(88px)
    background  white
    .main-view
      width 100%
      height px2rem(87px)
      padding 0 px2rem(30px)
      line-height px2rem(87px)
      box-sizing border-box
      .logo
        width px2rem(108px)
        height px2rem(87px)
        font-size px2rem(36px)
        text-align center
        display inline-block
        float left
      .youhui
        width px2rem(90px)
        height px2rem(87px)
       
        font-size px2rem(30px)
        text-align center
        float right
        span 
          width px2rem(60px)
          height px2rem(33px)
          display inline-block
  .head-bottom
    width 100%
    height px2rem(70px)
    background #ccc
    .head-list
      width 100%
      height px2rem(70px)
      margin-top px2rem(30px)
      padding 0 px2rem(30px)
      box-sizing border-box
      display flex
      justify-content space-around
      .head-item
        width px2rem(163px)
        height px2rem(36px)
       
        span 
          width px2rem(150px)
          height px2rem(36px)
          display inline-block
          font-size px2rem(24px)
.section-content
  width 100%
  height px2rem(1000px)
  
  background #ccc
  position relative
  .content-shop
    width 100%
    height px2rem(300px)
   
    position absolute
    top px2rem(250px)
    padding-left px2rem(250px)
    box-sizing border-box
    .shop-cart
      width px2rem(248px)
      height px2rem(248px)
      margin-bottom px2rem(28px)
    .shop-login
      width 100%
      height px2rem(169px)
      margin px2rem(-20px) 0 0
      .text
        width 100%
        height px2rem(27px)
        margin 0 0 px2rem(50px)
        font-size  px2rem(27px)
      .go-login
        width  px2rem(480px)
        height px2rem(92px)
        margin-left px2rem(-90px)
        background red
        text-align center
        line-height px2rem(92px)
        
    


         


          

 
</style>
