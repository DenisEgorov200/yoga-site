const swiper = new Swiper('.expert', {
	slidesPerView: 4,
	navigation: {
		nextEl: '.expert-button-next',
		prevEl: '.expert-button-prev',
		disabledClass: 'expert-button-disabled',
	},
});
const optionMenu = document.querySelectorAll('.dropdown'),
	dropdownContainer = document.querySelector('.filter__dropdowns'),
	options = document.querySelectorAll('.dropdown__option');

dropdownContainer.addEventListener('click', (event) => {
	const selectBtn = event.target.closest('.dropdown');

	if (!selectBtn) return; // (2)

	if (!dropdownContainer.contains(selectBtn)) return; // (3)

	selectBtn.classList.toggle('active');

	console.log(selectBtn);
});

options.forEach((option) => {
	option.addEventListener('click', (event) => {
		event.stopPropagation();
		option.classList.toggle('checked');
	});
});