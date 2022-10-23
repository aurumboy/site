"use strict"
//Меню бургер
let menuIcon = document.querySelector('.menu__icon');
if (menuIcon) {
	let menuBody = document.querySelector('.menu__body');
	menuIcon.addEventListener("click", function (e) {
		menuIcon.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
