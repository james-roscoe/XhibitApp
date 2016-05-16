(function () {
    'use strict';

    var menuIcon = document.getElementById('menuIcon'),
        nav = document.getElementsByTagName('nav')[0];

    menuIcon.addEventListener('click', function () {
        if (nav.className.indexOf('mobile') === -1) {
            nav.className = 'mobile';
        } else {
            nav.className = '';
        }
    });
    
}());