<template>
  <div>
      	<Header></Header>
        <router-view></router-view>
      <section class="pro-content">
        <div class="pre-top">
          <div class="pre-img">
            <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
          </div>
           <div class="pre-bottom"> 
            <div class="bottom-top" @click="go('/login')">
             <i class=""></i>
              <span>手机号快捷登录</span>
          </div>
           <div class="bottom-top right">
             <i class=""></i>
              <span>邮箱账号登录</span>
          </div>
        </div>

        <div class="dibu">
          <div class="one">
            <span class="one-text">
              <i class="iconfont icon-changyonglogo28"></i>
              <span class="one-texes">微信</span>
            </span>
          </div>
           <div class="two">
            <span class="two-text">
              <i class="iconfont icon-web-icon-"></i>
              <span class="two-texes">qq</span>
            </span>
          </div>
           <div class="three">
            <span class="three-text">
              <i class="iconfont icon-weibo1"></i>
              <span class="three-texes">微博</span>
            </span>
          </div>
        </div>
        </div>
       
      </section>
  </div>
</template>

<script type="text/ecmascript-6">
 import Header from '../../components/Header/Header'
 
  export default {
    components:{
      Header
    },
    methods:{
      go(path){
        this.$router.push(path)
      }
    }

    // data:{
    //   isShowPhone:true,
    // },
    // methods:{
    //   isShowPhone(){
    //     this.isShowPhone=!this.isShowPhone;

    //   }
    // },
   
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import '../../common/stylus/mixins.styl'

 
   
      
    

   

   
    
.pro-content
  width 100%
  height px2rem(1245px)
  background #ccc
  .pre-top
    width 100%
    height px2rem(750px)
    .pre-img
      width 100%
      height px2rem(480px)
      padding px2rem(160px) 0 px2rem(232px)
      box-sizing border-box
      text-align center
      .img 
        width px2rem(268px)
        height px2rem(90px)
    .pre-bottom
      width 100%
      height px2rem(220px)
      display flex
      justify-content space-around
      flex-wrap wrap
      text-align center
      .bottom-top
        width px2rem(640px)
        height px2rem(94px)
        margin 0 0 px2rem(32px)
        background red
        line-height px2rem(94px)
        &.right 
          margin-left px2rem(32px)
  .dibu
    width 100%
    height px2rem(40px)
    margin-top px2rem(400px)
    display flex
    .one
      width px2rem(182px)
      height px2rem(40px)
      padding 0 px2rem(20px)
      box-size border-box
      .one-text
        width px2rem(100px)
        height px2rem(28px)
        display inline-block
        font-size px2rem(13px)
        display flex
        margin-left px2rem(66px)
        .iconfont
          font-size px2rem(50px)
          vertical-align middle
        .one-texes
          font-size  px2rem(24px)
          width px2rem(56px)
          height px2rem(32px)
          display inline-block
          line-height px2rem(32px)
          vertical-align middle
    .two
      width px2rem(182px)
      height px2rem(40px)
      padding 0 px2rem(20px)
      box-size border-box
      .two-text
        width px2rem(100px)
        height px2rem(28px)
        display inline-block
        font-size px2rem(13px)
        display flex
        margin-left px2rem(66px)
        .iconfont
          font-size px2rem(50px)
          vertical-align middle
        .two-texes
          font-size  px2rem(24px)
          width px2rem(56px)
          height px2rem(32px)
          display inline-block
          line-height px2rem(32px)
          vertical-align center
    .three
      width px2rem(182px)
      height px2rem(40px)
      padding 0 px2rem(20px)
      box-size border-box
      .three-text
        width px2rem(100px)
        height px2rem(28px)
        display inline-block
        font-size px2rem(13px)
        display flex
        margin-left px2rem(66px)
        .iconfont
          font-size px2rem(50px)
          vertical-align middle
        .three-texes
          font-size  px2rem(24px)
          width px2rem(56px)
          height px2rem(32px)
          display inline-block
          line-height px2rem(32px)
          vertical-align middle

</style>
