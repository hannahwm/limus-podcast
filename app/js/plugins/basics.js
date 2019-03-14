$(".collapsible__input").on("click", function() {
	$(".collapsible").toggleClass("open");
});

function calcHeight() {
	var padding;

	if ($(window).width() > 1450) {
		padding = 100;
	} else if ($(window).width() > 1200) {
		padding = 150;
	} else if ($(window).width() > 900) {
		padding = 250;
	} else if ($(window).width() > 599 && $(window).width() < 900) {
		padding = 0;
	} else if ($(window).width() < 400) {
		padding = 0;
	}


	$(".litmus-featured__image").each( function() {
		var featuredImg = $(this).find("img"),
		imgSrc = featuredImg.attr("src"),
		contentHeight = $(".litmus-featured").outerHeight(),
		diagonalStart = $(".collapsible").offset(),
		diagonalEnd = $(".litmus-archive").offset(),
		diagonalYone = diagonalStart.top,
		diagonalYtwo = diagonalEnd.top,
		diagonalHeight = diagonalYtwo - diagonalYone,
		calcHeight = contentHeight + diagonalHeight + padding;

		$( this ).css({
			"background-image": "url(" + imgSrc + ")",
			"height": calcHeight
		});

		featuredImg.hide();
	});
}

$(document).ready(function() {
	calcHeight();
});

// $(window).resize( function() {
// 	calcHeight();
// })
