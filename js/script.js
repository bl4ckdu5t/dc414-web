/**
* DC414.ORG JS file
* @author Joseph Rex
* @since 12-05-2014
*/
$(document).ready(function(){
	/* Fetch IP address from third-party service */
	$.getJSON('http://api.ipify.org?format=jsonp&callback=?').done(function(response){
		$('.ip-addr').text(response.ip);
	}).fail(function(){
		$('.ip-addr').text('0.0.0.0');
	});
	/* Scroll back to top function */
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
		    $('.scrollup').fadeIn();
		} else {
		    $('.scrollup').fadeOut();
		}
    });
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});