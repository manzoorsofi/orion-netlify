function toggleDropdowns(element) {
	var dropdownContent = element.nextElementSibling;
	var isOpen = dropdownContent.style.display === "block";

	// Close other dropdowns if open
	var dropdowns = document.getElementsByClassName("dropdown-01");
	for (var i = 0; i < dropdowns.length; i++) {
		var otherDropdownContent = dropdowns[i].getElementsByClassName("test-2")[0];
		var otherDropdownHeader = dropdowns[i].getElementsByClassName("test-1")[0];

		if (otherDropdownContent !== dropdownContent) {
			otherDropdownContent.style.display = "none";
			otherDropdownHeader.classList.remove("open");
			otherDropdownHeader.innerHTML = otherDropdownHeader.innerHTML.replace(
				"-",
				"+"
			);
		}
	}

	if (isOpen) {
		dropdownContent.style.display = "none";
		element.classList.remove("open");
		element.innerHTML = element.innerHTML.replace("-", "+");
	} else {
		dropdownContent.style.display = "block";
		element.classList.add("open");
		element.innerHTML = element.innerHTML.replace("+", "-");
	}
}
