<template>
  <div id="commonContainer">
    <ul>
      <li v-for="(item, index) in comonents" :key="index">
        <div class="commonTop">
          <div class="commonLeft">
            <img :src="item.bannerInfo.picUrl"/>
          </div>
          <div class="commonRight">
            <p>{{item.itemName}}</p>
            <p>￥{{item.itemPrice}}</p>
            <img :src="item.itemPic"/>
          </div>
        </div>
        <div class="commonBottom">
          <img :src="item.avatar"/>
          <span>{{item.content}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
export default {

  computed: {
    ...mapState({
      comonents:state=>state.common
    })
  
  },
  mounted() {
  this.$store.dispatch('getCommons')
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../../common/stylus/mixins.styl'
#commonContainer 
  background white
  padding-bottom px2rem(96px)
  ul 
    li 
      margin-bottom px2rem(40px)
      padding px2rem(28px)  px2rem(34px)
      box-sizing border-box
      .commonTop 
        display flex
        .commonLeft 
          img 
            width: px2rem(328px)
            height: px2rem(328px)
            border-radius: px2rem(12px) px2rem(44px) 

        .commonRight 
          width px2rem(504px)
          height px2rem(328px)
          margin-left px2rem(80px)
          box-sizing border-box

          p 
            font-size px2rem(30px)
            font-weight bold
          

          img 
            width px2rem(172px)
            height px2rem(172px)
            margin-top px2rem(90px)
          
        
      

      .commonBottom 
        display flex
        background #F8F6EF
        width px2rem(680px)
        height  px2rem(212px)
        margin-top px2rem(30px)
        img 
          width px2rem(112px)
          height px2rem(112px)
          border-radius 50%
        span 
          font-size px2rem(24px)
          display inline-block
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          height px2rem(90px)
          text-align center
        
</style>
