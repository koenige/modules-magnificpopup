<?php 

/**
 * magnificpopup module
 * page elements: magnific popup js gallery
 *
 * Part of »Zugzwang Project«
 * https://www.zugzwang.org/modules/magnificpopup
 *
 * @author Gustaf Mossakowski <gustaf@koenige.org>
 * @copyright Copyright © 2017, 2020, 2022 Gustaf Mossakowski
 * @license http://opensource.org/licenses/lgpl-3.0.html LGPL-3.0
 */

/** 
 * magnific popup js gallery
 * 
 * @param array $params (HTML-Code, if value will be returned)
 * @param array $page
 * @return string $text
 */
function page_magnificpopup(&$params, $page) {
	$image_keys = ['images', 'images_detail', 'images_overview'];
	$media = 0;
	foreach ($image_keys as $image_key) {
		if (empty($page['media'][$image_key])) continue;
		$media += count($page['media'][$image_key]);
		if ($media <= 1) continue;
		$page['extra']['magnific_popup'] = true;
		break;
	}
	if (empty($page['extra']['magnific_popup'])
		AND !wrap_get_setting('magnificpopup_include')) return '';
	if (empty($params)) return '';
	$which = array_shift($params);
	switch ($which) {
	case 'head':
		return wrap_template('magnific-popup-head');
	case 'foot':	
		return wrap_template('magnific-popup', $page['extra']);
	}
	return '';
}
