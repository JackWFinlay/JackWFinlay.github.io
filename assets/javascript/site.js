$(document).ready(function(){
	
	if ($(window).scrollTop() > ($(window).height() - 100)) {
			$("#nav").addClass("scroll-fix");
	}

	let hamburgerOpen = false;

	const openMenu = function () {
		
		$("#nav").addClass("scroll-fix").animate({ height: "278px" },250);
		$("#menu > li").css("display", "block");
		
		hamburgerOpen = true;
	};

	const closeMenu = function () {

		if ($(window).scrollTop() <= $('#nav').height()) {
			$("#nav").animate({ height: "100px" }, 250, function (){

				if ($(window).width() <= 1070) {
					$('#menu > li:not(:first-child)').css("display", "none");
				}

				$("#nav").addClass("hide-scroll-fix");
				$("#nav").removeClass("scroll-fix");
				
				setTimeout(function () {
					$("#nav").removeClass("hide-scroll-fix");
				}, 500);
			});

		} else if ($(window).width() <= 1070) {
			$("#nav.scroll-fix").animate({ height: "100px" },250, function (){
				$('#menu > li:not(:first-child)').css("display", "none");
			});

			
		}

		hamburgerOpen = false;
	};

	const scrollFix = function () {

		if ($(window).scrollTop() > $('#nav').height()) {
			$("#nav").addClass("scroll-fix");
		} else if (!hamburgerOpen){
			$("#nav").addClass("hide-scroll-fix");
			$("#nav").removeClass("scroll-fix");
			
			setTimeout(function () {
				$("#nav").removeClass("hide-scroll-fix");
			}, 500);
		}
	}

	$("#hamburger").click(function() {
		if (!hamburgerOpen) { 
			openMenu();
		} else {
			closeMenu();
		}

	});

	$("a.anchor").not(".button").click( function(event) {
    	event.preventDefault();
		
		$('html, body').animate({
        	scrollTop: $( $.attr(this, 'href') ).offset().top
    		}, 400, function () {
    			closeMenu()
			}
		);

	});

	$(window).scroll(function () { 
		scrollFix();
	});

	$(window).resize(function () {
		if ($(window).width() > 1070){
			$("#menu > li").css("display", "inline-block");
		} else {
			$("#menu > li:not(:first-child)").css("display", "none");
		}

	});

});