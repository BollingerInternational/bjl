/*************************************************
 *
 * BJS.js (Bollinger JavaScript Library) v0.0.1
 *
 ************************************************/
var cloneObject = function (src, dest) {
    for(var attr in src.prototype) {
        dest.prototype[attr] = src.prototype[attr];
    }    
};

