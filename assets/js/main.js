window.onload = function () {
	let burger = document.getElementById("burger");
	let menu = document.getElementById("nav");
	burger.addEventListener("click", function () {
		menu.classList.toggle("hammenu");
	});
};
