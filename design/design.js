/* jshint browser: true */    // Prevents JSHint errors when 'document' is used.

(function () {
    
    // Set up variables.

    var css,
        retrieveStorage = true, // For retrieving saved data.
        liveStyles = document.getElementById('liveStyles'),
        zoneButtons = [null, // Placeholder for possible future help icon
                      document.getElementById('selectHeader'),
                      document.getElementById('selectFooter'),
                      document.getElementById('selectBody'),
                      document.getElementById('selectMenus'),
                      document.getElementById('selectIcons'),
                      document.getElementById('selectFonts')],
        accordions = [document.getElementById('accordionHelp'),
                     document.getElementById('accordionHeader'),
                     document.getElementById('accordionFooter'),
                     document.getElementById('accordionBody'),
                     document.getElementById('accordionMenus'),
                     document.getElementById('accordionIcons'),
                     document.getElementById('accordionFonts')],
        colourPicker = document.getElementById('colourPicker'),
        colourPickerClose = document.getElementById('colourPickerClose'),
        colourBoxChoice = document.getElementsByClassName('colourBoxChoice'),
        iconPicker = document.getElementById('iconPicker'),
        iconPickerClose = document.getElementById('iconPickerClose'),
        iconBoxChoice = document.getElementsByClassName('iconBoxChoice'),
        saveBtn = document.getElementById('saveBtn'),
        saveWindow = document.getElementById('saveWindow'),
        saveWindowClose = document.getElementById('saveWindowClose'),
        saveProgress = document.getElementById('saveProgress'),
        resetBtn = document.getElementById('resetBtn'),
        resetWindow = document.getElementById('resetWindow'),
        resetWindowClose = document.getElementById('resetWindowClose'),
        revertProgress = document.getElementById('revertProgress'),
        resetProgress = document.getElementById('resetProgress'),
        exportBtn = document.getElementById('exportBtn'),
        exportWindow = document.getElementById('exportWindow'),
        exportWindowClose = document.getElementById('exportWindowClose'),
        element = document.getElementsByClassName('element'),
        elementEdit = document.getElementsByClassName('elementEdit'),
        fontTraditionalSelect = document.getElementById('traditionalFontDrop'),
        fontGoogleSelect = document.getElementById('googleFontDrop'),
        googleAPI = "Lato:400,400i,700,700i",
        colourBox = document.getElementsByClassName('colourBox'),
        colourPickerIcon = document.getElementsByClassName('colourPickerIcon'),
        iconBox = document.getElementsByClassName('iconBox'),
        iconPickerIcon = document.getElementsByClassName('iconPickerIcon'),
        hexBox = document.getElementsByClassName('hexBox'),
        unicodeBox = document.getElementsByClassName('unicodeBox'),
        plusMinus = document.getElementsByClassName('plusMinus'),
        helpClose = document.getElementById('helpClose'),
        accordionClose = document.getElementsByClassName('accordionClose'),
        radios = document.getElementsByClassName('radio'),
        footerDotsTextureOn = document.getElementById('footerDotsTextureOn'),
        footerDotsTextureOff = document.getElementById('footerDotsTextureOff'),
        xerteButtons = document.getElementById('preview').getElementsByTagName('button'),
        xhibitXerteMenu = document.getElementById('xhibitXerteMenu'),
        hexValue,
        i,
        j,
        k,
        styles = {
            traditionalFont : {
                fontFamily: '"Arial", Helvetica, sans-serif'
            },
            googleFont : {
                fontFamily: '"Lato", sans-serif'
            },
            headerGradient1 : {
                colour: '#010101'
            },
            headerGradient2 : {
                colour: '#434343'
            },
            headerHeading1 : {
                colour: '#ffffff'
            },
            headerHeading2 : {
                colour: '#ffffff'
            },
            headerBottomBorder : {
                colour: '#ffffff'
            },
            footerGradient1 : {
                colour: '#434343'
            },
            footerGradient2 : {
                colour: '#010101'
            },
            footerTopBorder : {
                colour: '#ffffff'
            },
            footerDotsTexture : {
                status: 'on'
            },
            pageNumBackground : {
                colour: '#000000'
            },
            pageNumBorder : {
                colour: '#000000'
            },
            pageNumTextColour : {
                colour: '#ffffff'
            },
            bodyBackgroundColour : {
                colour: '#ffffff'
            },
            bodyParagraphColour : {
                colour: '#000000'
            },
            bodyBorder : {
                colour: '#000000'
            },
            bodyLinkColour : {
                colour: '#0000EE'
            },
            bodyLinkHoverColour : {
                colour: '#0000EE'
            },
            menuBackgroundColour : {
                colour: '#ffffff'
            },
            menuHeaderBackground : {
                colour: '#2d2a2a'
            },
            menuHeaderText : {
                colour: '#ffffff'
            },
            menuItemBackground : {
                colour: '#e6e6e6'
            },
            menuItemText : {
                colour: '#555555'
            },
            nextIcon : {
                content: '',
                colour: '',
                background: ''
            }
        };
    
    // Retrieve any saved styles.
    
    if (localStorage.styles && retrieveStorage === true){
        console.log('retrieve styles');
        styles = JSON.parse(localStorage.styles);
        retrieveStorage = false;
    }
    
    // Generate the CSS and place in the document head to enable live preview.

    function updateCSS() {

        css = '/* Xerte theme generated via Xhibit App (http://www.xhibitapp.com) */\n\n';

        // If a 'Google' font is selected, as opposed to 'traditional' add the Include declaration for the Google API
        if (traditionalSelected == false && googleSelected == true) {
            css += '/* GOOGLE FONT IMPORT DECLARATION */\n';
            css += "@import url('https://fonts.googleapis.com/css?family=" + googleAPI + "');\n\n";
        }

        css += '/* FONT */\n\n';
        // Specify the Font Family across the Xerte project - traditional or Google Font
        css += 'body {\n';
        if (traditionalSelected == true && googleSelected == false) {
            css += '\t' + 'font-family: ' + styles.traditionalFont.fontFamily + ';\n';
        }
        if (traditionalSelected == false && googleSelected == true) {
            css += '\t' + "font-family: " + "'" + styles.googleFont.fontFamily + "', sans-serif;\n";
        }
        css += '}\n\n';

        css += '/* HEADER GRADIENT */\n\n';

        css += '#x_headerBlock {\n';
        css += '\t' + 'background: -ms-linear-gradient(top, ' + styles.headerGradient1.colour + ', ' + styles.headerGradient2.colour + ');\n';
        css += '\t' + 'background: -webkit-gradient(linear, left top, left bottom, from(' + styles.headerGradient1.colour + '), to(' + styles.headerGradient2.colour + '));\n';
        css += '\t' + 'background: -moz-linear-gradient(top,  ' + styles.headerGradient1.colour + ',  ' + styles.headerGradient2.colour + ');\n';
        css += '\t' + 'backgroundImage: -o-linear-gradient(' + styles.headerGradient1.colour + ', '  +  styles.headerGradient2.colour + ');\n';
        css += '}\n\n';

        css += '/* MAIN HEADING */\n\n';

        css += '#x_headerBlock h1 {\n';
        css += '\t' + 'color: ' + styles.headerHeading1.colour + ';\n';
        css += '}\n\n';

        css += '/* SECONDARY HEADING */\n\n';

        css += '#x_headerBlock h2 {\n';
        css += '\t' + 'color: ' + styles.headerHeading2.colour + ';\n';
        css += '}\n\n';

        css += '/* BOTTOM BORDER OF HEADER */\n\n';

        css += '#x_headerBlock {\n';
        css += '\t' + 'border-bottom: 1px solid ' + styles.headerBottomBorder.colour + ';\n';
        css += '}\n\n';

        css += '/* FOOTER GRADIENT */\n\n';

        css += '#x_footerBlock {\n';
        css += '\t' + 'background: -ms-linear-gradient(top, ' + styles.footerGradient1.colour + ', ' + styles.footerGradient2.colour + ');\n';
        css += '\t' + 'background: -webkit-gradient(linear, left top, left bottom, from(' + styles.footerGradient1.colour + '), to(' + styles.footerGradient2.colour + '));\n';
        css += '\t' + 'background: -moz-linear-gradient(top,  ' + styles.footerGradient1.colour + ',  ' + styles.footerGradient2.colour + ');\n';
        css += '\t' + 'backgroundImage: -o-linear-gradient(' + styles.footerGradient1.colour + ', ' + styles.footerGradient2.colour + ');\n';
        css += '}\n\n';

        css += '/* TOP BORDER OF FOOTER */\n\n';

        css += '#x_footerBlock {\n';
        css += '\t' + 'border-top: 1px solid ' + styles.footerTopBorder.colour + ';\n';
        css += '}\n\n';

        css += '/* DOTS TEXTURE ON/OFF */\n\n';

        css += '#x_footerBg {\n';
        css += '\t' + 'background-image: ';
        css += (styles.footerDotsTexture.status === 'on') ? 'url("../includes/xerte/modules/xerte/parent_templates/Nottingham/common_html5/dots.png");\n' : 'none;\n';
        css += '}\n\n';

        css += '/* FOOTER PAGE NUMBERING BOX */\n\n';

        css += '#x_pageNo {\n';
        css += '\t' + 'background-color: ' + styles.pageNumBackground.colour + ';\n';
        css += '\t' + 'border: 1px solid ' + styles.pageNumBorder.colour + ';\n';
        css += '\t' + 'color: ' + styles.pageNumTextColour.colour + ';\n';
        css += '}\n\n';

        css += '/* BODY BACKGROUND */\n\n';

        css += '#x_mainHolder {\n';
        css += '\t' + 'background: ' + styles.bodyBackgroundColour.colour + ';\n';
        css += '}\n\n';

        css += '/* BODY BORDER */\n\n';

        css += '#x_mainHolder {\n';
        css += '\t' + 'border: 1px solid ' + styles.bodyBorder.colour + ';\n';
        css += '}\n\n';

        css += '/* PARAGRAPH COLOUR */\n\n';

        css += '#x_mainHolder p {\n';
        css += '\t' + 'color: ' + styles.bodyParagraphColour.colour + ';\n';
        css += '}\n\n';

        css += '/* LINK COLOUR */\n\n';

        css += '#x_mainHolder a {\n';
        css += '\t' + 'color: ' + styles.bodyLinkColour.colour + ';\n';
        css += '}\n';
        css += '#x_mainHolder a:hover {\n';
        css += '\t' + 'color: ' + styles.bodyLinkHoverColour.colour + ';\n';
        css += '}\n\n';

        css += '/* MENUS */\n\n';

        css += '.ui-dialog {\n';
        css += '\t' + 'background: ' + styles.menuBackgroundColour.colour + ';\n';
        // Specify the Font Family across the Xerte project - traditional or Google Font
        if (traditionalSelected == true && googleSelected == false) {
            css += '\t' + 'font-family: ' + styles.traditionalFont.fontFamily + ';\n';
        }
        if (traditionalSelected == false && googleSelected == true) {
            css += '\t' + "font-family: " + "'" + styles.googleFont.fontFamily + "', sans-serif;\n";
        }
        css += '}\n\n';

        css += '.ui-dialog .ui-widget-header {\n';
        css += '\t' + 'background: ' + styles.menuHeaderBackground.colour + ';\n';
        css += '\t' + 'color: ' + styles.menuHeaderText.colour + ';\n';
        css += '}\n\n';

        css += '.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default {\n';
        css += '\t' + 'background: ' + styles.menuItemBackground.colour + ';\n';
        css += '\t' + 'color: ' + styles.menuItemText.colour + ';\n';
        // Specify the Font Family across the Xerte project - traditional or Google Font
        if (traditionalSelected == true && googleSelected == false) {
            css += '\t' + 'font-family: ' + styles.traditionalFont.fontFamily + ';\n';
        }
        if (traditionalSelected == false && googleSelected == true) {
            css += '\t' + "font-family: " + "'" + styles.googleFont.fontFamily + "', sans-serif;\n";
        }
        css += '}';

        liveStyles.textContent = css;
        document.getElementById('cssOutput').value = css;

        //Update colour contrast read-outs
        checkContrast();
    }

    
    for (i = 0; i < xerteButtons.length; i++) {
        xerteButtons[i].type = 'button'; // Ensures Xerte buttons don't submit the form.
    }

    function elementSelections() {
        /* jshint validthis:true */
        for (j = 0; j < elementEdit.length; j++) {
            if (elementEdit[j].id !== this.id + 'Edit') {
                    elementEdit[j].className = 'elementEdit';
            }
        }
        for (k = 0; k < plusMinus.length; k++) {
            document.getElementsByClassName('plusMinus')[k].className = 'plusMinus';
        }
        if (document.getElementById(this.id + 'Edit').className.indexOf('visible') === -1) {
            document.getElementById(this.id + 'Edit').className += ' visible';
            this.getElementsByClassName('plusMinus')[0].className += ' minus';
        } else {
                document.getElementById(this.id + 'Edit').className = 'elementEdit';
        }
    }
    
    for (i = 0; i < element.length; i++) {
        element[i].addEventListener('click', elementSelections);
    }
    
    // Functionality for opening the zones.
    
    function zoneButtonsActive(active) {
        for (z = 1; z < zoneButtons.length; z++){
            zoneButtons[z].className = active==='true' ? '' : 'inactive';
        }
    }

    function closeAccordions() {
        for (i = 0; i < accordions.length; i++){
            accordions[i].className = 'accordion';
        }
    }
    
    function zoneButtonSelected(zone) {
        if (accordions[zone].className.indexOf('visible') === -1) {
            // This accordion not currently visible.
            closeAccordions(); // close all accordions first.
            accordions[zone].className += ' visible'; // open this accordion.
            zoneButtonsActive('false'); // inactivate all buttons.
            zoneButtons[zone].className = 'active'; // activate this button.
            if (zone===4) { // show or hide XOT menu
                xhibitXerteMenu.style.display = 'block';
            } else {
                xhibitXerteMenu.style.display = 'none';
            }
        } else {
            // Accordion already visible - Close it and re-activate all buttons.
            zoneButtonsActive('true');
            accordions[zone].className = 'accordion';
            xhibitXerteMenu.style.display = 'none'; //hide XOT menu.
        }
        colourPicker.className = '';
        saveWindow.className = '';
        resetWindow.className = '';
        exportWindow.className = '';
    }

    function zoneButtonClicked(_i) {
        zoneButtons[_i].addEventListener('click', function () {
            zoneButtonSelected(_i);
        });
    }

    for (i = 1; i < zoneButtons.length; i++) {
        zoneButtonClicked(i);
    }
    
    // Functionality for clicking the close icons.
    
    function closeAccordionClicked(_i) {
        accordionClose[_i].addEventListener('click', function () {
            closeAccordions();
            zoneButtonsActive('true');
            xhibitXerteMenu.style.display = 'none';
            colourPicker.className = '';
            saveWindow.className = '';
            resetWindow.className = '';
            exportWindow.className = '';
        });
    }

    for (i = 0; i < accordionClose.length; i++) {
        closeAccordionClicked(i);
    }
    
    // Set default ColourBoxes and HexBoxes based on styles object, and add their event listeners.
    
    function editElement(_i) {
        
        // Set defaults
        var hexValue = styles[colourBox[_i].parentElement.id.slice(0, -4)].colour;
        colourBox[_i].style.backgroundColor = hexValue;
        hexBox[_i].value = hexValue;
        
        // Event listeners
        hexBox[_i].addEventListener('keyup', function () {
            colourBox[_i].style.backgroundColor = hexBox[_i].value;
            var targetElement = colourBox[_i].parentElement.id.slice(0, -4),
                newValue = hexBox[_i].value;
            styles[targetElement].colour = newValue;
            updateCSS();
        });
        colourBox[_i].addEventListener('click', function () {
            colourPicker.className = 'visible ' + colourBox[_i].parentElement.id.slice(0, -4);
        });
        colourPickerIcon[_i].addEventListener('click', function () {
            colourPicker.className = 'visible ' + colourBox[_i].parentElement.id.slice(0, -4);
        });
        
    }
    
    for (i = 0; i < colourBox.length; i++) {
        editElement(i);
    }

    //Disable the enter key when interacting with the Hex Boxes. This stops a bug where the CSS Export is executed when pressing enter within the input box

    $('.hexBox').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });

    // Set default icons based on styles object, and add their event listeners.
    
    function editIcon(_i) {
        
        // Set defaults
        var unicodeValue = styles[iconBox[_i].parentElement.id.slice(0, -4)].colour;
        unicodeBox[_i].value = unicodeValue;
        
        // Event listeners
        unicodeBox[_i].addEventListener('keyup', function () {
            iconBox[_i].style.backgroundColor = unicodeBox[_i].value;
            var targetElement = iconBox[_i].parentElement.id.slice(0, -4),
                newValue = unicodeBox[_i].value;
            styles[targetElement].unicode = newValue;
            updateCSS();
        });
        iconBox[_i].addEventListener('click', function () {
            iconPicker.className = 'visible ' + iconBox[_i].parentElement.id.slice(0, -4);
        });
        iconPickerIcon[_i].addEventListener('click', function () {
            iconPicker.className = 'visible ' + iconBox[_i].parentElement.id.slice(0, -4);
        });
        
    }
    
    for (i = 0; i < iconBox.length; i++) {
        editIcon(i);
    }
    
    //Functionality for selecting from colour palette
    
    function colourPalette(_i) {
        colourBoxChoice[_i].addEventListener('click', function () {
            var targetElement = colourPicker.className.substr(8),
                newValue = '#' + colourBoxChoice[_i].id.substr(3);
            styles[targetElement].colour = newValue;
            document.getElementById(targetElement + 'Edit').getElementsByClassName('colourBox')[0].style.backgroundColor = styles[targetElement].colour;
            document.getElementById(targetElement + 'Edit').getElementsByClassName('hexBox')[0].value = styles[targetElement].colour;
            colourPicker.className = '';
            updateCSS();
        });
    }
    
    for (i = 0; i < colourBoxChoice.length; i++) {
        colourPalette(i);
    }
    
    // Other event listeners

    colourPickerClose.addEventListener('click', function () {
        colourPicker.className = '';
    });

    footerDotsTextureOn.addEventListener('click', function () {
        styles.footerDotsTexture.status = 'on';
        updateCSS();
    });

    footerDotsTextureOff.addEventListener('click', function () {
        styles.footerDotsTexture.status = 'off';
        updateCSS();
    });

    saveBtn.addEventListener('click', function () {
        saveWindow.className = 'visible';
        resetWindow.className = '';
        exportWindow.className = '';
    });

    saveWindowClose.addEventListener('click', function () {
        saveWindow.className = '';
    });

    resetBtn.addEventListener('click', function () {
        resetWindow.className = 'visible';
        saveWindow.className = '';
        exportWindow.className = '';
    });

    resetWindowClose.addEventListener('click', function () {
        resetWindow.className = '';
    });

    exportBtn.addEventListener('click', function () {
        exportWindow.className = 'visible';
        resetWindow.className = '';
        saveWindow.className = '';
    });

    exportWindowClose.addEventListener('click', function () {
        exportWindow.className = '';
    });

	helpClose.addEventListener('click', function () {
		accordions[0].className = '';
	});
    
    saveProgress.addEventListener('click', function () {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("styles", JSON.stringify(styles));
            alert('Theme saved');
        } else {
            alert('Sorry, your browser does not support this feature.');
        }
    });
    
    revertProgress.addEventListener('click', function () {
        if (typeof(Storage) !== "undefined") {
            location.reload();
        } else {
            alert('Sorry, your browser does not support this feature.');
        }
    });
    
    resetProgress.addEventListener('click', function () {
        if (typeof(Storage) !== "undefined") {
            localStorage.removeItem("styles");
            location.reload();
        } else {
            alert('Sorry, your browser does not support this feature.');
        }
    });

    //-----------------------------------------------------------------------------------------------------------
    //Opening boolean variables declared. We want the traditional Arial font (Xerte default) to be the default to begin with (not Google Fonts).
    var traditionalSelected = true;
    var googleSelected = false;

    //Populate the Traditional Font select menu
    var selectTraditional = document.getElementById("traditionalFontDrop");

    //Load the traditional web fonts into two managable arrays
    var tOptions = [
                    "Arial (Xerte Default)", 
                    "Courier New", 
                    "Georgia",
                    "Tahoma", 
                    "Times New Roman",
                    "Trebuchet MS",  
                    "Verdana"
                   ];

    var tValues = [
                    "Arial, Helvetica, sans-serif", 
                    "'Courier New', Courier, monospace", 
                    "'Georgia', serif",
                    "Tahoma, Geneva, sans-serif", 
                    "'Times New Roman', Times, serif",
                    "'Trebuchet MS', Helvetica, sans-serif", 
                    "Verdana, Geneva, sans-serif"
                  ];

    //Populate the select menu using our arrays
    for (var i = 0; i < tOptions.length; i++) {
        var optionT = tOptions[i];
        var valueT = tValues[i];
        var tfo = document.createElement("option");
        tfo.textContent = optionT;
        tfo.value = valueT;
        selectTraditional.appendChild(tfo);
    }

    //Set default selected item
    document.getElementById('traditionalFontDrop').selectedIndex = 0;

    //Update Traditional Font through Select (Options) Drop-Down Menu

    fontTraditionalSelect.addEventListener('change', function () {
        //Get selected value
        var selectedTraditionalFont = fontTraditionalSelect.options[fontTraditionalSelect.selectedIndex].value;
        //Update our CSS style variable with the selected value (above)
        styles.traditionalFont.fontFamily = selectedTraditionalFont;
        //Update boolean properties to Traditional
        traditionalSelected = true;
        googleSelected = false;
        //Update CSS
        updateCSS();
    });

    //-----------------------------------------------------------------------------------------------------------

    //Populate the Google Fonts select menu
    var selectGoogle = document.getElementById("googleFontDrop");

    //Load the Google web fonts into two managable arrays
    var gOptions = [
                    "Select a Google Font...",
                    "Cabin",
                    "Lato",
                    "Montserrat",
                    "Muli",
                    "Noto Sans",
                    "Open Sans",
                    "PT Sans",
                    "Raleway",
                    "Roboto",
                    "Rubik"
                  ];

    var gValues = [
                  "Select a Google Font...",
                  "Cabin:400,400i,700,700i",
                  "Lato:400,400i,700,700i",
                  "Montserrat:400,400i,700,700i",
                  "Muli:400,400i,700,700i",
                  "Noto+Sans:400,400i,700,700i",
                  "Open+Sans:400,400i,700,700i",
                  "PT+Sans:400,400i,700,700i",
                  "Raleway:400,400i,700,700i",
                  "Roboto:400,400i,700,700i",
                  "Rubik:400,400i,700,700i"
                  ];

    //Populate the select menu using our arrays
    for ( var j = 0; j < gOptions.length; j++) {
        var optionG = gOptions[j];
        var valueG = gValues[j];
        var gfo = document.createElement("option");
        gfo.textContent = optionG;
        gfo.value = valueG;
        selectGoogle.appendChild(gfo);
    }

    //Set default selected item
    document.getElementById('googleFontDrop').selectedIndex = 0;

    //Update Google Font through Select (Options) Drop-Down Menu

    fontGoogleSelect.addEventListener('change', function () {
        //Update Google API (import URL value in CSS)
        googleAPI = fontGoogleSelect.options[fontGoogleSelect.selectedIndex].value;
        //If we have actually selected a font then let's execute the update, otherwise if 'Select a Google Font...' is selected - ignore
        if (googleAPI != "Select a Google Font...") {
            //Update the Google Font selected
            var selectedGoogleFont = fontGoogleSelect.options[fontGoogleSelect.selectedIndex].text;
            //Update our CSS style variable with the selected value (above)
            styles.googleFont.fontFamily = selectedGoogleFont;
            //Update boolean properties to Google Fonts
            traditionalSelected = false;
            googleSelected = true;
            //Update CSS
            updateCSS();
        }
    });

    //-----------------------------------------------------------------------------------------------------------

/* This open-source 'Color Contrast Ratio' script was originally authored by Jared Smith (@jared_w_smith) | http://webaim.org/resources/contrastchecker/ 
It has been heavily adapted specifically for use in Xhibit App and, like all our code, can be used and built on by other developers. Many thanks Jared for your efforts.
We have also adapted some of the text validation and (UI) CSS code written originally by Lea Verou (http://leaverou.github.io/contrast-ratio/) - free to use under a MIT Licence. Cheers Lea for your hard work. 
*/

    function checkContrast() {

    //Setup our variables

    //Load Color Contrast arrays
    //Class within design index page to focus on, cross reference hex 1, cross reference hex 2, target area 1, target area 2
    ccComparisons = [
                        ["bodyBackgroundColourEdit", styles.bodyBackgroundColour.colour, styles.bodyParagraphColour.colour, "Background Colour", "Paragraph Colour"],
                        ["bodyParagraphColourEdit", styles.bodyBackgroundColour.colour, styles.bodyParagraphColour.colour, "Background Colour", "Paragraph Colour"],
                        ["bodyLinkColourEdit", styles.bodyBackgroundColour.colour, styles.bodyLinkColour.colour, "Background Colour", "Link Colour"],
                        ["bodyLinkHoverColourEdit", styles.bodyBackgroundColour.colour, styles.bodyLinkHoverColour.colour, "Background Colour", "Link Hover Colour"],
                        ["headerGradient1Edit", styles.headerGradient1.colour, styles.headerHeading1.colour, "Gradient 1 Colour", "Heading 1 Colour"],
                        ["headerHeading1Edit", styles.headerGradient1.colour, styles.headerHeading1.colour, "Gradient 1 Colour", "Heading 1 Colour"],
                        ["headerGradient2Edit", styles.headerGradient2.colour, styles.headerHeading2.colour, "Gradient 2 Colour", "Heading 2 Colour"],
                        ["headerHeading2Edit", styles.headerGradient2.colour, styles.headerHeading2.colour, "Gradient 2 Colour", "Heading 2 Colour"],
                        ["pageNumBackgroundEdit", styles.pageNumBackground.colour, styles.pageNumTextColour.colour, "Page Number Background Colour", "Page Number Text Colour"],
                        ["pageNumTextColourEdit", styles.pageNumBackground.colour, styles.pageNumTextColour.colour, "Page Number Background Colour", "Page Number Text Colour"]
                    ];

    for (var i = 0; i < ccComparisons.length; i++) {

    //Target the result circle
    var circleTarget = document.getElementById(ccComparisons[i][0]).getElementsByClassName("circleResult")[0];

    //Target result box
    var resultTarget = document.getElementById(ccComparisons[i][0]).getElementsByClassName("contrastResult")[0];

    //Target area where the hex box is located

    var areaTarget = ccComparisons[i][3];
    var areaCompare = ccComparisons[i][4]

    //L (Load) the two colours to begin the cross-reference process (through getL() function)
    var L1FGCol = getL(ccComparisons[i][1].substr(1));
    var L2BGCol = getL(ccComparisons[i][2].substr(1));
    
    //Make sure we actually have two valid colours to compare. Do both input boxes contain text? If so, let's validate the ratio
    if (L1FGCol !== false && L2BGCol !== false) {

        //THIS IS THE KEY PART. Workout what our contrast ratio actually is... Store in a variable
        var ratio = (Math.max(L1FGCol, L2BGCol) + 0.05)/(Math.min(L1FGCol, L2BGCol) + 0.05);

        //Conditional behaviour based on the ratio value. Based on Lea Verou's text and colour based feedback

        if (ratio >= 0 && ratio <= 2.9) {
            //Style our circle RED
            circleTarget.style.backgroundColor = '#cc0000';
            //Output the ratio variable in the circle and round it off to 1 SF
            $(circleTarget).html('<strong>' + (Math.round(ratio * 100)/100).toFixed(1) + '</strong>');
            //Clear previous text
            $(resultTarget).html('');
            //Output the ratio feedback
            $(resultTarget).html('Using the <em> ' + areaTarget + '</em> <span style=" text-transform: uppercase"><strong>' + ccComparisons[i][1] + '</strong></span> and <em>' + areaCompare + '</em> <span style=" text-transform: uppercase"><strong>' + ccComparisons[i][2] + '</strong></span> fails <a href="https://www.w3.org/TR/WCAG/#visual-audio-contrast" target="_blank">WCAG 2.0 on contrast ratio</a>. Update your colour contrast ratio now to make your theme more accessible!'); 
        }
        else if (ratio >= 3 && ratio <= 4.4) {
            //Style our circle YELLOW/AMBER
            circleTarget.style.backgroundColor = '#e69900';
            //Output the ratio variable in the circle and round it off to 1 SF
            $(circleTarget).html('<strong>' + (Math.round(ratio * 100)/100).toFixed(1) + '</strong>');
            //Clear previous text
            $(resultTarget).html('');
            //Output the ratio feedback
            $(resultTarget).html('Using the <em> ' + areaTarget + '</em> <span style=" text-transform: uppercase"><strong>' + ccComparisons[i][1] + '</strong></span> and <em>' + areaCompare + '</em> <span style=" text-transform: uppercase"><strong>' + ccComparisons[i][2] + '</strong></span> passes AA for large text (above 18pt or bold above 14pt). <a href="https://www.w3.org/TR/WCAG/#visual-audio-contrast" target="_blank">WCAG 2.0 on contrast ratio</a>. We recommend increasing your colour contrast ratio to a higher level.'); 
        }
        else if (ratio >= 4.5 && ratio <= 6.9) {
            //Style our circle LIGHT GREEN
            circleTarget.style.backgroundColor = '#8ab82e';
            //Output the ratio variable in the circle and round it off to 1 SF
            $(circleTarget).html('<strong>' + (Math.round(ratio * 100)/100).toFixed(1) + '</strong>');
            //Clear previous text
            $(resultTarget).html('');
            //Output the ratio feedback
            $(resultTarget).html('Using the <em> ' + areaTarget + '</em> <span style=" text-transform: uppercase"><strong>' + ccComparisons[i][1] + '</strong></span> and <em>' + areaCompare + '</em> <span style=" text-transform: uppercase"><strong>' + ccComparisons[i][2] + '</strong></span> passes AA level for any size text and AAA for large text (above 18pt or bold above 14pt). <a href="https://www.w3.org/TR/WCAG/#visual-audio-contrast" target="_blank">WCAG 2.0 on contrast ratio</a>. Your colour contrast ratio is acceptable.');
        }
        else if (ratio >= 7 && ratio <= 22) {
            //Style our circle DARK GREEN
            circleTarget.style.backgroundColor = '#5ea72a';
            //Output the ratio variable in the circle and round it off to 1 SF
            $(circleTarget).html('<strong>' + (Math.round(ratio * 100)/100).toFixed(1) + '</strong>');
            //Clear previous text
            $(resultTarget).text('');
            //Output the ratio feedback
            $(resultTarget).html('Using the <em> ' + areaTarget + '</em> <span style=" text-transform: uppercase"><strong>' + ccComparisons[i][1] + '</strong></span> and <em>' + areaCompare + '</em> <span style=" text-transform: uppercase"><strong>' + ccComparisons[i][2] + '</strong></span> passes AAA level for any size text. <a href="https://www.w3.org/TR/WCAG/#visual-audio-contrast" target="_blank">WCAG 2.0 on contrast ratio</a>. Well done! Your colour contrast ratio is excellent and passes all levels of accessibility.'); 
        }
    }
    else {
        //If there is an error with our two colours (invalid Hex code), or if one (or both) of the hex boxes is empty
        //Style our circle GREY
        circleTarget.style.backgroundColor = '#7f7f7f';
        //Output a question mark in the circle instead of a ratio number
        $(circleTarget).html('<strong>?</strong>');
        //Clear previous text
        $(resultTarget).html('');
        //Output the error feedback
        $(resultTarget).html("You need to select two colours (with 3 or 6 digit <a href='https://www.w3schools.com/colors/colors_hexadecimal.asp' target='_blank'>Hex codes</a>) for the contrast ratio to be calculated. Check you haven't left a hex box empty within the accordions or typed in a hex code incorrectly."); 
    }
  }
}

//Colour Validation
function getL(color) {
    if (color.length == 3) {
        var R = getsRGB(color.substring(0,1) + color.substring(0,1));
        var G = getsRGB(color.substring(1,2) + color.substring(1,2));
        var B = getsRGB(color.substring(2,3) + color.substring(2,3));
        update = true;
    }
    else if (color.length == 6) {
        var R = getsRGB(color.substring(0,2));
        var G = getsRGB(color.substring(2,4));
        var B = getsRGB(color.substring(4,6));
        update = true;
    }
    else {
        update = false;
    }
    if (update == true) {
        var L = (0.2126 * R + 0.7152 * G + 0.0722 * B);
        return L;
    }
    else {
        return false;
    }
    
}

function getsRGB(color) {
    color = getRGB(color);
    if (color !== false) {
        color = color/255;
        color = (color <= 0.03928) ? color/12.92 : Math.pow(((color + 0.055)/1.055), 2.4);
        return color;
    }
    else { 
        return false;
    }
}

function getRGB(color) {
    try {
        var color = parseInt(color, 16);
    }
    catch (err) {
        var color = false;
    }
    return color;
}

    //-----------------------------------------------------------------------------------------------------------
    
    // Add content to liveStyles on page load

    updateCSS();
    
}());

//---------------------------------------------------------------------------------------------------------------
    
//Scroll to the very bottom of the overlapped Design Accordions
function scrollBottom(clicked_id) {
    //Find the parent div we are in, e.g. accordionFooter and add a # symbol to the front of it
    var selectedAccordion = "#" + clicked_id.parentNode.parentNode.id;
    //Scroll to the bottom the accordion stack
    $(selectedAccordion).animate({scrollTop: $(selectedAccordion)[0].scrollHeight}, 2000);
}

//---------------------------------------------------------------------------------------------------------------
