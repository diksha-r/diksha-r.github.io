$(document).ready(function() {



	$("#title").click(function(){
		$("#title").fadeOut(400)
	});


	$(".about").hover(function(){
		$(this).addClass("hover");
	}, function() {
		$(this).removeClass("hover");
	});

	$(".about").click(function(){
		$(".about-section").addClass("about-show")
	});
	
	$("#close").click(function(){
		if ($(".about-section").hasClass("about-show")){
			$(".about-section").removeClass("about-show", {duration:500});
		}
	});

    

	$(".img11caption").hover(function(){
		$(this).addClass("img11hover");
	}, function() {
		$(this).removeClass("img11hover");
	});
	$(".img12caption").hover(function(){
		$(this).addClass("img12hover");
	}, function() {
		$(this).removeClass("img12hover");
	});
	$(".img13caption").hover(function(){
		$(this).addClass("img13hover");
	}, function() {
		$(this).removeClass("img13hover");
	});

	$(".img21caption").hover(function(){
		$(this).addClass("img21hover");
	}, function() {
		$(this).removeClass("img21hover");
	});
	$(".img22caption").hover(function(){
		$(this).addClass("img22hover");
	}, function() {
		$(this).removeClass("img22hover");
	});
	$(".img23caption").hover(function(){
		$(this).addClass("img23hover");
	}, function() {
		$(this).removeClass("img23hover");
	});
	$(".img31caption").hover(function(){
		$(this).addClass("img31hover");
	}, function() {
		$(this).removeClass("img31hover");
	});
	$(".img32caption").hover(function(){
		$(this).addClass("img32hover");
	}, function() {
		$(this).removeClass("img32hover");
	});
	$(".img33caption").hover(function(){
		$(this).addClass("img33hover");
	}, function() {
		$(this).removeClass("img33hover");
	});
	$(".img41caption").hover(function(){
		$(this).addClass("img41hover");
	}, function() {
		$(this).removeClass("img41hover");
	});
	$(".img42caption").hover(function(){
		$(this).addClass("img42hover");
	}, function() {
		$(this).removeClass("img42hover");
	});
	$(".img43caption").hover(function(){
		$(this).addClass("img43hover");
	}, function() {
		$(this).removeClass("img43hover");
	});

	$(".img51caption").hover(function(){
		$(this).addClass("img51hover");
	}, function() {
		$(this).removeClass("img51hover");
	});
	$(".img52caption").hover(function(){
		$(this).addClass("img52hover");
	}, function() {
		$(this).removeClass("img52hover");
	});
	$(".img53caption").hover(function(){
		$(this).addClass("img53hover");
	}, function() {
		$(this).removeClass("img53hover");
	});
	$(".img61caption").hover(function(){
		$(this).addClass("img61hover");
	}, function() {
		$(this).removeClass("img61hover");
	});
	$(".img62caption").hover(function(){
		$(this).addClass("img62hover");
	}, function() {
		$(this).removeClass("img62hover");
	});
	$(".img63caption").hover(function(){
		$(this).addClass("img63hover");
	}, function() {
		$(this).removeClass("img63hover");
	});




})