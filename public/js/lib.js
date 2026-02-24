$(document).ready(function($) {
	
	// 手机导航
	$('.menuBtn').append('<b></b><b></b><b></b>');
	$('.menuBtn').click(function(event) {
		$(this).toggleClass('open');
		var _winw = $(window).width();
		if( $(this).hasClass('open') ){
			if( _winw<=1199 ){
				$('.hdr').stop().show();
			}
		}else{
			if( _winw<=1199 ){
				$('.hdr').stop().hide();
			}
		}
	});


    $(".so-btn").click(function(){
       // $('.pop-so').fadeIn();
       window.open("https://zulg.zju.edu.cn/aop_views/search/modules/resultpc/soso.html?query=eyJrZXlXb3JkIjoi5ZCO5Yuk6ZuG5ZuiIiwib3duZXIiOiIxOTcwNDc2NDEyIiwidG9rZW4iOiJ0b3VyaXN0IiwidXJsUHJlZml4IjoiL2FvcF9jb21wb25lbnQvIiwibGFuZyI6ImkxOG5femhfQ04ifQ==");
    });
	$(".pop-bg").click(function(){
        $('.pop-so').fadeOut();
	});
	
	$(".TAB_CLICK li").click(function(){
	    var tab=$(this).parent(".TAB_CLICK");
	    var con=tab.attr("id");
	    var on=tab.find("li").index(this);
	    $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
	    $(con).eq(on).show().siblings(con).hide();
	});

	$(".fix-right .i3").click(function(){
        $('html,body').animate({scrollTop:0}, 'slow');
    });
	
});