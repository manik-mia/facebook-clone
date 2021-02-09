jQuery(document).ready(function(){
	jQuery('.owl-carousel').owlCarousel({
	    margin:5,
	    loop:true,
	    autoplay: true,
	    autoplayTimeout: 2000,
	    items:3
	});
	jQuery(".menu-bar").click(function(){
		jQuery(".news-feed-menu").slideToggle(1500);
	});
	jQuery(window).resize(function(){
		var screenWidth= jQuery(window).width();
		if (screenWidth > 768){
			jQuery(".news-feed-menu").removeAttr("style");
		}
	});
	jQuery('.emojione').emojioneArea();
	jQuery('.post-reaction .react').hover(function(){
		jQuery('.reactions').fadeToggle(500);
	});
	jQuery('.post-reaction .reactions').hover(function(){
		jQuery('.reactions').css('display','block');
	});
	jQuery('.menu-workshop').click(function(){
		jQuery('.workshop-option').toggle();
	});
	jQuery('.menu-message').click(function(){
		jQuery('.message-option').toggle();
	});
	jQuery('.menu-notification').click(function(){
		jQuery('.notification-option').toggle();
	});
	jQuery('.profile').click(function(){
		jQuery('.profile-show').toggle();
	});
});
