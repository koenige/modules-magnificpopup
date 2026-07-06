# magnific popup module
# template for gallery
#
# Part of »Zugzwang Project«
# https://www.zugzwang.org/modules/magnificpopup
#
# @author Gustaf Mossakowski <gustaf@koenige.org>
# @copyright Copyright © 2015, 2017, 2020, 2024, 2026 Gustaf Mossakowski
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
	  },
	  callbacks: {
	    elementParse: function(item) {
	      if (!item.src || !/\.(mp4|m4v|webm)(\?|$)/i.test(item.src)) return;
	      item.videoSrc = item.src;
	      item.type = 'inline';
	      item.src = '<div class="mfp-figure">'
	        + '<div class="mfp-close"></div>'
	        + '<figure>'
	        + '<video class="mfp-img mfp-video" controls playsinline autoplay '
	        + 'src="' + item.videoSrc + '"></video>'
	        + '<figcaption>'
	        + '<div class="mfp-bottom-bar">'
	        + '<div class="mfp-title"></div>'
	        + '<div class="mfp-counter"></div>'
	        + '</div>'
	        + '</figcaption>'
	        + '</figure>'
	        + '</div>';
	    },
	    change: function() {
	      mfpGalleryVideoLayout(this);
	    },
	    resize: function() {
	      mfpGalleryVideoResize(this);
	    },
	    beforeChange: function() {
	      if (!this.content) return;
	      this.content.find('video').each(function() { this.pause(); });
	    },
	    beforeClose: function() {
	      if (!this.content) return;
	      this.content.find('video').each(function() { this.pause(); });
	    }
	  }
	});
});

function mfpGalleryVideoLayout(mfp) {
	var item = mfp.currItem;
	if (!item || !item.videoSrc || !mfp.content) return;

	mfp.container.removeClass('mfp-inline-holder').addClass('mfp-image-holder');

	var title = item.el ? item.el.attr('data-title') || '' : '';
	mfp._parseMarkup(mfp.content, { title: title }, item);

	var video = mfp.content.find('video.mfp-video');
	video.off('loadedmetadata.mfpVideo').on('loadedmetadata.mfpVideo', function() {
		mfpGalleryVideoResize(mfp);
	});
	mfpGalleryVideoResize(mfp);
}

function mfpGalleryVideoResize(mfp) {
	if (!mfp.currItem || !mfp.currItem.videoSrc || !mfp.content) return;
	var video = mfp.content.find('video.mfp-video');
	if (!video.length) return;
	var element = video[0];
	// like <img> natural dimensions: video defaults to 300×150 until these are set
	if (element.videoWidth && element.videoHeight) {
		element.width = element.videoWidth;
		element.height = element.videoHeight;
	}
	// same as Magnific Popup image.verticalFit (see image.js resizeImage)
	video.css({ width: '', height: '', maxWidth: '', maxHeight: mfp.wH });
}
