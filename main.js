$("body").on("click", ".start-btn,.steps-btn", function (e) { //note this captures click on either the start button or path buttons
	e.preventDefault(); //have to add this so we don't get weird behavior in older browsers (or IE)
	const myPath = $(this), // this button clicked,
		mySlide = myPath.data('id'), //grab id info in the data attribute data-id
		mySlideBackground = mySlide + "-background", //convert to backgroud id
		mySlideColor = myPath.data('color'); //grab color in data attribute data-color
	console.log(mySlide);
	console.log(mySlideBackground);
	console.log(mySlideColor);
	// $("#your-dwelling, #your-dwelling-background").addClass("active").css("background-color", mySlideColor);
	// $(`#${mySlideBackground}, #${mySlide}`).addClass('active').css("background-color", mySlideColor);
	$("#" + mySlideBackground).addClass('active').css("background-color", mySlideColor); // "#" + needed to add id symbol
	$("#" + mySlide).addClass('active').css("background-color", mySlideColor); // "#" + needed to add id symbol
	$('html, body').animate({ //start animate to slide down smoothly
		scrollTop: $("#" + mySlideBackground).offset().top //grabs slide id and scrolls
	}, 400); //400 is milliseconds; the bigger the number, the slower the scroll
}); // closes click related functions or events

// return to return to top
$("body").on("click", ".restart-btn", function (e) {
	e.preventDefault(); //have to add this so we don't get weird behavior in older browsers (or IE)
	$(".hide").removeClass('active'); //hides all the divs that were unhidden
	scrollyUp(); // see function below to scroll up
}); // closes click related functions or events

//function that scrolls back up when .restart-btn is clicked
function scrollyUp() {
	$("html,body").animate({
		scrollTop: $(".intro").offset().top + "px"
	});
}