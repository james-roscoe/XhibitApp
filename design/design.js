/* jshint browser: true */    // Prevents JSHint errors when 'document' is used.

(function () {
    
    // Set up variables.

    var liveStyles = document.getElementById('liveStyles'),
        selectHeader = document.getElementById('selectHeader'),
        selectFooter = document.getElementById('selectFooter'),
        selectBody = document.getElementById('selectBody'),
        selectMenus = document.getElementById('selectMenus'),
        selectIcons = document.getElementById('selectIcons'),
        accordionHelp = document.getElementById('accordionHelp'),
        accordionHeader = document.getElementById('accordionHeader'),
        accordionFooter = document.getElementById('accordionFooter'),
        accordionBody = document.getElementById('accordionBody'),
        accordionMenus = document.getElementById('accordionMenus'),
        accordionIcons = document.getElementById('accordionIcons'),
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
        }
    
    // Generate the CSS and place in the document head to enable live preview.

    function updateCSS() {

        var css = '/* Xerte theme generated via Xhibit App (http://www.xhibitapp.com) */\n\n';

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
        css += '}\n\n';

        css += '.ui-dialog .ui-widget-header {\n';
        css += '\t' + 'background: ' + styles.menuHeaderBackground.colour + ';\n';
        css += '\t' + 'color: ' + styles.menuHeaderText.colour + ';\n';
        css += '}\n\n';

        css += '.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default {\n';
        css += '\t' + 'background: ' + styles.menuItemBackground.colour + ';\n';
        css += '\t' + 'color: ' + styles.menuItemText.colour + ';\n';
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

    selectHeader.addEventListener('click', function () {
        if (accordionHeader.className.indexOf('visible') === -1) {
            accordionHeader.className += ' visible';
            selectFooter.className = 'inactive';
            selectBody.className = 'inactive';
            selectMenus.className = 'inactive';
            selectIcons.className = 'inactive';
        } else {
            accordionHeader.className = 'accordion';
            selectFooter.className = '';
            selectBody.className = '';
            selectMenus.className = '';
            selectIcons.className = '';
        }
        accordionHelp.className = 'accordion';
        accordionFooter.className = 'accordion';
        accordionBody.className = 'accordion';
        accordionMenus.className = 'accordion';
        accordionIcons.className = 'accordion';
        selectHeader.className = '';
        colourPicker.className = '';
        exportWindow.className = '';
        xhibitXerteMenu.style.display = 'none';
    });

    selectFooter.addEventListener('click', function () {
        if (accordionFooter.className.indexOf('visible') === -1) {
            accordionFooter.className += ' visible';
            selectHeader.className = 'inactive';
            selectBody.className = 'inactive';
            selectMenus.className = 'inactive';
            selectIcons.className = 'inactive';
        } else {
            accordionFooter.className = 'accordion';
            selectHeader.className = '';
            selectBody.className = '';
            selectMenus.className = '';
            selectIcons.className = '';
        }
        accordionHelp.className = 'accordion';
        accordionHeader.className = 'accordion';
        accordionBody.className = 'accordion';
        accordionMenus.className = 'accordion';
        accordionIcons.className = 'accordion';
        selectFooter.className = '';
        colourPicker.className = '';
        exportWindow.className = '';
        xhibitXerteMenu.style.display = 'none';
    });

    selectBody.addEventListener('click', function () {
        if (accordionBody.className.indexOf('visible') === -1) {
            accordionBody.className += ' visible';
            selectHeader.className = 'inactive';
            selectFooter.className = 'inactive';
            selectMenus.className = 'inactive';
            selectIcons.className = 'inactive';
        } else {
            accordionHelp.className = 'accordion';
            accordionBody.className = 'accordion';
            selectHeader.className = '';
            selectFooter.className = '';
            selectMenus.className = '';
            selectIcons.className = '';
        }
        accordionFooter.className = 'accordion';
        accordionHeader.className = 'accordion';
        accordionMenus.className = 'accordion';
        accordionIcons.className = 'accordion';
        selectBody.className = '';
        colourPicker.className = '';
        exportWindow.className = '';
        xhibitXerteMenu.style.display = 'none';
    });

    selectMenus.addEventListener('click', function () {
        if (accordionMenus.className.indexOf('visible') === -1) {
            accordionMenus.className += ' visible';
            selectHeader.className = 'inactive';
            selectBody.className = 'inactive';
            selectFooter.className = 'inactive';
            selectIcons.className = 'inactive';
            xhibitXerteMenu.style.display = 'block';
        } else {
            accordionMenus.className = 'accordion';
            selectHeader.className = '';
            selectBody.className = '';
            selectFooter.className = '';
            selectIcons.className = '';
        }
        accordionHelp.className = 'accordion';
        accordionFooter.className = 'accordion';
        accordionHeader.className = 'accordion';
        accordionBody.className = 'accordion';
        accordionIcons.className = 'accordion';
        selectMenus.className = '';
        colourPicker.className = '';
        exportWindow.className = '';
    });

    selectIcons.addEventListener('click', function () {
        if (accordionIcons.className.indexOf('visible') === -1) {
            accordionIcons.className += ' visible';
            selectHeader.className = 'inactive';
            selectFooter.className = 'inactive';
            selectBody.className = 'inactive';
            selectMenus.className = 'inactive';
        } else {
            accordionIcons.className = 'accordion';
            selectHeader.className = '';
            selectFooter.className = '';
            selectBody.className = '';
            selectMenus.className = '';
        }
        accordionHelp.className = 'accordion';
        accordionFooter.className = 'accordion';
        accordionHeader.className = 'accordion';
        accordionBody.className = 'accordion';
        accordionMenus.className = 'accordion';
        selectIcons.className = '';
        colourPicker.className = '';
        exportWindow.className = '';
        xhibitXerteMenu.style.display = 'none';
    });
    
    // Functionality for closing the zones.
    
    function closeAccordions(_i) {
        accordionClose[_i].addEventListener('click', function () {
            accordionClose[_i].parentElement.parentElement.className = 'accordion';
            selectHeader.className = '';
            selectFooter.className = '';
            selectBody.className = '';
            selectMenus.className = '';
            selectIcons.className = '';
            colourPicker.className = '';
        });
    }

    for (i = 0; i < accordionClose.length; i++) {
        closeAccordions(i);
    }
    
    helpClose.addEventListener('click', function () {
        accordionHelp.className = 'accordion';
    });
    
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
    
    // Add content to liveStyles on page load

    updateCSS();
    
}());