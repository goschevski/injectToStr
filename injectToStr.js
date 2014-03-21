/*
    injectToStr
    Inject object variables to string.
    https://github.com/goschevski/injectToStr
*/
;(function () {

    'use strict';

    var injectToStr = function (str, obj) {
        var regex = str.match(/(\[.+?\])/g);

        for (var i = 0, len = regex.length; i < len; i++) {
            var prop = regex[i].replace(/\[(.+)\]/, '$1');
            if ( obj[prop] ) {
                str = str.replace(regex[i], obj[prop]);
            }
        }

        return str;
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = injectToStr;
    } else {
        window.injectToStr = injectToStr;
    }

})();