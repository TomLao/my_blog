/* -----------------------------------------------
* character页面的js文件，用js的面向对象模式，
* 构建对象 Page 添加多种内有属性。
* 来构建一个整体不会造成多余影响模式
*
* Author:Lao_Heze
* Time:2018/2/22
* ----------------------------------------------- */


;(function($,window,undefind) {

    var Page = Page || {

        next_character: null,
        current_character: null,
        arr_character: null,
        chara_index: 0,

        /* -----------------------------------------------
         * 开始只运行一次，起始函数
         * ----------------------------------------------- */
        setupOnce: function(){
            Page.init();
        },

        /* -----------------------------------------------
         * 初期化
         * ----------------------------------------------- */
        init: function(){
            var _selector = "#character-detail-tomoya";

            //获取并赋值arr_character，
            Page.arr_character = $(".character-detail-box");

            //监听左右切换按钮的序号index变化
            Page.arr_character.each(function(i,ele){
                $(ele).attr("data-chara-index", i);
            });

            // 监听字符显示/切换页面
            this.showDetail1st();
            $(".character-menu a").on("click", this.changeDetail);
            $(".character-paging a").on("click", this.changeDetailByIndex);

            // 监听小右下窗口
            $(".btn-ura, .ura-box").on("click", this.showUraText);

            //显示起始第一个页面
            Page.showDetail1st( _selector );
        },

        //展示额外文本，下面小按钮
        showUraText: function(e){
            $(this).closest("td").toggleClass("on");
        },

        /* -----------------------------------------------
         * 角色顶部>>移至角色详情，要的
         * ----------------------------------------------- */
        showDetail1st: function( e ){
            if(e)
                var _selector = e;          //如果一开始e非空，e复杂为起始页面，直接等于
            else {
                var $this = $(this);        //e为空，需要获取href，要切换的属性
                var _selector = $this.attr("href");
            }
            Page.current_character = $(_selector);

            // 显示详细图层
            $(".character-detail").show();

            // 显示指定的字符
            Page.current_character.show();
            Page.current_character.css( { position: "relative", zIndex: 0 } );

            // 更新字符索引号
            Page.chara_index = parseInt(Page.current_character.attr("data-chara-index"));

            // 菜单显示更新
            Page.updateMenu( _selector );
        },

        /* -----------------------------------------------
         * 头部点击，改变详情页，要的
         * ----------------------------------------------- */
        changeDetail: function(e){

            var $this = $(this);
            var _selector = $this.attr("href")
            Page.next_character = $(_selector);

            // 隐藏当前显示的字符
            Page.current_character.hide();
            Page.current_character.css( { position: "absolute", zIndex: 0 } );

            // 显示指定的字符
            Page.next_character.show();
            Page.next_character.css( { position: "relative", zIndex: 1 } );

            // 现在更新角色
            Page.current_character = Page.next_character;

            // 更新字符索引号
            Page.chara_index = parseInt(Page.current_character.attr("data-chara-index"));

            // 菜单显示更新
            Page.updateMenu( _selector );

        },

        /* -----------------------------------------------
         * 通过左右图标切换，改变详情页，要的
         * ----------------------------------------------- */
        changeDetailByIndex: function( e ){

            var _selector =  $(this).attr("href");

            $(".character-detail-visual").removeClass("on");
            $(".character-detail-btn-size").removeClass("on");

            switch( _selector ){
                case "#next":
                    Page.chara_index++;
                    if( Page.chara_index > Page.arr_character.length - 1 ){
                        Page.chara_index = 0;
                    };
                    break;
                case "#prev":
                    Page.chara_index--;
                    if( Page.chara_index < 0 ){
                        Page.chara_index = Page.arr_character.length - 1;
                    };
                    break;
                //取消回到起始页按钮的功能
                // case "#back":
                //     Page.hideDetail();
                //     return;
                //     break;

                default:

            };

            $(".character-menu li").removeClass("current");
            $(".character-menu li").eq(Page.chara_index).addClass("current");

            Page.next_character = $(Page.arr_character[ Page.chara_index ]);

            Page.current_character.hide();
            Page.next_character.show();

            Page.next_character.css( { position: "relative", zIndex: 1 } );
            Page.current_character = Page.next_character;

        },

        /* -----------------------------------------------
         * 更新整个菜单页面，要的
         * ----------------------------------------------- */
        updateMenu: function( opt_selector ){
            // 导航设置
            $(".character-menu li").removeClass("current");
            $(".character-menu li a").each(function(i,ele){
                var $ele = $(ele);
                //如果已经是当前页面了，点击就没有切换的效果
                if($ele.attr("href") == opt_selector){
                    $ele.closest("li").addClass("current");
                };
            })
        },
    };

    Common.Page = Page;

    //启动，GO
    Page.setupOnce();

})(jQuery,window);