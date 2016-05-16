<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Design | Xhibit App</title>
    <?php 
    include('../includes/xerte/xerte-head.html');
    ?>
    <link rel="stylesheet" type="text/css" href="../xhibit.css">
    <link rel="stylesheet" type="text/css" href="design.css">
</head>
<body>
    
    <?php include_once("../includes/analyticstracking.php") ?>

    <?php 
    include('../includes/header.html');
    ?>
    
    <div class="design wrapper">
        
        <div id="intro">

            <h1>Design Your Theme</h1>

            <p>Start designing your Xerte theme by using the Xhibit designer tools below. When you are ready click the export button.</p>
            
        </div>
        
        <form action="/design/export/index.php" method="post">
        
            <div id="designer">

                <div id="zoneSelector">

                    <div id="selectHeader"></div>
                    <div id="selectFooter"></div>
                    <div id="selectBody"></div>
                    <div id="selectMenus"></div>
                    <div id="exportBtn"></div>

                </div>
                
                <p id="help">Select a design area to focus on, using the tiled menu above.</p>

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
                            <input class="hexBox"  type="text" name="headerGradient2"/>
                        </div>
                        <div id="headerHeading1" class="element">
                            Heading 1
                            <div class="plusMinus"></div>
                        </div>
                        <div id="headerHeading1Edit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox"  type="text" name="headerHeading1"/>
                        </div>
                        <div id="headerHeading2" class="element">
                            Heading 2
                            <div class="plusMinus"></div>
                        </div>
                        <div id="headerHeading2Edit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox"  type="text" name="headerHeading2"/>
                        </div>
                        <div id="headerBottomBorder" class="element">
                            Bottom Border
                            <div class="plusMinus"></div>
                        </div>
                        <div id="headerBottomBorderEdit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox"  type="text" name="headerBottomBorder"/>
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
                            <input class="hexBox"  type="text" name="footerGradient1"/>
                        </div>
                        <div id="footerGradient2" class="element">
                            Gradient 2
                            <div class="plusMinus"></div>
                        </div>
                        <div id="footerGradient2Edit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox"  type="text" name="footerGradient2"/>
                        </div>
                        <div id="footerTopBorder" class="element">
                            Top Border
                            <div class="plusMinus"></div>
                        </div>
                        <div id="footerTopBorderEdit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox"  type="text" name="footerTopBorder"/>
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
                            <div class="plusMinus"></div></div>
                        <div id="bodyBackgroundColourEdit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox"  type="text" name="bodyBackgroundColour"/>
                        </div>
                        <div id="bodyParagraphColour" class="element">
                            Paragraph Colour
                            <div class="plusMinus"></div>
                        </div>
                        <div id="bodyParagraphColourEdit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox"  type="text" name="bodyParagraphColour"/>
                        </div>
                        <div id="bodyBorder" class="element">
                            Border
                            <div class="plusMinus"></div>
                        </div>
                        <div id="bodyBorderEdit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox"  type="text" name="bodyBorder"/>
                        </div>
                        <div id="bodyLinkColour" class="element">
                            Link Colour
                            <div class="plusMinus"></div>
                        </div>
                        <div id="bodyLinkColourEdit" class="elementEdit">
                            <div class="colourBox"></div>
                            <div class="colourPickerIcon"></div>
                            <input class="hexBox"  type="text" name="bodyLinkColour"/>
                        </div>
                        <div id="bodyLinkHoverColour" class="element">
                            Link Hover Colour
                            <div class="plusMinus"></div>
                        </div>
                        <div id="bodyLinkHoverColourEdit" class="elementEdit">
                            <p style="color: black; padding: 10px;">Coming soon.</p>.
                        </div>
                    </div>
                </div>

                <div id="accordionMenus" class="accordion">
                    <div class="elementTitle">
                        Menus
                        <div class="accordionClose"></div>
                    </div>
                    <div class="elements">
                        <div><em>Coming soon...</em></div>
                    </div>
                </div>

                <div id="colourPicker">
                    <div id="colourPickerClose"></div>
                    <p class="windowTitle">Select your colour</p>
                    <div id="colff0000" class="colourBoxChoice"></div>
                    <div id="colff4000" class="colourBoxChoice"></div>
                    <div id="colff8000" class="colourBoxChoice"></div>
                    <div id="colffbf00" class="colourBoxChoice"></div>
                    <div id="colffff00" class="colourBoxChoice"></div>
                    <div id="colbfff00" class="colourBoxChoice"></div>
                    <div id="col80ff00" class="colourBoxChoice"></div>
                    <div id="col40ff00" class="colourBoxChoice"></div>
                    <div id="col00ff00" class="colourBoxChoice"></div>
                    <div id="col00ff40" class="colourBoxChoice"></div>
                    <div id="col00ff80" class="colourBoxChoice"></div>
                    <div id="col00ffbf" class="colourBoxChoice"></div>
                    <div id="col00ffff" class="colourBoxChoice"></div>
                    <div id="col00bfff" class="colourBoxChoice"></div>
                    <div id="col0080ff" class="colourBoxChoice"></div>
                    <div id="col0040ff" class="colourBoxChoice"></div>
                    <div id="col0000ff" class="colourBoxChoice"></div>
                    <div id="col4000ff" class="colourBoxChoice"></div>
                    <div id="col8000ff" class="colourBoxChoice"></div>
                    <div id="colbf00ff" class="colourBoxChoice"></div>
                    <div id="colff00ff" class="colourBoxChoice"></div>
                    <div id="colff00bf" class="colourBoxChoice"></div>
                    <div id="colff0080" class="colourBoxChoice"></div>
                    <div id="colff0040" class="colourBoxChoice"></div>
                    <div id="colffffff" class="colourBoxChoice"></div>
                    <div id="col000000" class="colourBoxChoice"></div>
                </div>

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

    <?php 
    include('../includes/footer.html');
    ?>
    
    <script src="design.js"></script>
    
</body>
    
</html>