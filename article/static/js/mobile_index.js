$(function(){
    //回到顶部最终版，添加动画效果
    $(window).scroll(function(){
        //当window的scrolltop距离大于1时，go to
        if($(this).scrollTop() > 50){
            $("#back-to-top").animate({'top':'590px'},0);
        }else{
            $("#back-to-top").animate({'top':'-900px'},0);
        }
    });
    $('#back-to-top').click(function(){
        $('html ,body').animate({scrollTop: 0}, 1000);
        return false;
    });


    //设置页脚图片随机生成
    $(document).ready(function(){
        var rand_num = Math.floor(Math.random()*5);
        $(".footer-chara-box").eq(rand_num).show();
    });

});