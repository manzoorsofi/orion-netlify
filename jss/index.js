var galleryElements = document.querySelectorAll(".first-1");

galleryElements.forEach(function (element) {
	element.addEventListener("mouseover", function (e) {
		document.querySelector(".parents").src = e.target.getAttribute("src");
	});
	element.addEventListener("mouseout", function (e) {
		document.querySelector(".parents").src =
			document.getElementById("current_image").value;
	});
});

// on-click setting bg image permenant
function testclick(value) {
	document.querySelector(".parents").src = value;
	document.getElementById("current_image").value = value;
}

// for pre-loader
window.addEventListener("load", function () {
	const preloader = document.getElementById("preloader");
	preloader.style.display = "none";
});

// for changing text-1
document.querySelector(".first-3").addEventListener("click", function () {
	document.querySelector(".text-1").textContent =
		"Avenue Mall at Brigade Gateway";
});

document.querySelector(".first-4").addEventListener("click", function () {
	document.querySelector(".text-1").textContent =
		"Uptown Mall at Brigade Gateway";
});
