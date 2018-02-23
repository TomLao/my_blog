;(function ($, window, undefind) {

    //使用面向对象式
    var Common;
    Common=Common||{

        Window:{
            $window:null,
            $document:null,
            width:0,
            height:0
        },

        Side:{
            element:null,
            height:0
        },

        setUpOnce: function() {
            window.scrollTo(0,0);

            //初始化窗口和文档变量，隐式使用jq
            Common.Window.$window = $(window);
            Common.Window.$document = $(document);
            Common.Window.width = Common.Window.$window.width();
            Common.Window.height = Common.Window.$window.height();
            //准备滚动事件
            Common.Side.element = document.querySelector(".left-side");
            Common.Side.style = Common.Side.element.style;
            Common.Side.height = Common.Side.element.offsetHeight;

            //启动go
            Common.init();
        },

        init: function () {

            Common.setFooterChara();
            Common.ScrollEvent.init();
        },

        //设置页脚图片随机生成
        setFooterChara: function () {
            var rand_num = Math.floor(Math.random()*5);
            $(".footer-chara-box").eq(rand_num).show();
        },

        //滚动事件，对应一个对象
        ScrollEvent:{
            flag:0,     //-1：向下，1：向上
            bg1_style: null,
            bg1_init_y: 0,
            bg1_move_y: 0.4,
            //初始化
            init: function () {
                this.bg1_style = document.querySelectorAll(".l-bg1").style;
                Common.Window.$window.on("scroll", this.onScroll);
                Common.Window.$window.on("mousewheel", this.onMouseWheel);
            },
            onMouseWheel: function(event, flag, deltaX, deltaY){
                Common.ScrollEvent.flag = flag;
            },
            //滚动实施
            onScroll: function(opt_force) {
                var flag = Common.ScrollEvent.flag;
                var _this = Common.ScrollEvent;
                var _h = $(window).height(), _sTop = window.pageYOffset, _sBtm = _sTop +_h;

                //有视差
                if(_this.bg1_style)
                    _this.bg1_style.backgroundPosition = "center " + String(_this.bg1_init_y + _sTop * _this.bg1_move_y) + "px";

                if(Common.Window.height > Common.Side.height){
                    // 窗口尺寸较大場合
                    Common.Side.style.position = "fixed";
                    Common.Side.style.position.top = 0;

                    // 当侧栏和页脚的总值大于窗口时
                    if( Common.Side.height + $(".footer .footer-inner").height() > _h ){
                        if( _sBtm > Common.Side.height ){
                            if(_sBtm - ( _h - Common.Side.height ) > $(".footer .footer-inner").offset().top){
                                //与版权相冲突, bottom更改为控制
                                // console.log("a");
                                Common.Side.style.position = "fixed";
                                Common.Side.style.top = "auto";
                                Common.Side.style.bottom = String( _sBtm - $(".footer .footer-inner").offset().top) + "px";
                            }
                            // 不与版权冲突
                            else{

                                // 从上到下移动
                                if(flag == -1){
                                    // console.log("b");
                                    Common.Side.style.position = "fixed";
                                    Common.Side.style.bottom = "auto";
                                    Common.Side.style.top = 0;
                                }
                                //从下往上移动
                                else{
                                    // console.log("c");
                                }
                            }
                        }
                        else{
                            // console.log("d");
                            //如果菜单可以被忽略，则不固定
                            Common.Side.style.position = "absolute";
                            Common.Side.style.top = 0;
                            Common.Side.style.bottom = "auto";
                        };
                    }

                }
                else{
                    // 从下往上移动
                    if(flag == 1){
                        // 当菜单向下显示时
                        if( _sBtm > Common.Side.height ){
                            if(_sBtm > $(".footer .footer-inner").offset().top){
                                Common.Side.style.position = "fixed";
                                Common.Side.style.top = "auto";
                                Common.Side.style.bottom = String( _sBtm - $(".footer .footer-inner").offset().top) + "px";
                            }
                            else{
                                Common.Side.style.position = "fixed";
                                Common.Side.style.top = "auto";
                                Common.Side.style.bottom = 0;
                            }
                        }
                        else{
                            // 如果菜单可以被忽略，则不固定
                            Common.Side.style.position = "absolute";
                            Common.Side.style.top = 0;
                            Common.Side.style.bottom = "auto";
                        };
                    }
                    // 从上到下移动
                    else{
                        // 当菜单向下显示时
                        if( _sBtm > Common.Side.height ){

                            if(_sBtm > $(".footer .footer-inner").offset().top){
                                Common.Side.style.position = "fixed";
                                Common.Side.style.top = "auto";
                                Common.Side.style.bottom = String( _sBtm - $(".footer .footer-inner").offset().top) + "px";
                            }
                            else{
                                Common.Side.style.position = "fixed";
                                Common.Side.style.top = "auto";
                                Common.Side.style.bottom = 0;
                            }

                        }
                        else{
                            // 如果菜单可以被忽略，则不固定
                            Common.Side.style.position = "absolute";
                            Common.Side.style.top = 0;
                            Common.Side.style.bottom = "auto";
                        };
                    }
                }
            }
        },
    }

    Common.setUpOnce();
    window.Common = Common;


})(jQuery, window);


// =======================================================
//     回到顶部最终版，添加动画效果
// =======================================================
$(function(){
    $(window).scroll(function(){
        //当window的scrolltop距离大于1时，go to
        if($(this).scrollTop() > 100){
            $("#back-to-top").animate({'top':'-250px'},0);
            // $("#back-to-top").animate({'top':'-40%'},0);
        }else{
            $("#back-to-top").animate({'top':'-900px'},0);
        }
    });

    $('#back-to-top').click(function(){
        $('html ,body').animate({scrollTop: 0}, 1000);
        return false;
    });
});