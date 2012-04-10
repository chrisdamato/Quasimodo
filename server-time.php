<?php // -*-php-*- (sets emacs to use php mode)

$http_origin = $_SERVER['HTTP_ORIGIN'];

if ($http_origin == "http://localhost" || $http_origin == "http://stunt" || $http_origin == "http://www.domain3.info")
{  
    header('Access-Control-Allow-Origin: *');
}

$data = $_POST['data'];
$data['serverTime'] = microtime(true)*1000;
header("Content-type: text/plain");
echo json_encode($data);
?>
