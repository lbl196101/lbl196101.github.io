$(function(){
	var $about_btn = $(".about-btn");
	$about_btn.click(function(){
		var btn_num = $(this).attr("id").substring(3,4);
		var text_id = "text"+btn_num;
		var $text_wrap = $("div[id='"+text_id+"']");
		$text_wrap.addClass("text-select")
		.siblings().removeClass("text-select");
	});
});