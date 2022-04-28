var iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	var menuBody = document.querySelector('.menu');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');

	});
}