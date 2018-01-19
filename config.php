<?php if($_SERVER['HTTP_HOST'] == "localhost"){// For local
	define('SITEURL', 'http://' . $_SERVER['HTTP_HOST'] . '/xhibitapp');
	define('SITEPATH', $_SERVER['DOCUMENT_ROOT'] . '/xhibitapp');
}
else{ // For Web
	define('SITEURL', "http://" . $_SERVER['HTTP_HOST']);
	define('SITEPATH', $_SERVER['DOCUMENT_ROOT']);
}
?>