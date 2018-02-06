/* jshint browser: true */    // Prevents JSHint errors when 'document' is used.

(function () {
    'use strict';

    var xhibitMenuIcon = document.getElementById('xhibitMenuIcon'),
        nav = document.getElementsByTagName('nav')[0];

    xhibitMenuIcon.addEventListener('click', function () {
        if (nav.className.indexOf('mobile') === -1) {
            nav.className = 'mobile';
        } else {
            nav.className = '';
        }
    });
    
}());