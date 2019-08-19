<template>
   <!--底部footer-->
  <footer id="footer_guid">
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/home'}"  @click="goTo('/home')">
       <span class="item_icon ">
           <i class="iconfont icon-menu-home-normal"></i>
       </span>
      <span class="footers">首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/sort'}"  @click="goTo('/sort')">
       <span class="item_icon">
           <i class="iconfont icon-leimupinleifenleileibie1"></i>
       </span>
      <span class="footers">分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/search'}"  @click="goTo('/search')">
       <span class="item_icon">
           <i class="iconfont icon-shiwu"></i>
       </span>
      <span class="footers" >识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/shop'}"  @click="goTo('/shop')">
       <span class="item_icon">
           <i class="iconfont icon-gouwuche"></i>
       </span>
      <span class="footers">购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/profile'}"  @click="goTo('/profile')">
       <span class="item_icon">
           <i class="iconfont icon-renwu"></i>
       </span>
      <span class="footers">个人</span>
    </a>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
 #footer_guid
    position fixed
    left 0
    bottom 0
    right 0
    height px2rem(100px)
    background #fff
    display flex
    z-index 100
    .guide_item
      width 20%
      height px2rem(100px)
      display flex
      flex-direction column
      align-items center
      justify-content center
      &.on
        color red
      .item_icon
        display inline-block
        
        .iconfont
          font-size px2rem(60px)
      .footers
        font-size px2rem(30px)
</style>
