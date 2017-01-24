<?php
// output headers so that the file is downloaded rather than displayed
header('Content-Type: text/css; charset=utf-8');
header('Content-Disposition: attachment; filename=xhibit-stylesheet.css');

// create a file pointer connected to the output stream
//$output = fopen('php://output', 'w');

echo $_POST["cssOutput"];

?>