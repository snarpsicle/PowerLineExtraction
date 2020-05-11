function closeSidepane() {
	let sidepane = document.querySelector(".sidepane");
	let sidepaneContent = document.querySelector(".sidepane-content");
	sidepane.className = "sidepane-hidden";
	sidepaneContent.className = "sidepane-content-hidden";


	let closeBtn = document.querySelector(".close-button");
	closeBtn.className = "close-button-hidden";
}


function openSidepane() {
	let sidepane = document.querySelector(".sidepane-hidden");
	let sidepaneContent = document.querySelector(".sidepane-content-hidden");
	sidepane.className = "sidepane";
	sidepaneContent.className = "sidepane-content";

	let closeBtn = document.querySelector(".close-button-hidden");
	closeBtn.className = "close-button";
}
