# magnific popup module
# template for gallery
#
# Part of »Zugzwang Project«
# https://www.zugzwang.org/modules/magnificpopup
#
# @author Gustaf Mossakowski <gustaf@koenige.org>
# @copyright Copyright © 2015, 2017, 2020, 2024 Gustaf Mossakowski
# @license http://opensource.org/licenses/lgpl-3.0.html LGPL-3.0
#
$('.js-gallery').each(function() { // the containers for all your galleries
	$(this).magnificPopup({
	  delegate: 'a.js-img', // child items selector, by clicking on it popup will open
	  type: 'image',
	  tClose: '%%% text Close (Esc) %%%',
	  tLoading: '%%% text Loading... %%%',
	  gallery: {
		enabled: true,
		tPrev: '%%% text Previous (Left arrow key) %%%', // title for left button
		tNext: '%%% text Next (Right arrow key) %%%', // title for right button
		tCounter: '%curr% %%% text of %%% %total%' // markup of counter
	  },
	  image: {
		titleSrc: 'data-title',
		tError: '%%% text <a href="%url%">The image</a> could not be loaded. %%%'
	  }
	});
});
