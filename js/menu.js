//Open Menu function
'use strict'

function openMenu() {
	const navbar = document.querySelector(".navbar");

	//change the class
	navbar.className = "navbar-mobile";
	const navbarLinks = navbar.getElementsByTagName("a");

	const navbarTitle = navbar.getElementsByTagName("div")[0];

	// the links that we care about are 1-3
	for (let i = 1; i < navbarLinks.length - 1; i++) {
		var link = navbarLinks[i];
		link.className = "mobile-link";
	}

	// hide logo and hamburger button 
	navbarLinks[0].style.display = "none";
	navbarLinks[4].style.display = "none";

	navbarTitle.style.display = "none";

	// create a new close button
	const closeButton = document.createElement("img");
	closeButton.src = "../assets/close-button.png";
	closeButton.className = "mobile-close-button";

	// add a method to be run on click
	closeButton.onclick = function () {
		// reset navbar style
		navbar.className = "navbar";
		// reset logo
		navbarLinks[0].style.display = "flex";
		navbarLinks[4].style.display = "flex";

		navbarTitle.style.display = "flex";
		// finally remove the button
		closeButton.remove();
	}

	// insert the button before the other links
	navbar.insertBefore(closeButton, navbarLinks[1])

}

//listen for media changes
function mediaChangeListener(query) {
	const navbar = document.querySelector(".navbar");
	const navbarLinks = navbar.getElementsByTagName("a");
	const hamburgerButton = navbarLinks[4];

	if (query.matches) { // If media query matches
		hamburgerButton.style.display = "flex";
	} else {
		hamburgerButton.style.display = "none";
	}
}

//attach event listener
const media = window.matchMedia("(max-width: 1000px)");
media.addListener(mediaChangeListener);
