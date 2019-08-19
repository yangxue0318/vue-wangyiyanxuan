(function(){
  var width=document.documentElement.clientWidth;
  var styleNode=document.createElement('style');
  styleNode.innerHTML='html{font-size:'+width/16+'px !important;}';
  document.head.appendChild(styleNode);
})()


// window.onload=function () {
//   var mySwiper = new Swiper ('.swiper-container', {
//     loop: true, // 循环模式选项

//     // 如果需要分页器
//     pagination: {
//       el: '.swiper-pagination',
//     },
//   })
// }



