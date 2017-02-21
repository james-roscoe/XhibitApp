<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Design | Xhibit App</title>
    <?php 
    include('../includes/xerte/xerte-head.html');
    ?>

    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="../xhibit.css">
    <link rel="stylesheet" type="text/css" href="design.css">
    <style id="liveStyles"></style>

    <!--[if lt IE 9]>
      <link rel="stylesheet" type="text/css" href="../old-ie.css">
      <style>.mainWrapper,.sticky {display: none;}</style>
    <![endif]-->

    <!-- CSS -->

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans" rel="stylesheet">
    <!-- Fonts -->

     <!-- TWITTER -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:url" content="http://www.xhibitapp.com/">
    <meta name="twitter:title" content="Xhibit App">
    <meta name="twitter:description" content="Xhibit offers non-coding Xerte users the opportunity to produce a theme without having to learn HTML and CSS. The user's edits appear in real-time via a Xerte project preview window.">
    <meta name="twitter:image" content="http://www.xhibitapp.com/images/xhibit-social.jpg">
    <!-- TWITTER -->

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="57x57" href="../images/favicons/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="../images/favicons/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="../images/favicons/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="../images/favicons/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="../images/favicons/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="../images/favicons/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="../images/favicons/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="../images/favicons/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="../images/favicons/apple-touch-icon-180x180.png">
    <link rel="icon" type="image/png" href="../images/favicons/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="../images/favicons/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="../images/favicons/favicon-194x194.png" sizes="194x194">
    <link rel="icon" type="image/png" href="../images/favicons/android-chrome-192x192.png" sizes="192x192">
    <!-- Favicon -->

</head>
<body>
    
    <?php include_once("../includes/analyticstracking.php") ?>

 <div class="mainWrapper">

    <?php 
    include('../includes/header.html');
    ?>
    
    <div class="design wrapper">
        
        <div id="intro">

            <h1 class="designSpace">Design Your Theme</h1>

            <h2 class="designH2">Customise your colours</h2>

            <p>Start designing your Xerte theme by using the Xhibit designer tools below. When you are ready click the export button.</p>
            
        </div>
        
        <form action="/design/export/index.php" method="post">
        
            <div id="designer">

                <div id="zoneSelector">

                    <div id="selectHeader">Header</div>
                    <div id="selectFooter">Footer</div>
                    <div id="selectBody">Body</div>
                    <div id="selectMenus">Menus</div>
                    <div id="exportBtn">Export</div>

                </div>
                
                <p id="help">Select a design area to focus on, using the tiled menu items above.</p>

                <div style="clear:both"></div>

                <div id="accordionHeader" class="accordion">
                    <div class="elementTitle">
                        Header
                        <div class="accordionClose"></div>
                    </div>
                    <div class="elements">
                        <div id="headerGradient1" class="element">
                            Gradient 1
                            <div class="plusMinus"></div>
                        </div>
                        <div id="headerGradient1Edit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox" type="text" name="headerGradient1"/>
                        </div>
                        <div id="headerGradient2" class="element">
                            Gradient 2
                            <div class="plusMinus"></div>
                        </div>
                        <div id="headerGradient2Edit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox" type="text" name="headerGradient2"/>
                        </div>
                        <div id="headerHeading1" class="element">
                            Heading 1
                            <div class="plusMinus"></div>
                        </div>
                        <div id="headerHeading1Edit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox" type="text" name="headerHeading1"/>
                        </div>
                        <div id="headerHeading2" class="element">
                            Heading 2
                            <div class="plusMinus"></div>
                        </div>
                        <div id="headerHeading2Edit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox" type="text" name="headerHeading2"/>
                        </div>
                        <div id="headerBottomBorder" class="element">
                            Bottom Border
                            <div class="plusMinus"></div>
                        </div>
                        <div id="headerBottomBorderEdit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox" type="text" name="headerBottomBorder"/>
                        </div>
                    </div>
                </div>

                <div id="accordionFooter" class="accordion">
                    <div class="elementTitle">
                        Footer
                        <div class="accordionClose"></div>
                    </div>
                    <div class="elements">
                        <div id="footerGradient1" class="element">
                            Gradient 1
                            <div class="plusMinus"></div>
                        </div>
                        <div id="footerGradient1Edit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox" type="text" name="footerGradient1"/>
                        </div>
                        <div id="footerGradient2" class="element">
                            Gradient 2
                            <div class="plusMinus"></div>
                        </div>
                        <div id="footerGradient2Edit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox" type="text" name="footerGradient2"/>
                        </div>
                        <div id="footerTopBorder" class="element">
                            Top Border
                            <div class="plusMinus"></div>
                        </div>
                        <div id="footerTopBorderEdit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox" type="text" name="footerTopBorder"/>
                        </div>
                        <div id="footerDotsTexture" class="element">
                            Dots Texture
                            <div class="plusMinus"></div>
                        </div>
                        <div id="footerDotsTextureEdit" class="elementEdit">
                            <label id="footerDotsTextureOn" class="radio">
                                <input type="radio" name="footerDotsTexture" value="on" checked/> On
                            </label>
                            <label id="footerDotsTextureOff" class="radio">
                                <input type="radio" name="footerDotsTexture" value="off"/> Off
                            </label>
                        </div>
                    </div>
                </div>

                <div id="accordionBody" class="accordion">
                    <div class="elementTitle">
                        Body
                        <div class="accordionClose"></div>
                    </div>
                    <div class="elements">
                        <div id="bodyBackgroundColour" class="element">
                            Background Colour
                            <div class="plusMinus"></div>
                        </div>
                        <div id="bodyBackgroundColourEdit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox" type="text" name="bodyBackgroundColour"/>
                        </div>
                        <div id="bodyParagraphColour" class="element">
                            Paragraph Colour
                            <div class="plusMinus"></div>
                        </div>
                        <div id="bodyParagraphColourEdit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox" type="text" name="bodyParagraphColour"/>
                        </div>
                        <div id="bodyBorder" class="element">
                            Border
                            <div class="plusMinus"></div>
                        </div>
                        <div id="bodyBorderEdit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox" type="text" name="bodyBorder"/>
                        </div>
                        <div id="bodyLinkColour" class="element">
                            Link Colour
                            <div class="plusMinus"></div>
                        </div>
                        <div id="bodyLinkColourEdit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox" type="text" name="bodyLinkColour"/>
                        </div>
                        <div id="bodyLinkHoverColour" class="element">
                            Link Hover Colour
                            <div class="plusMinus"></div>
                        </div>
                        <div id="bodyLinkHoverColourEdit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox" type="text" name="bodyLinkHoverColour"/>
                        </div>
                    </div>
                </div>

                <div id="accordionMenus" class="accordion">
                    <div class="elementTitle">
                        Menus
                        <div class="accordionClose"></div>
                    </div>
                    <div class="elements">
                        <div id="menuBackgroundColour" class="element">
                            Background Colour
                            <div class="plusMinus"></div>
                        </div>
                        <div id="menuBackgroundColourEdit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox" type="text" name="bodyBackgroundColour"/>
                        </div>
                        <div id="menuHeaderBackground" class="element">
                            Header Background Colour
                            <div class="plusMinus"></div>
                        </div>
                        <div id="menuHeaderBackgroundEdit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox" type="text" name="menuHeaderBackground"/>
                        </div>
                        <div id="menuHeaderText" class="element">
                            Header Text Colour
                            <div class="plusMinus"></div>
                        </div>
                        <div id="menuHeaderTextEdit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox" type="text" name="menuHeaderText"/>
                        </div>
                        <div id="menuItemBackground" class="element">
                            Item Background Colour
                            <div class="plusMinus"></div>
                        </div>
                        <div id="menuItemBackgroundEdit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox" type="text" name="menuItemBackground"/>
                        </div>
                        <div id="menuItemText" class="element">
                            Item Text Colour
                            <div class="plusMinus"></div>
                        </div>
                        <div id="menuItemTextEdit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox" type="text" name="menuItemText"/>
                        </div>
                    </div>
                </div>

                <div id="colourPicker">
                    <div id="colourPickerClose"></div>
                    <p class="windowTitle">Select your colour</p>
                    <div id="col000000" class="colourBoxChoice"></div>
                    <div id="col0C090A" class="colourBoxChoice"></div>
                    <div id="col2C3539" class="colourBoxChoice"></div>
                    <div id="col2B1B17" class="colourBoxChoice"></div>
                    <div id="col34282C" class="colourBoxChoice"></div>
                    <div id="col25383C" class="colourBoxChoice"></div>
                    <div id="col3B3131" class="colourBoxChoice"></div>
                    <div id="col413839" class="colourBoxChoice"></div>
                    <div id="col3D3C3A" class="colourBoxChoice"></div>
                    <div id="col463E3F" class="colourBoxChoice"></div>
                    <div id="col4C4646" class="colourBoxChoice"></div>
                    <div id="col504A4B" class="colourBoxChoice"></div>
                    <div id="col565051" class="colourBoxChoice"></div>
                    <div id="col5C5858" class="colourBoxChoice"></div>
                    <div id="col625D5D" class="colourBoxChoice"></div>
                    <div id="col666362" class="colourBoxChoice"></div>
                    <div id="col6D6968" class="colourBoxChoice"></div>
                    <div id="col726E6D" class="colourBoxChoice"></div>
                    <div id="col736F6E" class="colourBoxChoice"></div>
                    <div id="col837E7C" class="colourBoxChoice"></div>
                    <div id="col848482" class="colourBoxChoice"></div>
                    <div id="colB6B6B4" class="colourBoxChoice"></div>
                    <div id="colD1D0CE" class="colourBoxChoice"></div>
                    <div id="colE5E4E2" class="colourBoxChoice"></div>
                    <div id="colBCC6CC" class="colourBoxChoice"></div>
                    <div id="col98AFC7" class="colourBoxChoice"></div>
                    <div id="col6D7B8D" class="colourBoxChoice"></div>
                    <div id="col657383" class="colourBoxChoice"></div>
                    <div id="col616D7E" class="colourBoxChoice"></div>
                    <div id="col646D7E" class="colourBoxChoice"></div>
                    <div id="col566D7E" class="colourBoxChoice"></div>
                    <div id="col737CA1" class="colourBoxChoice"></div>
                    <div id="col4863A0" class="colourBoxChoice"></div>
                    <div id="col2B547E" class="colourBoxChoice"></div>
                    <div id="col2B3856" class="colourBoxChoice"></div>
                    <div id="col151B54" class="colourBoxChoice"></div>
                    <div id="col000080" class="colourBoxChoice"></div>
                    <div id="col342D7E" class="colourBoxChoice"></div>
                    <div id="col15317E" class="colourBoxChoice"></div>
                    <div id="col151B8D" class="colourBoxChoice"></div>
                    <div id="col0000A0" class="colourBoxChoice"></div>
                    <div id="col0020C2" class="colourBoxChoice"></div>
                    <div id="col0041C2" class="colourBoxChoice"></div>
                    <div id="col2554C7" class="colourBoxChoice"></div>
                    <div id="col1569C7" class="colourBoxChoice"></div>
                    <div id="col2B60DE" class="colourBoxChoice"></div>
                    <div id="col1F45FC" class="colourBoxChoice"></div>
                    <div id="col6960EC" class="colourBoxChoice"></div>
                    <div id="col736AFF" class="colourBoxChoice"></div>
                    <div id="col357EC7" class="colourBoxChoice"></div>
                    <div id="col368BC1" class="colourBoxChoice"></div>
                    <div id="col488AC7" class="colourBoxChoice"></div>
                    <div id="col3090C7" class="colourBoxChoice"></div>
                    <div id="col659EC7" class="colourBoxChoice"></div>
                    <div id="col87AFC7" class="colourBoxChoice"></div>
                    <div id="col95B9C7" class="colourBoxChoice"></div>
                    <div id="col728FCE" class="colourBoxChoice"></div>
                    <div id="col2B65EC" class="colourBoxChoice"></div>
                    <div id="col306EFF" class="colourBoxChoice"></div>
                    <div id="col157DEC" class="colourBoxChoice"></div>
                    <div id="col1589FF" class="colourBoxChoice"></div>
                    <div id="col6495ED" class="colourBoxChoice"></div>
                    <div id="col6698FF" class="colourBoxChoice"></div>
                    <div id="col38ACEC" class="colourBoxChoice"></div>
                    <div id="col56A5EC" class="colourBoxChoice"></div>
                    <div id="col5CB3FF" class="colourBoxChoice"></div>
                    <div id="col3BB9FF" class="colourBoxChoice"></div>
                    <div id="col79BAEC" class="colourBoxChoice"></div>
                    <div id="col82CAFA" class="colourBoxChoice"></div>
                    <div id="col82CAFF" class="colourBoxChoice"></div>
                    <div id="colA0CFEC" class="colourBoxChoice"></div>
                    <div id="colB7CEEC" class="colourBoxChoice"></div>
                    <div id="colB4CFEC" class="colourBoxChoice"></div>
                    <div id="colC2DFFF" class="colourBoxChoice"></div>
                    <div id="colC6DEFF" class="colourBoxChoice"></div>
                    <div id="colAFDCEC" class="colourBoxChoice"></div>
                    <div id="colADDFFF" class="colourBoxChoice"></div>
                    <div id="colBDEDFF" class="colourBoxChoice"></div>
                    <div id="colCFECEC" class="colourBoxChoice"></div>
                    <div id="colE0FFFF" class="colourBoxChoice"></div>
                    <div id="colEBF4FA" class="colourBoxChoice"></div>
                    <div id="colF0F8FF" class="colourBoxChoice"></div>
                    <div id="colF0FFFF" class="colourBoxChoice"></div>
                    <div id="colCCFFFF" class="colourBoxChoice"></div>
                    <div id="col93FFE8" class="colourBoxChoice"></div>
                    <div id="col9AFEFF" class="colourBoxChoice"></div>
                    <div id="col7FFFD4" class="colourBoxChoice"></div>
                    <div id="col00FFFF" class="colourBoxChoice"></div>
                    <div id="col7DFDFE" class="colourBoxChoice"></div>
                    <div id="col57FEFF" class="colourBoxChoice"></div>
                    <div id="col8EEBEC" class="colourBoxChoice"></div>
                    <div id="col50EBEC" class="colourBoxChoice"></div>
                    <div id="col4EE2EC" class="colourBoxChoice"></div>
                    <div id="col81D8D0" class="colourBoxChoice"></div>
                    <div id="col92C7C7" class="colourBoxChoice"></div>
                    <div id="col77BFC7" class="colourBoxChoice"></div>
                    <div id="col78C7C7" class="colourBoxChoice"></div>
                    <div id="col48CCCD" class="colourBoxChoice"></div>
                    <div id="col43C6DB" class="colourBoxChoice"></div>
                    <div id="col46C7C7" class="colourBoxChoice"></div>
                    <div id="col43BFC7" class="colourBoxChoice"></div>
                    <div id="col3EA99F" class="colourBoxChoice"></div>
                    <div id="col3B9C9C" class="colourBoxChoice"></div>
                    <div id="col438D80" class="colourBoxChoice"></div>
                    <div id="col348781" class="colourBoxChoice"></div>
                    <div id="col307D7E" class="colourBoxChoice"></div>
                    <div id="col5E7D7E" class="colourBoxChoice"></div>
                    <div id="col4C787E" class="colourBoxChoice"></div>
                    <div id="col008080" class="colourBoxChoice"></div>
                    <div id="col4E8975" class="colourBoxChoice"></div>
                    <div id="col78866B" class="colourBoxChoice"></div>
                    <div id="col848b79" class="colourBoxChoice"></div>
                    <div id="col617C58" class="colourBoxChoice"></div>
                    <div id="col728C00" class="colourBoxChoice"></div>
                    <div id="col667C26" class="colourBoxChoice"></div>
                    <div id="col254117" class="colourBoxChoice"></div>
                    <div id="col306754" class="colourBoxChoice"></div>
                    <div id="col347235" class="colourBoxChoice"></div>
                    <div id="col437C17" class="colourBoxChoice"></div>
                    <div id="col387C44" class="colourBoxChoice"></div>
                    <div id="col347C2C" class="colourBoxChoice"></div>
                    <div id="col347C17" class="colourBoxChoice"></div>
                    <div id="col348017" class="colourBoxChoice"></div>
                    <div id="col4E9258" class="colourBoxChoice"></div>
                    <div id="col6AA121" class="colourBoxChoice"></div>
                    <div id="col4AA02C" class="colourBoxChoice"></div>
                    <div id="col41A317" class="colourBoxChoice"></div>
                    <div id="col3EA055" class="colourBoxChoice"></div>
                    <div id="col6CBB3C" class="colourBoxChoice"></div>
                    <div id="col6CC417" class="colourBoxChoice"></div>
                    <div id="col4CC417" class="colourBoxChoice"></div>
                    <div id="col52D017" class="colourBoxChoice"></div>
                    <div id="col4CC552" class="colourBoxChoice"></div>
                    <div id="col54C571" class="colourBoxChoice"></div>
                    <div id="col99C68E" class="colourBoxChoice"></div>
                    <div id="col89C35C" class="colourBoxChoice"></div>
                    <div id="col85BB65" class="colourBoxChoice"></div>
                    <div id="col8BB381" class="colourBoxChoice"></div>
                    <div id="col9CB071" class="colourBoxChoice"></div>
                    <div id="colB2C248" class="colourBoxChoice"></div>
                    <div id="col9DC209" class="colourBoxChoice"></div>
                    <div id="colA1C935" class="colourBoxChoice"></div>
                    <div id="col7FE817" class="colourBoxChoice"></div>
                    <div id="col59E817" class="colourBoxChoice"></div>
                    <div id="col57E964" class="colourBoxChoice"></div>
                    <div id="col64E986" class="colourBoxChoice"></div>
                    <div id="col5EFB6E" class="colourBoxChoice"></div>
                    <div id="col00FF00" class="colourBoxChoice"></div>
                    <div id="col5FFB17" class="colourBoxChoice"></div>
                    <div id="col87F717" class="colourBoxChoice"></div>
                    <div id="col8AFB17" class="colourBoxChoice"></div>
                    <div id="col6AFB92" class="colourBoxChoice"></div>
                    <div id="col98FF98" class="colourBoxChoice"></div>
                    <div id="colB5EAAA" class="colourBoxChoice"></div>
                    <div id="colC3FDB8" class="colourBoxChoice"></div>
                    <div id="colCCFB5D" class="colourBoxChoice"></div>
                    <div id="colB1FB17" class="colourBoxChoice"></div>
                    <div id="colBCE954" class="colourBoxChoice"></div>
                    <div id="colEDDA74" class="colourBoxChoice"></div>
                    <div id="colEDE275" class="colourBoxChoice"></div>
                    <div id="colFFE87C" class="colourBoxChoice"></div>
                    <div id="colFFFF00" class="colourBoxChoice"></div>
                    <div id="colFFF380" class="colourBoxChoice"></div>
                    <div id="colFFFFC2" class="colourBoxChoice"></div>
                    <div id="colFFFFCC" class="colourBoxChoice"></div>
                    <div id="colFFF8C6" class="colourBoxChoice"></div>
                    <div id="colFFF8DC" class="colourBoxChoice"></div>
                    <div id="colF5F5DC" class="colourBoxChoice"></div>
                    <div id="colFBF6D9" class="colourBoxChoice"></div>
                    <div id="colFAEBD7" class="colourBoxChoice"></div>
                    <div id="colF7E7CE" class="colourBoxChoice"></div>
                    <div id="colFFEBCD" class="colourBoxChoice"></div>
                    <div id="colF3E5AB" class="colourBoxChoice"></div>
                    <div id="colECE5B6" class="colourBoxChoice"></div>
                    <div id="colFFE5B4" class="colourBoxChoice"></div>
                    <div id="colFFDB58" class="colourBoxChoice"></div>
                    <div id="colFFD801" class="colourBoxChoice"></div>
                    <div id="colFDD017" class="colourBoxChoice"></div>
                    <div id="colEAC117" class="colourBoxChoice"></div>
                    <div id="colF2BB66" class="colourBoxChoice"></div>
                    <div id="colFBB917" class="colourBoxChoice"></div>
                    <div id="colFBB117" class="colourBoxChoice"></div>
                    <div id="colFFA62F" class="colourBoxChoice"></div>
                    <div id="colE9AB17" class="colourBoxChoice"></div>
                    <div id="colE2A76F" class="colourBoxChoice"></div>
                    <div id="colDEB887" class="colourBoxChoice"></div>
                    <div id="colFFCBA4" class="colourBoxChoice"></div>
                    <div id="colC9BE62" class="colourBoxChoice"></div>
                    <div id="colE8A317" class="colourBoxChoice"></div>
                    <div id="colEE9A4D" class="colourBoxChoice"></div>
                    <div id="colC8B560" class="colourBoxChoice"></div>
                    <div id="colD4A017" class="colourBoxChoice"></div>
                    <div id="colC2B280" class="colourBoxChoice"></div>
                    <div id="colC7A317" class="colourBoxChoice"></div>
                    <div id="colC68E17" class="colourBoxChoice"></div>
                    <div id="colB5A642" class="colourBoxChoice"></div>
                    <div id="colADA96E" class="colourBoxChoice"></div>
                    <div id="colC19A6B" class="colourBoxChoice"></div>
                    <div id="colCD7F32" class="colourBoxChoice"></div>
                    <div id="colC88141" class="colourBoxChoice"></div>
                    <div id="colC58917" class="colourBoxChoice"></div>
                    <div id="colAF9B60" class="colourBoxChoice"></div>
                    <div id="colAF7817" class="colourBoxChoice"></div>
                    <div id="colB87333" class="colourBoxChoice"></div>
                    <div id="col966F33" class="colourBoxChoice"></div>
                    <div id="col806517" class="colourBoxChoice"></div>
                    <div id="col827839" class="colourBoxChoice"></div>
                    <div id="col827B60" class="colourBoxChoice"></div>
                    <div id="col786D5F" class="colourBoxChoice"></div>
                    <div id="col493D26" class="colourBoxChoice"></div>
                    <div id="col483C32" class="colourBoxChoice"></div>
                    <div id="col6F4E37" class="colourBoxChoice"></div>
                    <div id="col835C3B" class="colourBoxChoice"></div>
                    <div id="col7F5217" class="colourBoxChoice"></div>
                    <div id="col7F462C" class="colourBoxChoice"></div>
                    <div id="colC47451" class="colourBoxChoice"></div>
                    <div id="colC36241" class="colourBoxChoice"></div>
                    <div id="colC35817" class="colourBoxChoice"></div>
                    <div id="colC85A17" class="colourBoxChoice"></div>
                    <div id="colCC6600" class="colourBoxChoice"></div>
                    <div id="colE56717" class="colourBoxChoice"></div>
                    <div id="colE66C2C" class="colourBoxChoice"></div>
                    <div id="colF87217" class="colourBoxChoice"></div>
                    <div id="colF87431" class="colourBoxChoice"></div>
                    <div id="colE67451" class="colourBoxChoice"></div>
                    <div id="colFF8040" class="colourBoxChoice"></div>
                    <div id="colF88017" class="colourBoxChoice"></div>
                    <div id="colFF7F50" class="colourBoxChoice"></div>
                    <div id="colF88158" class="colourBoxChoice"></div>
                    <div id="colF9966B" class="colourBoxChoice"></div>
                    <div id="colE78A61" class="colourBoxChoice"></div>
                    <div id="colE18B6B" class="colourBoxChoice"></div>
                    <div id="colE77471" class="colourBoxChoice"></div>
                    <div id="colF75D59" class="colourBoxChoice"></div>
                    <div id="colE55451" class="colourBoxChoice"></div>
                    <div id="colE55B3C" class="colourBoxChoice"></div>
                    <div id="colFF0000" class="colourBoxChoice"></div>
                    <div id="colFF2400" class="colourBoxChoice"></div>
                    <div id="colF62217" class="colourBoxChoice"></div>
                    <div id="colF70D1A" class="colourBoxChoice"></div>
                    <div id="colF62817" class="colourBoxChoice"></div>
                    <div id="colE42217" class="colourBoxChoice"></div>
                    <div id="colE41B17" class="colourBoxChoice"></div>
                    <div id="colDC381F" class="colourBoxChoice"></div>
                    <div id="colC34A2C" class="colourBoxChoice"></div>
                    <div id="colC24641" class="colourBoxChoice"></div>
                    <div id="colC04000" class="colourBoxChoice"></div>
                    <div id="colC11B17" class="colourBoxChoice"></div>
                    <div id="col9F000F" class="colourBoxChoice"></div>
                    <div id="col990012" class="colourBoxChoice"></div>
                    <div id="col8C001A" class="colourBoxChoice"></div>
                    <div id="col954535" class="colourBoxChoice"></div>
                    <div id="col7E3517" class="colourBoxChoice"></div>
                    <div id="col8A4117" class="colourBoxChoice"></div>
                    <div id="col7E3817" class="colourBoxChoice"></div>
                    <div id="col800517" class="colourBoxChoice"></div>
                    <div id="col810541" class="colourBoxChoice"></div>
                    <div id="col7D0541" class="colourBoxChoice"></div>
                    <div id="col7E354D" class="colourBoxChoice"></div>
                    <div id="col7D0552" class="colourBoxChoice"></div>
                    <div id="col7F4E52" class="colourBoxChoice"></div>
                    <div id="col7F5A58" class="colourBoxChoice"></div>
                    <div id="col7F525D" class="colourBoxChoice"></div>
                    <div id="colB38481" class="colourBoxChoice"></div>
                    <div id="colC5908E" class="colourBoxChoice"></div>
                    <div id="colC48189" class="colourBoxChoice"></div>
                    <div id="colC48793" class="colourBoxChoice"></div>
                    <div id="colE8ADAA" class="colourBoxChoice"></div>
                    <div id="colEDC9AF" class="colourBoxChoice"></div>
                    <div id="colFDD7E4" class="colourBoxChoice"></div>
                    <div id="colFCDFFF" class="colourBoxChoice"></div>
                    <div id="colFFDFDD" class="colourBoxChoice"></div>
                    <div id="colFBBBB9" class="colourBoxChoice"></div>
                    <div id="colFAAFBE" class="colourBoxChoice"></div>
                    <div id="colFAAFBA" class="colourBoxChoice"></div>
                    <div id="colF9A7B0" class="colourBoxChoice"></div>
                    <div id="colE7A1B0" class="colourBoxChoice"></div>
                    <div id="colE799A3" class="colourBoxChoice"></div>
                    <div id="colE38AAE" class="colourBoxChoice"></div>
                    <div id="colF778A1" class="colourBoxChoice"></div>
                    <div id="colE56E94" class="colourBoxChoice"></div>
                    <div id="colF660AB" class="colourBoxChoice"></div>
                    <div id="colFC6C85" class="colourBoxChoice"></div>
                    <div id="colF6358A" class="colourBoxChoice"></div>
                    <div id="colF52887" class="colourBoxChoice"></div>
                    <div id="colE45E9D" class="colourBoxChoice"></div>
                    <div id="colE4287C" class="colourBoxChoice"></div>
                    <div id="colF535AA" class="colourBoxChoice"></div>
                    <div id="colFF00FF" class="colourBoxChoice"></div>
                    <div id="colE3319D" class="colourBoxChoice"></div>
                    <div id="colF433FF" class="colourBoxChoice"></div>
                    <div id="colD16587" class="colourBoxChoice"></div>
                    <div id="colC25A7C" class="colourBoxChoice"></div>
                    <div id="colCA226B" class="colourBoxChoice"></div>
                    <div id="colC12869" class="colourBoxChoice"></div>
                    <div id="colC12267" class="colourBoxChoice"></div>
                    <div id="colC25283" class="colourBoxChoice"></div>
                    <div id="colC12283" class="colourBoxChoice"></div>
                    <div id="colB93B8F" class="colourBoxChoice"></div>
                    <div id="col7E587E" class="colourBoxChoice"></div>
                    <div id="col571B7E" class="colourBoxChoice"></div>
                    <div id="col583759" class="colourBoxChoice"></div>
                    <div id="col4B0082" class="colourBoxChoice"></div>
                    <div id="col461B7E" class="colourBoxChoice"></div>
                    <div id="col4E387E" class="colourBoxChoice"></div>
                    <div id="col614051" class="colourBoxChoice"></div>
                    <div id="col5E5A80" class="colourBoxChoice"></div>
                    <div id="col6A287E" class="colourBoxChoice"></div>
                    <div id="col7D1B7E" class="colourBoxChoice"></div>
                    <div id="colA74AC7" class="colourBoxChoice"></div>
                    <div id="colB048B5" class="colourBoxChoice"></div>
                    <div id="col6C2DC7" class="colourBoxChoice"></div>
                    <div id="col842DCE" class="colourBoxChoice"></div>
                    <div id="col8D38C9" class="colourBoxChoice"></div>
                    <div id="col7A5DC7" class="colourBoxChoice"></div>
                    <div id="col7F38EC" class="colourBoxChoice"></div>
                    <div id="col8E35EF" class="colourBoxChoice"></div>
                    <div id="col893BFF" class="colourBoxChoice"></div>
                    <div id="col8467D7" class="colourBoxChoice"></div>
                    <div id="colA23BEC" class="colourBoxChoice"></div>
                    <div id="colB041FF" class="colourBoxChoice"></div>
                    <div id="colC45AEC" class="colourBoxChoice"></div>
                    <div id="col9172EC" class="colourBoxChoice"></div>
                    <div id="col9E7BFF" class="colourBoxChoice"></div>
                    <div id="colD462FF" class="colourBoxChoice"></div>
                    <div id="colE238EC" class="colourBoxChoice"></div>
                    <div id="colC38EC7" class="colourBoxChoice"></div>
                    <div id="colC8A2C8" class="colourBoxChoice"></div>
                    <div id="colE6A9EC" class="colourBoxChoice"></div>
                    <div id="colE0B0FF" class="colourBoxChoice"></div>
                    <div id="colC6AEC7" class="colourBoxChoice"></div>
                    <div id="colF9B7FF" class="colourBoxChoice"></div>
                    <div id="colD2B9D3" class="colourBoxChoice"></div>
                    <div id="colE9CFEC" class="colourBoxChoice"></div>
                    <div id="colEBDDE2" class="colourBoxChoice"></div>
                    <div id="colE3E4FA" class="colourBoxChoice"></div>
                    <div id="colFDEEF4" class="colourBoxChoice"></div>
                    <div id="colFFF5EE" class="colourBoxChoice"></div>
                    <div id="colFEFCFF" class="colourBoxChoice"></div>
                    <div id="colFFFFFF" class="colourBoxChoice"></div>

                </div>
                
                <input id="cssOutput" type="hidden" name="cssOutput" />

                <div id="exportWindow">
                    <div id="exportWindowClose"></div>
                    <p class="windowTitle">Confirm Export</p>
                    <p>Thanks for using <em>Xhibit</em> to develop your Xerte theme. To confirm your export, click on the <strong>Confirmation</strong> button.</p>
                    <p>You can then attach your CSS file to your Xerte project.</p>
                    <input type="submit" id="confirmBtn" value="Confirm"/>
                </div>

                <div id="preview">

                    <?php 
                    include('../includes/xerte/xerte-body.html'); 
                    ?>

                </div>

            </div>
            
        </form>
        
    </div>

   <div class="push"></div>
</div>

    <?php 
    include('../includes/footer.html');
    ?>
    
    <script src="design.js"></script>

    <!--[if lte IE 8]><div id="ie" class="ie-only">
            <div id="message">
                <img src="../images/xhibit-logo.png" width="190px">
                <div id="alert">
                    Your current browser is out-of-date. Please <a href="https://updatemybrowser.org/" target="_blank">upgrade it now</a> to enjoy the best possible experience on Xhibit App.
                </div>
            </div>
            <div id="warning-image">
                <img src="../images/sad-pc.png" width="446px" alt="Upgrade your browser now">
            </div>
   </div><![endif]-->
    
</body>
    
</html>