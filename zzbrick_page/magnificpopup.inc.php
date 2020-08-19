<?php 

/**
 * Zugzwang Project
 * page elements: magnific popup js gallery
 *
 * http://www.zugzwang.org/modules/magnificpopup
 *
 * @author Gustaf Mossakowski <gustaf@koenige.org>
 * @copyright Copyright © 2017, 2020 Gustaf Mossakowski
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
	if (empty($page['extra']['magnific_popup'])) return '';
	if (empty($params)) return '';
	$which = array_shift($params);
	switch ($which) {
	case 'head':
		return wrap_template('magnific-popup-head');
	case 'foot':	
		return wrap_template('magnific-popup');
	}
	return '';
}
