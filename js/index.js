/**
 * Created by lenovo on 2016-2-3.
 */
$(function(){
    //about me中按钮1 read more
    $(".messageBox .btn1").click(function(){
        $({top:$(window).scrollTop()}).animate(
            {top:$(".skills").offset().top},
            {
                duration:700,
                step:function(){
                    $(window).scrollTop(this.top);
                }
            });
    });
    //about me中按钮2 contact me
    $(".messageBox .btn2").click(function(){
        $({top:$(window).scrollTop()}).animate(
            {top:$(".contact").offset().top},
            {
                duration:700,
                step:function(){
                    $(window).scrollTop(this.top);
                }
            });
    });
    //菜单选内容

    //小屏
    $(".h1-menu").each(function(i){
        $(this).data("index",i);
    });
    //$(".h1-menu").click(function(){
    //    $(".header1-box").hide();
    //    var i=$(this).data("index");
    //    $(".h1-menu").removeClass("active");
    //    $(this).addClass("active");
    //    var newtop=$($(".content")[i]).offset().top;
    //    $({top:$(window).scrollTop()}).animate(
    //        {top:newtop},
    //        {
    //            duration:700,
    //            step:function(){
    //                $(window).scrollTop(this.top);
    //            }
    //        });
    //});
    //大屏
    $(".header2-item").each(function(i){
        $(this).data("index",i);
    });
    //$(".header2-item").click(function(){
    //    var i=$(this).data("index");
    //    $(".header2-item").removeClass("active");
    //    $(this).addClass("active");
    //    var newtop=$($(".content")[i]).offset().top;
    //    $({top:$(window).scrollTop()}).animate(
    //        {top:newtop},
    //        {
    //            duration:700,
    //            step:function(){
    //                $(window).scrollTop(this.top);
    //            }
    //        });
    //});

    //var CONTENTH=666;
    $(window).scroll(function(){
        //if($(window).scrollTop() > CONTENTH){
            if($(window).width()<=660){
                $(".header2").hide();
                $(".header1").show();
                //-----------------
                $(".h1-menu").click(function(){
                    $(".header1-box").hide();
                    var i=$(this).data("index");
                    $(".h1-menu").removeClass("active");
                    $(this).addClass("active");
                    $(".contact .img").css({"-webkit-aniamate":"fadeInLeft1 1s"});
                    var newtop=$($(".content")[i]).offset().top;
                    $({top:$(window).scrollTop()}).animate(
                        {top:newtop},
                        {
                            duration:700,
                            step:function(){
                                $(window).scrollTop(this.top);
                            }
                        }
                    );
                });
                //-------------------
                //var len=$(".content").length-1;
                //$('.h1-menu').each(function(i){
                //    if(i==len && $(window).scrollTop()>=$($('.content')[len]).offset().top){
                //        $($(".h1-menu")[i]).addClass("active");
                //    }else{
                //        if($(window).scrollTop()>=$($('.content')[i]).offset().top && $(window).scrollTop()<=$($('.content')[i+1]).offset().top){
                //            $($(".h1-menu")[i]).addClass("active"); //内容对应菜单
                //        }
                //        else{
                //            $($(".h1-menu")[i]).removeClass("active");
                //        }
                //    }
                //});
                //----------------------
            }else{
                $(".header1").hide();
                $(".header2").show();
                //-----------------------------
                $(".header2-item").click(function(){
                    var i=$(this).data("index");
                    $(".header2-item").removeClass("active");
                    $(this).addClass("active");
                    var newtop=$($(".content")[i]).offset().top;
                    $({top:$(window).scrollTop()}).animate(
                        {top:newtop},
                        {
                            duration:700,
                            step:function(){
                                $(window).scrollTop(this.top);
                            }
                        });
                });
                //---------------------------------
                var len=$(".content").length-1;
                $('.header2-item').each(function(i){
                    if(i==len && $(window).scrollTop()>=$($('.content')[len]).offset().top-1){
                        $($(".header2-item")[i]).addClass("active");
                    }else{
                        if($(window).scrollTop()>=$($('.content')[i]).offset().top-1 && $(window).scrollTop()<$($('.content')[i+1]).offset().top-1){
                            $($(".header2-item")[i]).addClass("active"); //内容对应菜单
                        }
                        else{
                            $($(".header2-item")[i]).removeClass("active");
                        }
                    }
                });
            }

            if($(window).scrollTop()>=$(".contact").offset().top){
                $(".img").css({" -webkit-animation":"bounceInLeft1 1s"});
            }
        //}else{
        //    $('.header').hide();
        //};
    });


    $(".header1-item:first-child").click(function(){
        $(".header1-box").slideToggle("slow");
    });
    //my skills部分
    var classes=["html 85%","css 85%","javaScript 90%","jQuery 88%","bootstrap 86%","less 80%","PS 88%","AI 86%"];
    for(var i=0;i<classes.length;i++){
        var div=$("<div>");
        div.addClass("skill ");
        $(".skill-box").append(div);
    }
    var skillFlag=true;
    $(".skill-title").click(function(){
        if(skillFlag){
            var sColor1=Math.floor(Math.random()*255);
            var sColor2=Math.floor(Math.random()*255);
            var sColor3=Math.floor(Math.random()*255);
            $(".skill").css({display:"block"});
            setTimeout(function(){
                $(".skill").each(function(i){
                    $(this).data("index",i);
                    $(this).addClass(classes[i]);
                    $(this).html(classes[i]);
                    $(this).css({ "box-shadow":"6px 6px 50px rgb("+sColor1+","+sColor2+","+sColor3+") inset"});
                });
            },600);
            skillFlag=false;
        }else{
            $(".skill-title").css({border:"1px solid rgb(255,255,255)"});
            $(".skill").each(function(i){
                $(this).data("index",i);
                $(this).removeClass(classes[i]);
                $(this).html("");
                $(this).css({ "box-shadow":""});
            });
            setTimeout(function(){
                $(".skill").css({display:"none"});
            },600);
            skillFlag=true;
        }
    });

    $(".skill").hover(function(){
        $(this).css({"-webkit-animation":"bounce1 2s"});
    },function(){
        $(this).css({"-webkit-animation":""});
    });




    //my portfolios部分  菜单
    var hidden=$(".portfolios-item").slice(8);
    hidden.css({display:"none"});
    $(".portfolios-menu").click(function(){
        if($(this).html().trim()=="ALL"){
            $(".portfolios-item").fadeIn();
            hidden=$(".portfolios-item").slice(8);
            hidden.css({display:"none"});
            $(".works").slideDown("slow");
            $(".ps").show();
            $(".moreWorks").show();
        }
        if($(this).html().trim()=="PS"){
            $(".works").slideUp("slow");
            $(".ps").css({display:"block"});
            $(".moreWorks").hide();
        }
        if($(this).html().trim()=="AI"){
            $(".portfolios-item").css({display:"none"});
            //$(".ai").fadeIn();
            $(".ai").show().css({"-webkit-animation":"rollIn1 0.6s"});
            $(".works").slideDown("slow");
            $(".ps").hide();
            $(".moreWorks").hide();
        }
        if($(this).html().trim()=="WEB"){
            $(".portfolios-item").css({display:"none"});
            $(".web").fadeIn();
            $(".works").slideDown("slow");
            $(".ps").hide();
            $(".moreWorks").show();
        }
        $(".portfolios-menu").removeClass("active");
        $(this).addClass("active");
        hidden=$(".portfolios-item").slice(16);
        hidden.css({display:"none"});
    });
    //鼠标经过作品-----动效
    $(".portfolios-item").hover(function(){
        $(this).finish();
        $(this).find(".portfolios-item-mask").finish();
        $(this).find(".portfolios-item-mask").find(".bigImgBtn").finish();

        $(this).css({transform:"scale(1.1,1.1)",transition:"all 1s ease"});
        $(this).find(".portfolios-item-mask").css({display:"block",transform:"scale(1.01,1.01)",transition:"all 1s ease"});
        $(this).find(".portfolios-item-mask").find(".bigImgBtn").css({transform:"scale(1.1,1.1)"});
    },function(){
        $(this).css({transform:"scale(1,1)"});
        $(this).find(".portfolios-item-mask").css({transform:"scale(0,0)",transition:"all 1s ease"});
        $(this).find(".portfolios-item-mask").find(".bigImgBtn").css({transform:"scale(0,0)"});
    });
    //ai查看大图
    $(".bigImgBtn").click(function(){
        if($(this).html()=="查看大图"){
            var src=$(this).parent().parent().find("img").attr("src");
            $(".bigImg").css({display:"block"});
            $(".bigImg").find("img").attr("src",src);
        }
    });
    $(".bigImg").click(function(){
        $(this).css({display:"none"});
    });
    //更多作品
    var moreFlag=true;
    $(".moreWorks").click(function(){
        if(moreFlag){
            if($(".portfolios-menu")[3].className.indexOf("active")!=-1){
                $(".portfolios-item").css({display:"none"});
                $(".web").css({display:"block"});
            }else{
                $(".portfolios-item").css({display:"block"});
            }
            moreFlag=false;
        }else{
            if($(".portfolios-menu")[3].className.indexOf("active")!=-1){
                hidden=$(".portfolios-item").slice(16);
            }else{
                hidden=$(".portfolios-item").slice(8);
            }
            hidden.css({display:"none"});
            moreFlag=true;
        }
    });
    // my portfolios部分--------ps
    var imgs=["images/ps/management.png","images/ps/map.png","images/ps/Message.png","images/ps/typing.jpg","images/ps/拟物.jpg","images/ps/麦克风.jpg","images/ps/calender.png","images/ps/camera.png","images/ps/weather.png"];
    var portfolioBox=$(".portfolio-box");
    //创建元素、添加元素
    for(var i=0;i<imgs.length;i++){
        var div=$("<div>");
        div.attr("class","portfolio");
        div.addClass("p"+i);
        var img=$("<img>");
        img.attr("src",imgs[i]);
        img.css({
            width:"100%"
        });
        portfolioBox.append(div);
        div.append(img);
    }
    //移动、放大效果
    var clientW=$(".ps").width();
    var clientH=$(".ps").height();
    var boxW=portfolioBox.outerWidth();
    var boxH=portfolioBox.outerHeight();
    var bx=(boxW+20-clientW)/clientW;
    //var by=(boxH+20-clientH)/clientH;
    var px,oy;
    $(".ps").mousemove(function(e){
        px= e.pageX;
        oy= e.offsetY;
        e.stopPropagation();
    });
    setInterval(function(){
        portfolioBox.css({
            transition:"left 1s ease",
            left:-bx*px
            //top:-by*oy
        });
        $(".portfolio").hover(function(){
            $(this).css({transform:"scale(1.2,1.2)",zIndex:"100"});
        }, function () {
            $(this).css({transform:"scale(1,1)",zIndex:"1"});
        });
    },60);
    //返回顶部
    $(".backTop").click(function(){
        $({top:$(window).scrollTop()}).animate(
            {top:0},
            {
                duration:700,
                step:function(){
                    $(window).scrollTop(this.top);
                }
            });
    });
    //个人站二维码
    $(".erweima").hover(function(){
        $(this).finish();
        $(this).animate({"right":"0px"},600);
    },function(){
        if($(window).outerWidth<700){
            $(this).animate({"right":"-95px"},600);
        }else{
            $(this).animate({"right":"-155px"},600);
        }

    })




})