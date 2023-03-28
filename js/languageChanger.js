if (!empty($_GET['language'])){
	$_COOKIE['language'] = $_GET['language'] === 'en' ? 'en' : 'nl';
} else {
	$_COOKIE['language'] = 'nl';
}
setcookie('language', $_COOKIE['language']);

if($_COOKIE['language']) == "en" {
	include("headerEn.php");
} else {
	include("header.php");
} ?>



