<?php

/**
 * magnificpopup module
 * JavaScript file for gallery
 *
 * Part of »Zugzwang Project«
 * https://www.zugzwang.org/modules/magnificpopup
 *
 * @author Gustaf Mossakowski <gustaf@koenige.org>
 * @copyright Copyright © 2015, 2020 Gustaf Mossakowski
 * @license http://opensource.org/licenses/lgpl-3.0.html LGPL-3.0
 */


function mod_magnificpopup_js($params) {
	if (count($params) !== 1) return false;
	switch ($params[0]) {
		case 'gallery':
			$page['text'] = wrap_template('js-gallery');
			break;
		default:
			return false;
	}
	$page['template'] = false;
	$page['content_type'] = 'js';
	return $page;
}
