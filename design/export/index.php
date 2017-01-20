<?php
// output headers so that the file is downloaded rather than displayed
header('Content-Type: text/css; charset=utf-8');
header('Content-Disposition: attachment; filename=xhibit-stylesheet.css');

// create a file pointer connected to the output stream
//$output = fopen('php://output', 'w');


echo '/* Xerte theme generated via Xhibit App (www.xhibitapp.com) */

/* HEADER GRADIENT */
    
#x_headerBlock {
    background: -ms-linear-gradient(top, ' .  $_POST["headerGradient1"] . ', ' .  $_POST["headerGradient2"] . ');
    background: -webkit-gradient(linear, left top, left bottom, from(' . $_POST["headerGradient1"] . '), to(' . $_POST["headerGradient2"] . '));
    background: -moz-linear-gradient(top,  ' . $_POST["headerGradient1"] . ',  ' . $_POST["headerGradient2"] . ');
    background-image: -o-linear-gradient(' . $_POST["headerGradient1"] . ', ' . $_POST["headerGradient2"] . ');
}

/* MAIN HEADING */

#x_headerBlock h1 { 
    color: ' . $_POST["headerHeading1"] . ';
}

/* SECONDARY HEADING */

#x_headerBlock h2 { 
    color: ' . $_POST["headerHeading2"] . ';
}

/* BOTTOM BORDER OF HEADER */

#x_headerBlock { 
    border-bottom: 1px solid ' . $_POST["headerBottomBorder"] . ';
}

/* FOOTER GRADIENT */

#x_footerBlock {
    background: -ms-linear-gradient(top, ' .  $_POST["footerGradient1"] . ', ' .  $_POST["footerGradient2"] . ');
    background: -webkit-gradient(linear, left top, left bottom, from(' . $_POST["footerGradient1"] . '), to(' . $_POST["footerGradient2"] . '));
    background: -moz-linear-gradient(top,  ' . $_POST["headerGradient1"] . ',  ' . $_POST["footerGradient2"] . ');
    background-image: -o-linear-gradient(' . $_POST["footerGradient1"] . ', ' . $_POST["footerGradient2"] . ');
}

/* TOP BORDER OF FOOTER */

#x_footerBlock { 
    border-top: 1px solid ' . $_POST["footerTopBorder"] . ';
}';

if ($_POST["footerDotsTexture"] == "off"){
echo '

/* DOTS TEXTURE OFF */

#x_footerBg {
    background-image: none;
}';
}

echo '

/* BODY BACKGROUND */

#x_mainHolder {
    background: ' . $_POST["bodyBackgroundColour"] . ';
}

/* PARAGRAPH COLOUR */

#x_mainHolder p {
    color: ' . $_POST["bodyParagraphColour"] . ';
}

/* LINK COLOUR */

' . $_POST["cssOutput"];

?>