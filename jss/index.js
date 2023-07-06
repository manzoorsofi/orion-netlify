var galleryElements = document.querySelectorAll(".first-1");

galleryElements.forEach(function (element) {
	element.addEventListener("mouseover", function (e) {
		document.querySelector(".parents").src = e.target.getAttribute("src");
	});
	element.addEventListener("mouseout", function (e) {
		document.querySelector(".parents").src = "/images/landing.png";
	});
});

// var galleryElements = document.querySelectorAll(".first-1");

// galleryElements.forEach(function (element) {
// 	element.addEventListener("mouseover", function (e) {
// 		document.querySelector(".parents").src = e.target.getAttribute("src");
// 	});

// 	element.addEventListener("mouseout", function (e) {
// 		var landingImage = e.target.getAttribute("data-landing-image");
// 		document.querySelector(".parents").src =
// 			landingImage || "/images/landing.png";
// 	});
// });
// var dynamicImageUrl = "{{ mall1.file_name.url }}";
// document.getElementById("dynamic-bg").style.backgroundImage =
// 	"url(" + dynamicImageUrl + ")";
