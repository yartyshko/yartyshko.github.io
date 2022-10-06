document.addEventListener('DOMContentLoaded', function () {
	toggleSide();
});
function toggleSide() {
	const TOGGLE_BUTTON = document.querySelectorAll('[data-side-toggle]');
	const TOGGLE_CLASS = 'sidebar-opened';

	TOGGLE_BUTTON.forEach(function(el) {
		el.addEventListener('click', function (e) {
			e.preventDefault();
			if (document.body.classList.contains(TOGGLE_CLASS)) {
				document.body.classList.remove(TOGGLE_CLASS);
			} else {
				document.body.classList.add(TOGGLE_CLASS);
			}
		});
	});
};