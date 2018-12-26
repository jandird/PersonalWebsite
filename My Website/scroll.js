$(window).scroll(function(){
    $("#section07").css("opacity", 1 - $(window).scrollTop() / 250);
  });

var scrollToTop = function(){
	//$('body').animate(function()scrollTop: }, 2000);
$("html, body").animate({ scrollTop: window.innerHeight }, 1000);

	//$(window).scrollTop(window.innerHeight);
}

// css image filter and webkit filter