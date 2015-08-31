$(function () {
	'use strict';

	$('.navbar .dropdown').on('mouseenter', openDropdown);
	$('.navbar .dropdown').on('mouseleave', closeDropdown);

	function openDropdown(e) {
		var dropdown = $(e.currentTarget);

		if (!dropdown.hasClass('open')) {
			dropdown.children('a').click();
		}
	}

	function closeDropdown(e) {
		$(e.currentTarget).removeClass('open');
	}
});