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
// function testclick(value) {
// 	document.querySelector(".parents").src = value;
// 	document.getElementById("current_image").value = value;
// }

// for pre-loader
window.addEventListener("load", function () {
	const preloader = document.getElementById("preloader");
	preloader.style.display = "none";
});

// for hovering text efffect
let currentlyHovered = null;

function changeContent(element, mallName) {
	if (currentlyHovered && currentlyHovered !== element) {
		// Restore the original content of the previously hovered element
		restoreContent(currentlyHovered);
		document.querySelector(".parents").src = element
			.querySelector("a")
			.querySelector("img")
			.getAttribute("src");
	}

	if (!element.originalContent) {
		// Store the original content if it hasn't been stored yet
		element.originalContent = element.innerHTML;
	}
	element.innerHTML = `
      <div style="flex-direction:column" class="col-lg-12 col-md-7 col-6  d-flex justify-content-evenly">
        <p id="omabg" class="text-1">${mallName}</p>
     <a href="orion.html" class="text-2 text-extra justify-content-center" style="text-decoration: none;">
          ENTER MALL HERE
           <img style="width: 7%; height:auto;" src="images/svgs/right-arrow.svg" class="right-arrow" />
     </a>
      </div>
    `;

	currentlyHovered = element;
}

function restoreContent(element) {
	if (element.originalContent) {
		element.innerHTML = element.originalContent;
	}
}
