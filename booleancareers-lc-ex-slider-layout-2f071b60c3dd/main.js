$(document).ready(function () {
	// Refs

	var nextBtn = $(".next");
	var prevBtn = $(".prev");
	var firstCircle = $("i.first");
	var secondCircle = $("i.first + i");
	var thirdCircle = $("i.three");
	var fourthCircle = $("i.last");

	// Actions

	// Next
	nextBtn.click(function () {
		nextPrevSlide("next");
	});

	// Prev
	prevBtn.click(function () {
		nextPrevSlide("prev");
	});

	// Navigazione Keyboard
	$(document).keydown(function (event) {
		console.log(event);
		if (event.keyCode === 37) {
			nextPrevSlide("prev");
		} else if (event.keyCode === 39) {
			nextPrevSlide("next");
		}
	});

	// End Doc Ready
});

// Functions

// Naviga tra le slide

function nextPrevSlide(direction) {
	console.log(direction);
	var activeImage = $("img.active");
	var activeCircle = $("i.active");
	var activeArrowLeft = $("i.fa-angle-left");
	var activeArrowRight = $("i.fa-angle-right");

	// reset
	activeImage.removeClass("active");
	activeCircle.removeClass("active");

	// next
	if (direction === "next") {
		if (activeImage.hasClass("last")) {
			$("img.first").addClass("active");
			$("i.first").addClass("active");
		}

		activeImage.next("img").addClass("active");
		activeCircle.next("i").addClass("active");
		activeArrowRight.addClass("active");
	}

	// prev
	if (direction === "prev") {
		if (activeImage.hasClass("first")) {
			$("img.last").addClass("active");
			$("i.last").addClass("active");
		}

		activeImage.prev("img").addClass("active");
		activeCircle.prev("i").addClass("active");
		activeArrowLeft.addClass("active");
	}
}
