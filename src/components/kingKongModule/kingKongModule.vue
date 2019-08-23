<template>
<!-- 新人专享里 -->
  <div class="goods">
      <ul class="goodsList">
        <li class="goods-item" v-for="(item, index) in goodss" :key="index">
          <a class="goodss">
            <img :src="item.picUrl">
            <span>{{item.text}}</span>
          </a>
        </li>
        


        
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
      props:['goodss']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import '../../common/stylus/mixins.styl'

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
 
</style>
