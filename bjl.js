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

var Builder = (function () {
function Builder() {
}
Builder.prototype.build = function (builder) {
return builder.build();
};
return Builder;
})();
blj.Builder = Builder;
