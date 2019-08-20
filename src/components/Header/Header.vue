
<template>
	<div>
			<header class="pro-head">
         <div class="head-top">
						<a href="#" class="home" @click="back('/home')">
							<i class="iconfont icon-home"></i>
						</a>
						<div class="logo-head">
							<img src="../../pages/Profile/imgs/logo.png">
						</div>
          	<div class="shiliang">
             	<a href="#" class="jing">
            			<i class="iconfont icon-xiaoxi-"></i>
          		</a>

							<a href="#" class="cart">
								<i class="iconfont icon-xiazai1"></i>
							</a>
          </div>
         
        </div>

      </header>
	</div>
</template>

<script type="text/ecmascript-6">

	export default {
		methods:{
			back(path){
				this.$router.replace(path)
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
.pro-head
  width px2rem(750px)
  height px2rem(88px)
  position relative
  display flex
	.head-top
		width 100%
		height px2rem(88px)
		padding 0 px2rem(35px) 0 px2rem(12px)
		box-sizing border-box
		display flex
		justify-content space-around
		line-height px2rem(84px)
		position relative	
		.home
			width px2rem(24px)
			height px2rem(22px)
			display inline-block
			position absolute
			left px2rem(25px)
			top 0
			.icon-home
				font-size px2rem(48px)
		.logo-head
      width px2rem(148px)
      height px2rem(84px)
      left px2rem(260px)
      top 0
      position absolute
		.shiliang
      width px2rem(148px)
      height px2rem(64px)
      position absolute
      top 0
      right px2rem(64px)
		.jing
			width px2rem(64px)
			height px2rem(28px)
			display inline-block
			position absolute
			right px2rem(25px)
			top 0
			margin-right px2rem(40px)
			.iconfont 
				font-size px2rem(78px)
		.cart
			width px2rem(64px)
			height px2rem(64px)
			display inline-block
			top 0
			right px2rem(5px)
			position absolute
			.iconfont 
				 font-size px2rem(78px)
</style>
		
     
    
     
  
    
   
    
  
    
 