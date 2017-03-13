/* jshint browser: true */    // Prevents JSHint errors when 'document' is used.

(function () {
    
    // Set up variables.

    var liveStyles = document.getElementById('liveStyles'),
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
    
    // Generate the CSS and place in the document head to enable live preview.

    function updateCSS() {

        var css = '/* Xerte theme generated via Xhibit App (http://www.xhibitapp.com) */\n\n';

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

    exportBtn.addEventListener('click', function () {
        exportWindow.className = 'visible';
    });

    exportWindowClose.addEventListener('click', function () {
        exportWindow.className = '';
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
    
    // Add content to liveStyles on page load

    updateCSS();
    
}());
    
//Scroll to the very bottom of the overlapped Design Accordions
function scrollBottom(clicked_id) {
    //Find the parent div we are in, e.g. accordionFooter and add a # symbol to the front of it
    var selectedAccordion = "#" + clicked_id.parentNode.parentNode.id;
    //Scroll to the bottom the accordion stack
    $(selectedAccordion).animate({scrollTop: $(selectedAccordion)[0].scrollHeight}, 2000);
}