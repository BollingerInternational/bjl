/*************************************************
 *
 * BJS.js (Bollinger JavaScript Library) v0.0.1
 *
 ************************************************/
var bjl = bjl || {};

bjl.cloneObject = function (src, dest) {
    for(var attr in src.prototype) {
        dest.prototype[attr] = src.prototype[attr];
    }    
};

