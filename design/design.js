var selectHeader = document.getElementById('selectHeader'),
    selectFooter = document.getElementById('selectFooter'),
    selectBody = document.getElementById('selectBody'),
    selectMenus = document.getElementById('selectMenus'),
    accordionHeader = document.getElementById('accordionHeader'),
    accordionFooter = document.getElementById('accordionFooter'),
    accordionBody = document.getElementById('accordionBody'),
    accordionMenus = document.getElementById('accordionMenus'),
    colourPicker = document.getElementById('colourPicker'),
    colourPickerClose = document.getElementById('colourPickerClose'),
    colourBoxChoice = document.getElementsByClassName('colourBoxChoice'),
    exportBtn = document.getElementById('exportBtn'),
    exportWindow = document.getElementById('exportWindow'),
    exportWindowClose = document.getElementById('exportWindowClose'),
    x_headerBlock = document.getElementById('x_headerBlock'),
    headerGradient1 = {
        colour: '#010101'
    },
    headerGradient2 = {
        colour: '#434343'
    },
    headerHeading1 = {
        colour: '#ffffff',
    }
    headerHeading2 = {
        colour: '#ffffff', 
    }
    headerBottomBorder = {
        colour: '#ffffff', /*This probably isn't set initially in Xerte?*/
    },
    footerGradient1 = {
        colour: '#010101', 
    }
    footerGradient2 = {
        colour: '#434343', 
    }
    footerTopBorder = {
        colour: '#ffffff', /*This probably isn't set initially in Xerte?*/
    }
    bodyBackgroundColour = {
        colour: '#ffffff', 
    }
    bodyParagraphColour = {
        colour: '#000000', 
    }
    bodyBorder = {
        colour: '#000000', 
    }
    bodyLinkColour = {
        colour: '#0000EE', 
    }
    bodyLinkHoverColour = {
        colour: '#0000EE', 
    }
    /*Many of the above are browser defaults, i.e. not set initially in Xerte*/
        

var element = document.getElementsByClassName('element');
var elementEdit = document.getElementsByClassName('elementEdit');
var colourBox = document.getElementsByClassName('colourBox');
var colourPickerIcon = document.getElementsByClassName('colourPickerIcon');
var hexBox = document.getElementsByClassName('hexBox');
var plusMinus = document.getElementsByClassName('plusMinus');
var accordionClose = document.getElementsByClassName('accordionClose');

var xerteButtons = document.getElementById('x_mainHolder').getElementsByTagName('button');
for (i=0; i < xerteButtons.length; i++){
    xerteButtons[i].type = 'button'; // Ensures Xerte buttons don't submit the form.
}

for (i = 0; i < element.length; i++) {
    element[i].addEventListener('click', function () {
        for (j = 0; j < elementEdit.length; j++){
            if (elementEdit[j].id != this.id + 'Edit'){
                elementEdit[j].className = 'elementEdit';
            }
        }
        for (k = 0; k < plusMinus.length; k++){
            document.getElementsByClassName('plusMinus')[k].className = 'plusMinus';
        }
        if (document.getElementById(this.id + 'Edit').className.indexOf('visible') === -1) {
            document.getElementById(this.id + 'Edit').className += ' visible';
            this.getElementsByClassName('plusMinus')[0].className += ' minus';
        } else {
            document.getElementById(this.id + 'Edit').className = 'elementEdit';
        }
    });
}

selectHeader.addEventListener('click', function () {
    if (accordionHeader.className.indexOf('visible') === -1) {
        accordionHeader.className += ' visible';
        selectFooter.className = 'inactive';
        selectBody.className = 'inactive';
        selectMenus.className = 'inactive';
    } else {
        accordionHeader.className = 'accordion';
        selectFooter.className = '';
        selectBody.className = '';
        selectMenus.className = '';
    }
    accordionFooter.className = 'accordion';
    accordionBody.className = 'accordion';
    accordionMenus.className = 'accordion';
    selectHeader.className = '';
    colourPicker.className = '';
    exportWindow.className = '';
});

selectFooter.addEventListener('click', function () {
    if (accordionFooter.className.indexOf('visible') === -1) {
        accordionFooter.className += ' visible';
        selectHeader.className = 'inactive';
        selectBody.className = 'inactive';
        selectMenus.className = 'inactive';
    } else {
        accordionFooter.className = 'accordion';
        selectHeader.className = '';
        selectBody.className = '';
        selectMenus.className = '';
    }
    accordionHeader.className = 'accordion';
    accordionBody.className = 'accordion';
    accordionMenus.className = 'accordion';
    selectFooter.className = '';
    colourPicker.className = '';
    exportWindow.className = '';
});

selectBody.addEventListener('click', function () {
    if (accordionBody.className.indexOf('visible') === -1) {
        accordionBody.className += ' visible';
        selectHeader.className = 'inactive';
        selectFooter.className = 'inactive';
        selectMenus.className = 'inactive';
    } else {
        accordionBody.className = 'accordion';
        selectHeader.className = '';
        selectFooter.className = '';
        selectMenus.className = '';
    }
    accordionFooter.className = 'accordion';
    accordionHeader.className = 'accordion';
    accordionMenus.className = 'accordion';
    selectBody.className = '';
    colourPicker.className = '';
    exportWindow.className = '';
});

selectMenus.addEventListener('click', function () {
    if (accordionMenus.className.indexOf('visible') === -1) {
        accordionMenus.className += ' visible';
        selectHeader.className = 'inactive';
        selectBody.className = 'inactive';
        selectFooter.className = 'inactive';
    } else {
        accordionMenus.className = 'accordion';
        selectHeader.className = '';
        selectBody.className = '';
        selectFooter.className = '';
    }
    accordionFooter.className = 'accordion';
    accordionHeader.className = 'accordion';
    accordionBody.className = 'accordion';
    selectMenus.className = '';
    colourPicker.className = '';
    exportWindow.className = '';
});

for (i = 0; i < accordionClose.length; i++){
    (function (_i) {
        accordionClose[i].addEventListener('click', function () {
            accordionClose[_i].parentElement.parentElement.className = 'accordion';
            selectHeader.className = '';
            selectFooter.className = '';
            selectBody.className = '';
            selectMenus.className = '';
            colourPicker.className = '';
        });
    }(i));
}

for (i = 0; i < colourBox.length; i++){
    var hexValue = eval(colourBox[i].parentElement.id.slice(0,-4)).colour;
    colourBox[i].style.backgroundColor = hexValue;
    hexBox[i].value = hexValue;
    (function (_i) {
        hexBox[i].addEventListener('keyup', function () {
            colourBox[_i].style.backgroundColor = hexBox[_i].value;
            var targetElement = colourBox[_i].parentElement.id.slice(0,-4);
            var newValue = hexBox[_i].value;
            eval(targetElement).colour = newValue;
            updatePreview();
        });
        colourBox[_i].addEventListener('click', function () {
            colourPicker.className = 'visible ' + colourBox[_i].parentElement.id.slice(0,-4);
        });
        colourPickerIcon[_i].addEventListener('click', function () {
            colourPicker.className = 'visible ' + colourBox[_i].parentElement.id.slice(0,-4);
        });
    }(i));
}

for (i = 0; i < colourBoxChoice.length; i++){
    (function (_i) {
        colourBoxChoice[i].addEventListener('click', function () {
            var targetElement = colourPicker.className.substr(8);
            var newValue='#'+colourBoxChoice[_i].id.substr(3);
            eval(targetElement).colour = newValue;
            document.getElementById(targetElement+'Edit').getElementsByClassName('colourBox')[0].style.backgroundColor = eval(targetElement).colour;
            document.getElementById(targetElement+'Edit').getElementsByClassName('hexBox')[0].value = eval(targetElement).colour;
            colourPicker.className = '';
            updatePreview();
        });
    }(i));
}

colourPickerClose.addEventListener('click', function(){
    colourPicker.className = '';
});

exportBtn.addEventListener('click', function(){
    exportWindow.className = 'visible';
});

exportWindowClose.addEventListener('click', function(){
    exportWindow.className = '';
});

function updatePreview() {
    
    x_headerBlock.style.background = '-ms-linear-gradient(top, '+headerGradient1.colour+', '+headerGradient2.colour+')';
    x_headerBlock.style.background = '-webkit-gradient(linear, left top, left bottom, from('+headerGradient1.colour+'), to('+headerGradient2.colour+'))';
    x_headerBlock.style.background = '-moz-linear-gradient(top,  '+headerGradient1.colour+',  '+headerGradient2.colour+')';
    x_headerBlock.style.backgroundImage = '-o-linear-gradient('+headerGradient1.colour+', '+headerGradient2.colour+')';
    x_headerBlock.getElementsByTagName('h1')[0].style.color = headerHeading1.colour;
    x_headerBlock.getElementsByTagName('h2')[0].style.color = headerHeading2.colour;
    x_headerBlock.style.borderBottom = '1px solid ' + headerBottomBorder.colour;
    
    x_footerBlock.style.background = '-ms-linear-gradient(top, '+footerGradient1.colour+', '+footerGradient2.colour+')';
    x_footerBlock.style.background = '-webkit-gradient(linear, left top, left bottom, from('+footerGradient1.colour+'), to('+footerGradient2.colour+'))';
    x_footerBlock.style.background = '-moz-linear-gradient(top,  '+footerGradient1.colour+',  '+footerGradient2.colour+')';
    x_footerBlock.style.backgroundImage = '-o-linear-gradient('+footerGradient1.colour+', '+footerGradient2.colour+')';
    x_footerBlock.style.borderTop = '1px solid ' + footerTopBorder.colour;
    
    x_mainHolder.style.background = bodyBackgroundColour.colour;
    x_mainHolder.getElementsByTagName('p')[0].style.color = bodyParagraphColour.colour;
    x_mainHolder.style.border = '1px solid ' + bodyBorder.colour;
    x_mainHolder.getElementsByTagName('a')[0].style.color = bodyLinkColour.colour;
}