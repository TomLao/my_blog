// =======================================================
//     回到顶部普通版
// =======================================================
// $(function(){
//     $('#back-to-top img').click(function(){
//         $('html , body').animate({scrollTop: 0},'slow');
//     });
// });

// =======================================================
//     编写jQuery返回顶部插件
// =======================================================
// jQuery.fn.goToTop = function(id_name){
//
//     // 判断如果窗口滚动距离小于0，隐藏按钮
//     // if($(window).scrollTop() <= 0){
//     //     // $(id_name).hide();
//     // }
//
//     // 窗口滚动时，判断当前窗口滚动距离
//     $(window).scroll(function(){
//         if($(this).scrollTop() > 100){
//             $(id_name).animate({'top':'-250px'},0);
//         }else{
//             $(id_name).animate({'top':'-900px'},0);
//         }
//     });
//
//     // 给这个按钮绑定一个click事件
//     this.bind('click',function(){
//         $('html ,body').animate({scrollTop: 0},1000);
//         return false;
//     });
// };
//
// //调用这个插件
// $(function(){
//     $('#back-to-top').goToTop('#back-to-top');
// });
//
// $(function(){
//     $(window).scroll(function(){
//         //当window的scrolltop距离大于1时，go to
//         if($(this).scrollTop() > 100){
//             $("#back-to-top").animate({'top':'-250px'},0);
//         }else{
//             $("#back-to-top").animate({'top':'-900px'},0);
//         }
//     });
//
//     $('#back-to-top').click(function(){
//         $('html ,body').animate({scrollTop: 0}, 300);
//         return false;
//     });
// });