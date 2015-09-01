$(function () {
	'use strict';

    // dropdown menu on mouse enter

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


    // check member presence

    $('.check-presence').on('click', togglePresence);

    function togglePresence(e) {
        var _this = $(e.currentTarget);

        _this.find('.present').toggle();
        _this.find('.not-present').toggle();
    }
});
